import Question from "../model/question.model.js";

// Controller function to get all questions
export const getQuestion = async (req, res) => {
  try {
    const questions = await Question.find(); // Fetch all questions from the database
    res.status(200).json(questions); // Respond with the questions
  } catch (error) {
    console.log("Error:", error); // Log error for debugging
    res.status(500).json(error); // Respond with an error if fetching fails
  }
};

// Controller function to add a new question
export const addQuestion = async (req, res) => {
  const { questionText, options, correctAnswer } = req.body;

  try {
    // Create a new question instance
    const newQuestion = new Question({
      questionText,
      options,
      correctAnswer,
    });

    // Save the new question to the database
    await newQuestion.save();

    // Respond with the newly added question
    res.status(201).json(newQuestion);
  } catch (error) {
    console.log("Error:", error); // Log error for debugging
    res.status(400).json({ message: "Error adding question", error }); // Respond with an error if saving fails
  }
};
