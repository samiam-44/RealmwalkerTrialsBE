import mongoose from "mongoose";
//Defining what data feilds each realm will hav
const realmSchema = new mongoose.Schema({
 //Name of the realm 
 name: {
    type: String,
    required: true
 },
 description: String,
 //Array of references to quizzes associated with this REalm
 //Quiz linked to realms using ObjectId in mongoDB
 quizzes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Quiz' //Quiz is the name of the other model its being linked to
}]
});
//Realm created for CRUD
const Realm = mongoose.model('Realm', realmSchema);

export default Realm