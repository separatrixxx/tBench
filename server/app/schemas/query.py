import strawberry
from models.user import User
from database.data_user import data
from typing import List

@strawberry.type
class Query:

    @strawberry.field
    def user_by_id(self,user_id:str)-> User:
        """Get user by id"""
        user_dict = data.get_user_by_id(user_id)
        return user_dict


    @strawberry.field
    def user_by_nickname(self, username: str) -> User:
            """Get user by username"""
            user_dict = data.get_user_by_nickname(username)
            return user_dict


    @strawberry.field
    def users(self) -> List[User]:
        """Get all users"""
        users_list = data.get_all_users()
        return users_list


    @strawberry.field
    def users_by_firstname(self,firstname:str) -> List[User]:
        """Get users by firstname"""
        users_list = data.get_users_by_firstname(firstname)
        return users_list

    @strawberry.field
    def users_by_lastname(self,lastname:str)-> List[User]:
        """Get users by lastname"""
        users_list = data.get_users_by_lastname(lastname)
        return users_list




