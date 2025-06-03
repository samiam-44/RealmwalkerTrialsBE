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
  //CALIPER ALIGNMENT CORE
  {
    quizTitle: "Caliper Alignment Core",
    trait: "Assertiveness",
    facet: "Confidence",
    text: "I feel comfortable leading others and taking initiative.",
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
    quizTitle: "Caliper Alignment Core",
    trait: "Assertiveness",
    facet: "Persuasiveness",
    text: "I enjoy persuading others to see my point of view.",
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
    quizTitle: "Caliper Alignment Core",
    trait: "Assertiveness",
    facet: "Dominance",
    text: "I avoid taking charge even when I know the best course of action.",
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
    quizTitle: "Caliper Alignment Core",
    trait: "Urgency",
    facet: "Drive",
    text: "I work best when I have tight deadlines and pressure.",
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
    quizTitle: "Caliper Alignment Core",
    trait: "Urgency",
    facet: "Impatience",
    text: "I get frustrated when things move too slowly.",
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
    quizTitle: "Caliper Alignment Core",
    trait: "Urgency",
    facet: "Restlessness",
    text: "I feel uneasy when there’s nothing urgent to do.",
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
    quizTitle: "Caliper Alignment Core",
    trait: "Self-Discipline",
    facet: "Consistency",
    text: "I often have trouble sticking with my goals.",
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
    quizTitle: "Caliper Alignment Core",
    trait: "Self-Discipline",
    facet: "Persistence",
    text: "I usually finish tasks even when they are difficult or boring.",
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
    quizTitle: "Caliper Alignment Core",
    trait: "Self-Discipline",
    facet: "Planning",
    text: "I often jump into tasks without planning.",
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
    quizTitle: "Caliper Alignment Core",
    trait: "Thoroughness",
    facet: "Detail Orientation",
    text: "I carefully check over work for accuracy before submission.",
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
    quizTitle: "Caliper Alignment Core",
    trait: "Thoroughness",
    facet: "Precision",
    text: "I notice small errors or inconsistencies in data or text.",
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
    quizTitle: "Caliper Alignment Core",
    trait: "Thoroughness",
    facet: "Responsibility",
    text: "I feel a strong obligation to complete tasks accurately and thoroughly.",
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
    quizTitle: "Caliper Alignment Core",
    trait: "Openness",
    facet: "Creativity",
    text: "I often come up with innovative solutions to problems.",
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
    quizTitle: "Caliper Alignment Core",
    trait: "Openness",
    facet: "Curiosity",
    text: "I enjoy exploring new topics even if they’re unfamiliar to me.",
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
    quizTitle: "Caliper Alignment Core",
    trait: "Openness",
    facet: "Flexibility",
    text: "I resist changing my routines or viewpoints.",
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
    quizTitle: "Caliper Alignment Core",
    trait: "Skepticism",
    facet: "Questioning",
    text: "I rarely accept things at face value without questioning.",
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
    quizTitle: "Caliper Alignment Core",
    trait: "Skepticism",
    facet: "Cynicism",
    text: "I tend to be suspicious of others' motives.",
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
    quizTitle: "Caliper Alignment Core",
    trait: "Skepticism",
    facet: "Guardedness",
    text: "I am cautious when revealing personal information.",
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
    quizTitle: "Caliper Alignment Core",
    trait: "Risk-Taking",
    facet: "Boldness",
    text: "I enjoy taking big chances, even if the outcome is uncertain.",
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
    quizTitle: "Caliper Alignment Core",
    trait: "Risk-Taking",
    facet: "Adventurousness",
    text: "I actively seek out new and potentially risky experiences.",
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
    quizTitle: "Caliper Alignment Core",
    trait: "Risk-Taking",
    facet: "Spontaneity",
    text: "I often act on impulse without considering the consequences.",
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
    quizTitle: "Caliper Alignment Core",
    trait: "Empathy",
    facet: "Compassion",
    text: "I feel concerned for people who are less fortunate than me.",
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
    quizTitle: "Caliper Alignment Core",
    trait: "Empathy",
    facet: "Understanding",
    text: "I can easily put myself in someone else's shoes.",
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
    quizTitle: "Caliper Alignment Core",
    trait: "Empathy",
    facet: "Sensitivity",
    text: "I sometimes overlook how my words or actions affect others.",
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
    quizTitle: "Caliper Alignment Core",
    trait: "Openness",
    facet: "Creativity",
    text: "I often come up with original and imaginative ideas.",
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
    quizTitle: "Caliper Alignment Core",
    trait: "Openness",
    facet: "Flexibility",
    text: "I am uncomfortable with unexpected changes in routine.",
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
    quizTitle: "Caliper Alignment Core",
    trait: "Skepticism",
    facet: "Caution",
    text: "I tend to question others’ motives before trusting them.",
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
    quizTitle: "Caliper Alignment Core",
    trait: "Skepticism",
    facet: "Critical Thinking",
    text: "I prefer to analyze all sides before accepting an idea.",
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
    quizTitle: "Caliper Alignment Core",
    trait: "Skepticism",
    facet: "Distrust",
    text: "I often assume people have hidden agendas.",
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
    quizTitle: "Caliper Alignment Core",
    trait: "Sociability",
    facet: "Friendliness",
    text: "I find it easy to make new friends.",
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
    quizTitle: "Caliper Alignment Core",
    trait: "Sociability",
    facet: "Talkativeness",
    text: "I often dominate conversations.",
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
    quizTitle: "Caliper Alignment Core",
    trait: "Sociability",
    facet: "Outgoingness",
    text: "I feel energized by social interaction.",
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
    quizTitle: "Caliper Alignment Core",
    trait: "Empathy",
    facet: "Compassion",
    text: "I often feel the emotions of others strongly.",
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
    quizTitle: "Caliper Alignment Core",
    trait: "Empathy",
    facet: "Sensitivity",
    text: "I tend to be deeply affected by criticism.",
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
    quizTitle: "Caliper Alignment Core",
    trait: "Empathy",
    facet: "Supportiveness",
    text: "I try to comfort people who are upset or anxious.",
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
    quizTitle: "Caliper Alignment Core",
    trait: "Assertiveness",
    facet: "Initiative",
    text: "I tend to take charge in group situations without being asked.",
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
    quizTitle: "Caliper Alignment Core",
    trait: "Urgency",
    facet: "Energetic Pace",
    text: "I prefer to complete tasks quickly rather than slowly and carefully.",
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
    quizTitle: "Caliper Alignment Core",
    trait: "Self-Discipline",
    facet: "Goal Setting",
    text: "I regularly set clear goals and work steadily toward them.",
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
    quizTitle: "Caliper Alignment Core",
    trait: "Thoroughness",
    facet: "Accuracy",
    text: "I double-check my work to avoid careless mistakes.",
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
    quizTitle: "Caliper Alignment Core",
    trait: "Openness",
    facet: "Adaptability",
    text: "I adjust easily to unexpected changes in plans or routines.",
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
    quizTitle: "Caliper Alignment Core",
    trait: "Skepticism",
    facet: "Doubt",
    text: "I sometimes question my own beliefs or assumptions.",
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
    quizTitle: "Caliper Alignment Core",
    trait: "Risk-Taking",
    facet: "Cautiousness",
    text: "I avoid taking risks unless I am certain of the outcome.",
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
    quizTitle: "Caliper Alignment Core",
    trait: "Empathy",
    facet: "Listening",
    text: "I listen carefully to others’ feelings and perspectives.",
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
    quizTitle: "Caliper Alignment Core",
    trait: "Empathy",
    facet: "Supportiveness",
    text: "I offer help to people who are struggling without being asked.",
    reverse: false,
    options: [
      { text: "Strongly Disagree", value: 1 },
      { text: "Disagree", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "Agree", value: 4 },
      { text: "Strongly Agree", value: 5 }
    ]
  },
  //DISC ------------------------------------------------------

  {
    quizTitle: "DISC Signal Frequencies",
    text: "I am most satisfied when:",
    options: [
      { text: "I achieve big goals", type: "D" },
      { text: "I connect meaningfully with others", type: "I" },
      { text: "I provide support and stability", type: "S" },
      { text: "I complete work thoroughly and accurately", type: "C" }
    ]
  },
  {
    quizTitle: "DISC Signal Frequencies",
    text: "When working in a team, I usually:",
    options: [
      { text: "Take charge and set the direction", type: "D" },
      { text: "Encourage and motivate others", type: "I" },
      { text: "Help keep harmony and support", type: "S" },
      { text: "Focus on details and quality", type: "C" }
    ]
  },
  {
    quizTitle: "DISC Signal Frequencies",
    text: "I tend to make decisions based on:",
    options: [
      { text: "What will get results fastest", type: "D" },
      { text: "How it affects people emotionally", type: "I" },
      { text: "Keeping everyone comfortable", type: "S" },
      { text: "Following facts and data precisely", type: "C" }
    ]
  },
  {
    quizTitle: "DISC Signal Frequencies",
    text: "In stressful situations, I usually:",
    options: [
      { text: "Push harder to overcome challenges", type: "D" },
      { text: "Seek social support and talk it out", type: "I" },
      { text: "Stay calm and try to maintain stability", type: "S" },
      { text: "Analyze all details carefully", type: "C" }
    ]
  },
  {
    quizTitle: "DISC Signal Frequencies",
    text: "I am most energized when:",
    options: [
      { text: "I am leading and making quick decisions", type: "D" },
      { text: "I am socializing and inspiring others", type: "I" },
      { text: "I am helping others and building trust", type: "S" },
      { text: "I am organizing and perfecting tasks", type: "C" }
    ]
  },
  {
    quizTitle: "DISC Signal Frequencies",
    text: "When approaching new tasks, I prefer to:",
    options: [
      { text: "Jump right in and take control", type: "D" },
      { text: "Get input and build enthusiasm", type: "I" },
      { text: "Follow established procedures", type: "S" },
      { text: "Plan carefully before acting", type: "C" }
    ]
  },
  {
    quizTitle: "DISC Signal Frequencies",
    text: "Others describe me as:",
    options: [
      { text: "Assertive and determined", type: "D" },
      { text: "Friendly and persuasive", type: "I" },
      { text: "Dependable and patient", type: "S" },
      { text: "Precise and analytical", type: "C" }
    ]
  },
  {
    quizTitle: "DISC Signal Frequencies",
    text: "I handle conflict by:",
    options: [
      { text: "Confronting the problem directly", type: "D" },
      { text: "Trying to smooth things over with communication", type: "I" },
      { text: "Avoiding confrontation and seeking peace", type: "S" },
      { text: "Analyzing causes and finding logical solutions", type: "C" }
    ]
  },
  {
    quizTitle: "DISC Signal Frequencies",
    text: "I prefer to be recognized for:",
    options: [
      { text: "My leadership and results", type: "D" },
      { text: "My enthusiasm and charm", type: "I" },
      { text: "My loyalty and helpfulness", type: "S" },
      { text: "My accuracy and knowledge", type: "C" }
    ]
  },
  {
    quizTitle: "DISC Signal Frequencies",
    text: "When under pressure, I:",
    options: [
      { text: "Take quick action to regain control", type: "D" },
      { text: "Reach out for social support", type: "I" },
      { text: "Stay calm and patient", type: "S" },
      { text: "Focus on details and facts", type: "C" }
    ]
  },
  {
    quizTitle: "DISC Signal Frequencies",
    text: "My work style is best described as:",
    options: [
      { text: "Competitive and goal-oriented", type: "D" },
      { text: "Collaborative and persuasive", type: "I" },
      { text: "Consistent and supportive", type: "S" },
      { text: "Systematic and precise", type: "C" }
    ]
  },
  {
    quizTitle: "DISC Signal Frequencies",
    text: "When I want to influence others, I:",
    options: [
      { text: "Use logic and data", type: "C" },
      { text: "Use charm and enthusiasm", type: "I" },
      { text: "Show confidence and assertiveness", type: "D" },
      { text: "Demonstrate reliability and patience", type: "S" }
    ]
  },
  {
    quizTitle: "DISC Signal Frequencies",
    text: "I get frustrated when:",
    options: [
      { text: "People waste time and avoid decisions", type: "D" },
      { text: "People are cold or unresponsive", type: "I" },
      { text: "People are pushy or impatient", type: "S" },
      { text: "People are careless or inaccurate", type: "C" }
    ]
  },
  {
    quizTitle: "DISC Signal Frequencies",
    text: "I prefer environments that are:",
    options: [
      { text: "Fast-paced and challenging", type: "D" },
      { text: "Friendly and social", type: "I" },
      { text: "Stable and predictable", type: "S" },
      { text: "Organized and detail-oriented", type: "C" }
    ]
  },
  {
    quizTitle: "DISC Signal Frequencies",
    text: "My communication style is:",
    options: [
      { text: "Direct and to the point", type: "D" },
      { text: "Expressive and animated", type: "I" },
      { text: "Patient and attentive", type: "S" },
      { text: "Careful and methodical", type: "C" }
    ]
  },
  {
    quizTitle: "DISC Signal Frequencies",
    text: "I am motivated by:",
    options: [
      { text: "Winning and success", type: "D" },
      { text: "Recognition and social approval", type: "I" },
      { text: "Security and belonging", type: "S" },
      { text: "Accuracy and expertise", type: "C" }
    ]
  },
  {
    quizTitle: "DISC Signal Frequencies",
    text: "I handle change by:",
    options: [
      { text: "Taking charge and adapting quickly", type: "D" },
      { text: "Getting others excited about the change", type: "I" },
      { text: "Helping others adjust patiently", type: "S" },
      { text: "Analyzing the details before proceeding", type: "C" }
    ]
  },
  {
    quizTitle: "DISC Signal Frequencies",
    text: "When I set goals, I:",
    options: [
      { text: "Set challenging targets and push hard", type: "D" },
      { text: "Set social and inspiring goals", type: "I" },
      { text: "Set realistic and steady goals", type: "S" },
      { text: "Set detailed and measurable goals", type: "C" }
    ]
  },
  {
    quizTitle: "DISC Signal Frequencies",
    text: "I prefer to be recognized for my:",
    options: [
      { text: "Leadership and drive", type: "D" },
      { text: "Charisma and friendliness", type: "I" },
      { text: "Loyalty and kindness", type: "S" },
      { text: "Precision and knowledge", type: "C" }
    ]
  },
  {
    quizTitle: "DISC Signal Frequencies",
    text: "In a group, I am often the one who:",
    options: [
      { text: "Takes the lead and pushes results", type: "D" },
      { text: "Engages and energizes the group", type: "I" },
      { text: "Keeps peace and supports others", type: "S" },
      { text: "Provides structure and quality control", type: "C" }
    ]
  },
  //TEMPERMENT ARCHIVES
  {
    quizTitle: "Temperament Archives",
    text: "When faced with a new project, I usually:",
    options: [
      { text: "Get excited and rally others to join me", type: "Sanguine" },
      { text: "Take control and set clear goals", type: "Choleric" },
      { text: "Plan carefully and analyze every detail", type: "Melancholic" },
      { text: "Prefer to support quietly and keep things steady", type: "Phlegmatic" }
    ]
  },
  {
    quizTitle: "Temperament Archives",
    text: "In social gatherings, I tend to:",
    options: [
      { text: "Be the center of attention and tell stories", type: "Sanguine" },
      { text: "Lead conversations and organize activities", type: "Choleric" },
      { text: "Observe quietly and reflect on the people", type: "Melancholic" },
      { text: "Enjoy listening and making others feel comfortable", type: "Phlegmatic" }
    ]
  },
  {
    quizTitle: "Temperament Archives",
    text: "When making decisions, I rely mostly on:",
    options: [
      { text: "My intuition and enthusiasm", type: "Sanguine" },
      { text: "My logic and determination", type: "Choleric" },
      { text: "My careful analysis and facts", type: "Melancholic" },
      { text: "My calmness and desire for harmony", type: "Phlegmatic" }
    ]
  },
  {
    quizTitle: "Temperament Archives",
    text: "I handle conflict by:",
    options: [
      { text: "Trying to lighten the mood and move on", type: "Sanguine" },
      { text: "Confronting it directly and finding a solution", type: "Choleric" },
      { text: "Thinking deeply before responding", type: "Melancholic" },
      { text: "Avoiding it and seeking peace", type: "Phlegmatic" }
    ]
  },
  {
    quizTitle: "Temperament Archives",
    text: "My work style is best described as:",
    options: [
      { text: "Flexible and spontaneous", type: "Sanguine" },
      { text: "Focused and goal-oriented", type: "Choleric" },
      { text: "Meticulous and organized", type: "Melancholic" },
      { text: "Consistent and dependable", type: "Phlegmatic" }
    ]
  },
  {
    quizTitle: "Temperament Archives",
    text: "When stressed, I tend to:",
    options: [
      { text: "Seek social support and distraction", type: "Sanguine" },
      { text: "Become impatient and assertive", type: "Choleric" },
      { text: "Withdraw and worry", type: "Melancholic" },
      { text: "Become passive and avoid problems", type: "Phlegmatic" }
    ]
  },
  {
    quizTitle: "Temperament Archives",
    text: "My communication style is:",
    options: [
      { text: "Warm and expressive", type: "Sanguine" },
      { text: "Direct and commanding", type: "Choleric" },
      { text: "Careful and precise", type: "Melancholic" },
      { text: "Gentle and calm", type: "Phlegmatic" }
    ]
  },
  {
    quizTitle: "Temperament Archives",
    text: "I am motivated most by:",
    options: [
      { text: "Fun and social connection", type: "Sanguine" },
      { text: "Achievement and challenge", type: "Choleric" },
      { text: "Perfection and meaning", type: "Melancholic" },
      { text: "Stability and peace", type: "Phlegmatic" }
    ]
  },
  {
    quizTitle: "Temperament Archives",
    text: "In a team, I usually:",
    options: [
      { text: "Bring energy and enthusiasm", type: "Sanguine" },
      { text: "Take the lead and make decisions", type: "Choleric" },
      { text: "Provide detailed planning and quality control", type: "Melancholic" },
      { text: "Support others and keep harmony", type: "Phlegmatic" }
    ]
  },
  {
    quizTitle: "Temperament Archives",
    text: "I feel most comfortable when:",
    options: [
      { text: "Surrounded by friends and laughter", type: "Sanguine" },
      { text: "In control of my goals and progress", type: "Choleric" },
      { text: "In a quiet and orderly environment", type: "Melancholic" },
      { text: "In a calm, supportive setting", type: "Phlegmatic" }
    ]
  },
  {
    quizTitle: "Temperament Archives",
    text: "When learning new things, I prefer:",
    options: [
      { text: "Group discussions and interactive activities", type: "Sanguine" },
      { text: "Challenging tasks that test my skills", type: "Choleric" },
      { text: "Thorough research and reflection", type: "Melancholic" },
      { text: "Step-by-step guidance and patience", type: "Phlegmatic" }
    ]
  },
  {
    quizTitle: "Temperament Archives",
    text: "My friends describe me as:",
    options: [
      { text: "Fun-loving and outgoing", type: "Sanguine" },
      { text: "Driven and determined", type: "Choleric" },
      { text: "Thoughtful and serious", type: "Melancholic" },
      { text: "Loyal and dependable", type: "Phlegmatic" }
    ]
  },
  {
    quizTitle: "Temperament Archives",
    text: "When faced with criticism, I tend to:",
    options: [
      { text: "Brush it off quickly and move on", type: "Sanguine" },
      { text: "Defend my position firmly", type: "Choleric" },
      { text: "Take it to heart and reflect deeply", type: "Melancholic" },
      { text: "Try to keep peace and avoid confrontation", type: "Phlegmatic" }
    ]
  },
  {
    quizTitle: "Temperament Archives",
    text: "I recharge best by:",
    options: [
      { text: "Spending time with friends and having fun", type: "Sanguine" },
      { text: "Working towards a new goal or project", type: "Choleric" },
      { text: "Having quiet time alone to think", type: "Melancholic" },
      { text: "Relaxing in a calm, familiar environment", type: "Phlegmatic" }
    ]
  },
  {
    quizTitle: "Temperament Archives",
    text: "My ideal work environment is:",
    options: [
      { text: "Dynamic and social", type: "Sanguine" },
      { text: "Fast-paced and challenging", type: "Choleric" },
      { text: "Structured and detailed", type: "Melancholic" },
      { text: "Stable and supportive", type: "Phlegmatic" }
    ]
  },
  {
    quizTitle: "Temperament Archives",
    text: "When solving problems, I tend to:",
    options: [
      { text: "Brainstorm with others and think creatively", type: "Sanguine" },
      { text: "Take charge and find quick solutions", type: "Choleric" },
      { text: "Analyze all the details carefully", type: "Melancholic" },
      { text: "Look for peaceful, compromise solutions", type: "Phlegmatic" }
    ]
  },
  {
    quizTitle: "Temperament Archives",
    text: "I express my emotions by:",
    options: [
      { text: "Being lively and openly expressive", type: "Sanguine" },
      { text: "Being direct and assertive", type: "Choleric" },
      { text: "Being reserved and thoughtful", type: "Melancholic" },
      { text: "Being calm and steady", type: "Phlegmatic" }
    ]
  },
  {
    quizTitle: "Temperament Archives",
    text: "My main strength is:",
    options: [
      { text: "Making friends easily", type: "Sanguine" },
      { text: "Leading and motivating others", type: "Choleric" },
      { text: "Being detail-oriented and responsible", type: "Melancholic" },
      { text: "Being reliable and supportive", type: "Phlegmatic" }
    ]
  },
  {
    quizTitle: "Temperament Archives",
    text: "When working under pressure, I:",
    options: [
      { text: "Stay energetic and optimistic", type: "Sanguine" },
      { text: "Focus on tasks and push forward", type: "Choleric" },
      { text: "Become serious and careful", type: "Melancholic" },
      { text: "Stay calm and steady", type: "Phlegmatic" }
    ]
  },
  {
    quizTitle: "Temperament Archives",
    text: "I feel happiest when:",
    options: [
      { text: "Surrounded by people and fun activities", type: "Sanguine" },
      { text: "Achieving important goals", type: "Choleric" },
      { text: "Creating something meaningful and perfect", type: "Melancholic" },
      { text: "Enjoying peace and quiet", type: "Phlegmatic" }
    ]
  },
  //THE HOLLAND CODE-----------------------------------
  {
    quizTitle: "Holland Code Extractor",
    text: "Lay brick or tile",
    options: [
      { text: "Dislike", value: 1 },
      { text: "Slightly Dislike", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "Slightly Enjoy", value: 4 },
      { text: "Enjoy", value: 5 }
    ]
  },
  {
    quizTitle: "Holland Code Extractor",
    text: "Solve complex math problems",
    options: [
      { text: "Dislike", value: 1 },
      { text: "Slightly Dislike", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "Slightly Enjoy", value: 4 },
      { text: "Enjoy", value: 5 }
    ]
  },
  {
    quizTitle: "Holland Code Extractor",
    text: "Write a story, article, or play",
    options: [
      { text: "Dislike", value: 1 },
      { text: "Slightly Dislike", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "Slightly Enjoy", value: 4 },
      { text: "Enjoy", value: 5 }
    ]
  },
  {
    quizTitle: "Holland Code Extractor",
    text: "Teach children how to read",
    options: [
      { text: "Dislike", value: 1 },
      { text: "Slightly Dislike", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "Slightly Enjoy", value: 4 },
      { text: "Enjoy", value: 5 }
    ]
  },
  {
    quizTitle: "Holland Code Extractor",
    text: "Start your own business",
    options: [
      { text: "Dislike", value: 1 },
      { text: "Slightly Dislike", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "Slightly Enjoy", value: 4 },
      { text: "Enjoy", value: 5 }
    ]
  },
  {
    quizTitle: "Holland Code Extractor",
    text: "Keep detailed financial records",
    options: [
      { text: "Dislike", value: 1 },
      { text: "Slightly Dislike", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "Slightly Enjoy", value: 4 },
      { text: "Enjoy", value: 5 }
    ]
  },
  {
    quizTitle: "Holland Code Extractor",
    text: "Fix a car engine",
    options: [
      { text: "Dislike", value: 1 },
      { text: "Slightly Dislike", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "Slightly Enjoy", value: 4 },
      { text: "Enjoy", value: 5 }
    ]
  },
  {
    quizTitle: "Holland Code Extractor",
    text: "Conduct laboratory experiments",
    options: [
      { text: "Dislike", value: 1 },
      { text: "Slightly Dislike", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "Slightly Enjoy", value: 4 },
      { text: "Enjoy", value: 5 }
    ]
  },
  {
    quizTitle: "Holland Code Extractor",
    text: "Paint, draw, or sculpt",
    options: [
      { text: "Dislike", value: 1 },
      { text: "Slightly Dislike", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "Slightly Enjoy", value: 4 },
      { text: "Enjoy", value: 5 }
    ]
  },
  {
    quizTitle: "Holland Code Extractor",
    text: "Care for sick people",
    options: [{ text: "Dislike", value: 1 },{ text: "Slightly Dislike", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "Slightly Enjoy", value: 4 },
      { text: "Enjoy", value: 5 }
    ]
  },
  {
    quizTitle: "Holland Code Extractor",
    text: "Convince others to see things your way",
    options: [{ text: "Dislike", value: 1 }, { text: "Slightly Dislike", value: 2 }, { text: "Neutral", value: 3 }, { text: "Slightly Enjoy", value: 4 }, { text: "Enjoy", value: 5 }]
  },
  {
    quizTitle: "Holland Code Extractor",
    text: "Organize schedules or appointments",
    options: [{ text: "Dislike", value: 1 }, { text: "Slightly Dislike", value: 2 }, { text: "Neutral", value: 3 }, { text: "Slightly Enjoy", value: 4 }, { text: "Enjoy", value: 5 }]
  },
  {
    quizTitle: "Holland Code Extractor",
    text: "Work outdoors building something",
    options: [{ text: "Dislike", value: 1 }, { text: "Slightly Dislike", value: 2 }, { text: "Neutral", value: 3 }, { text: "Slightly Enjoy", value: 4 }, { text: "Enjoy", value: 5 }]
  },
  {
    quizTitle: "Holland Code Extractor",
    text: "Analyze scientific data",
    options: [{ text: "Dislike", value: 1 }, { text: "Slightly Dislike", value: 2 }, { text: "Neutral", value: 3 }, { text: "Slightly Enjoy", value: 4 }, { text: "Enjoy", value: 5 }]
  },
  {
    quizTitle: "Holland Code Extractor",
    text: "Perform in a play or film",
    options: [{ text: "Dislike", value: 1 }, { text: "Slightly Dislike", value: 2 }, { text: "Neutral", value: 3 }, { text: "Slightly Enjoy", value: 4 }, { text: "Enjoy", value: 5 }]
  },
  {
    quizTitle: "Holland Code Extractor",
    text: "Help people overcome personal challenges",
    options: [{ text: "Dislike", value: 1 }, { text: "Slightly Dislike", value: 2 }, { text: "Neutral", value: 3 }, { text: "Slightly Enjoy", value: 4 }, { text: "Enjoy", value: 5 }]
  },
  {
    quizTitle: "Holland Code Extractor",
    text: "Lead a fundraising campaign",
    options: [{ text: "Dislike", value: 1 }, { text: "Slightly Dislike", value: 2 }, { text: "Neutral", value: 3 }, { text: "Slightly Enjoy", value: 4 }, { text: "Enjoy", value: 5 }]
  },
  {
    quizTitle: "Holland Code Extractor",
    text: "Keep track of office supplies",
    options: [{ text: "Dislike", value: 1 }, { text: "Slightly Dislike", value: 2 }, { text: "Neutral", value: 3 }, { text: "Slightly Enjoy", value: 4 }, { text: "Enjoy", value: 5 }]
  },
  {
    quizTitle: "Holland Code Extractor",
    text: "Install and maintain plumbing systems",
    options: [{ text: "Dislike", value: 1 }, { text: "Slightly Dislike", value: 2 }, { text: "Neutral", value: 3 }, { text: "Slightly Enjoy", value: 4 }, { text: "Enjoy", value: 5 }]
  },
  {
    quizTitle: "Holland Code Extractor",
    text: "Research medical conditions",
    options: [{ text: "Dislike", value: 1 }, { text: "Slightly Dislike", value: 2 }, { text: "Neutral", value: 3 }, { text: "Slightly Enjoy", value: 4 }, { text: "Enjoy", value: 5 }]
  },
  {
    quizTitle: "Holland Code Extractor",
    text: "Design clothing or interior spaces",
    options: [{ text: "Dislike", value: 1 }, { text: "Slightly Dislike", value: 2 }, { text: "Neutral", value: 3 }, { text: "Slightly Enjoy", value: 4 }, { text: "Enjoy", value: 5 }]
  },
  {
    quizTitle: "Holland Code Extractor",
    text: "Work as a volunteer for a social cause",
    options: [{ text: "Dislike", value: 1 }, { text: "Slightly Dislike", value: 2 }, { text: "Neutral", value: 3 }, { text: "Slightly Enjoy", value: 4 }, { text: "Enjoy", value: 5 }]
  },
  {
    quizTitle: "Holland Code Extractor",
    text: "Plan and execute a marketing campaign",
    options: [{ text: "Dislike", value: 1 }, { text: "Slightly Dislike", value: 2 }, { text: "Neutral", value: 3 }, { text: "Slightly Enjoy", value: 4 }, { text: "Enjoy", value: 5 }]
  },
  {
    quizTitle: "Holland Code Extractor",
    text: "Maintain database systems",
    options: [{ text: "Dislike", value: 1 }, { text: "Slightly Dislike", value: 2 }, { text: "Neutral", value: 3 }, { text: "Slightly Enjoy", value: 4 }, { text: "Enjoy", value: 5 }]
  },
  {
    quizTitle: "Holland Code Extractor",
    text: "Use power tools and construction equipment",
    options: [{ text: "Dislike", value: 1 }, { text: "Slightly Dislike", value: 2 }, { text: "Neutral", value: 3 }, { text: "Slightly Enjoy", value: 4 }, { text: "Enjoy", value: 5 }]
  },
  {
    quizTitle: "Holland Code Extractor",
    text: "Study the behavior of animals or people",
    options: [{ text: "Dislike", value: 1 }, { text: "Slightly Dislike", value: 2 }, { text: "Neutral", value: 3 }, { text: "Slightly Enjoy", value: 4 }, { text: "Enjoy", value: 5 }]
  },
  {
    quizTitle: "Holland Code Extractor",
    text: "Compose music or songs",
    options: [{ text: "Dislike", value: 1 }, { text: "Slightly Dislike", value: 2 }, { text: "Neutral", value: 3 }, { text: "Slightly Enjoy", value: 4 }, { text: "Enjoy", value: 5 }]
  },
  {
    quizTitle: "Holland Code Extractor",
    text: "Train or coach a team",
    options: [{ text: "Dislike", value: 1 }, { text: "Slightly Dislike", value: 2 }, { text: "Neutral", value: 3 }, { text: "Slightly Enjoy", value: 4 }, { text: "Enjoy", value: 5 }]
  },
  {
    quizTitle: "Holland Code Extractor",
    text: "Develop a business plan",
    options: [{ text: "Dislike", value: 1 }, { text: "Slightly Dislike", value: 2 }, { text: "Neutral", value: 3 }, { text: "Slightly Enjoy", value: 4 }, { text: "Enjoy", value: 5 }]
  },
  {
    quizTitle: "Holland Code Extractor",
    text: "Enter data into spreadsheets accurately",
    options: [{ text: "Dislike", value: 1 }, { text: "Slightly Dislike", value: 2 }, { text: "Neutral", value: 3 }, { text: "Slightly Enjoy", value: 4 }, { text: "Enjoy", value: 5 }]
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
