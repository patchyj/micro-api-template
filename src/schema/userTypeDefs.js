import { gql } from 'apollo-server-express';

const user = gql`
  # A user
  type User {
    id: ID!
    name: String
    email: String
  }
  # Queries from user service
  type Query {
    # List of all our users
    users: [User!]!
    # A single user
    user(id: ID!): User!
  }
`;

export default user;
