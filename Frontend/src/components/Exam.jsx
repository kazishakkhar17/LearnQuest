import React, { useEffect, useState } from "react";
import axios from "axios";

const Exams = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(600); // 10 minutes in seconds
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [isFinished, setIsFinished] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null); // Track selected answer
  const [answerColors, setAnswerColors] = useState([]); // Store colors for each question's options

  // Fetch questions only once when component mounts
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get("http://localhost:4000/questions");

        const randomQuestions = response.data.sort(() => 0.5 - Math.random()).slice(0, 10); // Shuffle and get 10 questions
        setQuestions(randomQuestions);
        // Initialize answerColors with default colors for each question
        setAnswerColors(randomQuestions.map(() => ({ selected: null, colors: ["bg-gray-600", "bg-gray-600", "bg-gray-600", "bg-gray-600"] })));
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    fetchQuestions();
  }, []);

  // Timer countdown
  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0 && !isFinished) {
        setTimer((prevTimer) => prevTimer - 1);
      } else if (timer === 0 || isFinished) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timer, isFinished]);

  // Format timer to mm:ss
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  // Function to handle answer selection
  const handleAnswer = (selectedOption) => {
    const currentQuestion = questions[currentQuestionIndex];
    if (!answeredQuestions.includes(currentQuestion._id)) {
      const newAnswerColors = [...answerColors];
      let newColors = [...newAnswerColors[currentQuestionIndex].colors];

      if (selectedOption === currentQuestion.correctAnswer) {
        newColors[currentQuestion.options.indexOf(selectedOption)] = "bg-green-500"; // Mark correct as green
        setScore((prevScore) => prevScore + 1); // Add score if correct
      } else {
        newColors[currentQuestion.options.indexOf(selectedOption)] = "bg-red-500"; // Mark wrong as red
        newColors[currentQuestion.options.indexOf(currentQuestion.correctAnswer)] = "bg-green-500"; // Mark correct as green
      }

      // Update answer colors for this question
      newAnswerColors[currentQuestionIndex].colors = newColors;
      setAnswerColors(newAnswerColors); // Save updated color for this question
      setSelectedAnswer(selectedOption); // Store the selected answer
      setAnsweredQuestions((prev) => [...prev, currentQuestion._id]); // Mark question as answered
    }
  };

  // Navigate to next question
  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setSelectedAnswer(null); // Reset selected answer when moving to next question
    }
  };

  // Navigate to previous question
  const prevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
      setSelectedAnswer(null); // Reset selected answer when moving to previous question
    }
  };

  // Check if all questions have been answered
  const allAnswered = answeredQuestions.length === questions.length;

  // Set exam as finished
  const finishExam = () => {
    setIsFinished(true);
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-900 min-h-screen relative">
      <br />
      <br />
      <h1 className="text-4xl font-semibold text-green-600 mb-6">Exams</h1>
      <p className="text-xl text-gray-400 mb-4">Time Remaining: {formatTime(timer)}</p>
      {questions.length > 0 ? (
        <div className="bg-white border-2 border-gray-400 p-8 rounded-lg shadow-lg w-full max-w-xl mb-6"> {/* Made the question area larger */}
          <h3 className="text-2xl text-gray-800 font-semibold mb-4">{currentQuestionIndex + 1}. {questions[currentQuestionIndex].questionText}</h3>

          <div className="flex flex-col space-y-4">
            {questions[currentQuestionIndex].options.map((option, index) => {
              const optionColor = answerColors[currentQuestionIndex]?.colors[index] || "bg-gray-400";

              return (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  className={`${optionColor} text-white text-left px-6 py-4 rounded-xl w-full font-medium transition-colors`} // More rounded buttons
                  disabled={answeredQuestions.includes(questions[currentQuestionIndex]._id)} // Disable buttons after answering
                >
                  {option}
                </button>
              );
            })}
          </div>
        </div>
      ) : (
        <p className="text-gray-500">Loading questions...</p>
      )}
      <p className="text-xl text-gray-300 mt-4">Current Score: {score}</p>

      {allAnswered && !isFinished && (
        <button
          onClick={finishExam}
          className="bg-blue-500 text-white px-6 py-3 mt-4 rounded-lg hover:bg-blue-400 transition-colors"
        >
          Finish Exam
        </button>
      )}

      {isFinished && (
        <div className="mt-6 p-6 bg-green-200 text-lg font-bold text-gray-700 rounded-lg">
          <p>Your score: {score}</p>
        </div>
      )}

      {/* Navigation buttons */}
      <button
        onClick={prevQuestion}
        className="absolute left-10 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white px-8 py-4 rounded-full hover:bg-gray-400 transition-colors" // More rounded buttons
        disabled={currentQuestionIndex === 0}
      >
        Previous
      </button>
      <button
        onClick={nextQuestion}
        className="absolute right-10 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white px-8 py-4 rounded-full hover:bg-gray-400 transition-colors" // More rounded buttons
        disabled={currentQuestionIndex === questions.length - 1}
      >
        Next
      </button>
    </div>
  );
};

export default Exams;
