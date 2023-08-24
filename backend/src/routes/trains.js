const express = require("express");
const data = require("../data/db.json");
const { getWebData } = require("../Trains");
const route = express.Router();

route.get("/", function (req, res) {
  res.json(data.lines);
});

route.get("/status", function (req, res) {
  (async () => {
    const result = await getWebData();
    res.json(result);
  })();
});

module.exports = route;
