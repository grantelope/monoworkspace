import { resolvers, typeDefs } from './schema/comment';

import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDef } from './schema/typeDef';

const server = new ApolloServer({
    typeDefs: [typeDef, typeDefs],
    resolvers
});

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 }
});

console.log(`🚀  Server ready at: ${url}`);
