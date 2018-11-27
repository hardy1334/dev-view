const express = require("express");
const mongoose = require("mongoose");
const app = express();
const posts = require("./routes/api/posts");
const profile = require("./routes/api/profile");
const users = require("./routes/api/users");
const bodyParser = require("body-parser");
const passport = require("passport");

const db = require("./config/keys").mongoURI;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
  .connect(db)
  .then(() => {
    console.log("Mongodb Connected");
  })
  .catch(err => console.log(err));

app.use(passport.initialize());

require("./config/passport")(passport);

app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
