const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const Api = require("./api");
const cors = require("cors");
const serverRenderer = require("./middleware/renderer");

const app = express();
const router = express.Router();

const PORT = process.env.PORT ? process.env.PORT : 3001;

const PublicFolder = path.resolve(
  __dirname,
  process.env.NODE_ENV !== "development" ? "../build" : "../public"
);

app.use(favicon(path.join(PublicFolder, "favicon.ico")));

app.use("*", cors());

app.use("/api", Api);

app.use("/static", express.static(PublicFolder + "/static"));

router.use("*", serverRenderer);

app.use(router);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
