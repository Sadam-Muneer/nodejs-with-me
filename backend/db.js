const mongoose = require("mongoose");
const mongodb_URL = "mongodb://127.0.0.1:27017/hotels";

mongoose.connect(mongodb_URL, {
  useUnifiedTopology: true,
});

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
