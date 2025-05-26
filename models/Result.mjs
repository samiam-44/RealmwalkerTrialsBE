import mongoose from "mongoose";

//Store one user's responses to a quiz
const resultSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId, //Get user by id
        red: 'User',
        required: true, 
    },
    quiz: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Quiz',
        required: true,
    },
    answers: [{ //Each answer is linked to a question
       question: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question',
        required: true
       },
       selectedValue: String //possible option value like A or "Mind" etc.
    }],

    outcome: { //Computed Result
        type: String,
        default: 'Pending'
    }
},
 {
 timestamps: true //Add createdAt/updatedAt fields
});

const Result = mongoose.model('Result', resultSchema);
export default Result