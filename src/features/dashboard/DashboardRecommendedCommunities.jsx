import { recommendedCommunitiesImage} from "@/assets";
import RecommendationCard from "@/Component/ui/RecommendationCard";
import CommunityCard from "@/Component/Community/CommunityCard";
import { communityPic1, communityPic2 } from "@/assets";
import { useGetCommunitiesQuery, useGetUserCommunityQuery } from "@/services/community/CommunitySlice";
import { isCommunityJoined } from "@/utils/communityUtils";
import { useNavigate } from "react-router-dom";


//* Predefined styles for the communityCard
const communityStyles = [
  {
    backgroundColor: "bg-[#fffb97]",
    BadgeStyling: "bg-[#e2de83] text-[#777538]",
    communitypic: communityPic1
  },
  {
    backgroundColor: "bg-serene-blue",
    BadgeStyling: "bg-[#b5d0e8] text-[#6b6b6b]",
    communitypic: communityPic2
  },
  {
    backgroundColor: "bg-serene-ash",
    BadgeStyling: "bg-[#cec8c1] text-[#6b6b6b]",
    communitypic: communityPic2
  },
  {
    backgroundColor: "bg-serene-purple",
    BadgeStyling: "bg-[#c9c1e3] text-[#6b6b6b]",
    communitypic: communityPic1
  }
];

const DashboardRecommendedCommunities = () => {
  const navigate = useNavigate();

  //* All API queries
  const { data: allCommunities, error: allCommunitiesError, isLoading: allCommunitiesLoading} = useGetCommunitiesQuery();
  const {data: allUserCommunities, refetch: refetchUserCommunities} = useGetUserCommunityQuery();

  //* Destructuring
  const communities = allCommunities?.data || [];
  const userCommunities = allUserCommunities?.data || [];

  //* Render only 4 communities
  const only4communities = communities.slice(0, 4);
  // console.log(only4communities)

  //* Filter to get only joined communities
  const joinedCommunities = communities.filter((community) => 
    isCommunityJoined(community._id, userCommunities)
  );


  //* Logic to handle "See all"
  const seeAllCommunities = () => {
    navigate('/community')
  };


  //* To render community cards
  const renderCommunityCards = (communities) =>
    communities.map((community, index) => {
      const styles = communityStyles[index % communityStyles.length]; 
      const isMember = isCommunityJoined(community._id, userCommunities);

      return (
        <CommunityCard
          key={community._id} 
          communityId={community._id}
          backgroundColor={styles.backgroundColor}
          badgeTitle={community.topics[0]}
          badgeStyling={styles.BadgeStyling}
          communityName={community.name}
          communityMembers={community.members}
          communityPicture={styles.communitypic} 
          isMember={isMember}
          refetchUserCommunities={refetchUserCommunities}
        />
      );
    });


  return (
    <>
     <div className="dashboard-community">
      {joinedCommunities.length > 0 ? ( 
            <>
              <RecommendationCard
                recommendedText="Joined Communities"
                seeAllLogic={seeAllCommunities}
              >
              {renderCommunityCards(joinedCommunities)}
              </RecommendationCard>
            </>
          ) : (
            <RecommendationCard 
              img={recommendedCommunitiesImage}
              imgCaption="You are not a member of any community"
              recommendedText="Recommended communities you can join"
              seeAllLogic={seeAllCommunities}
            >
              {renderCommunityCards(only4communities)}
            </RecommendationCard>
          )}
     </div>
    </>
  )
};

export default DashboardRecommendedCommunities;