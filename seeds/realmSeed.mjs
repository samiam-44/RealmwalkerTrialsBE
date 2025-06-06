import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from '../db/conn.mjs';
import Realm from '../models/Realm.mjs';
import Quiz from '../models/Quiz.mjs';


dotenv.config(); //Load env variable

//Realm data
const realmData = [
      {
    name: 'Cipherhold',
    description: `Rising from the ruins of forgotten truths, Cipherhold stands as a fortress of raw data and unyielding logic at the heart of a digital storm. Neon-lit spires and spiraling towers pierce the dark sky, housing AI-run archives of pure knowledge where encrypted algorithms tirelessly sift fact from fiction. Here, encrypted identities converge and unravel, and the line between organic thought and machine code blurs. Within these walls, reality bends to the will of the code — your true self waits in the nexus of certainty and doubt, ready to be decrypted… if you dare.`,
    quizzes: []
},
  {
    name: "Kael'Zorah",
    description: `In the quiet vacuum beyond the known stars, Kael’Zorah glows — a living world where constellations fall like rain. Here, ancient light-keepers tend to the soul-scripts etched into the stone. This is the place where the universe first spoke itself into being, and where your own cosmic imprint waits to be remembered.`,
    quizzes: []
},
  {
    name: "Elderglenn Crossing",
    description: `Where the birchwood meets the mist and the marsh, Elderglenn Crossing emerges — a sacred enclave lost to time. Crooked cabins and vine-wrapped altars dot the forest floor, each one home to a healer, a seer, or a shaman who speaks in firelight and dream. Smoke drifts through moss-laden branches, and animal spirits roam freely through the underbrush. Elemental energies hum beneath the earth, whispering ancient names only the soul remembers. So sit at the sacred fire and uncover the true shape of your spirit.`,
    quizzes: []
},
  {
    name: "The Dreamlink Channel",
    description: `Hidden deep in the stream of collapsed timelines, the Dreamlink Channel is a glitched-out transmission node once built for mapping personality-types through fables and media. Rebooted by curiosity, it now flickers with signals from infinite realities — Hogwarts Houses, elemental clans, rebel factions, elven races, and more. This is where your fictional selves broadcast back, revealing the patterns your soul plays in every world. Tune in, take the test, and meet the you that exists in legend.`,
    quizzes: []
}
];

const seedRealms = async () => {
  try {
    await connectDB();
    console.log('Seeding realms now...');
    // Clear existing data if you want to avoid duplicates
    await Realm.deleteMany({});
    // Insert new data
    await Realm.insertMany(realmData);
    console.log('Realms seeded successfully');
  } catch (error) {
    console.error('Error seeding realms:', error);
  } finally {
    mongoose.connection.close();
  }
};

seedRealms();