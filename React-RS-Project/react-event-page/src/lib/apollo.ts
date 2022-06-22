import {ApolloClient, InMemoryCache} from '@apollo/client';

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4osgzj40yq201xs3b7e5dii/master',
    cache: new InMemoryCache()
})