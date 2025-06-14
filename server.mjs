import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/conn.mjs';
import User from './models/User.mjs';
import enneagramRoutes from './routes/answerRoutes/CipherholdRoutes/enneagramRoutes.mjs'
import mbtiRoutes from './routes/answerRoutes/CipherholdRoutes/mbtiRoutes.mjs'
import cors from 'cors'; //helps backend talk to the front


//ROUTE IMPORTS
import realmRoutes from './routes/realmRoutes.mjs'
import quizRoutes from './routes/quizRoutes.mjs';
//SETUP
dotenv.config()
const app = express()
const PORT = process.env.PORT || 3000
app.use(cors({
  origin: 'http://localhost:5173', // Vite default dev server
  credentials: true // for future to use cookies/auth
}));
//MIDDLEWARE TO PARSE JSON BODIES
app.use(express.json());
connectDB()

//REGISTER ROUTES
app.use('/api/realms', realmRoutes);
app.use('/api/quizzes', quizRoutes);
app.use('/api', enneagramRoutes);
app.use('/api', mbtiRoutes);


// ROOT ROUTE
app.get('/api', (req, res) => {
  res.send('Hello from the Realmwalker Trials backend!');
});



//ERROR HANDLER
app.use((err, _req, res, _next) => {
  res.status(500).json({ msg: err.message });
});

//START SERVER LISTENER
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

