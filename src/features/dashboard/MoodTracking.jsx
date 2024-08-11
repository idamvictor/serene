import {moodImage}from "@/assets";

const MoodButton = ({mood}) => {
  return (
    <button className="text-xs text-center bg-[#d8cfc2] px-3 py-1 rounded-lg border ">
      {mood}
    </button>
  );
};

const DashboardQuickChat = () => {
  return (
    <section className="flex justify-center items-center rounded-md bg-serene-ash w-[24rem] h-auto mx-4">
      <div className="flex-col font-semibold ml-5">
        <h5 className="text-[#191919] text-[1.07rem]">
          What's your mood like today?
        </h5>
        <p className="text-xs text-[#666] mt-1 mb-5">4 August</p>
        <div className="flex flex-wrap gap-1">
          <MoodButton mood={`Anxiety`} />
          <MoodButton mood={`Joy`} />
          <MoodButton mood={`Depressed`} />
          <MoodButton mood={`Surprised`} />
          <MoodButton mood={`Calm`} />
          <MoodButton mood={`Stupid`} />
        </div>
      </div>
     
      <img src={moodImage} alt="" className="w-[40%] h-48" />
    </section>
  );
};

export default DashboardQuickChat;


