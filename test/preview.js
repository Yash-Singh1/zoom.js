#!/usr/bin/env node
process.title = "preview-jsdoc";
const express = require("express");
const fs = require("fs");
var app = express();

app.get("/*", (req, res) => {
  if (fs.existsSync("../jsdoc" + req.originalUrl)) {
    if (req.originalUrl.substring(req.originalUrl.length - 4) === ".css") {
      res.header({ "Content-Type": "text/css" });
    } else if (
      req.originalUrl.substring(req.originalUrl.length - 5) === ".woff"
    ) {
      return res.sendStatus(204);
    }
    res.send(fs.readFileSync("../jsdoc" + req.originalUrl, "utf-8"));
  } else {
    res.sendStatus(204);
  }
});

app.listen(1079);
