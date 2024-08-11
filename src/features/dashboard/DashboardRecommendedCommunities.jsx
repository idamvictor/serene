import { recommendedCommunitiesImage} from "@/assets";
import RecommendationCard from "@/Component/ui/RecommendationCard";
import CommunityCard from "@/Component/ui/CommunityCard";
import { communityPic1, communityPic2 } from "@/assets";


const DashboardRecommendedCommunities = () => {
  return (
    <>
     <div className="dashboard-community mt-[-18rem]">
      <RecommendationCard 
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
              />
              <CommunityCard 
                  backgroundColor={"bg-serene-ash"}
                  BadgeStyling={"bg-[#cec8c1] text-[#6b6b6b]"}
                  communityName={`Tranquil Tribe`}
                  communityMembers={`12k members`}
                  communityPicture={communityPic1}
              />
              <CommunityCard 
                  backgroundColor={"bg-serene-purple"}
                  BadgeStyling={"bg-[#c9c1e3] text-[#6b6b6b]"}
                  communityName={`Hopeful Hearts`}
                  communityMembers={`12k members`}
                  communityPicture={communityPic1}
              />
        </RecommendationCard>
     </div>
     
    </>
  )
}

export default DashboardRecommendedCommunities;
