const express = require("express");
const route = express.Router();
const Report = require("../models/Report");

route.get("/", async (req, res) => {
  try {
    const reports = await Report.find();
    res.json(reports);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

route.post("/", (req, res) => {
  const report = new Report({
    line: req.body.line,
    description: req.body.description,
    status: req.body.status,
  });

  // Save Post to the database
  report
    .save()
    .then(function (report) {
      res.status(200).json(report);
    })
    .catch(function (err) {
      res.status(500).json({ message: err.message });
    });
});

route.get("/status", (req, res) => {
  res.json({
    ok: "Linha em operação",
    stopped: "Linha paradas",
    delay: "Linha com atraso",
  });
});

module.exports = route;
