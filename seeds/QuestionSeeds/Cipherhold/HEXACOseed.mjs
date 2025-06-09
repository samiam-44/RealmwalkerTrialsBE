import mongoose from 'mongoose';
import Question from '../../../models/Question.mjs';
import Quiz from '../../../models/Quiz.mjs';
import connectDB from '../../../db/conn.mjs';

const HEXACOQuestions = [
    {
        title: "HEXACO Mirror Grid",
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
        title: "HEXACO Mirror Grid",
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
        title: "HEXACO Mirror Grid",
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
        title: "HEXACO Mirror Grid",
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
        title: "HEXACO Mirror Grid",
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
        title: "HEXACO Mirror Grid",
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
        title: "HEXACO Mirror Grid",
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
        title: "HEXACO Mirror Grid",
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
        title: "HEXACO Mirror Grid",
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
        title: "HEXACO Mirror Grid",
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
        title: "HEXACO Mirror Grid",
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
        title: "HEXACO Mirror Grid",
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
        title: "HEXACO Mirror Grid",
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
        title: "HEXACO Mirror Grid",
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
        title: "HEXACO Mirror Grid",
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
        title: "HEXACO Mirror Grid",
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
        title: "HEXACO Mirror Grid",
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
        title: "HEXACO Mirror Grid",
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
        title: "HEXACO Mirror Grid",
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
        title: "HEXACO Mirror Grid",
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
        title: "HEXACO Mirror Grid",
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
        title: "HEXACO Mirror Grid",
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
        title: "HEXACO Mirror Grid",
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
        title: "HEXACO Mirror Grid",
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
        title: "HEXACO Mirror Grid",
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
        title: "HEXACO Mirror Grid",
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
        title: "HEXACO Mirror Grid",
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
        title: "HEXACO Mirror Grid",
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
        title: "HEXACO Mirror Grid",
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
        title: "HEXACO Mirror Grid",
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
        title: "HEXACO Mirror Grid",
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
        title: "HEXACO Mirror Grid",
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
        title: "HEXACO Mirror Grid",
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
        title: "HEXACO Mirror Grid",
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
        title: "HEXACO Mirror Grid",
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
        title: "HEXACO Mirror Grid",
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
        title: "HEXACO Mirror Grid",
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
        title: "HEXACO Mirror Grid",
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
        title: "HEXACO Mirror Grid",
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
        title: "HEXACO Mirror Grid",
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
        title: "HEXACO Mirror Grid",
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
        title: "HEXACO Mirror Grid",
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
        title: "HEXACO Mirror Grid",
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
        title: "HEXACO Mirror Grid",
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
        title: "HEXACO Mirror Grid",
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
        title: "HEXACO Mirror Grid",
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
        title: "HEXACO Mirror Grid",
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
        title: "HEXACO Mirror Grid",
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
        title: "HEXACO Mirror Grid",
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
        title: "HEXACO Mirror Grid",
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
        title: "HEXACO Mirror Grid",
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
        title: "HEXACO Mirror Grid",
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
        title: "HEXACO Mirror Grid",
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
        title: "HEXACO Mirror Grid",
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
        title: "HEXACO Mirror Grid",
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
        title: "HEXACO Mirror Grid",
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
        title: "HEXACO Mirror Grid",
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
        title: "HEXACO Mirror Grid",
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
        title: "HEXACO Mirror Grid",
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
        title: "HEXACO Mirror Grid",
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
]

// Seeder function for HEXACO questions
const seedHEXACOQuestions = async () => {
    try {
        // Connect to the database
        await connectDB();

        // Iterate through all HEXACO questions
        for (const q of HEXACOQuestions) {
            // Find the quiz document by title
            const quiz = await Quiz.findOne({ title: q.title });

            // Warn and skip if quiz is not found
            if (!quiz) {
                console.warn(`Quiz not found: ${q.title}`);
                continue;
            }

            // Destructure quizTitle off the question object before saving
            const { title, ...questionData } = q;

            // Create a new Question document with additional HEXACO fields
            const newQuestion = new Question({
                ...questionData,
                quiz: quiz._id, // Link to the correct quiz
            });

            // Save the question to the database
            const savedQuestion = await newQuestion.save();

            // Push the new question ID into the quiz.questions array
            if (!quiz.questions) quiz.questions = [];
            quiz.questions.push(savedQuestion._id);

            // Save the updated quiz document
            await quiz.save();

            console.log(`Added HEXACO question: "${q.text}" under ${q.trait}/${q.facet}`);
        }

        console.log('All HEXACO questions seeded successfully.');
        process.exit(0); // Exit the process successfully
    } catch (error) {
        console.error('Error seeding HEXACO questions:', error);
        process.exit(1); // Exit with failure
    }
};

// Run the seed function
seedHEXACOQuestions();