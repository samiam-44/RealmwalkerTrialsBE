import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/conn.mjs';
import User from './models/User.mjs';
//setup
dotenv.config()
const app = express()
const PORT = process.env.PORT || 3000

//Middleware to parse JSON bodies
app.use(express.json());
connectDB()

// ROUTES
app.get('/', (req, res) => {
  res.send('Hello from Realms of Identity backend!');
});
app.post('/users', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Error handling middleware
app.use((err, _req, _next) => {
  res.status(500).json({ msg: err.message });
})

//Start server Listener

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
 
