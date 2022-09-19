import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "../../src/App";
import configureStore, { initialState } from "../../src/store";

const path = require("path");
const fs = require("fs");

const renderer = (req, res, next) => {
  const filePath = path.resolve(
    __dirname,
    process.env.NODE_ENV !== "dev"
      ? "../../build/index.html"
      : "../../public/index.html"
  );

  fs.readFile(filePath, "utf8", (err, htmlData) => {
    if (err) {
      console.error("err", err);
      return res.status(404).end();
    }

    const store = configureStore(initialState);

    const html = renderToString(
      <StaticRouter location={req.originalUrl}>
        <App store={store} />
      </StaticRouter>
    );

    return res.send(
      htmlData
        .replace('<div id="root"></div>', `<div id="root">${html}</div>`)
        .replace("__REDUX__", JSON.stringify(store.getState()))
    );
  });
};

module.exports = renderer;
