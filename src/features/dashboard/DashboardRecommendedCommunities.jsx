import { recommendedCommunitiesImage} from "@/assets";
import RecommendationCard from "@/Component/ui/RecommendationCard";
import CommunityCard from "@/Component/Community/CommunityCard";
import { communityPic1, communityPic2 } from "@/assets";
import { useGetCommunitiesQuery, useGetUserCommunityQuery } from "@/services/community/CommunitySlice";
import { isCommunityJoined } from "@/utils/communityUtils";



const DashboardRecommendedCommunities = () => {
  //* All API queries
  const { data: allCommunities, error: allCommunitiesError, isLoading: allCommunitiesLoading} = useGetCommunitiesQuery();
  const {data: allUserCommunities, refetch} = useGetUserCommunityQuery();
  
  //* Destructuring
  const communities = allCommunities?.data || [];
  const userCommunities = allUserCommunities?.data || [];

  // console.log(allCommunities);

  //* Filter to get only joined communities
  const joinedCommunities = communities.filter((community) => 
    isCommunityJoined(community._id, userCommunities)
  );

  return (
    <>
     <div className="dashboard-community">
      
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

     <div>

     </div>
     
    </>
  )
}

export default DashboardRecommendedCommunities;
