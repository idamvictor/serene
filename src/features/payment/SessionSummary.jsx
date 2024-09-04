import { fetchTherapist } from "@/services/auth/therapistSlice2";
import { useDispatch,useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const SessionSummary = () => {
  const therapists = useSelector((state) => state.fetchTherapist.therapist);
   const selectedTime = useSelector(state => state.Booking.selectedDateTime)

   const time = selectedTime?.Time
   const date = selectedTime?.date
     const stringDate = new Date(date).toDateString();

  const { id } = useParams();
  const dispatch = useDispatch();
const [therapistData, setTherapistData] = useState([])
 
       useEffect(() => {
         dispatch(fetchTherapist());
       }, [dispatch]);
 
       useEffect(() => {
         if (Array.isArray(therapists) && therapists.length > 0) {
           const selectTherapist = therapists.find((t) => t._id === id);
           if (selectTherapist) {
             setTherapistData(selectTherapist); 
           } else {
             setTherapistData(null); 
           }
         }
       }, [therapists, id]);
  return (
    <div>
      <h1 className="text-[450] text-white text-2xl">
        Summary
      </h1>
      <section className="flex flex-col items-start px-6 py-7 mt-6 w-full rounded-lg bg-neutral-800 max-md:px-5">
        <div className="flex flex-col max-w-full text-sm w-[20.6875rem]">
          <h2 className="font-semibold tracking-wide leading-none text-serene">
            Session Summary
          </h2>
          {stringDate && time ? (
            <div className="mt-2 tracking-wide leading-5 text-white text-opacity-80">
              {stringDate ? stringDate : "No selected Date"}
              <br />
              by {time}
            </div>
          ) : (
            <p>No appointment selected.</p>
          )}
        </div>

        <div className="flex flex-col max-w-full text-sm w-[20.6875rem] mt-6">
          <h2 className="font-semibold tracking-wide leading-none text-serene">
            Total length of session
          </h2>
          <div className="mt-2 tracking-wide leading-5 text-white text-opacity-80">
            30mins
          </div>
        </div>

        <div className="flex flex-col max-w-full text-sm w-[20.6875rem] mt-6">
          <h2 className="font-semibold tracking-wide leading-none text-serene">
            You selected:
          </h2>
          <div className="mt-2 tracking-wide leading-5 text-white text-opacity-80">
            {therapistData.name}
          </div>
        </div>

        <div className="flex flex-col self-stretch mt-6 w-full">
          <div className="flex flex-col max-w-full text-sm w-[20.6875rem]">
            <h2 className="font-semibold tracking-wide leading-none text-serene">
              Price Summary
            </h2>
            <div className="mt-2 tracking-wide leading-none text-white text-opacity-80">
              <div className="flex gap-10 items-center w-full mt-3">
                <div className="self-stretch my-auto w-[8.1875rem]">
                  30 minutes session
                </div>
                <div className="self-stretch my-auto w-[3.1875rem]">N5,000</div>
              </div>
              <div className="flex gap-10 items-center w-full mt-3">
                <div className="self-stretch my-auto w-[8.1875rem]">
                  Extra 15 minutes
                </div>
                <div className="self-stretch my-auto w-[3.1875rem]">N3,000</div>
              </div>
              <div className="flex gap-10 items-center w-full mt-3">
                <div className="self-stretch my-auto w-[8.1875rem]">8% VAT</div>
                <div className="self-stretch my-auto w-[3.1875rem]">N450</div>
              </div>
            </div>
          </div>

          <div className="w-full border border-solid border-white border-opacity-20 min-h-[0.0625rem] mt-4" />

          <div className="flex gap-10 justify-between items-center mt-3.5 w-full text-base leading-none">
            <div className="self-stretch my-auto font-semibold text-serene w-[4.8125rem]">
              Total Price
            </div>
            <div className="self-stretch my-auto font-bold tracking-wide text-white text-opacity-80 w-[3.75rem]">
              N8,450
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SessionSummary;
