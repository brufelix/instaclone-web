import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import { InMemoryCache } from 'apollo-cache-inmemory'

const httpLink = createHttpLink({ uri: "http://localhost:8000/graphql" })

const authLink = setContext((_, { headers }) => {
    const token: string | null = localStorage.getItem("token")
    return {
        ...headers,
        authorization: token ? `Bearer ${token}` : ""
    }
})

const api = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
})

export default api