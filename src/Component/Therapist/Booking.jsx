import { useEffect,useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useDispatch } from "react-redux";
import { setSelectedTime } from "@/services/auth/BookingSlice";


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
  const [clickedBtn ,setClickedBtn] = useState([])
  const dispatch = useDispatch()

  

  useEffect(() => {
   fetchAvailibilty(therapistData,selectedDate).then((slots) => setAvailableSlots(slots));
  }, [selectedDate,therapistData]);

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
  // console.log(selectedDate)
    const handleSelectedDay = (slots) =>{
      setClickedBtn(slots)
      const changetoString = selectedDate.toISOString()
      dispatch(setSelectedTime({date:changetoString, Time: slots}))
    }
  return (
    <div className=" py-32 pt-9 px-10 bg-[#272727] border border-[#454545] text-white lg:max-w-[70%] rounded-lg ">
      <div className="flex items-center justify-between pb-11">
        <button
          onClick={handlePrevDay}
          className="p-2 mr-2 bg-[#272727] border-[#454545] border rounded-full hover:bg-gray-700 focus:outline-none"
        >
          <IoIosArrowBack className="text-sm md:text-lg" />
        </button>
        <span className="text-sm font-semibold">
          {selectedDate.toDateString()}
        </span>
        <button
          onClick={handleNextDay}
          className="p-2   border-[#454545] border  bg-[#272727] rounded-full hover:bg-gray-700 focus:outline-none"
        >
          <IoIosArrowForward className="text-sm md:text-lg" />
        </button>
      </div>
      <div className="flex flex-wrap items-end justify-center gap-4">
        {availableSlots.length > 0 ? (
          availableSlots.map((slot) => (
            <button
              key={slot}
              onClick={() => handleSelectedDay(slot)}
              className={`flex items-center justify-center gap-2 py-4 px-11  rounded-lg 
                ${
                  clickedBtn === slot
                    ? "bg-serene bg-opacity-35 text-white"
                    : " hover:bg-serene hover:text-black focus:outline-none font-medium border border-[#6D6D6D]"
                }`}
            >
              {slot}
              <span className="text-sm text-serene-gray">WAT</span>
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