const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

const items = require("./routes/api/items");

//BODY PARSER MIDDLEWARE..
app.use(bodyParser.json());

//MONGO DB CONFIGURATION..
const db = require("./config/keys").mongoURI;
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected..!!!"))
  .catch(err => console.log(err));

//ROUTINTG
app.use("/api/items", items);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on ${port}`));
