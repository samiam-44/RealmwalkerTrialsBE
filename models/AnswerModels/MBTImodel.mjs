import mongoose from 'mongoose'

const MBTIschema = new mongoose.Schema({
    typeCode: { type: String, required: true, unique: true }, // e.g. 'INTJ'
    title: { type: String}, // e.g. 'The Architect'
    descriptionText: {type: String}, //Description of type
});

const MBTI = mongoose.model('MBTI', MBTIschema)

export default MBTI