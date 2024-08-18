import Badges from "./Badges";


const CommunityCard = ({backgroundColor, BadgeStyling, communityName, communityMembers, communityPicture}) => {

    return ( 
        <>
            <div className={` ${backgroundColor} communityCard1-cont rounded-lg flex items-center gap-2 mr-4 pr-28 pl-2 w-[13rem] md:px-2 md:py-4 lg:mr-0 lg:gap-1 lg:h-[5.5rem] lg:max-w-full xl:justify-start xl:gap-6 xl:w-[15rem]`}>
                <img src={communityPicture} alt="" className="h-9 w-9 bg-[#d9d9d9] rounded-full"/>

                <div className="communityCard1-info">
                    <h5 className="font-semibold text-xs md:text-sm w-[8rem] lg:text-xs lg:w-full">{communityName}</h5>
                    <p className="text-xs font-medium my-1 text-[#666666] ">{communityMembers}</p>
                    <Badges styling={`${BadgeStyling} text-xs`}>Alcoholics</Badges>
                </div>  
            </div>
        </>
     );
}
 
export default CommunityCard;