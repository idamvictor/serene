import Post from "@/Component/ui/Post";
import Layout from "@/Component/Shared/Layout";
import { communityCoverPic, communityProfilePic, menuBar, postPic, ruleArrowDown, yellowPlusSign } from "@/assets";
import CommunityRuleCard from "@/Component/ui/CommunityRuleCard";
import ProfileHeader from "@/features/psychologists/ProfileHeader";
import { Link, useNavigate } from "react-router-dom";


    //* COMMUNITY ACTION BUTTONS
export const communityActionBtns = ({BtnText}) => {
    return ( 
        <>
            <button className="px-4 py-2 text-white bg-[#242424] ">{BtnText}</button>
        </>
     );
};

    //* COMMUNITIES COMPONENT
const Communities = () => {

    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate("/community")
    };

    return (
        <>
        <Layout onBack={handleBackClick}>
            <div className=" mt-28 lg:mx-3 lg:mt-28 xl:mx-7 xl:mt-28 ">
                <ProfileHeader
                    name={``}
                    avatarSrc={communityProfilePic}
                    coverSrc={communityCoverPic}
                    profileCoverStyling={`h-20 `}
                    profileHeaderStyling={`size-14`}
                >
                    <div className="hidden md:flex md:self-end md:items-center md:justify-between md:mt-14 max-md:mt-10 md:w-[100%] ">
                        <h3 className="text-white font-semibold ">Cheers Champions</h3>

                        <div className="flex items-center gap-4">
                            <button className="text-serene flex items-center gap-1 border border-serene rounded-sm font-medium text-[.82rem] px-3 py-1 ">
                                <img src={yellowPlusSign} alt="" className="w-4 h-4 " />
                                Say something
                            </button>

                            <Link to={""} className="bg-transparent font-semibold text-serene border border-serene text-[.8rem] px-3 py-1 rounded-sm hover:bg-serene hover:text-[#191919]  ">Join</Link>

                            <img src={menuBar} alt="" className="border border-[#717171] rounded-md px-[5px] py-[14px]  " />
                        </div>
                    </div>
                </ProfileHeader>
            </div>
        

            <section className="mt-8 mb-10 lg:mx-4 xl:mx-7 flex items-center justify-center ">
                <div className="tab-btns">
                    <communityActionBtns BtnText="Post" />
                    <communityActionBtns BtnText="About" />
                </div>

                {/* COMMUNITY POSTS */}
                <div className="grid grid-cols-[3fr_2fr] auto-rows-auto place-content-center">
                    <div className="post-cont mr-10">
                        {/* ALL POSTS WILL BE WITHIN THIS POST-CONT DIV */}
                        <h4 className="text-serene-gray text-sm font-medium  flex items-center gap-2 mb-3 ">Hot
                            <img src={ruleArrowDown} alt="" className="w-3 h-3" />
                        </h4>
                        <Post>
                            <p>One thing that has really helped me is focusing on small, manageable steps. I started by setting tiny goals for myself, like getting out of bed at a certain time or going for a short walk. These might seem insignificant, but accomplishing them gave me a sense of achievement and gradually built up my confidence.</p>
                        </Post>

                        <Post>
                            <p>Today felt like hell😥 I even considered suicide.</p>
                            <img src={postPic} alt="post picture" className="my-3" />
                        </Post>
                    </div>


                    {/* COMMUNITY RULE SECTION */}
                    <aside className="xl:h-[41rem] bg-[#272727]  rounded-[9px]  ">
                        <CommunityRuleCard />
                    </aside>
                </div>
            </section>
        </Layout>
        </>
  )
}

export default Communities;
