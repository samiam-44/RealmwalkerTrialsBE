import Quiz from '../models/Quiz.mjs';

/**
 * Get all quizzes
 * @route GET /api/quizzes
 */
export async function getAllQuizzes(req, res, next) {
    try {
        // Find all quizzes and populate related realm and questions
        const quizzes = await Quiz.find().populate('realm').populate('questions');
        res.json(quizzes); // Return all quizzes as JSON
    } catch (err) {
        next(err); // Pass error to error-handling middleware
    }
}

/**
 * Get a single quiz by ID
 * @route GET /api/quizzes/:id
 */
export async function getQuizById(req, res, next) {
    try {
        const quiz = await Quiz.findById(req.params.id).populate('realm').populate('questions');
        if (!quiz) return res.status(404).json({ msg: 'Quiz not found' });
        res.json(quiz);
    } catch (err) {
        next(err);
    }
}
/**
 * 
 * Get quizzes by realmID
 * @route GET /api/quizzes/by-realm/:realmId
 * */
export async function GetQuizByRealmId(req, res, next) {
  try {
    const quizzes = await Quiz.find({ realm: req.params.realmId });
    res.json(quizzes);
  } catch (err) {
    next(err);
  }
}



/**
 * Create a new quiz
 * @route POST /api/quizzes
 */
export async function createQuiz(req, res, next) {
    try {
        const { title, description, realm, type } = req.body;
        const newQuiz = new Quiz({ title, description, realm, type });
        const savedQuiz = await newQuiz.save();
        res.status(201).json(savedQuiz);
    } catch (err) {
        next(err);
    }
}

/**
 * Update an existing quiz
 * @route PUT /api/quizzes/:id
 */
export async function updateQuiz(req, res, next) {
    try {
        const updatedQuiz = await Quiz.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedQuiz) return res.status(404).json({ msg: 'Quiz not found' });
        res.json(updatedQuiz);
    } catch (err) {
        next(err);
    }
}

/**
 * Delete a quiz
 * @route DELETE /api/quizzes/:id
 */
export async function deleteQuiz(req, res, next) {
    try {
        await Quiz.findByIdAndDelete(req.params.id);
        res.json({ msg: 'Quiz deleted successfully' });
    } catch (err) {
        next(err);
    }
}