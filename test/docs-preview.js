#!/usr/bin/env node
process.title = "preview-jsdoc";
const express = require("express");
var app = express();

app.get("/*", (req, res) => {
  if (req.path.includes("favicon.ico")) {
    return res.sendStatus(204);
  }
  res.sendFile(req.path.substring(1), {
    root: "jsdoc/",
  });
});

app.listen(1079);

console.log("Go to localhost:1079/index.html to preview the docs");
console.log();
