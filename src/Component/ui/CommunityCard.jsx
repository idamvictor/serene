import Badges from "./Badges";

const CommunityCard = ({backgroundColor}) => {
    return ( 
        <>
            <div className={` ${backgroundColor} communityCard-cont flex items-center justify-center gap-3 px-6 py-3`}>
                <img src="" alt="" className="h-9 w-9 bg-[#d9d9d9] rounded-full"/>

                <div className="community-info">
                    <h5 className="font-semibold text-sm">Cheers Champion</h5>
                    <p className="text-xs font-medium my-1 text-[#666666] ">12K members</p>
                    <Badges styling="bg-[#e2dea3">Alcoholics</Badges>
                </div>
            </div>
        </>
     );
}
 
export default CommunityCard;