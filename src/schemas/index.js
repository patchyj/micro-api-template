import { makeExecutableSchema } from "apollo-server-express";
import typeDefs from "./typeDefs/userTypeDefs";
import resolvers from "./resolvers/userResolver";

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;
