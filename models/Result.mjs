import mongoose from "mongoose";

const resultSchema = new mongoose.Schema({
  user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
  },

  testType: {
    type: String,
    required: true,
  },

  answers: [
    {
      question: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Question",
      },
      selectedValue: String, //  "E", "N", or a full answer
    },
  ],

  result: {
    type: mongoose.Schema.Types.Mixed, // Final outcome example intj or type 5
    required: true,
  },

  description: {
    title: String,
    testName: String,
    coreMotivation: String,
    coreFear: String,
    strengths: [String],
    challenges: [String],
    idealCareers: [String],
    compatibility: [String],
    growthPath: String,
    text: String, // general description text if other fields aren't used
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Result = mongoose.model("Result", resultSchema);
export default Result;
