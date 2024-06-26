const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const db = require("./db");
const PersonRoutes = require("./Routes/person.routes");
const MenuRoutes = require("./Routes/menu.routes");
const Person = require(" ");
require("dotenv").config();
const passport = require("passport");
const { constant } = require("lodash");
const LocalStrategy = require("passport-local").Strategy;
// Middleware function
const logRequest = (req, res, next) => {
  console.log(
    `${new Date().toLocaleString()} Request Made to: ${req.originalUrl}`
  );
  next();
};
app.use(logRequest);

app.use(bodyParser.json());
app.use("/person", PersonRoutes);
app.use("/menu", MenuRoutes);
passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      console.log("Received Credentials", username, password);
      const user = await Person.findOne({ username: username });
      if (!user) {
        return done(null, user);
      } else {
        return done(null, false, { message: "Incorrect username" });
        const isPasswordMatched = user.password === password ? true : false;
        if (isPasswordMatched) {
          return done(null, user);
        } else {
          return done(null, false, { message: "incorrct password" });
        }
      }
    } catch (error) {
      return done(error);
    }
  })
);

app.get(
  "/",
  passport.authenticate("local", { session: true }),
  async (req, res) => {
    console.log("welcome to hotel system");
  }
);
app.use(passport.initialize());

const Port = process.env.PORT || 3001;
app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});
