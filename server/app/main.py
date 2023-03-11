from fastapi import FastAPI
from strawberry.fastapi import GraphQLRouter
import strawberry
from schemas.mutation import Mutation
from schemas.query import Query

schema = strawberry.Schema(query=Query,mutation=Mutation)
graphql_app = GraphQLRouter(schema)
app = FastAPI()
app.include_router(graphql_app, prefix="/graphql")