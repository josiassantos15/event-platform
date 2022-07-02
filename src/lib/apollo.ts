import { ApolloClient, InMemoryCache } from "@apollo/client";


export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl5361nhl2pfg01t8atb04h7g/master',
  cache: new InMemoryCache()
})