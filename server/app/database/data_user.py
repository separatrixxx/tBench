import datetime
from pymongo import MongoClient
from bson import ObjectId


class DataBase:
    def __init__(self):
        self.client = MongoClient('localhost', 27017)
        self.db = self.client['test']
        self.collection = self.db['users']

    def get_user_by_id(self,id:str):
        from models.user import User
        data = dict(self.collection.find_one({"_id": ObjectId(id)}))
        return User(**data)


    def get_users_by_firstname(self,firstname:str):
        from models.user import User
        users = []

        data = self.collection.find({"firstname":firstname})

        for user in data:
            user_dict = dict(user)
            users.append(User(**user_dict))
        return users

    def get_users_by_lastname(self,lastname:str):
        from models.user import User
        users = []

        data = self.collection.find({"lastname": lastname})

        for user in data:
            user_dict = dict(user)
            users.append(User(**user_dict))
        return users


    def get_all_users(self):
        from models.user import User
        users= []

        data = self.collection.find()

        for user in data:
            user_dict = dict(user)
            users.append(User(**user_dict))
        return users





    def get_user_by_nickname(self,nickname:str):
        from models.user import User
        data = dict(self.collection.find_one({"nickname": nickname}))
        return User(**data)

    def insert_user(self,username:str,password:str,email:str,firstname:str,lastname:str,birthday:str):
        user = {
            'email': email,
            'city': 'Не указан',
            'firstname': firstname,
            'lastname': lastname,
            'nickname': username,
            'online': True,
            'password': password,
            'profileInfo': 'Не указан',
            'registrationDate': str(datetime.datetime.now()),
            'verify': False,
            'birthday': birthday,
        }
        self.collection.insert_one(user)

    def update_password(self,):
        pass

    def update(self):
        pass


data = DataBase()
