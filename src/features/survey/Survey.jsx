import React, { useState, useEffect } from "react";
import {
  useGetQuestionsQuery,
  useSubmitSurveyMutation,
} from "@/services/auth/QuestionSlice";
import Questions from "./Qustions";
import ProgressBar from "./ProgressBar";
import { useNavigate } from "react-router-dom";
import AuthLayout from "@/Component/Shared/AuthLayout";

const Survey = () => {
  const { data: questions, error, isLoading } = useGetQuestionsQuery();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState([]);
  const [submitSurvey] = useSubmitSurveyMutation();
  const navigate = useNavigate();

  useEffect(() => {
    const savedProgress = localStorage.getItem("surveyProgress");
    if (savedProgress) {
      const { currentQuestionIndex, responses } = JSON.parse(savedProgress);
      setCurrentQuestionIndex(currentQuestionIndex);
      setResponses(responses);
    }
  }, []);

  const saveProgress = () => {
    const progressData = {
      currentQuestionIndex,
      responses,
    };
    localStorage.setItem("surveyProgress", JSON.stringify(progressData));
  };

  const handleNext = (selectedAnswer) => {
    setResponses((prevResponses) => {
      const updatedResponses = [...prevResponses];
      updatedResponses[currentQuestionIndex] = {
        questionId: questions[currentQuestionIndex]?.id,
        answer: selectedAnswer
      };
      return updatedResponses;
    });

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleSubmit = async () => {
    console.log(responses)
   
    try {
      await submitSurvey(responses).unwrap();
      console.log("Survey submitted successfully");
        navigate('/')
    } catch (error) {
      console.error("Failed to submit survey:", error);
      
    }
  };

  const handleSkipForNow = () => {
    saveProgress();
    navigate("/"); // Navigate to the homepage or another section of your app
  };

  if (isLoading) return <p>Loading questions...</p>;
  if (error) return <p>Error loading questions: {error.message}</p>;

  return (
    <AuthLayout>
      <div className="flex justify-between mt-6 mx-10">
        <button
          onClick={() => setCurrentQuestionIndex(currentQuestionIndex - 1)}
          className="text-gray-400"
          disabled={currentQuestionIndex === 0} // Disable back button if on the first question
        >
          Back
        </button>
        <button onClick={handleSkipForNow} className="text-[#bebdbd] font-semibold text-base">
          Skip for now
        </button>
      </div>
      <div className="mx-10 mt-6">
        <ProgressBar
          currentStep={currentQuestionIndex + 1}
          totalSteps={questions.length}
        />
      </div>
      <h2 className="text-xl font-extralight leading-10  mb-4 text-white border-b-2 border-[#393939] px-10 py-3 ">
        Help us recommend the right communities for you
      </h2>
      <div className="mx-10 my-6">
        {questions && (
          <Questions
            question={questions[currentQuestionIndex]}
            onAnswer={handleNext}
            submitBtn={handleSubmit}
            isLastQuestion={currentQuestionIndex === questions.length - 1}
          />
        )}
      </div>
    </AuthLayout>
  );
};

export default Survey;
