const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const Api = require("./api");
const cors = require("cors");

const app = express();

const PORT = process.env.SERVER_ENDPOINT ? process.env.SERVER_ENDPOINT : 3001;

const PublicFolder = path.resolve(
  __dirname,
  process.env.NODE_ENV !== "development" ? "../build" : "../public"
);

app.use(favicon(path.join(PublicFolder, "favicon.ico")));

app.use("*", cors());

app.use("/api", Api);

app.use("/", (req, res, next) => {
  // Uncomment me! Using cache-control headers
  // if (req.originalUrl.indexOf('fonts') > -1) {
  //   res.header("Cache-Control", "public, max-age=604800, stale-while-revalidate=86400")
  // }
  next()
}, express.static(PublicFolder));
app.use("*", express.static(PublicFolder + "/index.html"));

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
