"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const typeDefs = apollo_server_express_1.gql `
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
`;
const resolvers = {
    Query: {
        hello: () => "Hello"
    }
};
const server = new apollo_server_express_1.ApolloServer({ typeDefs, resolvers });
const app = express_1.default();
server.applyMiddleware({ app });
app.listen({ port: 8000 }, () => console.log(`🚀 Server ready at http://localhost:8000${server.graphqlPath}`));
exports.default = app;
