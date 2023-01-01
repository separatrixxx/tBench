from motor import motor_asyncio
from bson.objectid import ObjectId


class Database():
    def __init__(self):
        self.client = motor_asyncio.AsyncIOMotorClient("mongodb://mongodb:27017/")
        self.database = self.client.social_network
        self.user_collection = self.database.get_collection('users')



    @staticmethod
    def user_helper(user)-> dict:
        return {
            'id': str(user['_id']),
            'username': user['username'],
            'email': user['email'],
            'firstName': user['firstName'],
            'lastName': user['lastName'],
            'password': user['password'],
            'registrationDate': user['registrationDate'],
            'profileInfo': user['profileInfo'],
            'city': user['city'],
            'birthday': user['birthday'],
            'education': user['education'],
            'verify': user['verify'],
            'team': user['team'],
            'online': user['online'],


        }


    async def get_user_by_id(self,user_id:str):

        user = await self.user_collection.find_one({'_id': ObjectId(user_id)})

        if user:
            return self.user_helper(user)


    async def delete_users_by_id(self,user_id:str):

        user = await self.user_collection.find_one({'_id': ObjectId(user_id)})


        if user:
            await self.user_collection.delete_one({'_id': ObjectId(user_id)})
            return True


    def insert_users(self):
        pass


    def update_users_by_id(self):
        pass

