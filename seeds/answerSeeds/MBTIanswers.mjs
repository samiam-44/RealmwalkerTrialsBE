import mongoose from 'mongoose'
import MBTI from '../../models/AnswerModels/MBTImodel.mjs';
import connectDB from '../../db/conn.mjs'
import dotenv from 'dotenv'

dotenv.config();
await connectDB();

const typesMBTI = [
  //ANALYSISTS
  {
    type: "INTJ",
    title: "The Architect — Oracle of the Codex",
    description: {
      explained: `Within the crystalline databanks of Cipherhold lies the Codex of Sixteen Paths — an arcane schema used by the AI Oracles to classify the essence of one’s cognition. The INTJ, known as *The Architect*, is a silent strategist who sees the world in terms of systems, logic, and long-range vision. With minds engineered for mastery, they craft futures with precision, preferring solitude over distraction and innovation over tradition.`,

      coreMotivation: "To bring vision into reality through logic, mastery, and independence.",
      coreFear: "Being powerless, unprepared, or controlled by others.",

      strengths: "Strategic, visionary, disciplined, self-reliant, intellectually curious.",
      challenges: "Can be overly critical, emotionally detached, rigid, and dismissive of others’ input.",

      idealCareers: [
        { field: "Technology", roles: ["Software Developer", "Data Scientist", "Machine Learning Engineer", "Systems Architect"] },
        { field: "Science", roles: ["Scientific Researcher", "Astrophysicist", "Biotech Researcher"] },
        { field: "Engineering", roles: ["Mechanical Engineer", "Civil Engineer", "Robotics Engineer", "Urban Planner"] },
        { field: "Business & Strategy", roles: ["Strategic Consultant", "Business Intelligence Analyst", "Product Manager", "Operations Analyst"] },
        { field: "Cybersecurity", roles: ["Information Security Analyst", "Cybersecurity Architect", "Network Strategist"] },
        { field: "Law & Policy", roles: ["Legal Strategist", "Intellectual Property Lawyer", "Policy Analyst"] },
        { field: "Academia", roles: ["Professor", "Philosopher", "Mathematician", "Research Fellow"] },
        { field: "Medical & Health", roles: ["Diagnostic Specialist", "Neuroscientist", "Psychiatrist"] },
        { field: "Government & Intelligence", roles: ["Intelligence Analyst", "Think Tank Researcher", "Government Strategist"] }
      ],

      communicationStyle: "Clear, concise, and analytical. Prefers logic-driven conversations and dislikes small talk.",

      relationships: {
        romantic: "Reserved but deeply loyal. Seeks intelligent, independent partners who respect their space and vision.",
        friendships: "Keeps a small, trusted circle. Values intellectual depth, long-term loyalty, and mutual growth.",
        workplace: "Independent, focused, and organized. Prefers structured environments with minimal micromanagement and high expectations."
      }
    }
  },
  {
    type: "INTP",
    title: "The Logician — Mindsmith of the Infinite Vault",
    description: {
      explained: `Deep within the Infinite Vaults of Cipherhold, the INTP — *The Logician* — weaves invisible threads of logic and endless possibility. These thinkers live in a world of abstract puzzles and hypothetical realms. They build systems from scratch, theorize endlessly, and seek truth beyond surface-level reality. Elusive and brilliant, they question everything — including themselves.`,

      coreMotivation: "To understand how the world works through logic, exploration, and conceptual mastery.",
      coreFear: "Being intellectually incapable, constrained, or unable to find meaning.",

      strengths: "Analytical, inventive, curious, independent, highly logical.",
      challenges: "Struggles with consistency, emotional expression, and real-world follow-through.",

      idealCareers: [
        { field: "Science & Math", roles: ["Theoretical Physicist", "Mathematician", "Astrophysicist", "Research Scientist"] },
        { field: "Technology", roles: ["AI Engineer", "Machine Learning Researcher", "Software Developer", "Systems Architect"] },
        { field: "Philosophy & Humanities", roles: ["Philosopher", "Academic Theorist", "Epistemologist", "Ethics Researcher"] },
        { field: "Engineering", roles: ["Systems Engineer", "Data Engineer", "Cryptographic Engineer"] },
        { field: "Cybersecurity", roles: ["Cybersecurity Analyst", "Cryptographer", "Penetration Tester"] },
        { field: "Academia & Education", roles: ["University Professor", "STEM Educator", "Scientific Writer", "Instructional Designer"] },
        { field: "Game Development", roles: ["Game Mechanic Designer", "Simulation Engineer", "AI Programmer"] },
        { field: "Futurism & Innovation", roles: ["Innovation Strategist", "Futurist", "Technology Forecaster"] }
      ],

      communicationStyle: "Detached and cerebral. Prefers big-picture debates and system-based conversations over emotional discussions.",

      relationships: {
        romantic: "Values intellectual intimacy above all. Needs space, patience, and a partner who enjoys abstract thinking and respects autonomy.",
        friendships: "Low-maintenance but loyal to a curious few. Thrives on thought-provoking dialogue, inside jokes, and shared exploration.",
        workplace: "Independent, flexible, and best when given creative freedom. Excels in environments that reward deep thinking and question the norm."
      }
    }
  },
  {
    type: "ENTJ",
    title: "The Commander — Strategist of the High Spire",
    description: {
      explained: `From the soaring towers of Cipherhold’s Strategic Spire, the ENTJ — *The Commander* — watches the future unfold like a tactical map. They are visionaries of order and momentum, born to lead with logic, charisma, and unstoppable drive. Where others hesitate, the Commander charts a path forward — and rallies others to follow.`,

      coreMotivation: "To build and lead successful systems, teams, and missions with logic and clarity.",
      coreFear: "Being powerless, disrespected, or held back by inefficiency or incompetence.",

      strengths: "Bold, strategic, decisive, confident, visionary, influential.",
      challenges: "Can be impatient, overly blunt, dismissive of emotion, and intolerant of inefficiency.",

      idealCareers: [
        { field: "Business & Leadership", roles: ["CEO", "Startup Founder", "Operations Director", "Corporate Strategist"] },
        { field: "Law & Politics", roles: ["Attorney", "Policy Advisor", "Political Strategist", "Campaign Director"] },
        { field: "Finance & Investment", roles: ["Financial Analyst", "Venture Capitalist", "Investment Banker", "Economist"] },
        { field: "Engineering & Tech", roles: ["Engineering Manager", "Project Executive", "Technical Program Manager"] },
        { field: "Government & Military", roles: ["Officer", "Defense Strategist", "Government Executive"] },
        { field: "Entrepreneurship", roles: ["Startup CEO", "Innovation Consultant", "Business Coach"] },
        { field: "Tech Industry", roles: ["Product Manager", "Tech Startup Executive", "AI Operations Lead"] },
        { field: "Corporate Operations", roles: ["Logistics Planner", "Management Consultant", "Process Optimization Lead"] }
      ],

      communicationStyle: "Direct, persuasive, and confident. Focused on goals, logic, and results rather than emotion.",

      relationships: {
        romantic: "Seeks a strong, intelligent, and ambitious partner. Shows love through planning, protection, and shared vision. May need to work on emotional vulnerability.",
        friendships: "Leads even among peers. Loyal, dependable, and drawn to driven individuals. Competitive, but respectful of strength and capability.",
        workplace: "Thrives in leadership roles. Pushes teams toward excellence. Intolerant of inefficiency, but inspires others through clarity and confidence."
      }
    }
  },
  {
    type: "ENTP",
    title: "The Debater — Alchemist of the Thought Arenas",
    description: {
      explained: `In the electric arenas of Cipherhold, the ENTP — *The Debater* — thrives on chaos and curiosity. Bold and boundary-breaking, they’re idea alchemists who remix logic, challenge authority, and thrive in debate. They wield words like spells and spark revolutions with questions no one else dares ask.`,

      coreMotivation: "To explore possibilities, innovate, and challenge conventional thinking.",
      coreFear: "Being bored, trapped, or stuck in routine or conformity.",

      strengths: "Inventive, charismatic, adaptable, quick-witted, and bold.",
      challenges: "Easily distracted, argumentative, avoids routine, may neglect details or follow-through.",

      idealCareers: [
        { field: "Entrepreneurship & Innovation", roles: ["Startup Founder", "Product Developer", "Innovation Consultant"] },
        { field: "Media & Communication", roles: ["Journalist", "TV Host", "Media Producer", "Podcast Creator"] },
        { field: "Marketing & PR", roles: ["Brand Strategist", "Creative Director", "Ad Campaign Manager", "Public Relations Specialist"] },
        { field: "Politics & Law", roles: ["Political Campaign Manager", "Debate Coach", "Public Policy Analyst", "Lawyer"] },
        { field: "Technology & Design", roles: ["UX Designer", "Game Developer", "Software Ideator", "App Prototype Architect"] },
        { field: "Consulting & Strategy", roles: ["Management Consultant", "Business Strategist", "Disruption Analyst"] },
        { field: "Education & Philosophy", roles: ["Philosopher", "Educator", "Idea Lab Facilitator", "Curriculum Innovator"] }
      ],

      communicationStyle: "Dynamic, witty, and provocative. Loves to challenge assumptions and push conversations into uncharted territory.",

      relationships: {
        romantic: "Energetic and mentally stimulating partner. Needs freedom, variety, and playful debate. May resist emotional depth or long-term structure without novelty.",
        friendships: "Draws in adventurous, curious minds. Debates for fun, explores everything, and inspires unconventional thinking in others.",
        workplace: "Thrives in idea-driven roles. Needs freedom to innovate, dislikes micromanagement, and excels at brainstorming, pitching, and disruption."
      }
    }
  },
  {
    type: "ISTP",
    title: "The Virtuoso — Tactician of the Gearworks",
    description: {
      explained: `Beneath Cipherhold’s grinding gears and shifting machinery, the ISTP — *The Virtuoso* — moves with calm precision. These hands-on tacticians thrive in the realm of motion, tools, and split-second choices. Quiet but courageous, they master chaos through action, not words.`,

      coreMotivation: "To understand how things work and solve problems through action and skill.",
      coreFear: "Being controlled, trapped, or restricted by routine and inefficiency.",

      strengths: "Observant, practical, adaptable, action-oriented, calm under pressure.",
      challenges: "Can be emotionally distant, impulsive, dislikes structure, may avoid long-term commitments.",

      idealCareers: [
        { field: "Engineering & Mechanics", roles: ["Mechanical Engineer", "Industrial Designer", "Field Technician"] },
        { field: "Trades & Craftsmanship", roles: ["Electrician", "Carpenter", "Automotive Technician", "Welding Specialist"] },
        { field: "Emergency & Tactical", roles: ["Firefighter", "Paramedic", "Search and Rescue", "Military Operator"] },
        { field: "Technology & IT", roles: ["Systems Support Specialist", "Technical Troubleshooter", "Cybersecurity Technician"] },
        { field: "Transport & Exploration", roles: ["Pilot", "Commercial Diver", "Racecar Driver", "Motorcycle Courier"] },
        { field: "Sports & Adventure", roles: ["Athlete", "Extreme Sports Instructor", "Outdoor Survivalist", "Stunt Performer"] }
      ],

      communicationStyle: "Low-key, to-the-point, and action-driven. Prefers to show rather than tell, and often listens more than they speak.",

      relationships: {
        romantic: "Shows affection through helpful actions and shared experiences. Loyal and private, needs space and independence.",
        friendships: "Prefers a few close companions. Enjoys activities over deep emotional talks. Reliable in tough situations.",
        workplace: "Best in hands-on, practical roles. Dislikes micromanagement and thrives in flexible, action-based environments."
      }
    }
  },
  {
    type: "ISFP",
    title: "The Adventurer — Artisan of the Living Canvas",
    description: {
      explained: `In Cipherhold’s kaleidoscopic district of fleeting beauty and gentle rhythms, the ISFP — *The Adventurer* — roams free. They are soulfully creative, driven by quiet passions and the need to live authentically. Where others follow structure, they flow — painting their truth in the colors of the present moment.`,

      coreMotivation: "To express personal identity through meaningful experiences and creative freedom.",
      coreFear: "Losing autonomy, being forced into conformity, or having their emotions invalidated.",

      strengths: "Empathetic, artistic, spontaneous, adaptable, sensitive to beauty and emotion.",
      challenges: "Avoids conflict, may be overly private, struggles with planning and criticism, inconsistent under pressure.",

      idealCareers: [
        { field: "Arts & Design", roles: ["Painter", "Musician", "Photographer", "Graphic Designer", "Fashion Designer"] },
        { field: "Culinary & Hospitality", roles: ["Chef", "Pastry Artist", "Barista", "Boutique Hotel Manager"] },
        { field: "Counseling & Therapy", roles: ["Art Therapist", "Mental Health Counselor", "Rehabilitation Specialist"] },
        { field: "Healthcare & Support", roles: ["Occupational Therapist", "Holistic Healer", "Veterinary Assistant"] },
        { field: "Nature & Environment", roles: ["Park Ranger", "Wildlife Rehabilitator", "Florist", "Sustainability Advocate"] },
        { field: "Craftsmanship & Freelance", roles: ["Jeweler", "Tattoo Artist", "Furniture Maker", "Freelance Creative"] }
      ],

      communicationStyle: "Quiet and gentle, often nonverbal. Communicates feelings best through creative mediums or meaningful actions.",

      relationships: {
        romantic: "Affectionate and loyal, expresses love through presence and small, heartfelt acts. Needs personal space and emotional harmony.",
        friendships: "Cherishes deep, one-on-one connections. Enjoys creative or outdoor bonding. Avoids drama, values kindness.",
        workplace: "Prefers independent or artistic roles. Thrives in peaceful, supportive environments with room to express creativity."
      }
    }
  },
  {
    type: "ESTP",
    title: "The Entrepreneur — Dynamo of the Present Moment",
    description: {
      explained: `In Cipherhold’s bustling arenas of action and opportunity, the ESTP — *The Entrepreneur* — thrives. Bold and quick-witted, they live fully in the now, taking risks with charm and solving problems with practical savvy.`,

      coreMotivation: "To experience life actively, master challenges immediately, and connect with others through action.",
      coreFear: "Being trapped in routine, losing freedom, or being powerless to act.",

      strengths: "Energetic, adaptable, pragmatic, socially skilled, confident under pressure.",
      challenges: "Impulsive, impatient, risk-prone, can overlook others’ feelings, dislikes routine tasks.",

      idealCareers: [
        { field: "Sales & Marketing", roles: ["Sales Representative", "Brand Ambassador", "Marketing Manager", "Real Estate Agent"] },
        { field: "Entrepreneurship & Business", roles: ["Startup Founder", "Business Developer", "Franchise Owner", "Consultant"] },
        { field: "Emergency & Law Enforcement", roles: ["Paramedic", "Firefighter", "Police Officer", "Security Specialist"] },
        { field: "Sports & Physical Training", roles: ["Athlete", "Coach", "Personal Trainer", "Sports Therapist"] },
        { field: "Event Planning & Hospitality", roles: ["Event Coordinator", "Hotel Manager", "Tour Guide", "Bartender"] },
        { field: "Skilled Trades & Technical Work", roles: ["Electrician", "Mechanic", "Carpenter", "Technician"] }
      ],

      communicationStyle: "Direct, engaging, and persuasive. Prefers face-to-face and action-driven conversations.",

      relationships: {
        romantic: "Passionate, spontaneous, and lively. Expresses love through shared experiences and freedom.",
        friendships: "Outgoing and social, loves adventurous and active gatherings. Loyal but values fun and variety.",
        workplace: "Excels in dynamic, hands-on environments. Thrives with variety and fast-paced challenges."
      }
    }
  },
  {
    type: "ESFP",
    title: "The Entertainer — The Heart of the Moment",
    description: {
      explained: `Within the vibrant halls of Cipherhold, the ESFP shines as *The Entertainer* — a lively spirit who brings joy, energy, and warmth wherever they go, living fully in the present and connecting deeply with others through charisma and spontaneity.`,

      coreMotivation: "To experience life with enthusiasm, bring joy to others, and connect emotionally in the moment.",
      coreFear: "Being ignored, missing out, or stuck in boring routines.",

      strengths: "Warm-hearted, energetic, spontaneous, observant, skilled at engaging others.",
      challenges: "Easily bored, avoids long-term planning, sensitive to criticism, struggles with commitments.",

      idealCareers: [
        { field: "Performing Arts & Entertainment", roles: ["Actor", "Musician", "Dancer", "Comedian", "Event Performer"] },
        { field: "Hospitality & Event Coordination", roles: ["Event Planner", "Hotel Manager", "Tour Guide", "Wedding Coordinator"] },
        { field: "Sales & Customer Service", roles: ["Retail Salesperson", "Customer Relations Specialist", "Brand Ambassador"] },
        { field: "Teaching & Childcare", roles: ["Early Childhood Educator", "Recreation Leader", "Special Needs Assistant"] },
        { field: "Marketing & Public Relations", roles: ["Social Media Manager", "Public Relations Specialist", "Advertising Coordinator"] },
        { field: "Tourism & Travel Industry", roles: ["Travel Agent", "Cruise Director", "Flight Attendant"] }
      ],

      communicationStyle: "Expressive, enthusiastic, and warm; excels at connecting emotionally and entertaining others.",

      relationships: {
        romantic: "Passionate and affectionate; thrives on excitement, fun, and emotional openness.",
        friendships: "Loyal and lively; enjoys social adventures and uplifting others.",
        workplace: "Collaborative and dynamic; prefers practical, hands-on roles with creative freedom."
      }
    }
  },
  {
    type: "ISTJ",
    title: "The Logistician — The Reliable Organizer",
    description: {
      explained: `Deep within the marble archives of Cipherhold, the ISTJ — *The Logistician* — stands as a silent sentinel of order and tradition. With unwavering dedication and a methodical mind, the Logistician preserves the structures of society and upholds duty with quiet strength.`,

      coreMotivation: "To maintain order, uphold responsibility, and preserve traditions.",
      coreFear: "Being seen as unreliable or failing to meet obligations.",

      strengths: "Highly responsible, dependable, detail-oriented, practical, organized, loyal.",
      challenges: "Rigid to change, struggles with emotional expression, black-and-white thinking, dislikes inefficiency.",

      idealCareers: [
        { field: "Accounting & Finance", roles: ["Accountant", "Auditor", "Financial Analyst"] },
        { field: "Law Enforcement & Military", roles: ["Police Officer", "Military Officer", "Detective"] },
        { field: "Administration & Office Management", roles: ["Office Manager", "Executive Assistant", "Operations Coordinator"] },
        { field: "Civil Service & Government", roles: ["Government Administrator", "Regulatory Compliance Officer"] },
        { field: "Data & Analysis", roles: ["Data Analyst", "Quality Control Specialist"] },
        { field: "Engineering", roles: ["Industrial Engineer", "Mechanical Engineer"] }
      ],

      communicationStyle: "Clear, factual, and straightforward; values precision and responsibility.",

      relationships: {
        romantic: "Steady and loyal; shows love through dependable actions; values stability and long-term commitment.",
        friendships: "Trustworthy and consistent; prefers small close-knit groups; offers practical support over emotional.",
        workplace: "Highly reliable in structured, rule-based environments; focused on accuracy and results."
      }
    }
  },
  {
    type: "ISFJ",
    title: "The Defender — The Loyal Protector",
    description: {
      explained: `Within the nurturing sanctums of Cipherhold, the ISFJ — *The Defender* — safeguards others with quiet strength and unwavering loyalty. They are the silent protectors of tradition, empathy, and service, blending kindness with responsibility in every act.`,

      coreMotivation: "To protect and care for others while maintaining harmony and tradition.",
      coreFear: "Failing to meet the needs of those they care about or disrupting harmony.",

      strengths: "Deeply empathetic, observant, loyal, hardworking, detail-oriented, reliable.",
      challenges: "May neglect own needs, avoid conflict, struggle with sudden change, overwhelmed by unspoken expectations.",

      idealCareers: [
        { field: "Healthcare & Nursing", roles: ["Nurse", "Medical Assistant", "Caregiver"] },
        { field: "Social Work & Counseling", roles: ["Social Worker", "Therapist", "Counselor"] },
        { field: "Education & Childcare", roles: ["Teacher", "Childcare Provider", "School Counselor"] },
        { field: "Administrative Support", roles: ["Administrative Assistant", "Office Coordinator"] },
        { field: "Human Resources", roles: ["HR Specialist", "Recruiter"] },
        { field: "Museum & Library Science", roles: ["Librarian", "Archivist", "Curator"] }
      ],

      communicationStyle: "Kind, thoughtful, supportive; prefers clear but gentle communication.",

      relationships: {
        romantic: "Deeply committed and attentive; expresses love through actions and care; values stability and emotional safety.",
        friendships: "Loyal and generous; forms long-lasting bonds; great listener and dependable supporter.",
        workplace: "Works steadily and thoroughly; prefers defined roles and teamwork; excels in supportive, detail-focused roles."
      }
    }
  },
  {
    type: "ESTJ",
    title: "The Executive — The Orderly Leader",
    description: {
      explained: `In the structured vaults of Cipherhold, the ESTJ — *The Executive* — stands as the embodiment of order, discipline, and leadership. These are the tacticians of the physical realm, forging stability through rules, efficiency, and unwavering commitment.`,

      coreMotivation: "To lead effectively, maintain order, and ensure responsibility is upheld.",
      coreFear: "Chaos, inefficiency, and failure to meet obligations or standards.",

      strengths: "Highly organized, reliable, strong sense of duty, decisive, excellent at managing people and projects, confident leader.",
      challenges: "Can be inflexible, overly critical, overlooks emotional nuances, too focused on rules and tradition.",

      idealCareers: [
        { field: "Business Management & Administration", roles: ["Operations Manager", "Business Executive", "Administrator"] },
        { field: "Law Enforcement & Military", roles: ["Police Officer", "Military Officer", "Investigator"] },
        { field: "Politics & Government", roles: ["Politician", "Government Official", "Public Administrator"] },
        { field: "Financial Services", roles: ["Financial Manager", "Accountant", "Loan Officer"] },
        { field: "Project Management", roles: ["Project Manager", "Program Coordinator"] },
        { field: "Logistics & Operations", roles: ["Logistics Manager", "Supply Chain Coordinator"] },
        { field: "Education", roles: ["School Principal", "Coach"] }
      ],

      communicationStyle: "Direct, clear, and authoritative; values efficiency and practical solutions.",

      relationships: {
        romantic: "Loyal and dependable; shows love through commitment and practical support; may struggle with emotional sensitivity.",
        friendships: "Serious about friendships; often the planner and organizer; offers practical advice; may clash with more flexible types.",
        workplace: "Thrives in leadership roles; creates order and clarity; respects hierarchy; demands high performance."
      }
    }
  },
  {
    type: "ESFJ",
    title: "The Consul — The Caring Connector",
    description: {
      explained: `Within the harmonious chambers of Cipherhold resides the ESFJ — *The Consul* — the nurturer and connector of social webs. These empathetic caretakers thrive by fostering community, supporting others, and upholding traditions.`,

      coreMotivation: "To help others, maintain harmony, and uphold social traditions.",
      coreFear: "Being rejected, isolated, or causing discord within their social circle.",

      strengths: "Highly empathetic, attentive to others' needs, reliable, conscientious, excellent at creating supportive environments, strong sense of duty.",
      challenges: "Overly sensitive to criticism, difficulty setting boundaries, seeks approval sometimes at own expense, resistant to change.",

      idealCareers: [
        { field: "Healthcare & Nursing", roles: ["Nurse", "Medical Assistant", "Caregiver"] },
        { field: "Teaching & Education", roles: ["Teacher", "School Counselor", "Educational Coordinator"] },
        { field: "Social Work & Counseling", roles: ["Social Worker", "Counselor", "Therapist"] },
        { field: "Customer Service & Hospitality", roles: ["Customer Service Representative", "Hotel Manager", "Event Planner"] },
        { field: "Event Planning & Coordination", roles: ["Event Coordinator", "Wedding Planner"] },
        { field: "Human Resources", roles: ["HR Specialist", "Recruiter"] },
        { field: "Religious & Community Leadership", roles: ["Community Organizer", "Religious Leader"] }
      ],

      communicationStyle: "Warm, clear, and enthusiastic; focused on cooperation and encouragement.",

      relationships: {
        romantic: "Devoted and caring; expresses love through thoughtful actions; seeks emotional harmony; may prioritize partner's needs over their own.",
        friendships: "Loyal and dependable; thrives in close-knit groups; acts as mediator and peacekeeper; enjoys celebrating milestones together.",
        workplace: "Excels in cooperative, team-oriented environments; brings warmth and boosts morale; detail-oriented and skilled at interpersonal management."
      }
    }
  },
  //DIPLOMATS
  {
    type: "INFJ",
    title: "The Advocate — The Visionary Idealist",
    description: {
      explained: `In the luminous sanctum of Cipherhold’s Heartcore Archives resides the INFJ — *The Advocate*. A rare and enigmatic force, the Advocate bridges logic and emotion, vision and action. Guided by deep conviction and quiet strength, they are the dream-weavers and soul-healers of their time.`,

      coreMotivation: "To pursue purpose, empathy, and meaningful impact.",
      coreFear: "Being misunderstood, insignificant, or disconnected from their vision.",

      strengths: "Deeply empathetic, emotionally intelligent, insightful, inspiring, organized, determined, excellent listener and communicator.",
      challenges: "Carries others' emotional burdens, perfectionistic, may withdraw when overwhelmed, struggles with opening up or asking for help.",

      idealCareers: [
        { field: "Counseling & Therapy", roles: ["Therapist", "Counselor", "Psychologist"] },
        { field: "Writing & Storytelling", roles: ["Author", "Screenwriter", "Journalist"] },
        { field: "Human Rights & Nonprofit Leadership", roles: ["Advocate", "Program Director"] },
        { field: "Psychology & Social Work", roles: ["Social Worker", "Mental Health Specialist"] },
        { field: "Education & Guidance", roles: ["Teacher", "Mentor", "Advisor"] },
        { field: "Spiritual Leadership & Coaching", roles: ["Spiritual Leader", "Life Coach"] },
        { field: "Design & Creative Arts", roles: ["Designer", "Artist"] },
        { field: "Diplomacy & International Relations", roles: ["Diplomat", "Policy Analyst"] }
      ],

      communicationStyle: "Thoughtful, insightful, and empathetic; balances vision with clarity.",

      relationships: {
        romantic: "Seeks depth and authenticity; loyal and nurturing once trust is built; can be slow to open up; idealistic and attentive.",
        friendships: "Loyal to a few; prefers meaningful one-on-one connections; dislikes small talk; deeply supportive and insightful.",
        workplace: "Committed, conscientious, prefers mission-driven work; focused, independent, and quietly efficient."
      }
    }
  },
  {
    type: "INFP",
    title: "The Mediator — The Poetic Idealist",
    description: {
      explained: `From the quiet gardens of Cipherhold’s Inner Realms comes the INFP — *The Mediator*. A poetic soul cloaked in idealism, the Mediator journeys through life guided by personal values, imagination, and a desire to heal and inspire others through authenticity.`,

      coreMotivation: "To live authentically in alignment with values and inspire harmony.",
      coreFear: "Compromising personal values or losing emotional depth and connection.",

      strengths: "Deeply empathetic, compassionate, creative, original thinker, open-minded, introspective, passionate about causes.",
      challenges: "Struggles with practical matters, easily overwhelmed by conflict, tends to withdraw under pressure, may idealize people or situations.",

      idealCareers: [
        { field: "Writing, Poetry & Creative Arts", roles: ["Writer", "Poet", "Artist"] },
        { field: "Psychology & Counseling", roles: ["Counselor", "Therapist"] },
        { field: "Social Work & Nonprofit Activism", roles: ["Social Worker", "Activist"] },
        { field: "Education & Youth Development", roles: ["Teacher", "Youth Counselor"] },
        { field: "Music & Film", roles: ["Musician", "Filmmaker"] },
        { field: "Humanitarian Work", roles: ["Humanitarian", "Charity Organizer"] },
        { field: "Spiritual & Holistic Practices", roles: ["Spiritual Healer", "Holistic Practitioner"] },
        { field: "UX/UI Design", roles: ["UX Designer", "UI Designer"] }
      ],

      communicationStyle: "Gentle, sincere, and imaginative; seeks to connect through shared values and stories.",

      relationships: {
        romantic: "Deeply loyal and romantic; seeks soul-deep emotional connections; may hesitate to open up; needs space for inner world.",
        friendships: "Thoughtful, sincere, cherishes deep conversations; often a quiet supporter; selective but loyal for life.",
        workplace: "Values-driven and idealistic; prefers supportive, flexible environments; thrives in collaboration and vision-driven roles."
      }
    }
  },
  {
    type: "ENFJ",
    title: "The Protagonist — The Inspiring Leader",
    description: {
      explained: `In the radiant forums of Cipherhold’s Grand Halls stands the ENFJ — *The Protagonist*. A born leader illuminated by empathy and purpose, the Protagonist channels charisma, intuition, and idealism to uplift others and guide them toward their fullest potential.`,

      coreMotivation: "To inspire, connect, and lead others toward positive growth.",
      coreFear: "Being unappreciated or failing to live up to their ideals.",

      strengths: "Charismatic, articulate, passionate mentor, organized, future-focused, loyal, inspiring.",
      challenges: "May overextend for others, prone to burnout, overly idealistic, sensitive to conflict or criticism.",

      idealCareers: [
        { field: "Counseling & Therapy", roles: ["Therapist", "Counselor"] },
        { field: "Teaching & Educational Leadership", roles: ["Teacher", "School Administrator"] },
        { field: "Politics & Public Service", roles: ["Politician", "Community Organizer"] },
        { field: "Human Resources & Team Development", roles: ["HR Manager", "Coach"] },
        { field: "Nonprofit Leadership & Activism", roles: ["Director", "Advocate"] },
        { field: "Life Coaching & Motivational Speaking", roles: ["Life Coach", "Speaker"] },
        { field: "Religious & Spiritual Leadership", roles: ["Clergy", "Spiritual Leader"] },
        { field: "Marketing with Human Focus", roles: ["Marketing Manager", "Brand Strategist"] }
      ],

      communicationStyle: "Empathetic, motivating, articulate; inspires through connection and vision.",

      relationships: {
        romantic: "Deeply loving and nurturing; committed to partner’s growth; needs emotional reciprocity; may take on too much responsibility.",
        friendships: "Acts as social glue and moral compass; forms strong bonds; consistently supportive; empowers others.",
        workplace: "Natural motivators and organizers; builds team harmony and purpose; takes initiative with empathy."
      }
    }
  },
  {
    type: "ENFP",
    title: "The Campaigner — The Enthusiastic Visionary",
    description: {
      explained: `In the vibrant and ever-shifting plazas of Cipherhold, the ENFP — *The Campaigner* — thrives as a beacon of possibility. Bursting with curiosity, emotion, and vision, the Campaigner ignites change and connection wherever they go, led by a fierce belief in the beauty of human potential.`,

      coreMotivation: "To explore possibilities, inspire others, and live authentically.",
      coreFear: "Being trapped in routine or losing their individuality.",

      strengths: "Creative, enthusiastic, empathetic, socially insightful, natural storyteller, adaptable, values-driven.",
      challenges: "Easily distracted, struggles with follow-through, takes criticism personally, prone to burnout.",

      idealCareers: [
        { field: "Creative Arts", roles: ["Writer", "Actor", "Designer"] },
        { field: "Psychology & Counseling", roles: ["Counselor", "Therapist"] },
        { field: "Public Relations & Communications", roles: ["PR Specialist", "Communicator"] },
        { field: "Entrepreneurship & Startups", roles: ["Founder", "Innovator"] },
        { field: "Marketing & Advertising", roles: ["Marketer", "Advertiser"] },
        { field: "Social Work & Community Organizing", roles: ["Social Worker", "Organizer"] },
        { field: "Teaching", roles: ["Teacher", "Creative Educator"] }
      ],

      communicationStyle: "Energetic, imaginative, warm; connects through stories and values.",

      relationships: {
        romantic: "Passionate and affectionate; craves emotional and intellectual connection; brings spontaneity; needs freedom and understanding.",
        friendships: "Life of the party; creates strong emotional bonds; loves exploring ideas; uplifts and inspires friends.",
        workplace: "Brings energy and ideas; seeks meaningful, flexible roles; motivated by passion; thrives when innovating and connecting."
      }
    }
  }
]

async function seedMBTI() {
  try {
    await connectDB();

    for (const mbtiType of typesMBTI) {
      await MBTI.findOneAndUpdate(
        { type: mbtiType.type },   // Query by 'type'
        mbtiType,                  // Update with full object
        { upsert: true, new: true }
      );
    }

    console.log('MBTI seed complete');
  } catch (error) {
    console.error('Error seeding MBTI:', error);
  } finally {
    await mongoose.disconnect();
  }
}

seedMBTI();