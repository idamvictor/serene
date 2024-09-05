import { moodImage }from "@/assets";

const MoodButton = ({mood}) => {
  return (
    <button className="mood-button text-[.78rem] text-center bg-[#d8cfc2] px-3 py-1 rounded-lg border lg:text-xs xl:text-[.8rem] ">
      {mood}
    </button>
  );
};

const MoodTracking = () => {
  return (
    <section className="dashboard-mood-cont flex justify-center items-center rounded-[.73rem] bg-serene-ash lg:h-[192px] mt-7 lg:mt-0 xl:h-40  ">
      <div className="flex-col font-semibold ml-5">
        <h5 className="mood-question text-[#191919] md:text-[1.07rem] xl:text-lg ">
          What's your mood like today?
        </h5>
        <p className="text-xs text-[#666] mt-1 md:mb-5 xl:text-sm mb-3">4 August</p>
        <div className="flex flex-wrap gap-1 xl:pr-20 text-[#191919]">
          <MoodButton mood={`Anxiety`} />
          <MoodButton mood={`Joy`} />
          <MoodButton mood={`Depressed`} />
          <MoodButton mood={`Surprised`} />
          <MoodButton mood={`Calm`} />
          <MoodButton mood={`Stupid`} />
        </div>
      </div>
     
      <img src={moodImage} alt="mood image" className="w-[40%] h-48" />
    </section>
  );
};

export default MoodTracking;


