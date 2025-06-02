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
  //OCEAN PROTOCOL----------------------------------------------------------
  {
  quizTitle: "OCEAN Protocol",
  text: "I have a vivid imagination.",
  options: [
    { text: "Agree", value: "O" },
    { text: "Disagree", value: "0" }
  ]
},
{
  quizTitle: "OCEAN Protocol",
  text: "I enjoy thinking about abstract concepts.",
  options: [
    { text: "Agree", value: "O" },
    { text: "Disagree", value: "0" }
  ]
},
{
  quizTitle: "OCEAN Protocol",
  text: "I am full of ideas.",
  options: [
    { text: "Agree", value: "O" },
    { text: "Disagree", value: "0" }
  ]
},
{
  quizTitle: "OCEAN Protocol",
  text: "I enjoy artistic and creative experiences.",
  options: [
    { text: "Agree", value: "O" },
    { text: "Disagree", value: "0" }
  ]
},
{
  quizTitle: "OCEAN Protocol",
  text: "I tend to be original and come up with new ideas.",
  options: [
    { text: "Agree", value: "O" },
    { text: "Disagree", value: "0" }
  ]
},
{
  quizTitle: "OCEAN Protocol",
  text: "I am curious about many different things.",
  options: [
    { text: "Agree", value: "O" },
    { text: "Disagree", value: "0" }
  ]
},
{
  quizTitle: "OCEAN Protocol",
  text: "I prefer variety over routine.",
  options: [
    { text: "Agree", value: "O" },
    { text: "Disagree", value: "0" }
  ]
},
{
  quizTitle: "OCEAN Protocol",
  text: "I have a rich vocabulary.",
  options: [
    { text: "Agree", value: "O" },
    { text: "Disagree", value: "0" }
  ]
},
{
  quizTitle: "OCEAN Protocol",
  text: "I pay attention to details.",
  options: [
    { text: "Agree", value: "C" },
    { text: "Disagree", value: "0" }
  ]
},
{
  quizTitle: "OCEAN Protocol",
  text: "I follow a schedule.",
  options: [
    { text: "Agree", value: "C" },
    { text: "Disagree", value: "0" }
  ]
},
{
  quizTitle: "OCEAN Protocol",
  text: "I like order.",
  options: [
    { text: "Agree", value: "C" },
    { text: "Disagree", value: "0" }
  ]
},
{
  quizTitle: "OCEAN Protocol",
  text: "I always complete tasks successfully.",
  options: [
    { text: "Agree", value: "C" },
    { text: "Disagree", value: "0" }
  ]
},
{
  quizTitle: "OCEAN Protocol",
  text: "I make plans and stick to them.",
  options: [
    { text: "Agree", value: "C" },
    { text: "Disagree", value: "0" }
  ]
},
{
  quizTitle: "OCEAN Protocol",
  text: "I am exacting in my work.",
  options: [
    { text: "Agree", value: "C" },
    { text: "Disagree", value: "0" }
  ]
},
{
  quizTitle: "OCEAN Protocol",
  text: "I get chores done right away.",
  options: [
    { text: "Agree", value: "C" },
    { text: "Disagree", value: "0" }
  ]
},
{
  quizTitle: "OCEAN Protocol",
  text: "I do things according to a plan.",
  options: [
    { text: "Agree", value: "C" },
    { text: "Disagree", value: "0" }
  ]
},
{
  quizTitle: "OCEAN Protocol",
  text: "I feel comfortable around people.",
  options: [
    { text: "Agree", value: "E" },
    { text: "Disagree", value: "0" }
  ]
},
{
  quizTitle: "OCEAN Protocol",
  text: "I am the life of the party.",
  options: [
    { text: "Agree", value: "E" },
    { text: "Disagree", value: "0" }
  ]
},
{
  quizTitle: "OCEAN Protocol",
  text: "I start conversations.",
  options: [
    { text: "Agree", value: "E" },
    { text: "Disagree", value: "0" }
  ]
},
{
  quizTitle: "OCEAN Protocol",
  text: "I talk to a lot of different people at parties.",
  options: [
    { text: "Agree", value: "E" },
    { text: "Disagree", value: "0" }
  ]
},
{
  quizTitle: "OCEAN Protocol",
  text: "I don’t mind being the center of attention.",
  options: [
    { text: "Agree", value: "E" },
    { text: "Disagree", value: "0" }
  ]
},
{
  quizTitle: "OCEAN Protocol",
  text: "I make friends easily.",
  options: [
    { text: "Agree", value: "E" },
    { text: "Disagree", value: "0" }
  ]
},
{
  quizTitle: "OCEAN Protocol",
  text: "I am skilled in handling social situations.",
  options: [
    { text: "Agree", value: "E" },
    { text: "Disagree", value: "0" }
  ]
},
{
  quizTitle: "OCEAN Protocol",
  text: "I am outgoing and sociable.",
  options: [
    { text: "Agree", value: "E" },
    { text: "Disagree", value: "0" }
  ]
},
{
  quizTitle: "OCEAN Protocol",
  text: "I sympathize with others’ feelings.",
  options: [
    { text: "Agree", value: "A" },
    { text: "Disagree", value: "0" }
  ]
},
{
  quizTitle: "OCEAN Protocol",
  text: "I take time out for others.",
  options: [
    { text: "Agree", value: "A" },
    { text: "Disagree", value: "0" }
  ]
},
{
  quizTitle: "OCEAN Protocol",
  text: "I feel others’ emotions.",
  options: [
    { text: "Agree", value: "A" },
    { text: "Disagree", value: "0" }
  ]
},
{
  quizTitle: "OCEAN Protocol",
  text: "I make people feel at ease.",
  options: [
    { text: "Agree", value: "A" },
    { text: "Disagree", value: "0" }
  ]
},
{
  quizTitle: "OCEAN Protocol",
  text: "I am interested in people.",
  options: [
    { text: "Agree", value: "A" },
    { text: "Disagree", value: "0" }
  ]
},
{
  quizTitle: "OCEAN Protocol",
  text: "I have a soft heart.",
  options: [
    { text: "Agree", value: "A" },
    { text: "Disagree", value: "0" }
  ]
},
{
  quizTitle: "OCEAN Protocol",
  text: "I am helpful and unselfish with others.",
  options: [
    { text: "Agree", value: "A" },
    { text: "Disagree", value: "0" }
  ]
},
{
  quizTitle: "OCEAN Protocol",
  text: "I trust others.",
  options: [
    { text: "Agree", value: "A" },
    { text: "Disagree", value: "0" }
  ]
},
{
  quizTitle: "OCEAN Protocol",
  text: "I get stressed out easily.",
  options: [
    { text: "Agree", value: "N" },
    { text: "Disagree", value: "0" }
  ]
},
{
  quizTitle: "OCEAN Protocol",
  text: "I worry about things.",
  options: [
    { text: "Agree", value: "N" },
    { text: "Disagree", value: "0" }
  ]
},
{
  quizTitle: "OCEAN Protocol",
  text: "I am easily disturbed.",
  options: [
    { text: "Agree", value: "N" },
    { text: "Disagree", value: "0" }
  ]
},
{
  quizTitle: "OCEAN Protocol",
  text: "I change my mood a lot.",
  options: [
    { text: "Agree", value: "N" },
    { text: "Disagree", value: "0" }
  ]
},
{
  quizTitle: "OCEAN Protocol",
  text: "I get irritated easily.",
  options: [
    { text: "Agree", value: "N" },
    { text: "Disagree", value: "0" }
  ]
},
{
  quizTitle: "OCEAN Protocol",
  text: "I often feel blue.",
  options: [
    { text: "Agree", value: "N" },
    { text: "Disagree", value: "0" }
  ]
},
{
  quizTitle: "OCEAN Protocol",
  text: "I get upset easily.",
  options: [
    { text: "Agree", value: "N" },
    { text: "Disagree", value: "0" }
  ]
},
{
  quizTitle: "OCEAN Protocol",
  text: "I have frequent mood swings.",
  options: [
    { text: "Agree", value: "N" },
    { text: "Disagree", value: "0" }
  ]
},
//HEXACO --------------------------------------------
  {
    quizTitle: "HEXACO Mirror Grid",
    trait: "Agreeableness",
    facet: "Forgiveness",
    text: "I am generally patient and tolerant of others.",
    reverse: false,
    options: [
      { text: "Strongly Disagree", value: 1 },
      { text: "Disagree", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "Agree", value: 4 },
      { text: "Strongly Agree", value: 5 }
    ]
  },
  {
    quizTitle: "HEXACO Mirror Grid",
    trait: "Agreeableness",
    facet: "Forgiveness",
    text: "I tend to hold grudges and remember offenses for a long time.",
    reverse: false,
    options: [
      { text: "Strongly Disagree", value: 1 },
      { text: "Disagree", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "Agree", value: 4 },
      { text: "Strongly Agree", value: 5 }
    ]
  },
  {
    quizTitle: "HEXACO Mirror Grid",
    trait: "Honesty-Humility",
    facet: "Fairness",
    text: "I enjoy helping others and try to be kind whenever I can.",
    reverse: false,
    options: [
      { text: "Strongly Disagree", value: 1 },
      { text: "Disagree", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "Agree", value: 4 },
      { text: "Strongly Agree", value: 5 }
    ]
  },
  {
    quizTitle: "HEXACO Mirror Grid",
    trait: "Honesty-Humility",
    facet: "Fairness",
    text: "I sometimes lie or cheat if it benefits me.",
    reverse: false,
    options: [
      { text: "Strongly Disagree", value: 1 },
      { text: "Disagree", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "Agree", value: 4 },
      { text: "Strongly Agree", value: 5 }
    ]
  },
  {
    quizTitle: "HEXACO Mirror Grid",
    trait: "Openness to Experience",
    facet: "Aesthetic Appreciation",
    text: "I enjoy exploring new ideas and experiences.",
    reverse: false,
    options: [
      { text: "Strongly Disagree", value: 1 },
      { text: "Disagree", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "Agree", value: 4 },
      { text: "Strongly Agree", value: 5 }
    ]
  },
  {
    quizTitle: "HEXACO Mirror Grid",
    trait: "Openness to Experience",
    facet: "Conventionality",
    text: "I prefer practical, straightforward tasks to creative or abstract ones.",
    reverse: false,
    options: [
      { text: "Strongly Disagree", value: 1 },
      { text: "Disagree", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "Agree", value: 4 },
      { text: "Strongly Agree", value: 5 }
    ]
  },
  {
    quizTitle: "HEXACO Mirror Grid",
    trait: "Conscientiousness",
    facet: "Organization",
    text: "I am often disorganized and forgetful.",
    reverse: false,
    options: [
      { text: "Strongly Disagree", value: 1 },
      { text: "Disagree", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "Agree", value: 4 },
      { text: "Strongly Agree", value: 5 }
    ]
  },
  {
    quizTitle: "HEXACO Mirror Grid",
    trait: "Emotionality",
    facet: "Anxiety",
    text: "I usually remain calm and composed, even under stress.",
    reverse: true,
    options: [
      { text: "Strongly Disagree", value: 5 },
      { text: "Disagree", value: 4 },
      { text: "Neutral", value: 3 },
      { text: "Agree", value: 2 },
      { text: "Strongly Agree", value: 1 }
    ]
  },
  {
    quizTitle: "HEXACO Mirror Grid",
    trait: "Agreeableness",
    facet: "Gentleness",
    text: "I tend to be critical of others and point out their faults.",
    reverse: false,
    options: [
      { text: "Strongly Disagree", value: 1 },
      { text: "Disagree", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "Agree", value: 4 },
      { text: "Strongly Agree", value: 5 }
    ]
  },
  {
    quizTitle: "HEXACO Mirror Grid",
    trait: "Extraversion",
    facet: "Social Self-Esteem",
    text: "I enjoy spending time with a wide variety of people.",
    reverse: true,
    options: [
      { text: "Strongly Disagree", value: 5 },
      { text: "Disagree", value: 4 },
      { text: "Neutral", value: 3 },
      { text: "Agree", value: 2 },
      { text: "Strongly Agree", value: 1 }
    ]
  },
  {
    quizTitle: "HEXACO Mirror Grid",
    trait: "Extraversion",
    facet: "Social Self-Esteem",
    text: "I tend to be quite reserved and shy around strangers.",
    reverse: false,
    options: [
      { text: "Strongly Disagree", value: 1 },
      { text: "Disagree", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "Agree", value: 4 },
      { text: "Strongly Agree", value: 5 }
    ]
  },
  {
    quizTitle: "HEXACO Mirror Grid",
    trait: "Extraversion",
    facet: "Social Self-Esteem",
    text: "I am usually quite sociable and outgoing.",
    reverse: true,
    options: [
      { text: "Strongly Disagree", value: 5 },
      { text: "Disagree", value: 4 },
      { text: "Neutral", value: 3 },
      { text: "Agree", value: 2 },
      { text: "Strongly Agree", value: 1 }
    ]
  },
  {
    quizTitle: "HEXACO Mirror Grid",
    trait: "Emotionality",
    facet: "Anxiety",
    text: "I often feel anxious or worried about things.",
    reverse: false,
    options: [
      { text: "Strongly Disagree", value: 1 },
      { text: "Disagree", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "Agree", value: 4 },
      { text: "Strongly Agree", value: 5 }
    ]
  },
  {
    quizTitle: "HEXACO Mirror Grid",
    trait: "Emotionality",
    facet: "Emotional Stability",
    text: "I am usually calm and relaxed, even in tense situations.",
    reverse: true,
    options: [
      { text: "Strongly Disagree", value: 5 },
      { text: "Disagree", value: 4 },
      { text: "Neutral", value: 3 },
      { text: "Agree", value: 2 },
      { text: "Strongly Agree", value: 1 }
    ]
  },
  {
    quizTitle: "HEXACO Mirror Grid",
    trait: "Honesty-Humility",
    facet: "Fairness",
    text: "I try to be fair and honest in my dealings with others.",
    reverse: false,
    options: [
      { text: "Strongly Disagree", value: 1 },
      { text: "Disagree", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "Agree", value: 4 },
      { text: "Strongly Agree", value: 5 }
    ]
  },
  {
    quizTitle: "HEXACO Mirror Grid",
    trait: "Honesty-Humility",
    facet: "Manipulativeness",
    text: "I sometimes manipulate others to get my way.",
    reverse: false,
    options: [
      { text: "Strongly Disagree", value: 1 },
      { text: "Disagree", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "Agree", value: 4 },
      { text: "Strongly Agree", value: 5 }
    ]
  },
  {
    quizTitle: "HEXACO Mirror Grid",
    trait: "Openness to Experience",
    facet: "Inquisitiveness",
    text: "I am often interested in new and unusual ideas.",
    reverse: false,
    options: [
      { text: "Strongly Disagree", value: 1 },
      { text: "Disagree", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "Agree", value: 4 },
      { text: "Strongly Agree", value: 5 }
    ]
  },
  {
    quizTitle: "HEXACO Mirror Grid",
    trait: "Openness to Experience",
    facet: "Practicality",
    text: "I rarely daydream or get lost in my thoughts.",
    reverse: true,
    options: [
      { text: "Strongly Disagree", value: 5 },
      { text: "Disagree", value: 4 },
      { text: "Neutral", value: 3 },
      { text: "Agree", value: 2 },
      { text: "Strongly Agree", value: 1 }
    ]
  },
  {
    quizTitle: "HEXACO Mirror Grid",
    trait: "Conscientiousness",
    facet: "Organization",
    text: "I tend to be quite organized and careful.",
    reverse: false,
    options: [
      { text: "Strongly Disagree", value: 1 },
      { text: "Disagree", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "Agree", value: 4 },
      { text: "Strongly Agree", value: 5 }
    ]
  },
  {
    quizTitle: "HEXACO Mirror Grid",
    trait: "Conscientiousness",
    facet: "Impulsiveness",
    text: "I often act on impulse rather than planning ahead.",
    reverse: false,
    options: [
      { text: "Strongly Disagree", value: 1 },
      { text: "Disagree", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "Agree", value: 4 },
      { text: "Strongly Agree", value: 5 }
    ]
  },
  {
    quizTitle: "HEXACO Mirror Grid",
    trait: "Extraversion",
    facet: "Social Boldness",
    text: "I feel comfortable around people.",
    reverse: false,
    options: [
      { text: "Strongly Disagree", value: 1 },
      { text: "Disagree", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "Agree", value: 4 },
      { text: "Strongly Agree", value: 5 }
    ]
  },
  {
    quizTitle: "HEXACO Mirror Grid",
    trait: "Extraversion",
    facet: "Social Boldness",
    text: "I avoid large social gatherings.",
    reverse: true,
    options: [
      { text: "Strongly Disagree", value: 5 },
      { text: "Disagree", value: 4 },
      { text: "Neutral", value: 3 },
      { text: "Agree", value: 2 },
      { text: "Strongly Agree", value: 1 }
    ]
  },
  {
    quizTitle: "HEXACO Mirror Grid",
    trait: "Emotionality",
    facet: "Fearfulness",
    text: "I sometimes feel fearful for no apparent reason.",
    reverse: false,
    options: [
      { text: "Strongly Disagree", value: 1 },
      { text: "Disagree", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "Agree", value: 4 },
      { text: "Strongly Agree", value: 5 }
    ]
  },
  {
    quizTitle: "HEXACO Mirror Grid",
    trait: "Emotionality",
    facet: "Fearlessness",
    text: "I am generally not easily scared.",
    reverse: true,
    options: [
      { text: "Strongly Disagree", value: 5 },
      { text: "Disagree", value: 4 },
      { text: "Neutral", value: 3 },
      { text: "Agree", value: 2 },
      { text: "Strongly Agree", value: 1 }
    ]
  },
  {
    quizTitle: "HEXACO Mirror Grid",
    trait: "Honesty-Humility",
    facet: "Sincerity",
    text: "I usually tell the truth even when it is difficult.",
    reverse: false,
    options: [
      { text: "Strongly Disagree", value: 1 },
      { text: "Disagree", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "Agree", value: 4 },
      { text: "Strongly Agree", value: 5 }
    ]
  },
  {
    quizTitle: "HEXACO Mirror Grid",
    trait: "Honesty-Humility",
    facet: "Sincerity",
    text: "I sometimes tell white lies to avoid hurting others.",
    reverse: true,
    options: [
      { text: "Strongly Disagree", value: 5 },
      { text: "Disagree", value: 4 },
      { text: "Neutral", value: 3 },
      { text: "Agree", value: 2 },
      { text: "Strongly Agree", value: 1 }
    ]
  },
  {
    quizTitle: "HEXACO Mirror Grid",
    trait: "Openness to Experience",
    facet: "Aesthetic Appreciation",
    text: "I enjoy thinking about abstract ideas.",
    reverse: false,
    options: [
      { text: "Strongly Disagree", value: 1 },
      { text: "Disagree", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "Agree", value: 4 },
      { text: "Strongly Agree", value: 5 }
    ]
  },
  {
    quizTitle: "HEXACO Mirror Grid",
    trait: "Openness to Experience",
    facet: "Aesthetic Appreciation",
    text: "I do not like poetry or literature.",
    reverse: true,
    options: [
      { text: "Strongly Disagree", value: 5 },
      { text: "Disagree", value: 4 },
      { text: "Neutral", value: 3 },
      { text: "Agree", value: 2 },
      { text: "Strongly Agree", value: 1 }
    ]
  },
  {
    quizTitle: "HEXACO Mirror Grid",
    trait: "Conscientiousness",
    facet: "Perfectionism",
    text: "I strive to be perfect in everything I do.",
    reverse: false,
    options: [
      { text: "Strongly Disagree", value: 1 },
      { text: "Disagree", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "Agree", value: 4 },
      { text: "Strongly Agree", value: 5 }
    ]
  },
  {
    quizTitle: "HEXACO Mirror Grid",
    trait: "Conscientiousness",
    facet: "Perfectionism",
    text: "I am satisfied with doing a job half-heartedly.",
    reverse: true,
    options: [
      { text: "Strongly Disagree", value: 5 },
      { text: "Disagree", value: 4 },
      { text: "Neutral", value: 3 },
      { text: "Agree", value: 2 },
      { text: "Strongly Agree", value: 1 }
    ]
  },
  {
    quizTitle: "HEXACO Mirror Grid",
    trait: "Agreeableness",
    facet: "Forgivingness",
    text: "I am quick to forgive those who have wronged me.",
    reverse: false,
    options: [
      { text: "Strongly Disagree", value: 1 },
      { text: "Disagree", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "Agree", value: 4 },
      { text: "Strongly Agree", value: 5 }
    ]
  },
  {
    quizTitle: "HEXACO Mirror Grid",
    trait: "Agreeableness",
    facet: "Forgivingness",
    text: "I tend to hold grudges against people who have hurt me.",
    reverse: true,
    options: [
      { text: "Strongly Disagree", value: 5 },
      { text: "Disagree", value: 4 },
      { text: "Neutral", value: 3 },
      { text: "Agree", value: 2 },
      { text: "Strongly Agree", value: 1 }
    ]
  },
  {
    quizTitle: "HEXACO Mirror Grid",
    trait: "Emotionality",
    facet: "Sentimentality",
    text: "I often feel sentimental about people and things.",
    reverse: false,
    options: [
      { text: "Strongly Disagree", value: 1 },
      { text: "Disagree", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "Agree", value: 4 },
      { text: "Strongly Agree", value: 5 }
    ]
  },
  {
    quizTitle: "HEXACO Mirror Grid",
    trait: "Emotionality",
    facet: "Sentimentality",
    text: "I rarely get sentimental about anything.",
    reverse: true,
    options: [
      { text: "Strongly Disagree", value: 5 },
      { text: "Disagree", value: 4 },
      { text: "Neutral", value: 3 },
      { text: "Agree", value: 2 },
      { text: "Strongly Agree", value: 1 }
    ]
  },
  {
    quizTitle: "HEXACO Mirror Grid",
    trait: "Honesty-Humility",
    facet: "Greed Avoidance",
    text: "I am not interested in possessing expensive things.",
    reverse: false,
    options: [
      { text: "Strongly Disagree", value: 1 },
      { text: "Disagree", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "Agree", value: 4 },
      { text: "Strongly Agree", value: 5 }
    ]
  },
  {
    quizTitle: "HEXACO Mirror Grid",
    trait: "Honesty-Humility",
    facet: "Greed Avoidance",
    text: "I want to own lots of expensive things.",
    reverse: true,
    options: [
      { text: "Strongly Disagree", value: 5 },
      { text: "Disagree", value: 4 },
      { text: "Neutral", value: 3 },
      { text: "Agree", value: 2 },
      { text: "Strongly Agree", value: 1 }
    ]
  },
  {
    quizTitle: "HEXACO Mirror Grid",
    trait: "Openness to Experience",
    facet: "Inquisitiveness",
    text: "I like to explore new ideas and concepts.",
    reverse: false,
    options: [
      { text: "Strongly Disagree", value: 1 },
      { text: "Disagree", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "Agree", value: 4 },
      { text: "Strongly Agree", value: 5 }
    ]
  },
  {
    quizTitle: "HEXACO Mirror Grid",
    trait: "Openness to Experience",
    facet: "Inquisitiveness",
    text: "I prefer to stick to what I already know.",
    reverse: true,
    options: [
      { text: "Strongly Disagree", value: 5 },
      { text: "Disagree", value: 4 },
      { text: "Neutral", value: 3 },
      { text: "Agree", value: 2 },
      { text: "Strongly Agree", value: 1 }
    ]
  },
  {
    quizTitle: "HEXACO Mirror Grid",
    trait: "Conscientiousness",
    facet: "Organization",
    text: "I like to keep my things tidy and organized.",
    reverse: false,
    options: [
      { text: "Strongly Disagree", value: 1 },
      { text: "Disagree", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "Agree", value: 4 },
      { text: "Strongly Agree", value: 5 }
    ]
  },
  {
    quizTitle: "HEXACO Mirror Grid",
    trait: "Conscientiousness",
    facet: "Organization",
    text: "I often leave my things messy and disorganized.",
    reverse: true,
    options: [
      { text: "Strongly Disagree", value: 5 },
      { text: "Disagree", value: 4 },
      { text: "Neutral", value: 3 },
      { text: "Agree", value: 2 },
      { text: "Strongly Agree", value: 1 }
    ]
  },
  {
    quizTitle: "HEXACO Mirror Grid",
    trait: "Emotionality",
    facet: "Fearfulness",
    text: "I am easily frightened or scared.",
    reverse: false,
    options: [
      { text: "Strongly Disagree", value: 1 },
      { text: "Disagree", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "Agree", value: 4 },
      { text: "Strongly Agree", value: 5 }
    ]
  },
  {
    quizTitle: "HEXACO Mirror Grid",
    trait: "Emotionality",
    facet: "Fearfulness",
    text: "I am usually brave and unafraid of dangerous situations.",
    reverse: true,
    options: [
      { text: "Strongly Disagree", value: 5 },
      { text: "Disagree", value: 4 },
      { text: "Neutral", value: 3 },
      { text: "Agree", value: 2 },
      { text: "Strongly Agree", value: 1 }
    ]
  },
  {
    quizTitle: "HEXACO Mirror Grid",
    trait: "Agreeableness",
    facet: "Gentleness",
    text: "I am gentle and tender when dealing with others.",
    reverse: false,
    options: [
      { text: "Strongly Disagree", value: 1 },
      { text: "Disagree", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "Agree", value: 4 },
      { text: "Strongly Agree", value: 5 }
    ]
  },
  {
    quizTitle: "HEXACO Mirror Grid",
    trait: "Agreeableness",
    facet: "Gentleness",
    text: "I can be harsh or blunt when interacting with others.",
    reverse: true,
    options: [
      { text: "Strongly Disagree", value: 5 },
      { text: "Disagree", value: 4 },
      { text: "Neutral", value: 3 },
      { text: "Agree", value: 2 },
      { text: "Strongly Agree", value: 1 }
    ]
  },
  {
    quizTitle: "HEXACO Mirror Grid",
    trait: "Honesty-Humility",
    facet: "Sincerity",
    text: "I try to be sincere and genuine in my interactions.",
    reverse: false,
    options: [
      { text: "Strongly Disagree", value: 1 },
      { text: "Disagree", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "Agree", value: 4 },
      { text: "Strongly Agree", value: 5 }
    ]
  },
  {
    quizTitle: "HEXACO Mirror Grid",
    trait: "Honesty-Humility",
    facet: "Sincerity",
    text: "I sometimes say things I don’t really mean to impress others.",
    reverse: true,
    options: [
      { text: "Strongly Disagree", value: 5 },
      { text: "Disagree", value: 4 },
      { text: "Neutral", value: 3 },
      { text: "Agree", value: 2 },
      { text: "Strongly Agree", value: 1 }
    ]
  },
  {
    quizTitle: "HEXACO Mirror Grid",
    trait: "Openness to Experience",
    facet: "Creativity",
    text: "I enjoy creating new and original ideas.",
    reverse: false,
    options: [
      { text: "Strongly Disagree", value: 1 },
      { text: "Disagree", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "Agree", value: 4 },
      { text: "Strongly Agree", value: 5 }
    ]
  },
  {
    quizTitle: "HEXACO Mirror Grid",
    trait: "Openness to Experience",
    facet: "Creativity",
    text: "I rarely think about new or original ideas.",
    reverse: true,
    options: [
      { text: "Strongly Disagree", value: 5 },
      { text: "Disagree", value: 4 },
      { text: "Neutral", value: 3 },
      { text: "Agree", value: 2 },
      { text: "Strongly Agree", value: 1 }
    ]
  },
  {
    quizTitle: "HEXACO Mirror Grid",
    trait: "Conscientiousness",
    facet: "Diligence",
    text: "I work hard and put a lot of effort into what I do.",
    reverse: false,
    options: [
      { text: "Strongly Disagree", value: 1 },
      { text: "Disagree", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "Agree", value: 4 },
      { text: "Strongly Agree", value: 5 }
    ]
  },
  {
    quizTitle: "HEXACO Mirror Grid",
    trait: "Conscientiousness",
    facet: "Diligence",
    text: "I often avoid tasks that require a lot of effort.",
    reverse: true,
    options: [
      { text: "Strongly Disagree", value: 5 },
      { text: "Disagree", value: 4 },
      { text: "Neutral", value: 3 },
      { text: "Agree", value: 2 },
      { text: "Strongly Agree", value: 1 }
    ]
  },
  {
    quizTitle: "HEXACO Mirror Grid",
    trait: "Extraversion",
    facet: "Sociability",
    text: "I enjoy being the center of attention.",
    reverse: false,
    options: [
      { text: "Strongly Disagree", value: 1 },
      { text: "Disagree", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "Agree", value: 4 },
      { text: "Strongly Agree", value: 5 }
    ]
  },
  {
    quizTitle: "HEXACO Mirror Grid",
    trait: "Extraversion",
    facet: "Sociability",
    text: "I tend to avoid social gatherings.",
    reverse: true,
    options: [
      { text: "Strongly Disagree", value: 5 },
      { text: "Disagree", value: 4 },
      { text: "Neutral", value: 3 },
      { text: "Agree", value: 2 },
      { text: "Strongly Agree", value: 1 }
    ]
  },
  {
    quizTitle: "HEXACO Mirror Grid",
    trait: "Agreeableness",
    facet: "Patience",
    text: "I am patient even with annoying people.",
    reverse: false,
    options: [
      { text: "Strongly Disagree", value: 1 },
      { text: "Disagree", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "Agree", value: 4 },
      { text: "Strongly Agree", value: 5 }
    ]
  },
  {
    quizTitle: "HEXACO Mirror Grid",
    trait: "Agreeableness",
    facet: "Patience",
    text: "I often get irritated easily.",
    reverse: true,
    options: [
      { text: "Strongly Disagree", value: 5 },
      { text: "Disagree", value: 4 },
      { text: "Neutral", value: 3 },
      { text: "Agree", value: 2 },
      { text: "Strongly Agree", value: 1 }
    ]
  },
  {
    quizTitle: "HEXACO Mirror Grid",
    trait: "Honesty-Humility",
    facet: "Fairness",
    text: "I always try to be fair to others, even when it’s difficult.",
    reverse: false,
    options: [
      { text: "Strongly Disagree", value: 1 },
      { text: "Disagree", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "Agree", value: 4 },
      { text: "Strongly Agree", value: 5 }
    ]
  },
  {
    quizTitle: "HEXACO Mirror Grid",
    trait: "Honesty-Humility",
    facet: "Fairness",
    text: "I sometimes cheat to get ahead.",
    reverse: true,
    options: [
      { text: "Strongly Disagree", value: 5 },
      { text: "Disagree", value: 4 },
      { text: "Neutral", value: 3 },
      { text: "Agree", value: 2 },
      { text: "Strongly Agree", value: 1 }
    ]
  },
  {
    quizTitle: "HEXACO Mirror Grid",
    trait: "Openness to Experience",
    facet: "Aesthetic Appreciation",
    text: "I appreciate art and beauty in my surroundings.",
    reverse: false,
    options: [
      { text: "Strongly Disagree", value: 1 },
      { text: "Disagree", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "Agree", value: 4 },
      { text: "Strongly Agree", value: 5 }
    ]
  },
  {
    quizTitle: "HEXACO Mirror Grid",
    trait: "Openness to Experience",
    facet: "Aesthetic Appreciation",
    text: "I rarely notice or enjoy art and beauty.",
    reverse: true,
    options: [
      { text: "Strongly Disagree", value: 5 },
      { text: "Disagree", value: 4 },
      { text: "Neutral", value: 3 },
      { text: "Agree", value: 2 },
      { text: "Strongly Agree", value: 1 }
    ]
  },
  {
    quizTitle: "HEXACO Mirror Grid",
    trait: "Conscientiousness",
    facet: "Perfectionism",
    text: "I like to do things perfectly and avoid mistakes.",
    reverse: false,
    options: [
      { text: "Strongly Disagree", value: 1 },
      { text: "Disagree", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "Agree", value: 4 },
      { text: "Strongly Agree", value: 5 }
    ]
  },
  {
    quizTitle: "HEXACO Mirror Grid",
    trait: "Conscientiousness",
    facet: "Perfectionism",
    text: "I often settle for ‘good enough’ rather than perfect.",
    reverse: true,
    options: [
      { text: "Strongly Disagree", value: 5 },
      { text: "Disagree", value: 4 },
      { text: "Neutral", value: 3 },
      { text: "Agree", value: 2 },
      { text: "Strongly Agree", value: 1 }
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
