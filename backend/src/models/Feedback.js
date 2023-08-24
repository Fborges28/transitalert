const mongoose = require("mongoose");

const FeedbackSchema = new mongoose.Schema({
  description: {
    type: string,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const Feedback = mongoose.model("Feedbacks", FeedbackSchema);

module.exports = Feedback;
