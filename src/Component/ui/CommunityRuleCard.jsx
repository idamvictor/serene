

const CommunityRuleCard = () => {
  return (
    <>
      <section className="border-b-[1px] border-b-[#3f3f3f] py-5 px-8 flex flex-col gap-2 ">
        <h4 className="font-semibold text-white text-sm ">Cheers Champions</h4>

        <p className="text-sm text-[#a3a3a3] tracking-wide ">A safe place for people suffering from alcohol addiction looking to cut down or stop to share.</p>

        <div className="flex justify-between items-center w-[35%] ">
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

      <section className="rules-section"></section>

      <section className="topic-section"></section>
    </>
  )
}

export default CommunityRuleCard;
