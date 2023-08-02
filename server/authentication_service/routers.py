from fastapi import APIRouter
from .database import *
from .models import *
from .smtp import *
from fastapi import  Depends, HTTPException
from auth import *
router = APIRouter()
data  = Database()


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







@router.put("/update_user_password_with_code", response_description="Update user password with mail")
async def update_password_user(user:Mail_User):
    res = await data.update_user_password_with_code(user.username,user.password)
    if res:
        return ResponseModel(res, 'Succes change password with username')
    else:
        return ErrorResponseModel('Error', 200, 'Choose correct username/password')



@router.post('/token')
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
        return {"access_token": jwt_token, "token_type": "bearer"}



