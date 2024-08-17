import Badges from "./Badges";


const CommunityCard = ({backgroundColor, BadgeStyling, communityName, communityMembers, communityPicture}) => {

    return ( 
        <>
            <div className={` ${backgroundColor} communityCard1-cont flex items-center xl:justify-start xl:gap-6 w-[13rem] md:px-2 md:py-4 rounded-lg xl:w-[15rem] mr-4 pr-28 pl-2 gap-2`}>
                <img src={communityPicture} alt="" className="h-9 w-9 bg-[#d9d9d9] rounded-full"/>

                <div className="communityCard1-info">
                    <h5 className="font-semibold text-xs md:text-sm w-[8rem] ">{communityName}</h5>
                    <p className="text-xs font-medium my-1 text-[#666666] ">{communityMembers}</p>
                    <Badges styling={`${BadgeStyling} text-xs`}>Alcoholics</Badges>
                </div>  
            </div>
        </>
     );
}
 
export default CommunityCard;