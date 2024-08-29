import Layout from "@/Component/Shared/Layout";
import CommunityCard2 from "@/Component/ui/CommunityCard2";
import { useGetCommunitiesQuery, useGetUserCommunityQuery } from "@/services/community/CommunitySlice";
import { isCommunityJoined } from "@/utils/communityUtils";


const joinCommunities = () => {
  //* Getting the userId from the local storage
  const userId = JSON.parse(localStorage.getItem("userInfo"))._id;

  const { data: allCommunities, error: allCommunitiesError, isLoading: allCommunitiesLoading} = useGetCommunitiesQuery();
  const { data: allUserCommunities} = useGetUserCommunityQuery();

  if (allCommunitiesError) {
      return <h1>NA ERROR BE THIS</h1>
  }

  const communities = allCommunities?.data || [];
  const userCommunities = allUserCommunities?.data || [];
  console.log(communities);
 

 //* Reusable function to render community cards
 const renderCommunityCards = (communities) => (
  <main className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5 grid-rows-auto">
    {communities.map((community) => {
      const isJoined = isCommunityJoined(community._id, userCommunities);

      return(
        <CommunityCard2
          key={community._id}
          communityId={community._id}
          communityProfilePic={``}
          communityName={community.name}
          badgeTitle={`Alcoholics`}
          communityDescription={community.description}
          communityMembers={`12K+ Members`}
          isJoined={isJoined}
        />
      );
    })}
  </main>
);


  return (
    <Layout>
        {/* RECOMMENDED COMMUNITIES SECTION */}
      <section className="recommended-communities-section mx-4 mt-24 lg:mt-28 md:mx-7">
        <h1 className="text-white text-2xl xl:text-3xl font-bold ">Communities</h1>

        <div className="xl:mt-4 flex items-center">
          <h2 className="text-serene-gray font-semibold text-base xl:text-xl ">Recommended communities for you</h2>
        </div>

        <div className="flex justify-center items-center mb-11">
          {renderCommunityCards(communities)}
        </div>
      </section>
      
      {/* EXPLORE OTHER COMMUNITIES SECTION */}
      <section className="recommended-communities-section mx-4 mt-24 lg:mt-28 md:mx-7">
        <div className="xl:mt-4 flex items-center">
          <h2 className="text-serene-gray font-semibold text-base xl:text-xl ">Explore all other communities</h2>
        </div>

        <div className="flex justify-center items-center mb-11">
          {renderCommunityCards(communities)}
        </div>
      </section>
    </Layout>
  );
}


export default joinCommunities;