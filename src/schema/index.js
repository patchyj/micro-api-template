import { makeExecutableSchema } from 'apollo-server-express';
import typeDefs from './userTypeDefs';
import resolvers from './userResolver';

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;
