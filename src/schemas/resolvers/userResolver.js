import mongoose from "mongoose";
import User from "../../models/User";
import config from "../../../config";

mongoose.Promise = require("bluebird");

mongoose.connect(config.USER_DB, { useNewUrlParser: true });

// add some small resolvers
const resolvers = {
  Query: {
    async user(parent, { id }) {
      const user = await User.findOne({ id });

      return user;
    },
    async users() {
      const users = await User.find();
      if (!users) return null;

      return users;
    }
  }
};

export default resolvers;
