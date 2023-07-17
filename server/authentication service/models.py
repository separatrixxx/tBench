from pydantic import BaseModel, Field,EmailStr,constr
from typing import  Optional


class Registration_User(BaseModel):
    name: str
    surname: str
    username: str
    email: EmailStr
    gender: str
    password: constr(min_length=8, max_length=16)



class Login_User(BaseModel):
    username: str
    password: str

class Update_User(BaseModel):
    name: Optional[str] = None
    surname: Optional[str] = None
    username: str
    email: Optional[EmailStr] = None
    gender: Optional[str] = None

def ResponseModel(data, message):
    return {
        "data": [data],
        "code": 200,
        "message": message,
    }


def ErrorResponseModel(error, code, message):
    return {"error": error, "code": code, "message": message}