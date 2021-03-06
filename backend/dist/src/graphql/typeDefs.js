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
        _id: ID!
        name: String!
        email: String!
        password: String!
        bio: String,
        postageQuantity: Int,
        followers: Int,
        following: Int,
    }

    type Post {
        id: String!
        image: String!
        caption: String!
        likes: Int
    }

    type Comment {
        id: ID!
        comment: String!
        likes: Int
    }

    type Valid {
        valid: Boolean!
        token: String!
        user: User!
    }

    type Query {
        user(_id: ID!): User!
        signin(data: signin): Valid!
        getComments(post_id: ID!): [Comment!]!
        getPosts(author_id: ID!): [Post!]!
    }
    
    type Mutation {
        signup(data: signup): Valid!
        addPost(data: post! filter: filter!): Post!
        addComment(data: comment!): Comment!
    }
`;
exports.default = typeDefs;
