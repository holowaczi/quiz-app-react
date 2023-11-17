import React, { useState } from 'react';
import './App.css';

const questions = [
  {
    "question": "What is the longest river in the world?",
    "options": ["Amazon", "Nile", "Yangtze", "Mississippi"],
    "correctAnswer": "Amazon"
  },
  {
    "question": "Name the capital city of Australia.",
    "options": ["Sydney", "Canberra", "Melbourne", "Perth"],
    "correctAnswer": "Canberra"
  },
  {
    "question": "Which continent is known as the 'Land of the Rising Sun'?",
    "options": ["Asia", "Europe", "Australia", "Africa"],
    "correctAnswer": "Asia"
  },
  {
    "question": "What is the chemical symbol for gold?",
    "options": ["Au", "Ag", "Fe", "Cu"],
    "correctAnswer": "Au"
  },
  {
    "question": "Who developed the theory of general relativity?",
    "options": ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Stephen Hawking"],
    "correctAnswer": "Albert Einstein"
  },
  {
    "question": "What is the largest planet in our solar system?",
    "options": ["Earth", "Jupiter", "Mars", "Venus"],
    "correctAnswer": "Jupiter"
  },
  {
    "question": "In which year did World War II end?",
    "options": ["1943", "1945", "1950", "1939"],
    "correctAnswer": "1945"
  },
  {
    "question": "Who was the first President of the United States?",
    "options": ["John Adams", "Thomas Jefferson", "George Washington", "James Madison"],
    "correctAnswer": "George Washington"
  },
  {
    "question": "Name one of the Seven Wonders of the Ancient World.",
    "options": ["Great Wall of China", "Pyramids of Giza", "Taj Mahal", "Petra"],
    "correctAnswer": "Pyramids of Giza"
  },
  {
    "question": "What is the highest-grossing film of all time?",
    "options": ["Avatar", "Avengers: Endgame", "Titanic", "Star Wars: The Force Awakens"],
    "correctAnswer": "Avengers: Endgame"
  },
  {
    "question": "Who played Neo in 'The Matrix'?",
    "options": ["Keanu Reeves", "Brad Pitt", "Tom Cruise", "Will Smith"],
    "correctAnswer": "Keanu Reeves"
  },
  {
    "question": "Which animated film features a character named Simba?",
    "options": ["Finding Nemo", "The Lion King", "Toy Story", "Frozen"],
    "correctAnswer": "The Lion King"
  },
  {
    "question": "What is the currency of Japan?",
    "options": ["Yuan", "Won", "Yen", "Ringgit"],
    "correctAnswer": "Yen"
  },
  {
    "question": "How many continents are there on Earth?",
    "options": ["5", "6", "7", "8"],
    "correctAnswer": "7"
  },
  {
    "question": "What is the capital of South Africa?",
    "options": ["Cairo", "Lagos", "Nairobi", "Pretoria"],
    "correctAnswer": "Pretoria"
  }
];

function App() {
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

