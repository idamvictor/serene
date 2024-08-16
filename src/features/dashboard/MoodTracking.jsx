import { moodImage }from "@/assets";

const MoodButton = ({mood}) => {
  return (
    <button className="text-[.78rem] text-center bg-[#d8cfc2] px-3 py-1 rounded-lg border xl:text-sm ">
      {mood}
    </button>
  );
};

const MoodTracking = () => {
  return (
    <section className="dashboard-mood flex justify-center items-center rounded-[.73rem] bg-serene-ash h-[10rem] ">
      <div className="flex-col font-semibold ml-5">
        <h5 className="text-[#191919] text-[1.07rem] xl:text-lg ">
          What's your mood like today?
        </h5>
        <p className="text-xs text-[#666] mt-1 mb-5 xl:text-base ">4 August</p>
        <div className="flex flex-wrap gap-1 pr-20">
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

export default MoodTracking;


