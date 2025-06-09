import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from '../../db/conn.mjs';
import EnneagramResult from '../../models/AnswerModels/EnneagramModel.mjs';

dotenv.config();
await connectDB();

const enneagramTypes = [
    {
        type: "Type 1",
        name: "The Reformer — Sentinel of the Syntax Tower",
        description: `In the shining towers of Cipherhold, the Sentinels work day and night to bring order to chaos. They believe everything should run clean and true — no bugs, no flaws. They fix broken code and protect what's right. But their biggest challenge? Learning to accept that not everything needs to be perfect.`,
        coreMotivation: "To be good, ethical, and morally right. They strive to improve the world and avoid fault.",
        coreFear: "Being corrupt, wrong, or defective. They hate making mistakes.",
        strengths: "High integrity, self-disciplined, fair, hardworking, idealistic.",
        challenges: "Can be judgmental, inflexible, overly critical of self and others.",
        idealCareers: "Lawyer, judge, editor, educator, accountant, nonprofit work.",
        addictionTendencies: "Control, rigidity, overworking, resentment, suppressed anger.",
        compatibility: "Often pairs well with Type 7 or Type 9; may clash with 8s or 4s.",
        growthPath: "Embrace flexibility, allow mistakes, develop compassion for imperfection."
    },
    {
        type: "Type 2",
        name: "The Helper — Empath of the Vital Grid",
        description: `The Empaths flow through the Vital Grid, offering care, kindness, and energy to others. They feel happiest when they're helping someone. But if they give too much, they forget to take care of themselves. Deep down, they fear being unloved if they’re not needed.`,
        coreMotivation: "To feel loved and valued by being needed and appreciated.",
        coreFear: "Being unloved, unwanted, or unworthy of connection.",
        strengths: "Generous, nurturing, empathetic, relationship-oriented, supportive.",
        challenges: "Can become manipulative, martyr-like, clingy, or resentful.",
        idealCareers: "Counselor, nurse, caregiver, teacher, hospitality, social work.",
        addictionTendencies: "Codependency, sugar/emotional eating, enabling others.",
        compatibility: "Often pairs well with 8s or 4s; may struggle with 5s or 1s.",
        growthPath: "Practice self-care, set boundaries, value self without needing to give."
    },
    {
        type: "Type 3",
        name: "The Achiever — Luminary of the Glass Spire",
        description: `High above in the Glass Spire, the Luminaries shine with success. They move fast, break limits, and chase goals like streaks of light. They're admired for how much they accomplish. But under their sleek surface, they often wonder: “Who am I if I’m not winning?”`, coreMotivation: "To be successful, admired, and validated by achievement.",
        coreFear: "Failure, being worthless or without value.",
        strengths: "Energetic, goal-driven, adaptable, confident, efficient.",
        challenges: "Prone to image-consciousness, burnout, superficiality, disconnection from authentic self.",
        idealCareers: "Entrepreneur, PR, sales, leadership, athlete, entertainer.",
        addictionTendencies: "Workaholism, performance drugs, validation-seeking.",
        compatibility: "Often pairs well with 9s or 6s; may clash with 4s or 8s.",
        growthPath: "Reconnect with emotions, value authenticity over image, slow down."
    },
    {
        type: "Type 4",
        name: "The Individualist — Oracle of the Phantom Layer",
        description: `Oracles wander the dreamy Phantom Layer, drawn to beauty, mystery, and emotion. They see the world in deeper colors than most. They want to be special — different, understood. But sometimes their longing isolates them, and they feel like something important is always missing.`, coreMotivation: "To be seen as unique, authentic, and emotionally significant.",
        coreFear: "Being ordinary, emotionally disconnected, or insignificant.",
        strengths: "Creative, emotionally honest, deep, intuitive, expressive.",
        challenges: "Self-absorbed, moody, envious, prone to melancholy and identity confusion.",
        idealCareers: "Artist, therapist, writer, designer, musician, counselor.",
        addictionTendencies: "Mood-altering substances, over-identifying with suffering, withdrawal.",
        compatibility: "Often pairs well with 5s or 9s; may clash with 1s or 3s.",
        growthPath: "Stay grounded in the present, balance emotional highs/lows, engage in community."
    },
    {
        type: "Type 5",
        name: "The Investigator — Archivist of the Hollow Core",
        description: `Deep in the Hollow Core, the Archivists gather knowledge like treasure. Quiet and private, they watch the world carefully, needing space to think and recharge. But they can get stuck in their minds, afraid to share what they know — or to need anyone at all.`, coreMotivation: "To gain knowledge and mastery; to conserve energy and stay competent.",
        coreFear: "Being overwhelmed, invaded, or helpless.",
        strengths: "Analytical, curious, independent, insightful, observant.",
        challenges: "Isolated, emotionally distant, intellectually arrogant, stingy with time/energy.",
        idealCareers: "Scientist, engineer, academic, programmer, philosopher, technical analyst.",
        addictionTendencies: "Withdrawal, fantasy, intellectual obsession, emotional suppression.",
        compatibility: "Often pairs well with 1s or 4s; may clash with 2s or 8s.",
        growthPath: "Reconnect with body/emotions, engage with others, trust abundance."
    },
    {
        type: "Type 6",
        name: "The Loyalist — Warden of the Codewall Bastion",
        description: `Standing guard at the Codewall, the Wardens are loyal, dependable, and always alert. They’re built for protection and preparation. But inside, they often wrestle with fear — of betrayal, of failure, of being alone. They long for someone or something they can truly trust.`,
        coreMotivation: "To feel secure, supported, and safe in an uncertain world.",
        coreFear: "Being without support or guidance, abandoned.",
        strengths: "Loyal, responsible, prepared, hardworking, committed to community.",
        challenges: "Anxious, reactive, suspicious, indecisive, fear-driven.",
        idealCareers: "Law enforcement, firefighter, teacher, project manager, analyst, therapist.",
        addictionTendencies: "Anxiety coping (alcohol, tobacco), over-prepping, reliance on authority.",
        compatibility: "Often pairs well with 9s or 3s; may struggle with 7s or 8s.",
        growthPath: "Build self-trust, tolerate uncertainty, step into leadership."
    },
    {
        type: "Type 7",
        name: "The Enthusiast — Sparkcaster of the Infinite Loop",
        description: `Sparkcasters zip through Cipherhold like fireworks — chasing fun, freedom, and adventure. They’re full of ideas and excitement, always onto the next big thing. But behind their thrill-seeking is a fear of pain or boredom. Sitting still might reveal feelings they’re trying to outrun.`, coreMotivation: "To be happy and satisfied, to avoid pain and boredom.",
        coreFear: "Being trapped in pain, missing out, limited or deprived.",
        strengths: "Fun-loving, optimistic, multi-talented, spontaneous, visionary.",
        challenges: "Impulsive, scattered, commitment-averse, avoidant of emotional discomfort.",
        idealCareers: "Travel writer, entertainer, entrepreneur, event planner, startup founder.",
        addictionTendencies: "Excessive stimulation, impulsive spending, pleasure-seeking, escapism.",
        compatibility: "Often pairs well with 1s or 5s; may clash with 6s or 2s.",
        growthPath: "Embrace stillness, face discomfort, follow through on responsibilities."
    },
    {
        type: "Type 8",
        name: "The Challenger — Enforcer of the Black Firewall",
        description: `The Enforcers protect Cipherhold from control and corruption. Bold and powerful, they don’t back down from a fight. They value strength and honesty — but struggle to show vulnerability. Under their armor is a heart that doesn’t want to be hurt or controlled.`, coreMotivation: "To be strong, self-reliant, and in control.",
        coreFear: "Being weak, vulnerable, or controlled by others.",
        strengths: "Assertive, bold, protective, decisive, fearless.",
        challenges: "Aggressive, confrontational, controlling, emotionally guarded.",
        idealCareers: "CEO, military, law, politics, activist, protector roles.",
        addictionTendencies: "Power dynamics, intensity addiction, denial of vulnerability, aggression.",
        compatibility: "Often pairs well with 2s or 9s; may struggle with 1s or 6s.",
        growthPath: "Open up emotionally, yield control at times, develop vulnerability."
    },
    {
        type: "Type 9",
        name: "The Peacemaker — Dreamer of the Etherfield",
        description: `Floating in the quiet Etherfield, the Dreamers keep peace among the chaos. Calm, kind, and easy to be around, they avoid conflict and go with the flow. But their calm can hide indecision — and they sometimes forget their own needs and dreams.`, coreMotivation: "To maintain inner peace and avoid conflict.",
        coreFear: "Disconnection, conflict, or being shut out.",
        strengths: "Calm, accepting, diplomatic, grounded, supportive.",
        challenges: "Passive, complacent, conflict-avoidant, forgets own needs.",
        idealCareers: "Therapist, mediator, HR, librarian, nature-related work.",
        addictionTendencies: "Numbing with TV, food, procrastination, spiritual bypassing.",
        compatibility: "Often pairs well with 3s or 6s; may clash with 8s or 4s.",
        growthPath: "Speak up, clarify personal desires, take consistent action."
    }
];


async function seedEnneagramResults() {
  try {
    await EnneagramResult.deleteMany();
    const created = await EnneagramResult.insertMany(enneagramTypes);
    console.log("Enneagram results seeded:", created.length);
    process.exit();
  } catch (err) {
    console.error("Error seeding Enneagram descriptions:", err);
    process.exit(1);
  }
}

seedEnneagramResults();