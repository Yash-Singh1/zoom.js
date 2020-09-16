#!/usr/bin/env node
process.title = "testzoom.js";
const express = require("express");
const fs = require("fs");
var app = express();

app.get("/test/index.html", (req, res) => {
  res.send(fs.readFileSync("index.html", "utf-8"));
});

app.get("/index.js", (req, res) => {
  res.send(fs.readFileSync("../index.js", "utf-8"));
});

app.get("/test/test.js", (req, res) => {
  res.send(fs.readFileSync("test.js", "utf-8"));
});

app.get("/favicon.ico", (req, res) => {
  res.sendStatus(204);
});

app.listen(1073);
