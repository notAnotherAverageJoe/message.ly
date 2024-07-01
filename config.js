require("dotenv").config();

// Use DB_URI, SECRET_KEY, BCRYPT_WORK_FACTOR in your application setup

const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_URI =
  process.env.NODE_ENV === "test"
    ? `postgresql://postgres:${DB_PASSWORD}@localhost:5432/messagely_test`
    : `postgresql://postgres:${DB_PASSWORD}@localhost:5432/messagely`;

const SECRET_KEY = process.env.SECRET_KEY || "default_secret";
const BCRYPT_WORK_FACTOR = 12;

module.exports = {
  DB_URI,
  SECRET_KEY,
  BCRYPT_WORK_FACTOR,
};
