const mongoose = require("mongoose");
const mongodb_URL =
  "mongodb+srv://sadammuneer390:oTPEjzFGWucshKqM@cluster0.camdtdj.mongodb.net";

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
