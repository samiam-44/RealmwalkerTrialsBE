
import mongoose from "mongoose";

const enneagramResultSchema = new mongoose.Schema({
  type: { type: String, required: true, unique: true },
  title: { type: String, required: true },  // rename name -> title
  description: {
    explained: { type: String, required: true },
    coreMotivation: String,
    coreFear: String,
    strengths: String,
    challenges: String,
    idealCareers: [
      {
        field: String,
        roles: [String]
      }
    ],
    addictionTendencies: String,
    compatibility: String,
    growthPath: String
  }
});
const EnneagramResult = mongoose.model("EnneagramResult", enneagramResultSchema);
export default EnneagramResult;
