import Question from '../models/Question.mjs';

/**
 * Get all questions
* @route GET /api/questions
 */
export async function getAllQuestions(req, res, next) {
    try {
        // Query all questions, populating the 'quiz' field for context
        const questions = await Question.find().populate("quiz");
        // Send the full list of questions as JSON response
        res.json(questions);
    } catch (err) {
        // Forward any errors to Express error-handling middleware
        next(err);
    }
}

/**
 * Get all questions for a specific quiz
 * @route GET /api/questions/quiz/:quizId
 */
export async function getQuestionsByQuiz(req, res, next) {
    try {
        const { quizId } = req.params; // Extract quizId from URL params
        // Find all questions linked to the given quiz ID
        const questions = await Question.find({ quiz: quizId });
        // Return the filtered questions as JSON
        res.json(questions);
    } catch (err) {
        next(err);
    }
}

/**
 * Create a new question
 * @route POST /api/questions
 */
export async function createQuestion(req, res, next) {
    try {
        // Destructure the incoming request body
        const { text, quiz, options } = req.body;
        const question = new Question({ text, quiz, options });

        // Save the question to MongoDB
        await question.save();

        // Respond with 201 Created and the new question JSON
        res.status(201).json(question);
    } catch (err) {
        next(err);
    }
}

/**
 * Update an existing question
 * @route PUT /api/questions/:id
 */
export async function updateQuestion(req, res, next) {
    try {
        // Find question by ID and apply updates from req.body
        const updated = await Question.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!updated) return res.status(404).json({ msg: 'Question not found' });


        res.json(updated);
    } catch (err) {
        next(err);
    }
}

/**
 *Delete question by its ID
 * @route DELETE /api/questions/:id
 */
export async function deleteQuestion(req, res, next) {
    try {
        await Question.findByIdAndDelete(req.params.id);

        res.json({ msg: "Question deleted successfully" });
    } catch (err) {
        next(err);
    }
}

