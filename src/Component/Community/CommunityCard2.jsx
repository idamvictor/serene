import Badges from "@/Component/ui/Badges";
import { menuBar, spinner } from "@/assets";
import {  useJoinCommunityMutation } from "@/services/community/CommunitySlice";
import { Link, useNavigate } from "react-router-dom";
import { LuMoreVertical } from "react-icons/lu";



//* COMMUNITYCARD2 COMPONENT
const CommunityCard2 = ({communityProfilePic, communityName, badgeTitle, communityDescription, communityMembers, communityId, isMember, refetchUserCommunities}) => {
  const navigate = useNavigate();

  //* Getting userId from Local storage
  const userId = JSON.parse(localStorage.getItem("userInfo"))?._id;

  //* All API queries
  const [joinCommunity, { isLoading }] = useJoinCommunityMutation();


  //* Set up for sending the post request when a user clicks join
  const handleJoinClick = async () => {
    try {
      await joinCommunity({ communityId, userId }).unwrap();
      refetchUserCommunities();
      navigate(`/community/${communityId}/${communityName}`);
    } catch (error) {
      console.error("Error joining community:", error);
    }
  };


  return (
    <>
      <div className="border border-[#333333] bg-[#1b1b1b] rounded-[.5625rem] flex items-start gap-2 p-3 relative h-[10.5rem] ">
          <img src={communityProfilePic} alt="" className="h-9 w-9 bg-[#d9d9d9] rounded-full" />

          <div className="flex flex-col gap-2 w-[100%]">
            <div className="flex items-center justify-between">
              <h3 className="text-white text-[.93rem] font-bold xl:text-base">{communityName}</h3>
              <LuMoreVertical className="text-[#c7c7c7] size-5 absolute flex ml-[76%] lg:ml-[78%] xl:ml-[80%] " />
            </div>

            <Badges styling={"text-[#5f5f5f] bg-[#E1DC58] text-xs w-[4.5rem] xl:text-[.85rem] xl:w-[6rem]"}> {badgeTitle} </Badges>

            <p className="text-serene-gray text-xs leading-5 pr-20  xl:text-sm ">{communityDescription}</p>

            <div className="community-members flex items-center justify-between w-[81%] lg:w-[82%] xl:w-[84%] absolute bottom-0 mb-3">
              <div className="flex items-center gap-1">
                <img src="" alt="" className="h-4 w-4 bg-[#d9d9d9] rounded-full" />
                <p className="text-white  text-sm xl:text-[.85rem] font-medium ">{communityMembers <= 1 ? `${communityMembers} Member` : `${communityMembers} Members` }</p>
              </div>

              {/* VIEW OR JOIN LOGIC */}
              {isMember ? (
                <Link
                  to={`/community/${communityId}/${communityName}`}
                  className="bg-transparent font-semibold text-serene border border-serene text-[.8rem] px-3 py-1 rounded-[.375rem] hover:bg-serene hover:text-[#191919]"
                >
                  View
                </Link>
              ) : (
                <button
                  onClick={handleJoinClick}
                  className={`flex items-center justify-center font-semibold text-[.8rem] px-3 py-1 rounded-[.375rem] border border-serene ${
                    isLoading ? "bg-transparent text-serene" : "bg-serene text-[#191919]"
                  } hover:bg-serene hover:text-[#191919] ${isLoading ? "cursor-not-allowed" : ""}`}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <img src={spinner} width={20} height={20} alt="Loading" />
                  ) : (
                    "Join"
                  )}
                </button>

              )}
            </div>
          </div>
      </div>
    </>
  )
}

export default CommunityCard2;