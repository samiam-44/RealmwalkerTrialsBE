import mongoose from "mongoose";

const { Schema } = mongoose;

const descriptionSchema = new Schema({
  testName: { type: String, required: true },       // "Enneagram", "MBTI", etc.
  type: { type: String, required: true, unique: true },  // e.g. "Type1", "INTJ"
  title: { type: String, required: true },

  // Flexible container for all the test-specific info
  description: { type: Schema.Types.Mixed, default: {} }

}, { timestamps: true });

const Description = mongoose.model("Description", descriptionSchema);

export default Description;

