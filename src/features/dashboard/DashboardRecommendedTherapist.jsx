import { recommendedTherapistImage, avatarSmall, star } from "@/assets";

function DashboardRecommendedTherapist() {
  return (
    <section className="min-h-[538px] self-stretch rounded-[17px] bg-[#272727] max-w-[700px]">
      <img
        src={recommendedTherapistImage}
        alt="Recommended Therapist"
        className="w-[96.773px] h-[99.817px]"
      />
      <p className="w-[236px] text-[#C7C7C7] font-[500] text-[16px]">
        You don’t have any scheduled appointment with a therapist
      </p>
      <RecommendedTherapist />
    </section>
  );
}

export default DashboardRecommendedTherapist;

function RecommendedTherapist() {
  return (
    <section className="flex flex-col max-w-[476px] items-start gap-[24px]">
      <header className="flex justify-between self-stretch items-center ">
        <p className="text-[#FFF] font-[600] text-[16px] ">
          Recommended therapist for you
        </p>
        <p className="text-[#C7C7C7] font-[500] text-[12px] ">See all</p>
      </header>
      <main>
        <TherapistCard />
        <TherapistCard />
      </main>
    </section>
  );
}

function TherapistCard() {
  return (
    <div className="flex flex-col w-[230px] p-[20px_16px] items-start gap-[16px] rounded-[12px] border border-[#747474]">
      <img src={avatarSmall} alt="small avatar" />
      <p className="text-white font-[600] text-[16px] ">Dike Odogwu</p>
      <p className="text-serene-gray text-[14px] font-[500]">FamilyTherapist</p>
      <img src={star} alt="" />
      <span className="text-[#7B7B7B] text-[12px] font-[500]">4.92</span>
      <Badges>
        <p className="text-serene-black font-[500] text-[10px] ">Depression</p>
      </Badges>
      <Badges>
        <p className="text-serene-black font-[500] text-[10px] ">Anxiety</p>
      </Badges>
      <Badges>
        <p className="text-serene-black font-[500] text-[10px] ">
          Family issues
        </p>
      </Badges>
    </div>
  );
}

function Badges({ children }) {
  return (
    <div className="bg-serene-purple flex justify-center items-center p-[5px_12px] rounded-[19px]">
      {children}
    </div>
  );
}
