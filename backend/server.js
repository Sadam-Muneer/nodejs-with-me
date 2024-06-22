const express = require("express");
const { has } = require("lodash");
const app = express();
const db = require("./db");

app.get("/", function (req, res) {
  res.send("Hello World");
});
app.get("/about", function (req, res) {
  const data = {
    name: "sadam",
    f_name: "Muneer Abbas",
    dept: "CS",
    semester: "5th",
  };
  res.send(data.name);
});

app.get("/hasnain", function (req, res) {
  const hasnaindata = {
    name: "Hasnain Asad",
    dept: "CS",
    semester: "5th",
    section: "A",
  };
  res.send(hasnaindata);
});

app.post("/items", function (req, res) {
  res.send("data is saved");
});
app.listen(3000, () => {
  console.log("server zinda hai");
});
