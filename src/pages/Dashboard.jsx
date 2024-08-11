import Layout from "@/Component/Shared/Layout";
import DashboardQuickChat from "@/features/dashboard/DashboardQuickChat";
import DashboardRecommendedTherapist from "@/features/dashboard/DashboardRecommendedTherapist";
import DashboardWelcomeMessage from "@/features/dashboard/DashboardWelcomeMessage";
import RecommendedCommunities from "@/features/dashboard/RecommendedCommunities";
import MoodTracking from "@/features/dashboard/MoodTracking";
import RecommendationCard from "@/Component/ui/RecommendationCard";

//*Will be removed later
import { recommendedTherapistImage, avatarSmall, star, recommendedCommunitiesImage } from "@/assets";
import TherapistCard from "@/Component/ui/TherapistCard";
import CommunityCard from "@/Component/ui/CommunityCard";
import communityPic1 from "@/assets/communityPic1.png";
import communityPic2 from "@/assets/communityPic2.png";


const Dashboard = () => {
  return (
    <Layout>
      <div className="text-serene mt-11 mx-11 font-medium text-lg">
        {/* Dashboard */}
        {/* <DashboardWelcomeMessage />
        <DashboardQuickChat />
        <DashboardRecommendedTherapist />
        <RecommendedCommunities />
        <MoodTracking /> */}
        
      </div>

      {/* <DashboardQuickChat /> */}



      {/* <RecommendationCard 
            img={recommendedTherapistImage}
            imgCaption={"You don't have any scheduled appointment with a therapist"}
            recommendedText={"Recommended therapists for you"}
        >
          <TherapistCard />
          <TherapistCard />
        </RecommendationCard> */}

      {/* <RecommendationCard 
            img={recommendedCommunitiesImage}
            imgCaption={"You are not a member of any community"}
            recommendedText={"Recommended communities you can join"}
      >
        <CommunityCard 
          backgroundColor={"bg-[#fffb97]"}
          BadgeStyling={"bg-[#e2de83] text-[#777538]"}
          communityName={`Cheers Champions`}
          communityMembers={`12k members`}
          communityPicture={communityPic1}
        />
        <CommunityCard 
          backgroundColor={"bg-serene-blue"}
          BadgeStyling={"bg-[#b5d0e8] text-[#6b6b6b]"}
          communityName={`The Puff Pals`}
          communityMembers={`12k members`}
          communityPicture={communityPic2}
        ></CommunityCard>
        <CommunityCard 
          backgroundColor={"bg-serene-ash"}
          BadgeStyling={"bg-[#cec8c1] text-[#6b6b6b]"}
          communityName={`Tranquil Tribe`}
          communityMembers={`12k members`}
          communityPicture={communityPic1}
        ></CommunityCard>
        <CommunityCard 
          backgroundColor={"bg-serene-purple"}
          BadgeStyling={"bg-[#c9c1e3] text-[#6b6b6b]"}
          communityName={`Hopeful Hearts`}
          communityMembers={`12k members`}
          communityPicture={communityPic1}
        ></CommunityCard>
      </RecommendationCard> */}

        <MoodTracking />
    </Layout>
  );
}

export default Dashboard