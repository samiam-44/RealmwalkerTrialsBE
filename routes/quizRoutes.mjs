import express from 'express';
import {
  getAllQuizzes,
  getQuizById,
  createQuiz,
  updateQuiz,
  deleteQuiz,
} from '../controllers/quizController.mjs';const router = express.Router();

// GET /api/quizzes - fetch all quizzes with realm and questions
router.get('/', getAllQuizzes);

// GET /api/quizzes/:id - fetch quiz by ID
router.get('/:id', getQuizById);

// POST /api/quizzes - create new quiz
router.post('/', createQuiz);

// PUT /api/quizzes/:id - update quiz by ID
router.put('/:id', updateQuiz);

// DELETE /api/quizzes/:id - delete quiz by ID
router.delete('/:id', deleteQuiz);

export default router;
