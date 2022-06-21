import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oltkiy0h4t01xs913bdl28/master',
    cache: new InMemoryCache()
})