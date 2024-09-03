import React, { useState, useEffect } from "react";
import {
  useGetQuestionsQuery,
  useSubmitSurveyMutation,
} from "@/services/auth/QuestionSlice";
import Questions from "./Qustions";
import ProgressBar from "./ProgressBar";
import { useNavigate } from "react-router-dom";
import AuthLayout from "@/Component/Shared/AuthLayout";
import { Modal } from "@/Component/Shared/AuthLayout";
import WelcomeMsg from "./WelcomeMsg";
import { arrowBack } from "@/assets";

const Survey = () => {
  const { data: questions, error, isLoading } = useGetQuestionsQuery();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [response, setResponse] = useState([]);
  const [submitSurvey] = useSubmitSurveyMutation();
  const [showMessage, setshowMessage] = useState(false)
  const navigate = useNavigate();


  // useEffect(() => {
  //   const savedProgress = localStorage.getItem("surveyProgress");
  //   if (savedProgress) {
  //     const { currentQuestionIndex, response } = JSON.parse(savedProgress);
  //     setCurrentQuestionIndex(currentQuestionIndex);
  //     setResponse(response);
  //   }
  // }, []);
const userInfo = JSON.parse(localStorage.getItem("userInfo"));
const userId = userInfo?._id
  const saveProgress = () => {
    const progressData = {
      currentQuestionIndex,
      response,
    };
    localStorage.setItem("surveyProgress", JSON.stringify(progressData));
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
  
    }
  };

  const handleSubmit = async () => {
    const payload = { response, userId };
    console.log(payload)
    try {
      await submitSurvey(payload).unwrap();
      console.log("Survey submitted successfully");
      setshowMessage(true)
    } catch (error) {
      console.error("Failed to submit survey:", error);
      setshowMessage(true)
    }
  };
  if (showMessage){
    return <WelcomeMsg/>
  }

  if (isLoading) return <p className="text-serene">Loading questions...</p>;
  if (error) return <p className="text-serene">Error loading questions: {error.message}</p>;

  return (
    <AuthLayout>
      <Modal>
        <div className="flex justify-between mt-6 mx-10">
          <button
            onClick={() => setCurrentQuestionIndex(currentQuestionIndex - 1)}
            className="text-gray-400"
            disabled={currentQuestionIndex === 0} // Disable back button if on the first question
          >
            <img src={arrowBack}  />
          </button>
        </div>
        <div className="mx-10 mt-6">
          <ProgressBar
            currentStep={currentQuestionIndex + 1}
            totalSteps={questions.length}
          />
        </div>
        <h2 className="text-xl font-extralight leading-10  mb-4 text-white border-b-2 border-[#393939] px-10 py-4  ">
          Help us recommend the right communities for you
        </h2>
        <div className="mx-10 my-6">
          {questions && (
            <Questions
              question={questions[currentQuestionIndex]}
              onAnswer={handleNext}
              submitBtn={handleSubmit}
              response={response}
              setResponse={setResponse}
              isLastQuestion={currentQuestionIndex === questions.length - 1}
            />
          )}
         
        
        </div>
      </Modal>
    </AuthLayout>
  );
};



export default Survey;
