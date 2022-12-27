from motor import motor_asyncio


class Database():
    def __init__(self):
        self.client = motor_asyncio.AsyncIOMotorClient("mongodb://mongodb:27017/")
        self.database = self.client.social_network
        self.user_collection = self.database.get_collection('users')


    def get_users(self):
        pass


    def delete_users(self):
        pass

    def insert_users(self):
        pass


    def update_users(self):
        pass
