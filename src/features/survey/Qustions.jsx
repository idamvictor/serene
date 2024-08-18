import React, { useState, useEffect } from "react";

const Questions = ({ question, onAnswer,isLastQuestion,submitBtn }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  useEffect(() => {
    setSelectedAnswer(null); 
  }, [question]);

  const handleAnswerChange = (e) => {
    const answer = e.target.value
    setSelectedAnswer(answer);
  };

  const handleNextClick = () => {
      onAnswer(selectedAnswer);
    
  };

  return (
    <div>
      <h3 className="text-white font-semibold text-xl mb-4">
        {question.question}
      </h3>
      <div className="space-y-3">
        {question.options.map((option) => (
          <div key={option} className="p-4 bg-[#5E5E5E]  rounded-md">
            <label className="flex items-center">
              <input
                type={question.type === "radio" ? "checkbox" : "radio"}
                name="answer"
                value={option}
                checked={selectedAnswer === option}
                onChange={handleAnswerChange}
                className="form-radio h-4 w-4 text-serene"
              />
              <span className="ml-2 text-white">{option}</span>
            </label>
          </div>
        ))}
      </div>
      {isLastQuestion ? (
        <button
          onClick={submitBtn}
          className="mt-4 py-2 px-4 bg-serene text-black rounded-md"
        >
          Submit
        </button>
      ) : (
        <button
          onClick={handleNextClick}
          className="flex mx-auto py-2 px-14 mt-5 bg-serene text-black rounded-md"
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Questions;