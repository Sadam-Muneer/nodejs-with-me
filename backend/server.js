const fs = require("fs");
const os = require("os");
const user = os.userInfo();
console.log(user);
fs.appendFile(
  "greeting.txt",
  "Hello " + user.username + " this is greeting file.",
  () => {
    console.log("file is created");
  }
);
