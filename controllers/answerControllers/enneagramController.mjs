import EnneagramResult from '../models/EnneagramModel.mjs';

const topType = topTypes[0];
const fullResult = await EnneagramResult.findOne({ type: topType });

res.json({
  scores,
  type: fullResult.type,
  name: fullResult.name,
  description: fullResult.description,
  coreMotivation: fullResult.coreMotivation,
  coreFear: fullResult.coreFear,
  strengths: fullResult.strengths,
  challenges: fullResult.challenges,
  idealCareers: fullResult.idealCareers,
  addictionTendencies: fullResult.addictionTendencies,
  compatibility: fullResult.compatibility,
  growthPath: fullResult.growthPath
});
