import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from '../../../db/conn.mjs';
import Description from '../../../models/Descriptions.mjs';

dotenv.config();
await connectDB();

const enneagramTypes = [
   {
     testName: 'Enneagram Sigils',
    type: "Type 1",
    title: "The Reformer — Sentinel of the Syntax Tower",
    description: {
      explained: `In the shining towers of Cipherhold, the Sentinels work day and night to bring order to chaos. They believe everything should run clean and true — no bugs, no flaws. They fix broken code and protect what's right. But their biggest challenge? Learning to accept that not everything needs to be perfect.`,
      coreMotivation: "To be good, ethical, and morally right. They strive to improve the world and avoid fault.",
      coreFear: "Being corrupt, wrong, or defective. They hate making mistakes.",
      strengths: "High integrity, self-disciplined, fair, hardworking, idealistic.",
      challenges: "Can be judgmental, inflexible, overly critical of self and others.",
      idealCareers: [
        { field: "Law & Justice", roles: ["Lawyer", "Judge", "Compliance Officer", "Legal Consultant"] },
        { field: "Publishing & Media", roles: ["Editor", "Quality Assurance Specialist", "Technical Writer"] },
        { field: "Education & Training", roles: ["Teacher", "Curriculum Developer", "Academic Advisor"] },
        { field: "Finance & Accounting", roles: ["Accountant", "Auditor", "Financial Analyst"] },
        { field: "Nonprofit & Advocacy", roles: ["Nonprofit Manager", "Policy Analyst", "Ethics Consultant"] },
        { field: "Quality & Process Management", roles: ["Process Improvement Specialist", "Quality Control Manager", "Project Manager"] }
      ],
      addictionTendencies: "Control, rigidity, overworking, resentment, suppressed anger.",
      compatibility: "Often pairs well with Type 7 or Type 9; may clash with 8s or 4s.",
      growthPath: "Embrace flexibility, allow mistakes, develop compassion for imperfection."
    }
  },
     {
       testName: 'Enneagram Sigils',
    type: "Type 2",
    title: "The Helper — Empath of the Vital Grid",
    description: {
      explained: `The Empaths flow through the Vital Grid, offering care, kindness, and energy to others. They feel happiest when they're helping someone. But if they give too much, they forget to take care of themselves. Deep down, they fear being unloved if they’re not needed.`,
      coreMotivation: "To feel loved and valued by being needed and appreciated.",
      coreFear: "Being unloved, unwanted, or unworthy of connection.",
      strengths: "Generous, nurturing, empathetic, relationship-oriented, supportive.",
      challenges: "Can become manipulative, martyr-like, clingy, or resentful.",
      idealCareers: [
        { field: "Healthcare & Caregiving", roles: ["Nurse", "Caregiver", "Physical Therapist", "Occupational Therapist"] },
        { field: "Counseling & Therapy", roles: ["Counselor", "Therapist", "Social Worker", "Family Therapist"] },
        { field: "Education & Childcare", roles: ["Teacher", "Special Education Instructor", "Childcare Provider"] },
        { field: "Hospitality & Service", roles: ["Hotel Manager", "Event Planner", "Customer Service Specialist"] },
        { field: "Community & Nonprofit Work", roles: ["Community Organizer", "Volunteer Coordinator", "Advocate"] },
        { field: "Religious & Spiritual Work", roles: ["Clergy Member", "Spiritual Advisor", "Chaplain"] }
      ],
      addictionTendencies: "Codependency, sugar/emotional eating, enabling others.",
      compatibility: "Often pairs well with 8s or 4s; may struggle with 5s or 1s.",
      growthPath: "Practice self-care, set boundaries, value self without needing to give."
    }
  },
  {
     testName: 'Enneagram Sigils',
    type: "Type 3",
    title: "The Achiever — Luminary of the Glass Spire",
    description: {
      explained: `High above in the Glass Spire, the Luminaries shine with success. They move fast, break limits, and chase goals like streaks of light. They're admired for how much they accomplish. But under their sleek surface, they often wonder: “Who am I if I’m not winning?”`,
      coreMotivation: "To be successful, admired, and validated by achievement.",
      coreFear: "Failure, being worthless or without value.",
      strengths: "Energetic, goal-driven, adaptable, confident, efficient.",
      challenges: "Prone to image-consciousness, burnout, superficiality, disconnection from authentic self.",
      idealCareers: [
        { field: "Business & Entrepreneurship", roles: ["Entrepreneur", "Startup Founder", "Business Executive"] },
        { field: "Marketing & Sales", roles: ["Sales Manager", "PR Specialist", "Brand Manager", "Advertiser"] },
        { field: "Entertainment & Media", roles: ["Actor", "Athlete", "TV Host", "Public Speaker"] },
        { field: "Leadership & Management", roles: ["Team Leader", "Project Manager", "Coach", "Consultant"] },
        { field: "Finance & Real Estate", roles: ["Financial Advisor", "Real Estate Agent", "Investment Banker"] }
      ],
      addictionTendencies: "Workaholism, performance drugs, validation-seeking.",
      compatibility: "Often pairs well with 9s or 6s; may clash with 4s or 8s.",
      growthPath: "Reconnect with emotions, value authenticity over image, slow down."
    }
  },
  {
     testName: 'Enneagram Sigils',
    type: "Type 4",
    title: "The Individualist — Oracle of the Phantom Layer",
    description: {
      explained: `Oracles wander the dreamy Phantom Layer, drawn to beauty, mystery, and emotion. They see the world in deeper colors than most. They want to be special — different, understood. But sometimes their longing isolates them, and they feel like something important is always missing.`,
      coreMotivation: "To be seen as unique, authentic, and emotionally significant.",
      coreFear: "Being ordinary, emotionally disconnected, or insignificant.",
      strengths: "Creative, emotionally honest, deep, intuitive, expressive.",
      challenges: "Self-absorbed, moody, envious, prone to melancholy and identity confusion.",
      idealCareers: [
        { field: "Creative Arts", roles: ["Artist", "Musician", "Writer", "Poet", "Designer", "Photographer"] },
        { field: "Therapy & Counseling", roles: ["Art Therapist", "Psychotherapist", "Counselor"] },
        { field: "Media & Entertainment", roles: ["Actor", "Director", "Screenwriter"] },
        { field: "Fashion & Design", roles: ["Fashion Designer", "Interior Designer", "Stylist"] },
        { field: "Spiritual & Esoteric Work", roles: ["Yoga Instructor", "Spiritual Guide", "Astrologer"] }
      ],
      addictionTendencies: "Mood-altering substances, over-identifying with suffering, withdrawal.",
      compatibility: "Often pairs well with 5s or 9s; may clash with 1s or 3s.",
      growthPath: "Stay grounded in the present, balance emotional highs/lows, engage in community."
    }
  },
  {
     testName: 'Enneagram Sigils',
    type: "Type 5",
    title: "The Investigator — Archivist of the Hollow Core",
    description: {
      explained: `Deep in the Hollow Core, the Archivists gather knowledge like treasure. Quiet and private, they watch the world carefully, needing space to think and recharge. But they can get stuck in their minds, afraid to share what they know — or to need anyone at all.`,
      coreMotivation: "To gain knowledge and mastery; to conserve energy and stay competent.",
      coreFear: "Being overwhelmed, invaded, or helpless.",
      strengths: "Analytical, curious, independent, insightful, observant.",
      challenges: "Isolated, emotionally distant, intellectually arrogant, stingy with time/energy.",
      idealCareers: [
        { field: "Science & Research", roles: ["Scientist", "Researcher", "Laboratory Technician"] },
        { field: "Technology & Engineering", roles: ["Software Engineer", "Programmer", "Data Analyst", "Systems Architect"] },
        { field: "Academia & Education", roles: ["Professor", "Academic Researcher", "Philosopher"] },
        { field: "Technical Writing & Analysis", roles: ["Technical Writer", "Policy Analyst", "Statistician"] }
      ],
      addictionTendencies: "Withdrawal, fantasy, intellectual obsession, emotional suppression.",
      compatibility: "Often pairs well with 1s or 4s; may clash with 2s or 8s.",
      growthPath: "Reconnect with body/emotions, engage with others, trust abundance."
    }
  },
  {
     testName: 'Enneagram Sigils',
    type: "Type 6",
    title: "The Loyalist — Warden of the Codewall Bastion",
    description: {
      explained: `Standing guard at the Codewall, the Wardens are loyal, dependable, and always alert. They’re built for protection and preparation. But inside, they often wrestle with fear — of betrayal, of failure, of being alone. They long for someone or something they can truly trust.`,
      coreMotivation: "To feel secure, supported, and safe in an uncertain world.",
      coreFear: "Being without support or guidance, abandoned.",
      strengths: "Loyal, responsible, prepared, hardworking, committed to community.",
      challenges: "Anxious, reactive, suspicious, indecisive, fear-driven.",
      idealCareers: [
        { field: "Public Safety & Security", roles: ["Law Enforcement Officer", "Firefighter", "Security Analyst"] },
        { field: "Project & Risk Management", roles: ["Project Manager", "Risk Assessor", "Compliance Specialist"] },
        { field: "Education & Counseling", roles: ["Teacher", "Therapist", "School Counselor"] },
        { field: "Military & Defense", roles: ["Military Officer", "Intelligence Analyst"] }
      ],
      addictionTendencies: "Anxiety coping (alcohol, tobacco), over-prepping, reliance on authority.",
      compatibility: "Often pairs well with 9s or 3s; may struggle with 7s or 8s.",
      growthPath: "Build self-trust, tolerate uncertainty, step into leadership."
    }
  },
     {
       testName: 'Enneagram Sigils',
    type: "Type 7",
    title: "The Enthusiast — Sparkcaster of the Infinite Loop",
    description: {
      explained: `Sparkcasters zip through Cipherhold like fireworks — chasing fun, freedom, and adventure. They’re full of ideas and excitement, always onto the next big thing. But behind their thrill-seeking is a fear of pain or boredom. Sitting still might reveal feelings they’re trying to outrun.`,
      coreMotivation: "To be happy and satisfied, to avoid pain and boredom.",
      coreFear: "Being trapped in pain, missing out, limited or deprived.",
      strengths: "Fun-loving, optimistic, multi-talented, spontaneous, visionary.",
      challenges: "Impulsive, scattered, commitment-averse, avoidant of emotional discomfort.",
      idealCareers: [
        { field: "Travel & Adventure", roles: ["Travel Writer", "Tour Guide", "Travel Blogger", "Adventure Sports Instructor"] },
        { field: "Entertainment & Media", roles: ["Entertainer", "Comedian", "TV Host", "Content Creator"] },
        { field: "Entrepreneurship & Startups", roles: ["Startup Founder", "Event Planner", "Creative Director"] },
        { field: "Creative & Design Fields", roles: ["Graphic Designer", "Marketing Specialist", "Advertising Creative"] },
        { field: "Innovation & Technology", roles: ["Product Innovator", "Creative Technologist", "App Developer"] }
      ],
      addictionTendencies: "Excessive stimulation, impulsive spending, pleasure-seeking, escapism.",
      compatibility: "Often pairs well with 1s or 5s; may clash with 6s or 2s.",
      growthPath: "Embrace stillness, face discomfort, follow through on responsibilities."
    }
  },
  {
     testName: 'Enneagram Sigils',
    type: "Type 8",
    title: "The Challenger — Enforcer of the Black Firewall",
    description: {
      explained: `The Enforcers protect Cipherhold from control and corruption. Bold and powerful, they don’t back down from a fight. They value strength and honesty — but struggle to show vulnerability. Under their armor is a heart that doesn’t want to be hurt or controlled.`,
      coreMotivation: "To be strong, self-reliant, and in control.",
      coreFear: "Being weak, vulnerable, or controlled by others.",
      strengths: "Assertive, bold, protective, decisive, fearless.",
      challenges: "Aggressive, confrontational, controlling, emotionally guarded.",
      idealCareers: [
        { field: "Leadership & Executive Roles", roles: ["CEO", "Business Executive", "Operations Manager"] },
        { field: "Military & Law Enforcement", roles: ["Military Officer", "Police Officer", "Federal Agent"] },
        { field: "Legal & Politics", roles: ["Attorney", "Politician", "Activist", "Lobbyist"] },
        { field: "Security & Protective Services", roles: ["Bodyguard", "Security Consultant", "Crisis Manager"] },
        { field: "Entrepreneurship", roles: ["Business Owner", "Startup Founder", "Negotiator"] }
      ],
      addictionTendencies: "Power dynamics, intensity addiction, denial of vulnerability, aggression.",
      compatibility: "Often pairs well with 2s or 9s; may struggle with 1s or 6s.",
      growthPath: "Open up emotionally, yield control at times, develop vulnerability."
    }
  },
  {
     testName: 'Enneagram Sigils',
    type: "Type 9",
    title: "The Peacemaker — Dreamer of the Etherfield",
    description: {
      explained: `Floating in the quiet Etherfield, the Dreamers keep peace among the chaos. Calm, kind, and easy to be around, they avoid conflict and go with the flow. But their calm can hide indecision — and they sometimes forget their own needs and dreams.`,
      coreMotivation: "To maintain inner peace and avoid conflict.",
      coreFear: "Disconnection, conflict, or being shut out.",
      strengths: "Calm, accepting, diplomatic, grounded, supportive.",
      challenges: "Passive, complacent, conflict-avoidant, forgets own needs.",
      idealCareers: [
        { field: "Counseling & Mediation", roles: ["Therapist", "Mediator", "Conflict Resolution Specialist"] },
        { field: "Human Resources & Organizational Support", roles: ["HR Specialist", "Employee Relations Coordinator"] },
        { field: "Library & Information Services", roles: ["Librarian", "Archivist", "Information Manager"] },
        { field: "Nature & Environmental Work", roles: ["Park Ranger", "Environmental Educator", "Conservationist"] },
        { field: "Health & Wellness", roles: ["Yoga Instructor", "Massage Therapist", "Wellness Coach"] }
      ],
      addictionTendencies: "Numbing with TV, food, procrastination, spiritual bypassing.",
      compatibility: "Often pairs well with 3s or 6s; may clash with 8s or 4s.",
      growthPath: "Speak up, clarify personal desires, take consistent action."
    }
  }, 
];


async function seedEnneagramResults() {
  try {
    const created = await Description.insertMany(enneagramTypes);
    console.log("Enneagram descriptions seeded:", created.length);
    process.exit();
  } catch (err) {
    console.error("Error seeding Enneagram descriptions:", err);
    process.exit(1);
  }
}

seedEnneagramResults();