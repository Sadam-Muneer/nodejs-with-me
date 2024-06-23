const express = require("express");
const router = express.Router();
const person = require("../models/person.model");

router.post("/", async (req, res) => {
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

//person get method

router.get("/", async (req, res) => {
  try {
    const data = await person.find();
    console.log("Data fetched successfully");
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Work Role

router.get("/:role", async (req, res) => {
  try {
    const role = req.params.role;
    if (role === "chef" || role === "waiter" || role === "manager") {
      const response = await person.find({ role: role });
      console.log("Response fetched successfully");
      res.status(200).json(response);
    } else {
      res
        .status(404)
        .json({ error: "please choose one between chef , manager or waiter" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
module.exports = router;
