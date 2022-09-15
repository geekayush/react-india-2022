const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const Api = require("./api");
const cors = require("cors");
const serverRenderer = require("./middleware/renderer");

const app = express();
const router = express.Router();

const PublicFolder = path.resolve(
  __dirname,
  process.env.NODE_ENV !== "dev" ? "../build/static" : "../src/static"
);

if (process.env.NODE_ENV !== "dev")
  app.use(favicon(path.join(__dirname, "../build", "favicon.ico")));

app.use("*", cors());

app.use("/api", Api);

app.use("/api", (req, res) => {
  res.status(404).send("why?");
});

app.use("/static", express.static(PublicFolder));

router.use("*", serverRenderer);

// router.use(express.static(path.resolve(PublicFolder)));

app.use(router);

app.listen(3003, () => {
  console.log("server started on port 3003");
});
