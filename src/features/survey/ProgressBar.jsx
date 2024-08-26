import React from "react";

const ProgressBar = ({ currentStep, totalSteps }) => {
  const progressPercentage = (currentStep / totalSteps) * 100;

  const steps = Array.from({ length: totalSteps }, (_, index) => (
    <div
      key={index}
      className={`h-1 rounded-full flex-1 mx-1 ${
        index < currentStep ? "bg-serene" : "bg-gray-600"
      }`}
    />
  ));

  return <div className="flex justify-between mb-4">{steps}</div>;
};

export default ProgressBar;
