#!/usr/bin/env node
process.title = "test-zoom.js";
const express = require("express");
const fs = require("fs");
var app = express();

app.get("/test/interactive.html", (req, res) => {
  res.send(fs.readFileSync("interactive.html", "utf-8"));
});

app.get("/index.js", (req, res) => {
  res.send(fs.readFileSync("../index.js", "utf-8"));
});

app.get("/test/interactive.js", (req, res) => {
  res.send(fs.readFileSync("interactive.js", "utf-8"));
});

app.get("/favicon.ico", (req, res) => {
  res.sendStatus(204);
});

app.get("/test/auto.js", (req, res) => {
  res.send(fs.readFileSync("auto.js", "utf-8"));
});

app.get("/test/auto.html", (req, res) => {
  res.send(fs.readFileSync("auto.html", "utf-8"));
});

app.listen(1073);
