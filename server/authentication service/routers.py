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
def login_user(user:Login_User):
    pass



@router.put("/update_user/{nickname}", response_description="Update user")
def update_user(user:Update_User):
    pass

@router.put("/update_user_password/{nickname}", response_description="Update user password")
def update_password_user(user:Login_User):
    pass








