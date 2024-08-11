import Badges from "./Badges";

const CommunityCard = ({backgroundColor, BadgeStyling, communityName, communityMembers, communityPicture}) => {
    return ( 
        <>
            <div className={` ${backgroundColor} communityCard-cont flex items-center justify-start gap-6 w-[14rem] px-5 py-3 rounded-lg`}>
                <img src={communityPicture} alt="" className="h-9 w-9 bg-[#d9d9d9] rounded-full"/>

                <div className="community-info">
                    <h5 className="font-semibold text-sm">{communityName}</h5>
                    <p className="text-xs font-medium my-1 text-[#666666] ">{communityMembers}</p>
                    <Badges styling={`${BadgeStyling}`}>Alcoholics</Badges>
                </div>
            </div>
        </>
     );
}
 
export default CommunityCard;