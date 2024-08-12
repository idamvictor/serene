import Badges from "@/Component/ui/Badges";
import { menuBar } from "@/assets";


const CommunityCard2 = ({communityProfilePic, communityName, badgeTitle, communityDescription, communityMembers}) => {
  return (
    <>
       <div className="border border-[#6c6c6c] w-[28.5rem] rounded-[.5625rem] flex items-start gap-2 p-3 relative">
            <img src={communityProfilePic} alt="" className="h-9 w-9 bg-[#d9d9d9] rounded-full" />

            <div className="flex flex-col gap-2 w-[100%]">
              <div className="flex items-center justify-between">
                <h3 className="text-white font-bold">{communityName}</h3>
                <img src={menuBar} alt="" className="w-4 h-4 absolute flex ml-[83%] " />
              </div>

              <Badges styling={"text-[#5f5f5f] bg-[#E1DC58] text-[.85rem] w-[6rem]"}> {badgeTitle} </Badges>

              <p className="text-serene-gray text-sm pr-48 leading-5 ">{communityDescription}</p>

              <div className="community-members flex items-center justify-between w-[100%] ">
                <div className="flex items-center gap-1">
                  <img src="" alt="" className="h-4 w-4 bg-[#d9d9d9] rounded-full" />
                  <p className="text-white text-[.85rem] font-medium ">{communityMembers}</p>
                </div>
                <button className="bg-transparent font-semibold text-serene border border-serene text-[.8rem] px-3 py-1 rounded-[.375rem] hover:bg-serene hover:text-[#191919]  ">Join</button>
              </div>
            </div>
          </div>
    </>
  )
}

export default CommunityCard2;
