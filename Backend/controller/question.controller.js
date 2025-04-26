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
    const savedQuestion = await newQuestion.save();  // Save question and log it

    // Log the saved question for debugging
    console.log("Question saved successfully:", savedQuestion);

    // Respond with the newly added question
    res.status(201).json(savedQuestion);
  } catch (error) {
    console.log("Error:", error); // Log error for debugging
    res.status(400).json({ message: "Error adding question", error }); // Respond with an error if saving fails
  }
};

// Controller function to delete a question
export const deleteQuestion = async (req, res) => {
  const { id } = req.params; // Get question ID from URL parameters

  try {
    const deletedQuestion = await Question.findByIdAndDelete(id); // Delete the question by ID

    if (!deletedQuestion) {
      return res.status(404).json({ message: "Question not found" }); // If no question is found with the given ID
    }

    // Respond with success message if deletion is successful
    res.status(200).json({ message: "Question deleted successfully", deletedQuestion });
  } catch (error) {
    console.log("Error:", error); // Log error for debugging
    res.status(500).json({ message: "Error deleting question", error }); // Respond with an error if deletion fails
  }
};
