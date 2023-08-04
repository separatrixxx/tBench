from fastapi import APIRouter
from database import *
from models import *
from smtp import *
from fastapi import  Depends, HTTPException
from fastapi.security import OAuth2PasswordBearer
from passlib.context import CryptContext
from auth import *
from typing import Union
router = APIRouter()
data  = Database()
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/token")
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

@router.post("/register", response_description="Create new user")
async def create_new_user(user:Registration_User):
    user = dict(user)
    print(user)
    new_user = await data.create_user(user)
    if new_user:
        return ResponseModel(new_user,'User added successfully')
    else:
        return ErrorResponseModel('Username already exists',200,'Choose another nickname')

@router.get("/login", response_description= "login user" )
async def login_user(username:str = None,password:str = None, email:str = None):
    res = False
    user = {
        'username':username,
        'password':password,
    }
    try:
        res = await data.check_password_with_username(dict(user))
    except:
        pass
    if res:
        return ResponseModel(res,'Succes login with username')

    user = {
        'email':email,
        'password':password,
    }
    try:
        res = await data.check_password_with_email(dict(user))
    except:
        pass
    if res:
        return ResponseModel(res,'Succes login with email')

    return ErrorResponseModel('Error',200,'Choose correct username/password/password')



@router.put("/update_user/{username}", response_description="Update user")
async def update_user(username:str,user:Update_User):
    user = dict(user)
    res = await data.update_user_information(username,user)
    if res:
        return ResponseModel(res, 'Succes update user')
    else:
        return ErrorResponseModel('Error', 200, 'Error')

@router.put("/update_user_password", response_description="Update user password")
async def update_password_user(user:Login_User):
    dict_user = {
        'password':user.new_password
    }

    res = await data.update_user_password(user.username,user.old_password,dict_user)
    if res:
        return ResponseModel(res, 'Succes change password with username')
    else:
        res = await data.update_user_password_with_email(user.email,user.old_password,dict_user)

    if res:
        return ResponseModel(res, 'Succes change password with email')

    else:
        return ErrorResponseModel('Error', 200, 'Choose correct username/password')




@router.put("/send_code", response_description="Send code on email")
async def update_password_user(email:str,code:str):
        mail = STMP_server()
        try:
            mail.send_email(email,code)
            return ResponseModel(email, 'Succes')
        except:
            return ErrorResponseModel('Error', 200, 'Письмо не отправилось')


async def get_current_user(token:str = Depends(oauth2_scheme)):
    print(1)
    decoded_data = verify_jwt_token(token)
    if not decoded_data:
        raise HTTPException(status_code=400,detail="Invalid token")

    user = await data.get_user_by_username(decoded_data['sub'])
    if not user:
        raise HTTPException(status_code=400, detail="User not found")
    print(user)
    return user





@router.put("/update_user_password_with_code", response_description="Update user password with mail",)
async def update_password_user(user:Mail_User = Depends(get_current_user)):
    print(111)
    print(user)
    res = await data.update_user_password_with_code(user.username,user.password)
    print(res)
    if res:
        return ResponseModel(res, 'Succes change password with username')
    else:
        return ErrorResponseModel('Error', 200, 'Choose correct username/password')



@router.post('/get_token')
async def authenticate_user(username:str,password:str):
    user = {
        'username': username,
        'password': password,
    }

    res = await data.check_password_with_username(dict(user))
    if not res:
        raise HTTPException(status_code=400, detail="Incorrect username or password")
    else:
        jwt_token = create_jwt_token({"sub":username})
        return {"access_token": jwt_token}



@router.post('/verify_token')
async def verify_token(token:str):
    try:
        payload = jwt.decode(token,SECRET_KEY,ALGORITHM)
        return payload
    except jwt.PyJWTError:
        raise HTTPException(
            status_code=400,
            detail="Could not validate credentials",
        )




@router.get("/get_all_users", response_description= "Получение всех пользователей" )
async def get_all_users():
    res = await  data.get_all_users()
    return res


@router.delete("/delete_user/{username}", response_description= "Удаление пользователя по username" )
async def delete_user_by_username(username:str,password:str):
    res = await  data.delete_user(username,password)
    if res:
        return ResponseModel(username, 'Succes delete user!')
    return ErrorResponseModel('Error', 200, 'Choose correct username/password')


@router.get('/get_user',response_description= "Получение пользователя")
async def get_user(type:Type,information:str):
    if type is Type.username:
        type = 'username'
    elif type is Type.email:
        type = 'email'
    elif type is Type.name:
        type = 'name'
    elif type is Type.surname:
        type = 'email'
    else:
        type = '_id'
    res = await data.get_user(type,information)
    return res