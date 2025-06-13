import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({
    //Title of the quiz
    title: {
        type: String,
        required: true,
    },
    description: String,
    realmName: { //Quiz belongs in this realm
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Realm', //Refers to the realm model
        required: true,
    },
    // questions: [{ //Array of quiestion ObjectIds
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Question', //question model
    
});

const Quiz = mongoose.model('Quiz', quizSchema);

export default Quiz;