import Badges from "@/Component/ui/Badges";
import { menuBar } from "@/assets";
import {  useJoinCommunityMutation } from "@/services/community/CommunitySlice";
import { Link, useNavigate } from "react-router-dom";



//* COMMUNITYCARD2 COMPONENT
const CommunityCard2 = ({communityProfilePic, communityName, badgeTitle, communityDescription, communityMembers, communityId, isJoined}) => {

  //* GETTING THE USER ID FROM LOCAL STORAGE
  const userId = JSON.parse(localStorage.getItem("userInfo"))._id;


  //* SET UP FOR SENDING THE POST REQUEST WHEN A USER CLICKS JOIN
  const [joinCommunity, { isLoading, isError, error, data }] = useJoinCommunityMutation();

  const navigate = useNavigate();

  const handleJoinClick = async () => {
    try {
      const res = await joinCommunity({ communityId, userId }).unwrap();
      console.log("JOIN API RESPONSE:", res);
      // return true; 
    } catch (error) {
      console.log("JOIN API ERR", error)
      // return false; 
    }
  };

  const handleButtonClick = async () => {
    console.log("Join Button Clicked!")
    const success = await handleJoinClick();
    if (success) {
      navigate(`/community/${communityId}/${communityName}`); //* REDIRECTS AFTER SUCCESSFULLY JOINING A COMMUNITY
    }
  };

  return (
    <>
      <div className="border border-[#6c6c6c]  rounded-[.5625rem] flex items-start gap-2 p-3 relative ">
          <img src={communityProfilePic} alt="" className="h-9 w-9 bg-[#d9d9d9] rounded-full" />

          <div className="flex flex-col gap-2 w-[100%]">
            <div className="flex items-center justify-between">
              <h3 className="text-white text-[.93rem] font-bold xl:text-base">{communityName}</h3>

              {/* TODO: CHANGE TO HORIZONTAL */}
              <img src={menuBar} alt="" className="w-[1.25rem] h-[.1875] absolute flex ml-[73%] md:ml-[74.5%] lg:ml-[76%] xl:ml-[82%]  " />
            </div>

            <Badges styling={"text-[#5f5f5f] bg-[#E1DC58] text-xs w-[4.5rem] xl:text-[.85rem] xl:w-[6rem]"}> {badgeTitle} </Badges>

            <p className="text-serene-gray text-xs leading-5 pr-20  xl:text-sm ">{communityDescription}</p>

            <div className="community-members flex items-center justify-between w-[100%] ">
              <div className="flex items-center gap-1">
                <img src="" alt="" className="h-4 w-4 bg-[#d9d9d9] rounded-full" />
                <p className="text-white  text-sm xl:text-[.85rem] font-medium ">{communityMembers}</p>
              </div>
              {isJoined ? (
                <Link
                  to={`/community/${communityId}/${communityName}`}
                  className="bg-transparent font-semibold text-serene border border-serene text-[.8rem] px-3 py-1 rounded-[.375rem] hover:bg-serene hover:text-[#191919]"
                >
                  View
                </Link>
              ) : (
                <button
                  onClick={handleButtonClick}
                  className="bg-transparent font-semibold text-serene border border-serene text-[.8rem] px-3 py-1 rounded-[.375rem] hover:bg-serene hover:text-[#191919]"
                  disabled={isLoading}
                >
                  Join
                </button>
              )}
            </div>
          </div>
      </div>
    </>
  )
}

export default CommunityCard2;