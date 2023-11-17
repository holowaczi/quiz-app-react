import React, { useState } from 'react';
import './App.css';

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const Allquestions = require('./data.js');

const first_questions = shuffleArray(Allquestions).slice(0, 10);

function App() {
  const [questions, setQuestions] = useState(first_questions);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleAnswerClick = (selectedOption) => {
    if (showAnswer===false){
    setSelectedOption(selectedOption);
    setShowAnswer(true);

    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
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
    setQuestions(shuffleArray(Allquestions).slice(0,10));
  };

  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          <h2>Your Score: {score}/{questions.length}</h2>
          <button className="restart" onClick={restartQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <div className="quiz -section">
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
                    ? selectedOption === questions[currentQuestion].correctAnswer
                      ? option === selectedOption
                        ? 'correct'
                        : 'answer'
                      : option === selectedOption
                        ? 'incorrect'
                        : option === questions[currentQuestion].correctAnswer
                          ? 'correct'
                          : 'answer'
                  : 'answer'
              }
              disabled = {showAnswer}
            >
            {option}
          </button>
        ))}
      </div>
      </div>
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

