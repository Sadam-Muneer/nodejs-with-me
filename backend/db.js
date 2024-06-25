const mongoose = require("mongoose");
require("dotenv").config();
const mongodb_URL = process.env.Online_mongodb_URL;
mongoose.connect(mongodb_URL);
const db = mongoose.connection;
db.on("connected", () => {
  console.log("db is connected");
});
db.on("error", (err) => {
  console.log("Error in db connection", err);
});
db.on("disconnected", () => {
  console.log("db is disconnected");
});
module.exports = db;
