import { isPresentInArrObject } from "@/utils";

export const Radio = ({ question, response, setResponse }) => {
  const handleRadioSelect = (answer) => {
    let newEntry = {
      id: question._id,
      answer: answer,
    };

    const updatedResponses = response.map((item) =>
      item.id === newEntry.id ? newEntry : item
    );

    if (!response.some((item) => item.id === newEntry.id)) {
      setResponse([...response, newEntry]);
    } else {
      setResponse(updatedResponses);
    }
  };

  return (
    <>
      {question.options.map((option) => {
        const isSelected = isPresentInArrObject(response, question._id, option);
        return (
          <div
            key={option}
            className={`p-4 rounded-md hover:cursor-pointer ${
              isSelected
                ? "border-serene"
                : " bg-[#5E5E5E] border-[#5E5E5E]"
            } border-2`}
          >
            <label className="flex items-center">
              <input
                type="radio"
                name={`answer-${question._id}`}
                value={option}
                checked={isSelected}
                onChange={(e) => handleRadioSelect(e.target.value)}
                className="form-radio h-4 w-4 text-green-500 hidden"
              />
              <span className={`ml-2 text-white font-semibold ${isSelected}`}>{option}</span>
            </label>
          </div>
        );
      })}
    </>
  );
};