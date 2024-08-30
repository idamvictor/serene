import { recommendedCommunitiesImage } from "@/assets";
import Layout from "@/Component/Shared/Layout";
import CommunityCard2 from "@/Component/ui/CommunityCard2";
import { useGetCommunitiesQuery, useGetUserCommunityQuery } from "@/services/community/CommunitySlice";
import { isCommunityJoined } from "@/utils/communityUtils";


const joinCommunities = () => {
  //* Getting the userId from the local storage
  const userId = JSON.parse(localStorage.getItem("userInfo"))._id;

  const { data: allCommunities, error: allCommunitiesError, isLoading: allCommunitiesLoading} = useGetCommunitiesQuery();
  const { data: allUserCommunities, refetch} = useGetUserCommunityQuery();

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
      <h1 className="text-white text-2xl xl:text-3xl font-bold lg:mt-28 mx-7">Communities</h1>

      <section className="mx-7 mt-4">
        <h1 className="text-[#c7c7c7] font-semibold ">Joined Communities</h1>

        <figure className="recommendation-cont-figure flex flex-col items-center justify-center text-center rounded-[.73rem]">
            <img src={recommendedCommunitiesImage} alt="Illustration" className=" mt-6 size-20" />
            <figcaption className="text-serene-gray font-medium tracking-normal text-base mt-5 px-16 md:text-sm md:px-6 xl:text-[.95rem] xl:w-[70%] ">You are not a member of any community </figcaption>
        </figure>

      </section>

        {/* RECOMMENDED COMMUNITIES SECTION */}
      <section className="recommended-communities-section mx-4 mt-24 xl:ml-7 xl:mr-11">

        <div className="xl:mt-4 flex items-center">
          <h2 className="text-serene-gray font-semibold text-base xl:text-xl ">Recommended communities for you</h2>
        </div>

        <div className="flex justify-center items-center mb-11">
          {renderCommunityCards(communities)}
        </div>
      </section>
      
      {/* EXPLORE OTHER COMMUNITIES SECTION */}
      <section className="recommended-communities-section mx-4 mt-24 lg:mt-28 xl:ml-7 xl:mr-11">
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