import React, { useState } from 'react';

const questions = [
    {
        question: 'What is the capital of France?',
        options: ['Paris', 'Berlin', 'London', 'Madrid'],
        correctAnswer: 'Paris',
    },
    {
        question: 'Which planet is known as the "Red Planet"?',
        options: ['Earth', 'Mars', 'Venus', 'Jupiter'],
        correctAnswer: 'Mars',
    },
    {
        question: 'What was the first name of US army officer Custer, who died at the Battle of the Little Bighorn in 1876?',
        options: ['George', 'Tom', 'Mario', 'Tony'],
        correctAnswer: 'George',
    },
    {
        question: 'What is the official language of Chile?',
        options: ['Jamaican', 'Chilean', 'Spanish', 'English'],
        correctAnswer: 'Spanish',
    },
    {
        question: 'Which is the fastest rotating planet in our solar system?',
        options: ['Earth', 'Mars', 'Venus', 'Jupiter'],
        correctAnswer: 'Jupiter',
    },
];

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

    const handleAnswerClick = (selectedOption) => {
        if (selectedOption === questions[currentQuestion].correctAnswer) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    return (
        <div className="quiz max-w-md mx-auto p-4 bg-gray-100 rounded shadow">
            {showScore ? (
                <div className="score-section text-center">
                    You scored {score} out of {questions.length}
                </div>
            ) : (
                <>
                    <div className="question-section mb-4">
                        <div className="question-count text-sm mb-1">
                            <span>Question {currentQuestion + 1}</span>/{questions.length}
                        </div>
                        <div className="question-text font-bold text-lg">
                            {questions[currentQuestion].question}
                        </div>
                    </div>
                    <div className="answer-section">
                        {questions[currentQuestion].options.map((option, index) => (
                            <button
                                key={index}
                                className="answer-button bg-white border rounded p-2 mb-2 text-sm hover:bg-gray-200"
                                onClick={() => handleAnswerClick(option)}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default Quiz;
