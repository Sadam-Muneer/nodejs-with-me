const express = require("express");
const app = express();

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

app.listen(3000, () => {
  console.log("server zinda hai");
});
