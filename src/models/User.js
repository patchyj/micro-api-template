import mongoose from "mongoose";

mongoose.Promise = require("bluebird");

const { Schema, model } = mongoose;

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
});

export default model("users", UserSchema);
