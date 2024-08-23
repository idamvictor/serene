import { isPresentInArrObject } from "@/utils";

export const Checkbox = ({ question, response, setResponse }) => {

  const handleRadioSelect = async(answer) => {
  const foundItem = await response.find((item) => item.id === question._id);

  let Answer;

  if (foundItem) {
    const isPresent = foundItem.answer.includes(answer);

    if (isPresent) {
      Answer = foundItem.answer.filter((arg) => arg !== answer);
    } else {
      Answer = [...foundItem.answer, answer];
    }
  } else {
    Answer = [answer];
  }



const newEntry = {
      id: question._id,
      answer: Answer,
    };

    // Create a new array instead of modifying the existing one
    const updatedResponses = response.map((item) =>
      item.id === newEntry.id ? newEntry : item
    );

    // If the new entry's id doesn't exist, add it to the array
    if (!response.some((item) => item.id === newEntry.id)) {
      setResponse([...updatedResponses, newEntry]);
    } else {
      setResponse(updatedResponses);
    }
  };
  
  const answersArr =  response.find((item) => item.id === question._id);

  return (
    <>
      {question.options.map((option) => {
        const checked = answersArr?.answer.includes(option);
        return (
          <div
            key={option}
            className={`p-4 ${
              checked ? "border-serene border" : " bg-[#5E5E5E] border-[#5E5E5E]"
            } rounded-md`}
          >
            <label className="flex items-center">
              <input
                type="checkbox"
                name="answer"
                value={option}
                checked={checked}
                onChange={(e) => handleRadioSelect(e.target.value)}
                className="form-checkbox bg-[#5E5E5E] text-serene "
              />
              <span className="ml-2 text-white">{option}</span>
            </label>
          </div>
        );
      })}
    </>
  );
};
