import strawberry
from database.data_user import data
@strawberry.type
class Mutation:
    @strawberry.mutation
    def add_user(self,username:str,password:str,email:str,firstname:str,lastname:str,birthday:str)->str:
        data.insert_user(username,password,email,firstname,lastname,birthday)
        return 'Success'

