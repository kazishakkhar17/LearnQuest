import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  questionText: {
    type: String,
    required: true,
  },
  options: {
    type: [String],
    required: true,
    validate: {
      validator: function(value) {
        return value.length === 4; // Ensures there are exactly 4 options
      },
      message: 'There must be exactly 4 options',
    },
  },
  correctAnswer: {
    type: String,
    required: true,
    validate: {
      validator: function(value) {
        return this.options.includes(value); // Ensure the correct answer is one of the options
      },
      message: 'Correct answer must be one of the options',
    },
  },
});

const Question = mongoose.model('Question', questionSchema);

export default Question;

