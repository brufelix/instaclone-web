import express from "express"
import { ApolloServer, gql } from "apollo-server-express"
import db from "./database/db"

const typeDefs = gql`
    type User {
        id: ID!
        name: String!
        email: String!
        password: String!
        posts: [Post]
    }

    type Post {
        id: String!
        image: String!
        comments: [Comment]
        likes: Int
    }

    type Comment {
        id: ID!
        comment: String!
        likes: Int
    }

    type Query {
        hello: String
    }
`
const resolvers = {
    Query: {
        hello: () => "Hello"
    }
}

const server = new ApolloServer({ typeDefs, resolvers })
const app = express()

server.applyMiddleware({ app })

app.listen({ port: 8000 }, () => console.log(`🚀 Server ready at http://localhost:8000${server.graphqlPath}`))

export default app