import express from "express"
import cors from 'cors'
import { ApolloServer, gql } from "apollo-server-express"
import tD from './graphql/typeDefs'
import Query from './graphql/query'
import Mutation from './graphql/mutation'

const typeDefs = gql`
    ${tD}
`
const resolvers = {
    Query,
    Mutation
}

const server = new ApolloServer({ typeDefs, resolvers })
const app = express()

app.use(cors({ origin: "*" }))
server.applyMiddleware({ app })

app.listen({ port: 8000 }, () => console.log(`🚀 Server ready at http://localhost:8000${server.graphqlPath}`))

export default app