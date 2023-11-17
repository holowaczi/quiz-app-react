import React, { useState } from 'react';
import './App.css';

const questions = [
  {
    question: 'What is the capital of France?',
    options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
    correctAnswer: 'Paris',
  },
  {
    question: 'Which programming language is this app built with?',
    options: ['Java', 'Python', 'JavaScript', 'C++'],
    correctAnswer: 'JavaScript',
  },
  {
    question: 'What is the largest planet in our solar system?',
    options: ['Earth', 'Jupiter', 'Mars', 'Venus'],
    correctAnswer: 'Jupiter',
  },
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleAnswerClick = (selectedOption) => {
    setSelectedOption(selectedOption);
    setShowAnswer(true);

    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setShowAnswer(false);
    }else{
      setShowScore(true);
      setShowAnswer(false);
    };
  }

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          <h2>Your Score: {score}</h2>
          <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <>
          <div className="question-section">
            <h2>Question {currentQuestion + 1}</h2>
            <p>{questions[currentQuestion].question}</p>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerClick(option)}
              className={
                  showAnswer 
                    ? option === questions[currentQuestion].correctAnswer 
                      ? 'correct'
                      : 'incorrect' 
                  : 'answer'
              }
            >
            {option}
          </button>
        ))}
      </div>
      </>
      )}
    <button
      className = 'next-question'
      onClick={() => nextQuestion()}
      style ={{display: showAnswer ? 'block' : 'none'}}    
    >
      Next Question
    </button>
    </div>
  );
}

export default App;

