import express from 'express';
import { getAllQuizzes, getQuizById } from '../controllers/quizController.mjs';

const router = express.Router();

//GET all quizzes
router.get('/', getAllQuizzes)

//GET a single quiz by ID
router.get('/:id', getQuizById);

export default router