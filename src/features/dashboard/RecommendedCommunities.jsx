import { recommendedCommunitiesImage, avatarBig} from "@/assets";
import Badges from "@/Component/ui/Badges";

function DashboardRecommendedTherapist() {
  return (
    <section className="min-h-[538px] self-stretch rounded-[17px] bg-[#272727] max-w-[700px]">
      <img
        src={recommendedCommunitiesImage}
        alt="Recommended Therapist"
        className="w-[96.773px] h-[99.817px]"
      />
      <p className="w-[236px] text-[#C7C7C7] font-[500] text-[16px]">
You are not a member of any community       </p>
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
          Recommended communities you can join 
        </p>
        <p className="text-[#C7C7C7] font-[500] text-[12px] ">See all</p>
      </header>
      <main>
        <CommunitiesCard />
      </main>
    </section>
  );
}

function CommunitiesCard() {
  return <div className="bg-serene max-w-[230px] p-[14px_16px] rounded-[13px]">
    <img src={avatarBig} alt="big avatar" />
    <p>Cheers Champion</p>
    <p>12K members</p>
    <Badges>Alcoholics</Badges>
  </div>
}