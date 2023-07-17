from motor import motor_asyncio
from models import *
from bson.objectid import ObjectId
import traceback
class Database():
    def __init__(self):
        self.client = motor_asyncio.AsyncIOMotorClient("mongodb://localhost:27017")
        self.database = self.client.users
        self.user_collection = self.database.get_collection('users_collection')


    @staticmethod
    def user_helper(user) -> dict:
        return {
            'name':  user['name'],
            'surname': user['surname'],
            'username': user['username'],
            'email': user['email'],
            'gender': user['gender'],

        }
    @staticmethod
    def user_login_helper(user) -> dict:
        return {
            'username': user['username'],
            'password': user['password'],
        }
    async def create_user(self,user:dict):
        try:
            user = await self.user_collection.insert_one(user)
            new_user = await self.user_collection.find_one({'_id': user.inserted_id})
            return self.user_helper(new_user)
        except:
            print(traceback.format_exc())
            return False



    async def check_password(self,user_login:dict):

        user = await self.user_collection.find_one({"username": user_login['username']})
        user = self.user_login_helper(user)
        if user:
            res = (lambda user,user_login: True if user['password'] == user_login['password'] else False)(user,user_login)
        else:
            res = False
        return res


    # async def add_message(self,message_data: dict) -> dict:
    #
    #     message = await self.user_collection.insert_one(message_data)
    #     new_message = await self.user_collection.find_one({'_id': message.inserted_id})
    #
    #     return self.message_helper(new_message)
    #
    # async def get_all_message(self):
    #     messages = [self.message_helper(message) async for message in self.user_collection.find()]
    #
    #     return messages