const { DB_URI, SECRET_KEY, BCRYPT_WORK_FACTOR } = require("./config");

const app = require("./app");

app.listen(3000, function () {
  console.log("Listening on 3000");
});
