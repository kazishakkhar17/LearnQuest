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
        const { data } = await axios.get('http://localhost:4000/questions');
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
      const response = await axios.post('http://localhost:4000/questions', formData);
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

  // Handle question deletion
  const handleDeleteQuestion = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/questions/${id}`);
      setQuestions(questions.filter(question => question._id !== id));
      console.log('Question deleted successfully');
    } catch (error) {
      console.error('Error deleting question:', error);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Admin Exam Board</h1>
      <p className="mb-6">This page is only visible to admins.</p>

      <section>
        <h2 className="text-xl font-semibold mb-4">Existing Questions</h2>
        {questions.length > 0 ? (
          <ul>
            {questions.map((question, index) => (
              <li key={question._id} className="mb-4 p-4 border border-gray-300 rounded-md shadow-lg">
                <p><strong>Q{index + 1}:</strong> {question.questionText}</p>
                <ul className="ml-4">
                  {question.options.map((option, idx) => (
                    <li key={idx}>{option}</li>
                  ))}
                </ul>
                <p><strong>Correct Answer:</strong> {question.correctAnswer}</p>

                <button
                  onClick={() => handleDeleteQuestion(question._id)}
                  className="ml-4 bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No questions added yet.</p>
        )}
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Add New Question</h2>
        <form onSubmit={handleAddQuestion} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Question Text:</label>
            <input
              type="text"
              name="questionText"
              value={formData.questionText}
              onChange={handleInputChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Options:</label>
            {formData.options.map((option, index) => (
              <input
                key={index}
                type="text"
                name="option"
                value={option}
                onChange={(e) => handleInputChange(e, index)}
                required
                placeholder={`Option ${index + 1}`}
                className="w-1/2 p-2 mb-2 border border-gray-300 rounded-md"
              />
            ))}
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Correct Answer:</label>
            <input
              type="text"
              name="correctAnswer"
              value={formData.correctAnswer}
              onChange={handleInputChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600">
            Add Question
          </button>
        </form>
      </section>
    </div>
  );
}

export default AdminExamBoard;
