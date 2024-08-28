import Layout from "@/Component/Shared/Layout";
import CommunityCard2 from "@/Component/ui/CommunityCard2";
import { useGetCommunitiesQuery } from "@/services/community/CommunitySlice";
// import { filterIcon, arrowDown} from "@/assets";


const joinCommunities = () => {
  const { data: allCommunities, error: allCommunitiesError, isLoading: allCommunitiesLoading} = useGetCommunitiesQuery();

  if (allCommunitiesError) {
      return <h1>NA ERROR BE THIS</h1>
  }

  const communities = allCommunities?.data || [];
 console.log(communities);

  return (
    <Layout>
        {/* RECOMMENDED COMMUNITIES SECTION */}
      <section className="recommended-communities-section mx-4 mt-24 lg:mt-28 md:mx-7">
        <h1 className="text-white text-2xl xl:text-3xl font-bold ">Communities</h1>

        <div className="xl:mt-4 flex items-center">
          <h2 className="text-serene-gray font-semibold text-base xl:text-xl ">Recommended communities for you</h2>
        </div>

        <div className="flex justify-center items-center mb-11">
            {/* TOO BULKY. WILL BE ADJUSTED LATER AFTER INTEGRATION */}
          <main className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5 grid-rows-auto">
            {communities.map((community) => (
              <CommunityCard2
                key={community._id}
                communityId={community._id}
                communityProfilePic={``}
                communityName={community.name}
                badgeTitle={`Alcoholics`}
                communityDescription={community.description}
                communityMembers={`12K+ Members`}
              />
            ))}
          </main>
        </div>
      </section>
      
      {/* EXPLORE OTHER COMMUNITIES SECTION */}
      <section className="recommended-communities-section mx-4 mt-24 lg:mt-28 md:mx-7">
        {/* <h1 className="text-white text-2xl xl:text-3xl font-bold ">Communities</h1> */}

        <div className="xl:mt-4 flex items-center">
          <h2 className="text-serene-gray font-semibold text-base xl:text-xl ">Explore all other communities</h2>
        </div>

        <div className="flex justify-center items-center mb-11">
            {/* TOO BULKY. WILL BE ADJUSTED LATER AFTER INTEGRATION */}
          <main className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5 grid-rows-auto">
            {communities.map((community) => (
              <CommunityCard2
                key={community._id}
                communityProfilePic={``}
                communityName={community.name}
                badgeTitle={`Alcoholics`}
                communityDescription={community.description}
                communityMembers={`12K+ Members`}
              />
            ))}
          </main>
        </div>
      </section>




      {/* <section className="mx-4 mt-8 md:mx-7 lg:mt-12 xl:mt-14">
        <div className=" flex">
          <h2 className="text-serene-gray font-semibold text-base xl:text-xl ">Explore all other communities</h2>
        </div> */}

        {/* <div className="flex justify-center items-center mb-11"> */}
            {/* TOO BULKY. WILL BE ADJUSTED LATER AFTER INTEGRATION */}
          {/* <main className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5 grid-rows-auto">
            <CommunityCard2
              communityProfilePic={``}
              communityName={`Cheers Champions`}
              badgeTitle={`Alcoholics`}
              communityDescription={`A community to help get over the urge for a cold beer`}
              communityMembers={`12K+ Members`}
            />

            <CommunityCard2
              communityProfilePic={``}
              communityName={`Cheers Champions`}
              badgeTitle={`Alcoholics`}
              communityDescription={`A community to help get over the urge for a cold beer`}
              communityMembers={`12K+ Members`}
            />

            <CommunityCard2
              communityProfilePic={``}
              communityName={`Cheers Champions`}
              badgeTitle={`Alcoholics`}
              communityDescription={`A community to help get over the urge for a cold beer`}
              communityMembers={`12K+ Members`}
            />

            <CommunityCard2
              communityProfilePic={``}
              communityName={`Cheers Champions`}
              badgeTitle={`Alcoholics`}
              communityDescription={`A community to help get over the urge for a cold beer`}
              communityMembers={`12K+ Members`}
            />
          </main>
        </div>
      </section> */}
     
    </Layout>
  );
}


export default joinCommunities;