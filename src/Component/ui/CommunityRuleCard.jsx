import NewRule from "@/Component/ui/NewRule";
import Badges from "@/Component/ui/Badges";

const CommunityRuleCard = () => {
  return (
    <>
    <section className="border-b-[1px] border-b-[#3f3f3f] py-5 px-8 flex flex-col gap-2 ">
        <h4 className="font-semibold text-white text-sm ">Cheers Champions</h4>

        <p className="text-sm text-[#a3a3a3] tracking-wide ">A safe place for people suffering from alcohol addiction looking to cut down or stop to share.</p>

        <div className="flex justify-between items-center w-[37%] ">
            <div className="flex flex-col">
                <p className="font-medium text-base text-white tracking-wider">1K</p>
                <p className="text-[#a3a3a3] text-xs ">Members</p>
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
          <NewRule 
            rule={`Comments from profiles with verified badges are from medical professionals.`}
          />
          <NewRule 
            rule={`No reposts.`}
          />
           <NewRule 
            rule={`No hate speech, no harassment.`}
          />
           <NewRule 
            rule={`No politics or political figures.`}
          />
           <NewRule 
            rule={`No social media or AI-generated content.`}
          />
        </ol>
      </section>

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
