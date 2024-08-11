import Layout from "@/Component/Shared/Layout";
import DashboardQuickChat from "@/features/dashboard/DashboardQuickChat";
import DashboardRecommendedTherapist from "@/features/dashboard/DashboardRecommendedTherapist";
import DashboardWelcomeMessage from "@/features/dashboard/DashboardWelcomeMessage";
import RecommendedCommunities from "@/features/dashboard/RecommendedCommunities"
import MoodTracking from "@/features/dashboard/MoodTracking"
import RecommendationCard from "@/Component/ui/RecommendationCard";

//*Will be removed later
import { recommendedTherapistImage, avatarSmall, star, recommendedCommunitiesImage } from "@/assets";
import TherapistCard from "@/Component/ui/TherapistCard";
import CommunityCard from "@/Component/ui/CommunityCard";


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

      {/* <RecommendationCard 
          img={recommendedTherapistImage}
          imgCaption={"You don't have any scheduled appointment with a therapist"}
          recommendedText={"Recommended therapists for you"}
        >
          <TherapistCard />
          <TherapistCard />
        </RecommendationCard> */}

      <RecommendationCard 
      img={recommendedCommunitiesImage}
      imgCaption={"You are not a member of any community"}
      recommendedText={"Recommended communities you can join"}
      >
        <CommunityCard 
        backgroundColor={"bg-[#fffb97]"}
        />
        <CommunityCard 
        backgroundColor={"bg-serene-blue"}
        ></CommunityCard>
    <CommunityCard 
          backgroundColor={"bg-serene-ash"}
          ></CommunityCard>
    <CommunityCard 
          backgroundColor={"bg-serene-purple"}
          ></CommunityCard>
        </RecommendationCard>

    </Layout>
  );
}

export default Dashboard