import mongoose from "mongoose";
import { ref } from "process";

//For later HEXACO
// trait: { type: String },  // for HEXACO
// facet: { type: String },  
// reverse: { type: Boolean } // for HEXACO scoring

// Make sure your Question model includes: CAliper
// trait: { type: String },
// facet: { type: String },
// reverse: { type: Boolean }

// Ensure your Question model supports DISC-specific structure. Example schema adjustments:

// options: [
//   {
//     text: { type: String, required: true },
//     type: { type: String } // For DISC, this will be "D", "I", "S", or "C"
//   }
// ]

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

