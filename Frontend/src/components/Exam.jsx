import React, { useEffect, useState } from "react";
import axios from "axios";

const Exams = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(120); // 2 minutes in seconds
  const [answeredQuestions, setAnsweredQuestions] = useState([]);

  useEffect(() => {
    // Fetch two random questions from the database
    const fetchQuestions = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/questions");
        const randomQuestions = response.data.sort(() => 0.5 - Math.random()).slice(0, 2); // Shuffle and get 2 questions
        setQuestions(randomQuestions);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    fetchQuestions();

    // Timer countdown
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 1) {
          clearInterval(interval);
          alert("Time's up! Your score: " + score);
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [score]);

  // Function to handle answer selection
  const handleAnswer = (selectedAnswer) => {
    const currentQuestion = questions[currentQuestionIndex];
    if (!answeredQuestions.includes(currentQuestion._id)) {
      if (selectedAnswer === currentQuestion.correctAnswer) {
        setScore((prevScore) => prevScore + 1); // Add score if correct
      }
      setAnsweredQuestions((prev) => [...prev, currentQuestion._id]); // Mark question as answered
    }

    // Move to the next question
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      alert(`You have completed the exam! Your score is ${score}`);
    }
  };

  return (
    <div>
      <h1>Exams</h1>
      <p>Time Remaining: {timer}s</p>
      {questions.length > 0 ? (
        <div>
          <h3>{questions[currentQuestionIndex].questionText}</h3>
          <div>
            {questions[currentQuestionIndex].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                style={{ margin: "5px", padding: "10px" }}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <p>Loading questions...</p>
      )}
      <p>Current Score: {score}</p>
    </div>
  );
};

export default Exams;
