import { isPresentInArrObject } from "@/utils";
export const Dropdown = ({ question }) => {
   const handleRadioSelect = (answer) => {
     let newEntry = {
       id: question._id,
       answer: answer,
     };
     // Create a new array instead of modifying the existing one
     const updatedResponses = responses.map((item) =>
       item.id === newEntry.id ? newEntry : item
     );

     // If the new entry's id doesn't exist, add it to the array
     if (!responses.some((item) => item.id === newEntry.id)) {
       setResponses([...updatedResponses, newEntry]);
     } else {
       setResponses(updatedResponses);
     }
   };
   
  return (
    <>
      <div className="p-4 bg-[#5E5E5E]  rounded-md">
        <label for="cars">Choose a car:</label>

        <select name="cars" id="cars">
          <option value="volvo" onClick={(e) => handleRadioSelect(e.target.value)}>Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
      </div>
    </>
  );
};
