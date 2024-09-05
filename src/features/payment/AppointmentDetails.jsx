import CryptoModal from "./CryptoModal";
import { useSelector } from "react-redux";

function AppointmentDetails({therapistData,stringDate,openAppointModal,closeAppointModal}) {

 const videoLink = useSelector((state) => state.callLink?.callLink);
   const handleLink = () => {
     console.log(videoLink);
     if (videoLink) {
       window.open(videoLink, "_blank");
     } else {
       console.log("No video link available");
     }
   };


  return (
    <CryptoModal isOpen={openAppointModal} onClose={closeAppointModal}>
      <section className="flex flex-col">
        <div className="flex flex-col items-center px-5 py-3.5 mt-6 lg:mt-10  rounded-2xl border bg-neutral-800 border-zinc-700 lg:w-full shadow-[0.3125rem_0.5625rem_1.625rem_rgba(44,44,44,0.25)]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f53d1ba899c8c4ce7d0e8091af2576aabff23964fb34a0cae8398ed5a77307c9?placeholderIfAbsent=true&apiKey=df44ca8e15de4475b0d7b182ebb1db7c"
            alt=""
            className="object-contain w-20 lg:w-[9.5rem] aspect-square"
          />
          <p className="mt-3.5 text-sm lg:text-base font-medium text-center text-stone-300">
            The payment was successful and your appointment has been booked!
          </p>
          <section className="flex flex-col mt-10 w-full">
            <h2 className="text-sm text-center text-white font-medium">
              Here are the details of your session
            </h2>
            <div className="flex flex-col justify-center mt-3 py-2 px-5 bg-yellow-100 rounded-2xl border border-slate-500">
              <p className="font-semibold text-zinc-900">{stringDate}</p>
              <p className="mt-1 text-lime-700">
                <time className="text-zinc-900">2:00 pm</time>{" "}
                <span className="text-sm">WAT</span>
              </p>
            </div>
            <section className="flex flex-col px-5 pt-5 pb-8 mt-6 bg-zinc-800 border border-neutral-500 min-h-[13.75rem]">
              <h3 className="text-sm text-white font-medium">
                Mental Health Support with {therapistData?.name}
              </h3>
              <div className="flex flex-col mt-6 gap-2">
                <button className="flex items-center justify-center gap-1 p-2 lg:px-5 lg:py-3 bg-serene rounded-lg text-neutral-950">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b025a14b74b30bd25fde24bbf5ea39de7534defdc2f7afdabd72c006d6cbc33d?placeholderIfAbsent=true&apiKey=df44ca8e15de4475b0d7b182ebb1db7c"
                    alt=""
                    className="w-6"
                  />
                  <span onClick={handleLink}>Get call link</span>
                </button>
                <button className="flex items-center justify-center gap-1 px-2 py-2 border lg:text-base lg:px-5 lg:py-3 border-serene rounded-lg text-base text-serene bg-transparent">
                  <span>Go to DashBoard</span>
                </button>
              </div>
            </section>
          </section>
        </div>
      </section>
    </CryptoModal>
  );
}

export default AppointmentDetails;
