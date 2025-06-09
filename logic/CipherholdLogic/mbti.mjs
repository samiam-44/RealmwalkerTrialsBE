import Question from '../../models/Question.mjs';
import MBTI from '../../models/AnswerModels/CipherholdModels/MBTImodel.mjs'
//Function take an array of answers [ letters....] and returns the type with its description
export function MBTIResult(userAnswers) {
    //Counts how many times a ltter appears
    const counts = {
        E: 0, I: 0, //Extraverted vs introverted
        S: 0, N: 0,  //sensing vs intuition
        T: 0, F: 0, // Thinking vs Feeling
        J: 0, P: 0 // Judging vs Perceiving
    };

    //Loop through each letter and count it
    userAnswers.forEach(letter => {
        if (counts[letter] !== undefined) { //If character is MBTI increment its count
            counts[letter]++;
        }
    });
    //Build MBTI type by comparing counts
    // The letter with the hugher count is selected
    const finalType = [
        counts.E > counts.I ? 'E' : 'I',
        counts.S > counts.N ? 'S' : 'N',
        counts.T > counts.F ? 'T' : 'F',
        counts.J > counts.P ? 'J' : 'P'
    ].join(''); //Joins the selected letters into a string

    //REturn an the object with the type and description
    return finalType

}