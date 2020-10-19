#!/usr/bin/env node
process.title = "preview-jsdoc";
const express = require("express");
var app = express();

app.get("/*", (req, res) => {
  if (req.path.includes("favicon.ico")) {
    res.sendStatus(204);
  }
  res.sendFile(req.path.substring(1), {
    root: "../jsdoc/",
  });
});

app.listen(1079);
