import mongoose from 'mongoose';
import Question from './models/Question.mjs';
import Quiz from './models/Quiz.mjs';

const questionsData = [
    //MEYER BRIGGS TEST
  {
    quizTitle: "Myers-Briggs Codex (MBTI)",
    text: "You find it takes effort to introduce yourself to other people.",
    options: [
      { text: "Agree", value: "I" },
      { text: "Disagree", value: "E" }
    ]
  },
  {
    quizTitle: "Myers-Briggs Codex (MBTI)",
    text: "You consider yourself more practical than creative.",
    options: [
      { text: "Agree", value: "S" },
      { text: "Disagree", value: "N" }
    ]
  },
  {
    quizTitle: "Myers-Briggs Codex (MBTI)",
    text: "Winning a debate matters less to you than making sure no one gets upset.",
    options: [
      { text: "Agree", value: "F" },
      { text: "Disagree", value: "T" }
    ]
  },
  {
    quizTitle: "Myers-Briggs Codex (MBTI)",
    text: "You get energized going to social events that involve many interactions.",
    options: [
      { text: "Agree", value: "E" },
      { text: "Disagree", value: "I" }
    ]
  },
  {
    quizTitle: "Myers-Briggs Codex (MBTI)",
    text: "You often spend time exploring unrealistic and impractical ideas, yet intriguing ones.",
    options: [
      { text: "Agree", value: "N" },
      { text: "Disagree", value: "S" }
    ]
  },
  {
    quizTitle: "Myers-Briggs Codex (MBTI)",
    text: "Your travel plans are more likely to look like a rough list of ideas than a detailed itinerary.",
    options: [
      { text: "Agree", value: "P" },
      { text: "Disagree", value: "J" }
    ]
  },
  {
    quizTitle: "Myers-Briggs Codex (MBTI)",
    text: "You often think about what you should have said in a conversation long after it has taken place.",
    options: [
      { text: "Agree", value: "I" },
      { text: "Disagree", value: "E" }
    ]
  },
  {
    quizTitle: "Myers-Briggs Codex (MBTI)",
    text: "If your friend is sad about something, your first instinct is to support them emotionally, not try to solve their problem.",
    options: [
      { text: "Agree", value: "F" },
      { text: "Disagree", value: "T" }
    ]
  },
  {
    quizTitle: "Myers-Briggs Codex (MBTI)",
    text: "You rarely second-guess the choices that you’ve made.",
    options: [
      { text: "Agree", value: "J" },
      { text: "Disagree", value: "P" }
    ]
  },
  {
    quizTitle: "Myers-Briggs Codex (MBTI)",
    text: "You find it easy to empathize with a person whose experiences are very different from yours.",
    options: [
      { text: "Agree", value: "F" },
      { text: "Disagree", value: "T" }
    ]
  },
  {
    quizTitle: "Myers-Briggs Codex (MBTI)",
    text: "You prefer to completely finish one project before starting another.",
    options: [
      { text: "Agree", value: "J" },
      { text: "Disagree", value: "P" }
    ]
  },
  {
    quizTitle: "Myers-Briggs Codex (MBTI)",
    text: "You are more inclined to follow your head than your heart.",
    options: [
      { text: "Agree", value: "T" },
      { text: "Disagree", value: "F" }
    ]
  },
  {
    quizTitle: "Myers-Briggs Codex (MBTI)",
    text: "You usually prefer just doing what you feel like at any given moment instead of planning a particular daily routine.",
    options: [
      { text: "Agree", value: "P" },
      { text: "Disagree", value: "J" }
    ]
  },
  {
    quizTitle: "Myers-Briggs Codex (MBTI)",
    text: "You enjoy participating in group activities.",
    options: [
      { text: "Agree", value: "E" },
      { text: "Disagree", value: "I" }
    ]
  },
  {
    quizTitle: "Myers-Briggs Codex (MBTI)",
    text: "You like books and movies that make you come up with your own interpretation of the ending.",
    options: [
      { text: "Agree", value: "N" },
      { text: "Disagree", value: "S" }
    ]
  },
  {
  quizTitle: "Myers-Briggs Codex (MBTI)",
  text: "You trust experience more than theoretical concepts.",
  options: [
    { text: "Agree", value: "S" },
    { text: "Disagree", value: "N" }
  ]
},
//ENNEAGRAM------------------------------------------------------------

  {
    quizTitle: "Enneagram Sigils",
    text: "I strive for perfection in all I do.",
    options: [
      { text: "Agree", value: "1" },
      { text: "Disagree", value: "0" }
    ]
  },
  {
    quizTitle: "Enneagram Sigils",
    text: "I work hard to be helpful to others.",
    options: [
      { text: "Agree", value: "2" },
      { text: "Disagree", value: "0" }
    ]
  },
  {
    quizTitle: "Enneagram Sigils",
    text: "I want to be seen as successful and admired.",
    options: [
      { text: "Agree", value: "3" },
      { text: "Disagree", value: "0" }
    ]
  },
  {
    quizTitle: "Enneagram Sigils",
    text: "I often feel misunderstood and emotionally deep.",
    options: [
      { text: "Agree", value: "4" },
      { text: "Disagree", value: "0" }
    ]
  },
  {
    quizTitle: "Enneagram Sigils",
    text: "I rely on logic and knowledge to navigate life.",
    options: [
      { text: "Agree", value: "5" },
      { text: "Disagree", value: "0" }
    ]
  },
  {
    quizTitle: "Enneagram Sigils",
    text: "I’m always preparing for what could go wrong.",
    options: [
      { text: "Agree", value: "6" },
      { text: "Disagree", value: "0" }
    ]
  },
  {
    quizTitle: "Enneagram Sigils",
    text: "I seek excitement and avoid pain at all costs.",
    options: [
      { text: "Agree", value: "7" },
      { text: "Disagree", value: "0" }
    ]
  },
  {
    quizTitle: "Enneagram Sigils",
    text: "I assert control to protect myself and others.",
    options: [
      { text: "Agree", value: "8" },
      { text: "Disagree", value: "0" }
    ]
  },
  {
    quizTitle: "Enneagram Sigils",
    text: "I go along with others to keep the peace.",
    options: [
      { text: "Agree", value: "9" },
      { text: "Disagree", value: "0" }
    ]
  },
  {
    quizTitle: "Enneagram Sigils",
    text: "Criticism hits me harder than most people.",
    options: [
      { text: "Agree", value: "1" },
      { text: "Disagree", value: "0" }
    ]
  },
  {
    quizTitle: "Enneagram Sigils",
    text: "I often sacrifice my own needs for others.",
    options: [
      { text: "Agree", value: "2" },
      { text: "Disagree", value: "0" }
    ]
  },
  {
    quizTitle: "Enneagram Sigils",
    text: "Achieving goals gives me a sense of identity.",
    options: [
      { text: "Agree", value: "3" },
      { text: "Disagree", value: "0" }
    ]
  },
  {
    quizTitle: "Enneagram Sigils",
    text: "I feel emotions more intensely than others.",
    options: [
      { text: "Agree", value: "4" },
      { text: "Disagree", value: "0" }
    ]
  },
  {
    quizTitle: "Enneagram Sigils",
    text: "I need time alone to recharge and reflect.",
    options: [
      { text: "Agree", value: "5" },
      { text: "Disagree", value: "0" }
    ]
  },
  {
    quizTitle: "Enneagram Sigils",
    text: "I’m skeptical of others until I know they’re safe.",
    options: [
      { text: "Agree", value: "6" },
      { text: "Disagree", value: "0" }
    ]
  },
  {
    quizTitle: "Enneagram Sigils",
    text: "I like to keep my options open and avoid being tied down.",
    options: [
      { text: "Agree", value: "7" },
      { text: "Disagree", value: "0" }
    ]
  },
  {
    quizTitle: "Enneagram Sigils",
    text: "I confront issues head-on without hesitation.",
    options: [
      { text: "Agree", value: "8" },
      { text: "Disagree", value: "0" }
    ]
  },
  {
    quizTitle: "Enneagram Sigils",
    text: "Harmony is more important than getting my way.",
    options: [
      { text: "Agree", value: "9" },
      { text: "Disagree", value: "0" }
    ]
  },
    {
    quizTitle: "Enneagram Sigils",
    text: "I hold myself to very high standards and dislike making mistakes.",
    options: [
      { text: "Agree", value: "1" },
      { text: "Disagree", value: "0" }
    ]
  },
  {
    quizTitle: "Enneagram Sigils",
    text: "I find great satisfaction in supporting and caring for others.",
    options: [
      { text: "Agree", value: "2" },
      { text: "Disagree", value: "0" }
    ]
  },
  {
    quizTitle: "Enneagram Sigils",
    text: "I feel driven to excel and be recognized for my achievements.",
    options: [
      { text: "Agree", value: "3" },
      { text: "Disagree", value: "0" }
    ]
  },
  {
    quizTitle: "Enneagram Sigils",
    text: "I experience emotions in a profound way and value authenticity.",
    options: [
      { text: "Agree", value: "4" },
      { text: "Disagree", value: "0" }
    ]
  },
  {
    quizTitle: "Enneagram Sigils",
    text: "I prefer to gather information and analyze before acting.",
    options: [
      { text: "Agree", value: "5" },
      { text: "Disagree", value: "0" }
    ]
  },
  {
    quizTitle: "Enneagram Sigils",
    text: "I tend to worry about what might go wrong and prepare accordingly.",
    options: [
      { text: "Agree", value: "6" },
      { text: "Disagree", value: "0" }
    ]
  },
  {
    quizTitle: "Enneagram Sigils",
    text: "I enjoy new experiences and dislike feeling confined or limited.",
    options: [
      { text: "Agree", value: "7" },
      { text: "Disagree", value: "0" }
    ]
  },
  {
    quizTitle: "Enneagram Sigils",
    text: "I am comfortable taking charge and standing up for myself and others.",
    options: [
      { text: "Agree", value: "8" },
      { text: "Disagree", value: "0" }
    ]
  },
  {
    quizTitle: "Enneagram Sigils",
    text: "I value peace and avoid conflict whenever possible.",
    options: [
      { text: "Agree", value: "9" },
      { text: "Disagree", value: "0" }
    ]
  },

];



  // Add other questions here...


async function seedQuestions() {
  try {
    await mongoose.connect('mongodb://localhost:27017/your-db-name');

    for (const q of questionsData) {
      const quiz = await Quiz.findOne({ title: q.quizTitle });
      if (!quiz) {
        console.warn(`Quiz not found: ${q.quizTitle}`);
        continue;
      }

      await Question.create({
        text: q.text,
        options: q.options,
        quiz: quiz._id,
      });
    }

    console.log('Questions seeded!');
    mongoose.disconnect();
  } catch (err) {
    console.error(err);
  }
}

seedQuestions();
