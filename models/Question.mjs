import mongoose from "mongoose";
import { ref } from "process";

const questionSchema = new mongoose.Schema({
    //The question
    text: {
        type: String,
        required: true,
    },

    //Question belongs to this quiz
    quiz: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Quiz', //model reference
        required: true,
    },
    //Possible answer choices
    options: [{
        text: String,
        value: String
    }]
})

const Question = mongoose.model('Question', questionSchema);

export default Question