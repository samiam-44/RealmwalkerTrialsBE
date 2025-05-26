import express from 'express';
import {
  getAllQuestions,
  getQuestionsByQuiz,
  createQuestion,
  updateQuestion,
  deleteQuestion,
} from '../controllers/questionController.mjs';

const router = express.Router();

// GET /api/questions - fetch all questions
router.get('/', getAllQuestions);

// GET /api/questions/quiz/:quizId - fetch questions by quiz ID
router.get('/quiz/:quizId', getQuestionsByQuiz);

// POST /api/questions - create new question
router.post('/', createQuestion);

// PUT /api/questions/:id - update question by ID
router.put('/:id', updateQuestion);

// DELETE /api/questions/:id - delete question by ID
router.delete('/:id', deleteQuestion);

export default router;
