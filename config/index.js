import dotenv from "dotenv";

dotenv.config();

export default {
  // USER
  USER_DB: process.env.USER_DB,
  USER_DB_LOCAL: process.env.USER_DB_LOCAL,
  // BLOG
  BLOG_DB: process.env.BLOG_DB,
  BLOG_DB_LOCAL: process.env.BLOG_DB_LOCAL,
  // PROJECT
  PROJECT_PG_DB: process.env.PROJECT_PG_DB,
  PROJECT_PG_DB_LOCAL: process.env.PROJECT_PG_DB_LOCAL,
  // PROFILE
  PROFILE_DB: process.env.PROFILE_DB,
  PROFILE_DB_LOCAL: process.env.PROFILE_DB_LOCAL,
  // OTHER
  SECRET: process.env.SECRET,
  PORT: process.env.PORT
};
