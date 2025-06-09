import mongoose from 'mongoose';

const MBTIschema = new mongoose.Schema({
  type: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  description: {
    explained: String,
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
    communicationStyle: String,
    relationships: {
      romantic: String,
      friendships: String,
      workplace: String
    }
  }
});

const MBTI = mongoose.model('MBTI', MBTIschema);
export default MBTI;
