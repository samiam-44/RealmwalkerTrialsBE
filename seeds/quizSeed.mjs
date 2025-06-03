import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from '../db/conn.mjs';
import Realm from '../models/Realm.mjs';
import Quiz from '../models/Quiz.mjs';

dotenv.config();

const quizData = [
//CIPHERHOLD QUIZZES
  {
    realmName: 'Cipherhold',
    title: 'Myers-Briggs Codex (MBTI)',
    description: `Within the crystalline databanks of Cipherhold lies the Codex of Sixteen Paths — an arcane schema used by the AI Oracles to classify the essence of one’s cognition. Based on the Myers-Briggs Type Indicator, this ancient mapping deciphers your innate ways of perceiving the world and making decisions. Are you a silent strategist, a wandering idealist, or a commanding visionary? Uncover your type and let the cipher align your journey.`,
  },
  {
    realmName: 'Cipherhold',
    title: 'Enneagram Sigils',
    description: `Etched into the Obsidian Firewall of Cipherhold are nine ancient sigils — reflections of your deepest drives and shadows. The Enneagram identifies the core motivations, fears, and desires that steer your choices. By gazing into these fractal glyphs, you’ll discover the mask you wear, the armor you carry, and the truth you seek beneath.`,
  },
  {
    realmName: 'Cipherhold',
    title: 'OCEAN Protocol (Big Five Traits)',
    description: `The AI Architects of Cipherhold trust only one model to categorize the organic psyche — the OCEAN Protocol. Based on the Big Five Personality Traits, it dissects your being into Openness, Conscientiousness, Extraversion, Agreeableness, and Neuroticism. This protocol reveals how you adapt to chaos, structure, and others — critical knowledge for surviving Cipherhold’s logic storms.`,
  },
  {
    realmName: 'Cipherhold',
    title: 'HEXACO Mirror Grid',
    description: `Reflected in Cipherhold’s Mirror Grid is the HEXACO construct — an advanced alignment engine assessing six pillars of personality: Honesty-Humility, Emotionality, eXtraversion, Agreeableness, Conscientiousness, and Openness. The grid doesn't lie. It records what even your code tries to hide.`,
  },
  {
    realmName: 'Cipherhold',
    title: 'Caliper Alignment Core',
    description: `The Caliper Alignment Core runs corporate simulations in Cipherhold’s hidden depths. This test measures your aptitude for leadership, resilience, problem-solving, and potential roles in high-pressure alliances. Based on real-world organizational psychology, it determines your true capacity in the web of fate.`,
  },
  {
    realmName: 'Cipherhold',
    title: 'DISC Signal Frequencies',
    description: `Cipherhold's pulse sensors resonate with the DISC Frequencies: Dominance, Influence, Steadiness, and Conscientiousness. These waves reveal how you assert control, inspire allies, maintain order, or support the system. The DISC model, once used in ancient guilds, now helps you understand how you operate in teams and conflicts.`,
  },
  {
    realmName: 'Cipherhold',
    title: 'Temperament Archives',
    description: `From ancient scrolls of proto-psychology stored in Cipherhold’s Archive Node, the Four Temperaments remain encoded: Sanguine, Choleric, Melancholic, and Phlegmatic. This test, while ancient, still holds relevance — revealing the elemental forces behind your emotional and behavioral alchemy.`,
  },
  {
    realmName: 'Cipherhold',
    title: 'Holland Code Extractor',
    description: `Cipherhold’s Career Engine utilizes the Holland Codes (RIASEC) to match your energy signature with six vocations: Realistic, Investigative, Artistic, Social, Enterprising, and Conventional. What realm of duty suits your essence? Let this extractor guide your calling.`,
  },
  {
    realmName: 'Cipherhold',
    title: 'Gardner’s Intelligence Array',
    description: `In the vaults of Cipherhold rests Gardner’s Array — a multi-lens construct identifying eight (sometimes nine) intelligences. Logical? Linguistic? Spatial? Interpersonal? This assessment illuminates how your mind absorbs and manipulates reality. Knowledge is not linear — nor is power.`,
  },
  //KAEL'ZORAH QUIZZES
  {
  realmName: "Kael'Zorah",
    title: "The Western Wheel",
    description: `Based on the twelve constellations of the Western sky, this chart explores your Sun, Moon, and Rising signs — archetypes that shape your identity, emotions, and destiny. In Kael'Zorah, these celestial signatures are seen as the soul's guiding flames through space and time.`,
    questions: []
  },
  {
    realmName: "Kael'Zorah",
    title: "The Vedic Wheel (Jyotish)",
    description: `Also called Jyotish — the "Science of Light" — Vedic Astrology traces your karmic path using lunar constellations and planetary alignments. In Kael’Zorah, this Eastern star-map offers insights into your soul's design and spiritual timing across lifetimes.`,
    questions: []
  },
  {
    realmName: "Kael'Zorah",
    title: "Human Design System",
    description: `A modern mystical framework combining astrology, I Ching, Kabbalah, and more — Human Design reveals how your energy moves through the world. In the realm of Kael’Zorah, it’s a soul schematic encoded at your birth, offering clarity on your life strategy and inner truth.`,
    questions: []
  },
  {
    realmName: "Kael'Zorah",
    title: "The Mayan Wheel",
    description: `Rooted in the Tzolk'in calendar of the ancient Maya, this system interprets your birth energy through day signs and galactic tones. In Kael’Zorah, these star glyphs echo a soul purpose tied to cosmic cycles and ancestral memory.`,
    questions: []
  },
  {
    realmName: "Kael'Zorah",
    title: "Kabbalah Numerology & Tree of Life",
    description: `Merging Hebrew mysticism and number symbolism, Kabbalah Numerology reveals how your name and birth date connect to the Tree of Life. In this realm, each number resonates with a Sephirah — a point of spiritual power tracing your divine journey.`,
    questions: []
  },
  {
    realmName: "Kael'Zorah",
    title: "The Chinese Wheel",
    description: `A 12-year cycle guided by animal spirits and elemental forces, the Chinese Zodiac reveals your core archetype and life patterns. In Kael’Zorah, these symbols dance through the cosmos, shaping your strengths, relationships, and luck across celestial seasons.`,
    questions: []
  },
  {
    realmName: "Kael'Zorah",
    title: "Four Pillars of Destiny (BaZi)",
    description: `BaZi decodes your fate through the Year, Month, Day, and Hour of your birth — each linked to heavenly stems and earthly branches. In this realm, it’s a time-forged script revealing how elemental forces shape your destiny and hidden potential.`,
    questions: []
  },
  {
    realmName: "Kael'Zorah",
    title: "Core Numerology",
    description: `Using your birth date and full name, Numerology uncovers your Life Path, Destiny Number, and soul motivations. In Kael’Zorah, these numbers pulse with ancient cosmic rhythm, offering a clear lens into your life’s purpose and spiritual growth.`,
    questions: []
  },
  //ELDERGLEN CROSSING QUIZZES

  {
    realmName: "Elderglenn Crossing",
    title: "The Shadow Mirror (Jungian Archetypes)",
    description: `Enter the misted cave of your subconscious and face The Shadow Mirror — a test based on Carl Jung’s archetypes and shadow work. Discover the hidden parts of your psyche: the Rebel, the Orphan, the Sage, and more. In Elderglenn, this rite reveals your buried truths and guides you toward soul integration.`,
    questions: []
  },
  {
    realmName: "Elderglenn Crossing",
    title: "The Divine Thread (Goddess Archetypes)",
    description: `Beneath the moonlit canopy, the Divine Thread weaves your essence through ancient archetypes of the feminine. Are you an Artemis of independence, a Demeter of nurture, or an Aphrodite of passion? This assessment, rooted in mythology and psychology, unveils which goddess walks with you in the wilds of Elderglenn.`,
    questions: []
  },
  {
    realmName: "Elderglenn Crossing",
    title: "Soulborn Path (Spiritual Archetypes)",
    description: `Follow the whispering wind deeper into the grove and encounter the Soulborn Path — a test that reveals whether you are a Mystic, a Healer, a Guardian, or a Visionary. Inspired by sacred archetypal work, this discovery brings clarity to your energetic role in both worlds: the physical and the unseen.`,
    questions: []
  },
  {
    realmName: "Elderglenn Crossing",
    title: "Call of the Totem (Animal Spirit Guide)",
    description: `In the silence between branches, your animal spirit stirs. The Call of the Totem is a guide through ancient animistic wisdom and shamanic traditions to uncover your core animal ally. Is it Wolf, Hawk, Deer, or Serpent? This journey reveals the creature that echoes your soul’s instinct.`,
    questions: []
  },
  {
    realmName: "Elderglenn Crossing",
    title: "The Elemental Rite (Affinity Test)",
    description: `Earth anchors. Fire drives. Water heals. Air inspires. Spirit unites. The Elemental Rite is an introspective alignment test to determine your dominant elemental force. Rooted in spiritual and energetic philosophies, this trial reveals which force flows strongest through your being within the sacred wilds of Elderglenn.`,
    questions: []
  },


  //THE DREAMLINK CHANNEL QUIZZES
 { 
    realmName: "The Dreamlink Channel",
    title: "The Sorting Scrolls",
    description: `Drawn from the magical halls of Hogwarts, the Sorting Scrolls channel the enchanted Hat’s insight to place you where you belong — brave Gryffindor, wise Ravenclaw, loyal Hufflepuff, or cunning Slytherin. Your values, instincts, and ambitions will reveal your true magical kin. (Hogwarts House Test)`,
    questions: []
  },
  {
    realmName: "The Dreamlink Channel",
    title: "The Divergent Divide",
    description: `Step into the fractured society of post-apocalyptic Chicago. Will you choose selflessness, bravery, honesty, intelligence, or peace? This Divergent trial examines your worldview to align you with one of five factions — Abnegation, Dauntless, Candor, Erudite, or Amity — or reveal if you're Divergent. (Divergent Faction Alignment)`,
    questions: []
  },
  {
    realmName: "The Dreamlink Channel",
    title: "The Races of Arda",
    description: `From the fires of Mount Doom to the woods of Lothlórien, the lands of Middle-earth call to you. Are you a wise Elf, stalwart Dwarf, noble Man, curious Hobbit, or something older and more mysterious? This mythic reading places you among Tolkien’s legendary peoples based on spirit, strength, and heart. (Lord of the Rings Identity)`,
    questions: []
  },
  {
    realmName: "The Dreamlink Channel",
    title: "The Bending Pathways",
    description: `Water. Earth. Fire. Air. Long ago, the four nations lived in harmony… Which element calls to your soul? The Bending Pathways journey reveals your elemental nature based on temperament, balance, and inner will. Are you a Firebender, Earthbender, Waterbender, Airbender — or something beyond? (Avatar: The Last Airbender Element Test)`,
    questions: []
  },
  {
    realmName: "The Dreamlink Channel",
    title: "The Capitol Index",
    description: `The Capitol watches. The Districts endure. Where would you rise from in Panem’s fractured world? This immersive reading places you in one of the 13 Districts — from the coal-rich shadows of District 12 to the rebel secrets of District 13 — based on your survival instincts, traits, and drive. (Hunger Games District Test)`,
    questions: []
  },
  {
    realmName: "The Dreamlink Channel",
    title: "The Jedi or the Sith?",
    description: `A long time ago in a galaxy far, far away... the Force flows through all living things, but which side do you walk? This Star Wars transmission unveils your moral resonance — Jedi, Sith, or Gray — by exploring your instincts toward peace, power, or balance. (Star Wars Alignment Test)`,
    questions: []
  },
  {
    realmName: "The Dreamlink Channel",
    title: "The Elder Scrolls Sigil",
    description: `Born under a sign, shaped by war and wonder — what race and guild does your soul claim in the world of Tamriel? Are you a Nord warrior, Khajiit thief, Altmer mage, or something more elusive? Let the winds of Skyrim guide your destiny. (Skyrim Race & Guild Affinity)`,
    questions: []
  },
  {
    realmName: "The Dreamlink Channel",
    title: "The Inner Pantheon",
    description: `High upon Mount Olympus, ancient powers still stir. Are you a strategic Athena, passionate Aphrodite, wild Artemis, or thunderous Zeus? This divine alignment reveals the mythic energy within — the Olympian archetype that reflects your spirit. (Greek God Archetype)`,
    questions: []
  },
  {
    realmName: "The Dreamlink Channel",
    title: "The Feywild Compass",
    description: `Before you were forged in flesh, your essence flickered in the Feywilds and Forgotten Realms. This arcane reflection channels your energy into one of Dungeons & Dragons’ legendary lineages — Elf, Tiefling, Dragonborn, Gnome, and more — while unearthing your soul’s backstory. (D&D Race & Origin Test)`,
    questions: []
  },
  {
    realmName: "The Dreamlink Channel",
    title: "The Echoes of Alignment",
    description: `From the fractured mirror of myth, your moral compass emerges. Are you Lawful Good, Chaotic Neutral, or something more complex? This classic journey maps your ethics on the Dungeons & Dragons alignment axis — revealing your role in the great moral web. (D&D Alignment Test)`,
    questions: []
  },
  {
    realmName: "The Dreamlink Channel",
    title: "The Inner Guildmark",
    description: `Are you a cunning Rogue, a devoted Cleric, a fiery Mage, or a battle-worn Warrior? This class reflection reads your combat style, values, and instincts to assign you the adventuring role your soul would carry in any realm. (Fantasy RPG Class Test)`,
    questions: []
  }
  ]



const seedQuizzes = async () => {
  try {
    await connectDB();
    for (const quiz of quizData) {
      const realm = await Realm.findOne({ name: quiz.realmName });

      if (!realm) {
        console.warn(`Realm not found: ${quiz.realmName}`);
        continue;
      }

      const newQuiz = new Quiz({
        title: quiz.title,
        description: quiz.description
      });

      const savedQuiz = await newQuiz.save();

      // Push quiz ID into realm's quizzes array
      realm.quizzes.push(savedQuiz._id);
      await realm.save();

      console.log(`Added quiz "${quiz.title}" to realm "${realm.name}"`);
    }

    console.log('Quizzes seeded successfully.');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding quizzes:', error);
    process.exit(1);
  }
};

seedQuizzes();