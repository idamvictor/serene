import { useEffect,useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";


const fetchAvailibilty = (therapistTime,date) =>{

    const dateKey = date.toISOString().split("T")[0];
    
    if (!therapistTime || therapistTime.length === 0){
        return Promise.resolve([])
    }
    const SlottedDate = therapistTime[0][dateKey] || []
   return Promise.resolve(SlottedDate)

}

  const Booking = ({therapistData}) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [availableSlots, setAvailableSlots] = useState([]);

  useEffect(() => {
   fetchAvailibilty(therapistData,selectedDate).then((slots) => setAvailableSlots(slots));
  }, [selectedDate]);

  const handlePrevDay = () => {
    setSelectedDate(prevDate => {
      const newDate = new Date(prevDate);
      newDate.setDate(prevDate.getDate() - 1);
      return newDate;
    });
  };

  const handleNextDay = () => {
    setSelectedDate(prevDate => {
      const newDate = new Date(prevDate);
      newDate.setDate(prevDate.getDate() + 1);
      return newDate;
    });
  };

  return (
    <div className=" py-32 pt-9 px-10 bg-[#272727] border border-[#454545] text-white lg:max-w-[70%] rounded-lg ">
      <div className="flex items-center justify-between pb-11">
        <button
          onClick={handlePrevDay}
          className="p-4 bg-[#272727] border-[#454545] border rounded-full hover:bg-gray-700 focus:outline-none"
        >
          <IoIosArrowBack className="text-lg" />
        </button>
        <span className="text-lg font-semibold">
          {selectedDate.toDateString()}
        </span>
        <button
          onClick={handleNextDay}
          className="p-4 border-[#454545] border  bg-[#272727] rounded-full hover:bg-gray-700 focus:outline-none"
        >
          <IoIosArrowForward className="text-lg" />
        </button>
      </div>
      <div className="flex flex-wrap items-end justify-center gap-4">
        {availableSlots.length > 0 ? (
          availableSlots.map((slot) => (
            <button
              key={slot}
              className=" flex items-center justify-center gap-2 py-4 px-11 bg-[#404040] rounded-lg hover:bg-serene focus:outline-none font-medium border border-[#6D6D6D]"
            >
              {slot}
              <span>WAT</span>
            </button>
          ))
        ) : (
          <p className="col-span-2 text-center">Not available today.</p>
        )}
      </div>
    </div>
  );
};

export default Booking;