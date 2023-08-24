const mongoose = require("mongoose");

const ReportSchema = new mongoose.Schema({
  line: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

const Report = mongoose.model("Reports", ReportSchema);

module.exports = Report;
