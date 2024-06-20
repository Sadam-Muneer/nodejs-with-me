const fs = require("fs");
const os = require("os");
var _ = require("lodash");
const Notes = require("./notes");
const user = os.userInfo();
var age = Notes.age;
var result = Notes.addnumber(age + 18, 10);
console.log(result);
console.log(age);
console.log(user);
fs.appendFile(
  "greeting.txt",
  "Hello " + user.username + " this is greeting file.",
  () => {
    console.log("file is created");
  }
);
const uniquedata = ["person", "person", 1, 2, 1, 2, "name", "age", "age"];
var filter = _.uniq(uniquedata);
console.log(filter);
console.log(_.isString("sadam"));
