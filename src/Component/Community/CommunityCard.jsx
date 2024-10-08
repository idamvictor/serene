import Badges from "@/Component/ui/Badges";
import { useNavigate } from "react-router-dom";
import {  useJoinCommunityMutation } from "@/services/community/CommunitySlice";


const CommunityCard = ({backgroundColor, badgeStyling, badgeTitle, communityName, communityId, communityMembers, communityPicture, isMember, refetchUserCommunities}) => {
const navigate = useNavigate();

const userId = JSON.parse(localStorage.getItem("userInfo"))?._id;

const [joinCommunity, { isLoading }] = useJoinCommunityMutation();

//* If not a member of a community, join community
const handleJoinClick = async () => {
    try {
      await joinCommunity({ communityId, userId }).unwrap();
      refetchUserCommunities();
      navigate(`/community/${communityId}/${communityName}`);
    } catch (error) {
      console.error("Error joining community:", error);
    }
};

//* If a member of a community, view community
const handleViewClick = () => {
    navigate(`/community/${communityId}/${communityName}`)
};

    return ( 
        <>
            <div 
                onClick={isMember ? handleViewClick : handleJoinClick}
                className={` ${backgroundColor} communityCard1-cont rounded-lg flex items-center gap-2 mr-4 pr-28 pl-2 w-[13rem] md:px-2 md:py-4 lg:mr-0 lg:gap-1 lg:h-[5.5rem] lg:max-w-full xl:justify-start xl:gap-6 xl:w-[15rem] xl:py-8`}
            >
                <img src={communityPicture} alt="" className="h-9 w-9 bg-[#d9d9d9] rounded-full"/>

                <div className="communityCard1-info">
                    <h5 className="font-semibold text-xs md:text-sm w-[8rem] lg:text-xs lg:w-full xl:text-[.85rem] text-[#191919] ">{communityName}</h5>
                    <p className="text-xs font-medium my-1 text-[#666666] ">{communityMembers <= 1 ? `${communityMembers} Member` : `${communityMembers} Members` } </p>
                    <Badges styling={`${badgeStyling}  text-xs`}>{badgeTitle}</Badges>
                </div>  
            </div>
        </>
     );
}
 
export default CommunityCard;