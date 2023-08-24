require("dotenv").config();
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const db = mongoose.connection;
const port = 8080;

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

// Trains Routes
const trainsRoutes = require("./routes/trains");
const reportsRoutes = require("./routes/reports");

app.use("/trains", trainsRoutes);
app.use("/reports", reportsRoutes);

app.get("/", function (req, res) {
  res.send("Linhas de transporte público de São Paulo");
});

app.listen(port, function () {
  console.log(`Listening on port ${port}!`);
});
