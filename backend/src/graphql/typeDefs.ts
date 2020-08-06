const typeDefs = `
    input user {
        name: String!
        email: String!
        password: String!
    }

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
        user: User
    }

    type Mutation {
        signup(data: user): User!
    }
`

export default typeDefs