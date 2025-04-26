import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AdminExamBoard() {
  const [questions, setQuestions] = useState([]);
  const [formData, setFormData] = useState({
    questionText: '',
    options: ['', '', '', ''],
    correctAnswer: '',
  });

  // Fetch all questions
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        

        const { data } = await axios.get('/api/questions');
        setQuestions(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchQuestions();
  }, []);

  // Handle form input changes
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    if (name === 'option') {
      const newOptions = [...formData.options];
      newOptions[index] = value;
      setFormData({ ...formData, options: newOptions });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Handle form submission
  const handleAddQuestion = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/api/questions', formData);
      setQuestions(prev => [...prev, response.data]);
      setFormData({
        questionText: '',
        options: ['', '', '', ''],
        correctAnswer: '',
      });
    } catch (error) {
      console.error('Error adding question:', error);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Admin Exam Board</h1>
      <p>This page is only visible to admins.</p>

      <section>
        <h2>Existing Questions</h2>
        {questions.length > 0 ? (
          <ul>
            {questions.map((question, index) => (
              <li key={index} style={{ marginBottom: '15px' }}>
                <p><strong>Q{index + 1}:</strong> {question.questionText}</p>
                <ul>
                  {question.options.map((option, idx) => (
                    <li key={idx}>{option}</li>
                  ))}
                </ul>
                <p><strong>Correct Answer:</strong> {question.correctAnswer}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No questions added yet.</p>
        )}
      </section>

      <section style={{ marginTop: '30px' }}>
        <h2>Add New Question</h2>
        <form onSubmit={handleAddQuestion}>
          <div>
            <label>Question Text:</label><br />
            <input
              type="text"
              name="questionText"
              value={formData.questionText}
              onChange={handleInputChange}
              required
              style={{ width: '300px', marginBottom: '10px' }}
            />
          </div>

          <div>
            <label>Options:</label><br />
            {formData.options.map((option, index) => (
              <input
                key={index}
                type="text"
                name="option"
                value={option}
                onChange={(e) => handleInputChange(e, index)}
                required
                placeholder={`Option ${index + 1}`}
                style={{ width: '300px', marginBottom: '10px', display: 'block' }}
              />
            ))}
          </div>

          <div>
            <label>Correct Answer:</label><br />
            <input
              type="text"
              name="correctAnswer"
              value={formData.correctAnswer}
              onChange={handleInputChange}
              required
              style={{ width: '300px', marginBottom: '10px' }}
            />
          </div>

          <button type="submit">Add Question</button>
        </form>
      </section>
    </div>
  );
}

export default AdminExamBoard;
