import { Checkbox } from "@/Component/Questions/CheckboxQuestions";
import { Radio } from "@/Component/Questions/RadioQuestions";
import { Dropdown } from "@/Component/Questions/DropdownQuestions";
import React, { useState, useEffect } from "react";

const Questions = ({
  question,
  onAnswer,
  isLastQuestion,
  submitBtn,
  response,
  setResponse,
}) => {

  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerChange = (e) => {
    const answer = e.target.value;
    setSelectedAnswer(answer);
  };

  const handleNextClick = () => {
    onAnswer(selectedAnswer);
  };
  return (
    <div className="flex flex-col justify-between ">
      <h3 className="text-white font-semibold text-xl mb-4">
        {question.question}
      </h3>
      {question && (
        <div className="space-y-3">
          {question.type === "radio" ? (
            <Radio
              question={question}
              response={response}
              setResponse={setResponse}
            />
          ) : question.type === "checkbox" ? (
            <Checkbox
              question={question}
              response={response}
              setResponse={setResponse}
            />
          ) : (
            <Dropdown
              question={question}
              response={response}
              setResponse={setResponse}
            />
          )}
          {/* {question.options.map((option) => (
          <div key={option} className="p-4 bg-[#5E5E5E]  rounded-md">
            <label className="flex items-center">
              <input
                type={question.type === "radio" ? "radio" : "checkbox"}
                name="answer"
                value={option}
                checked={selectedAnswer === option}
                onChange={handleAnswerChange}
                className="form-radio h-4 w-4 text-serene"
              />
              <span className="ml-2 text-white">{option}</span>
            </label>
          </div>
        ))} */}
        </div>
      )}

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
          className="flex font-medium mx-auto py-2 px-14 mt-5 bg-serene text-black rounded-md"
        >
          Next
        </button>
      )}
    </div>
  );
};



export default Questions;