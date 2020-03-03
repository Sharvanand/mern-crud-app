const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

const items = require("./routes/api/items");

//BODY PARSER MIDDLEWARE..
app.use(bodyParser.json());

//MONGO DB CONFIGURATION..
const db = require("./config/keys").mongoURI;
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected..!!!"))
  .catch(err => console.log(err));

//ROUTINTG
app.use("/api/items", items);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client", "build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on ${port}`));
