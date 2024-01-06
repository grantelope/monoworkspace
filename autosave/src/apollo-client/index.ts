import { ApolloClient, InMemoryCache } from '@apollo/client';

const ssrMode = typeof window === 'undefined';

export const client = new ApolloClient({
    uri: '/graphql',
    cache: new InMemoryCache(),
    ssrMode,
    connectToDevTools: !ssrMode,
    name: 'client'
});
