import Layout from "@/Component/Shared/Layout";
import CommunityCard2 from "@/Component/ui/CommunityCard2";
import { filterIcon, arrowDown} from "@/assets";


const Communities = () => {
  return (
    <Layout>
        {/* RECOMMENDED COMMUNITIES SECTION */}
      <section className="recommended-communities-section xl:mt-28 mx-7">
        <h1 className="text-white text-3xl font-bold ">Communities</h1>

        <div className="xl:mt-4 flex justify-between items-center">
          <h2 className="text-serene-gray font-semibold text-xl ">Recommended communities for you</h2>
        </div>

        <div className="flex justify-center items-center mb-11">
            {/* TOO BULKY. WILL BE ADJUSTED LATER AFTER INTEGRATION */}
          <main className="mt-6 grid grid-cols-2 gap-5 grid-rows-auto">
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
      </section>
      
      {/* EXPLORE OTHER COMMUNITIES SECTION */}
      <section className="xl:mt-10 mx-7">
        <div className="xl:mt-4 flex justify-between items-center">
          <h2 className="text-serene-gray font-semibold text-xl ">Explore all other communities</h2>
          
          <div className="filter-dropdown border border-red-100 flex items-center rounded-xl w-20 justify-around py-[.1rem] ">
            <img src={filterIcon} alt="" className="w-5 h-5 " />
            <input type="text" placeholder="Filter" id="filter" className=" outline-none text-xs bg-transparent w-7 font-medium box-border "/>
            <img src={arrowDown} alt="" className="w-4 h-4"  />
          </div>

          {/* <ul id="dropdown-list">
              <li data-value="option-1">Option 1</li>
          </ul> */}
        </div>

        <div className="flex justify-center items-center mb-11">
            {/* TOO BULKY. WILL BE ADJUSTED LATER AFTER INTEGRATION */}
          <main className="mt-6 grid grid-cols-2 gap-5 grid-rows-auto">
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
      </section>
     
    </Layout>
  );
}


export default Communities;