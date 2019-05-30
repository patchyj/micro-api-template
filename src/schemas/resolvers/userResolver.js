import fetch from "node-fetch";

// add some small resolvers
const resolvers = {
  Query: {
    user: async (parent, { id }) => {
      const data = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      const user = await data.json();

      return user;
    },
    users: async () => {
      const data = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await data.json();

      return users;
    }
  }
};

export default resolvers;
