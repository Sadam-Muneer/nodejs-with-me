const express = require("express");
const { has } = require("lodash");
const bodyParser = require("body-parser");
const app = express();
const db = require("./db");
const person = require("./models/person.model");
const Menu = require("./models/menu.models");
app.use(bodyParser.json());
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

app.post("/person", async (req, res) => {
  try {
    const data = req.body;
    const newPerson = new person(data);
    const response = await newPerson.save();
    console.log("Data saved successfully");
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
app.get("/person", async (req, res) => {
  try {
    const data = await person.find();
    console.log("Data fetched successfully");
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Menu

app.post("/menu", async (req, res) => {
  try {
    const data = req.body;
    const newMenu = new Menu(data);
    const response = await newMenu.save();
    console.log("Menu saved successfully");
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
app.get("/menu", async (req, res) => {
  try {
    const data = await Menu.find();
    console.log("Menu fetched successfully");
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
app.listen(3000, () => {
  console.log("server zinda hai");
});
