from pymongo import MongoClient
from bson import ObjectId


class DataBase:
    def __init__(self):
        self.client = MongoClient('localhost', 27017)
        self.db = self.client['test']
        self.collection = self.db['users']

    def get_user_by_id(self,id:str):
        from schemas.query import User
        data = dict(self.collection.find_one({"_id": ObjectId(id)}))
        return User(**data)


    def get_users_by_firstname(self,firstname:str):
        from schemas.query import User
        users = []

        data = self.collection.find({"firstname":firstname})

        for user in data:
            user_dict = dict(user)
            users.append(User(**user_dict))
        return users

    def get_users_by_lastname(self,lastname:str):
        from schemas.query import User
        users = []

        data = self.collection.find({"lastname": lastname})

        for user in data:
            user_dict = dict(user)
            users.append(User(**user_dict))
        return users


    def get_all_users(self):
        from schemas.query import User
        users= []

        data = self.collection.find()

        for user in data:
            user_dict = dict(user)
            users.append(User(**user_dict))
        return users





    def get_user_by_nickname(self,nickname:str):
        from schemas.query import User
        data = dict(self.collection.find_one({"nickname": nickname}))
        return User(**data)


data = DataBase()
