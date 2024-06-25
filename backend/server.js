const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const db = require("./db");
const PersonRoutes = require("./Routes/person.routes");
const MenuRoutes = require("./Routes/menu.routes");
require("dotenv").config();

app.use(bodyParser.json());
app.use("/person", PersonRoutes);
app.use("/menu", MenuRoutes);

const Port = process.env.PORT || 3001;
app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});
