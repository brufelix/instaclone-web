"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const typeDefs_1 = __importDefault(require("./graphql/typeDefs"));
const query_1 = __importDefault(require("./graphql/query"));
const mutation_1 = __importDefault(require("./graphql/mutation"));
const typeDefs = apollo_server_express_1.gql `
    ${typeDefs_1.default}
`;
const resolvers = {
    Query: query_1.default,
    Mutation: mutation_1.default
};
const server = new apollo_server_express_1.ApolloServer({ typeDefs, resolvers });
const app = express_1.default();
server.applyMiddleware({ app });
app.listen({ port: 8000 }, () => console.log(`🚀 Server ready at http://localhost:8000${server.graphqlPath}`));
exports.default = app;
