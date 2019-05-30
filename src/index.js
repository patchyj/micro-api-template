import express from "express";
import { ApolloServer } from "apollo-server-express";
import dotenv from "dotenv";
import schema from "./schemas";

dotenv.config();

const PORT = process.env.PORT || 4000;

const app = express();

const server = new ApolloServer({
  schema,
  context: ({ req }) => ({ authorization: req.headers.authorization })
});

server.applyMiddleware({ app });
/* eslint-disable no-console */
app.listen({ port: PORT }, () =>
  console.log(
    `💀  Server ready at http://localhost:${PORT}${server.graphqlPath}`
  )
);
