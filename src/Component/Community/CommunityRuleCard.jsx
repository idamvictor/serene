import NewRule from "@/Component/Community/NewRule";
import Badges from "@/Component/ui/Badges";

const CommunityRuleCard = ({ communityName, communityDescription, communityRuleArr, communityRuleTopics, communityMembers }) => {
  return (
    <>
    <section className="border-b-[1px] border-b-[#3f3f3f] py-5 px-8 flex flex-col gap-2 ">
        <h4 className="font-semibold text-white text-sm ">{communityName}</h4>

        <p className="text-sm text-[#a3a3a3] tracking-wide ">{communityDescription}</p>

        <div className="flex justify-between items-center xl:w-[37%] lg:w-[58%] ">
            <div className="flex flex-col">
                <p className="font-medium text-base text-white tracking-wider">{communityMembers}</p>
                {communityMembers <= 1 
                ? <p className="text-[#a3a3a3] text-xs ">Member</p>
                : <p className="text-[#a3a3a3] text-xs ">Members</p>
              }
            </div>

            <div className="flex flex-col">
                <p className="font-medium text-base text-white tracking-wider ">20</p>
                <div className="flex items-center gap-1">
                    <div className="h-2 w-2 rounded-full bg-[#27ae60] "></div>
                    <p className="text-[#a3a3a3] text-xs ">Online</p>
                </div>
            </div>
        </div>
      </section>

      <section className="rules-section px-8 py-5 border-b-[1px] border-b-[#3f3f3f]">
        <h4 className="text-base text-[#a3a3a3] font-semibold tracking-wider mb-5 ">RULES</h4>
        <ol className="list-decimal pl-3 flex flex-col gap-5  ">
          {communityRuleArr.map((rule, index) => (
            <NewRule
              key={index}
              rule={rule}
            />
          ))}
        </ol>
      </section>

      {/* BADGES SECTION */}
      <section className="topic-section px-8 mb-5">
        <h4 className="text-base text-[#a3a3a3] font-semibold tracking-wider mb-4 mt-5">TOPICS</h4>

        <div className="flex w-[95%] flex-wrap gap-3">
          <Badges
              styling={`bg-serene`}
            >  Alcohol</Badges>
              <Badges
              styling={`bg-serene-purple`}
            >  Happiness</Badges>
              <Badges
              styling={`bg-serene-ash`}
            >  Mood booster</Badges>
              <Badges
              styling={`bg-serene-blue`}
            >  Soberity</Badges>
        </div>
      </section>
    </>
  )
}

export default CommunityRuleCard;
