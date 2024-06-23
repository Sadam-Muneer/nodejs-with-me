const express = require("express");
const { has } = require("lodash");
const bodyParser = require("body-parser");
const app = express();
const db = require("./db");
const PersonRoutes = require("./Routes/person.routes");
const MenuRoutes = require("./Routes/menu.routes");
app.use(bodyParser.json());
app.use("/person", PersonRoutes);
app.use("/menu", MenuRoutes);

app.listen(3000, () => {
  console.log("server zinda hai");
});
