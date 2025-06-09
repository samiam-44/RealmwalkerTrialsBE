
import mongoose from "mongoose";

const enneagramResultSchema = new mongoose.Schema({
  type: {
    type: String, // 1-9?
    required: true,
    unique: true,
  },
  name: {
    type: String, // Full name
    required: true,
  },
  description: { type: String, required: true },
  coreMotivation: String,
  coreFear: String,
  strengths: String,
  challenges: String,
  idealCareers: String,
  addictionTendencies: String,
  compatibility: String,
  growthPath: String
});

const EnneagramResult = mongoose.model("EnneagramResult", enneagramResultSchema);
export default EnneagramResult;
