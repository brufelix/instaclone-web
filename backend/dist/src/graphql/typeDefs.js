"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeDefs = `
    input signup {
        name: String!
        email: String!
        password: String!
    }

    input signin {
        email: String!
        password: String!
    }

    input post {
        image: String!
        caption: String!
    }

    input filter {
        email: String!
    }

    input comment {
        author: String!
        comment: String!
        post_id: String!
    }

    type User {
        id: ID!
        name: String!
        email: String!
        token: String!
        password: String!
        posts: [Post]
    }

    type Post {
        id: String!
        image: String!
        caption: String!
        comments: [Comment]
        likes: Int
    }

    type Comment {
        id: ID!
        comment: String!
        likes: Int
    }

    type Valid {
        valid: String!
        token: String!
    }

    type Query {
        user: User!
        signin(data: signin): Valid!
    }
    
    type Mutation {
        signup(data: signup): User!
        addPost(data: post! filter: filter!): Post!
        addComment(data: comment!): Comment!
    }
`;
exports.default = typeDefs;
