const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const Api = require('./api');
const cors = require('cors');

const app = express();


const PublicFolder = path.resolve(__dirname, process.env.env !== "dev" ? "../build" : "../public");

if (process.env.env !== "dev")
  app.use(favicon(path.join(__dirname, "../build", "favicon.ico")));

app.use("*", cors());

app.use("/api", Api);

app.use("/api", (req, res) => {
  res.status(404).send("why?");
});

app.use("/", express.static(PublicFolder));

// Serve index.html for all other requests
app.use("*", (req, res) => {
  res.sendFile(`${PublicFolder}/index.html`)
})

app.listen(3003, () => {
  console.log("server started on port 3003");
});
