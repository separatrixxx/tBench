import strawberry
@strawberry.type
class User:
    _id: str
    email: str
    birthday: str
    city: str
    firstname: str
    lastname: str
    nickname: str
    online: str
    password: str
    profileInfo: str
    registrationDate: str
    verify: bool
