from fastapi import APIRouter
from database import *
from models import *
import json
from fastapi.encoders import jsonable_encoder


router = APIRouter()
data  = Database()


@router.post("/registration", response_description="Create new user")
async def create_new_user(user:Registration_User):
    user = dict(user)
    print(user)
    new_user = await data.create_user(user)
    if new_user:
        return ResponseModel(new_user,'User added successfully')
    else:
        return ErrorResponseModel('Username already exists',200,'Choose another nickname')
@router.get("/login", response_description= "login user" )
async def login_user(username:str,password:str):
    user = {
        'username':username,
        'password':password
    }
    res = await data.check_password(dict(user))
    if res:
        return ResponseModel(res,'Succes login')
    return ErrorResponseModel('Error',200,'Choose correct username/password')



@router.put("/update_user/{nickname}", response_description="Update user")
async def update_user(user:Update_User):
    username = user.username
    user = dict(user)
    del user['username']
    res = await data.update_user_information(username,user)
    return res

@router.put("/update_user_password/{nickname}", response_description="Update user password")
def update_password_user(user:Login_User):
    pass








