import Post from "@/Component/ui/Post";
import Layout from "@/Component/Shared/Layout";
import { communityCoverPic, communityProfilePic, menuBar, postPic, ruleArrowDown, yellowPlusSign } from "@/assets";
import CommunityRuleCard from "@/Component/ui/CommunityRuleCard";
import ProfileHeader from "@/features/psychologists/ProfileHeader";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useGetCommunitiesQuery, useGetCommunityPostQuery } from "@/services/community/CommunitySlice";
import { LuMoreHorizontal, LuPlus } from "react-icons/lu";
import { useState } from "react";


    //* COMMUNITY ACTION BUTTONS
export const CommunityActionBtns = ({btnText}) => {
    return ( 
        <>
            <button className="px-4 py-2 text-white bg-[#242424] ">{btnText}</button>
        </>
     );
};



//* COMMUNITIES COMPONENT
const Communities = () => {
    //* Accessing the communityId from the URL
    const { communityID } = useParams();

    //* Getting all posts in a community
    const {data: allPosts} = useGetCommunityPostQuery(communityID);
    const posts = allPosts?.data || [];
    console.log(posts)

    //* Getting a single community
    const { data: allCommunities } = useGetCommunitiesQuery();
    const communities = allCommunities?.data || [];
    const selectedCommunity = communities.find((community) => community._id === communityID )
    console.log(selectedCommunity);

    //* set up to go back to previous page
    const navigate = useNavigate();
    const handleBackClick = () => {
        navigate("/community")
    };

    if (!selectedCommunity) {
        return <h1 className="text-white text-center font-semibold">Community not found</h1>;
    }

    //* To handle menu dropdown toggle
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    const handleOptionClick = () => {
        setIsOpen(false);
    };


    return (
        <>
        <Layout onBack={handleBackClick}>
            <div className=" mt-28 lg:mx-3 lg:mt-28 xl:mx-7 xl:mt-28 relative">
                <ProfileHeader
                    name={``}
                    avatarSrc={communityProfilePic}
                    coverSrc={communityCoverPic}
                    profileCoverStyling={`h-20 `}
                    profileHeaderStyling={`size-14 lg:size-20`}
                >
                    <div className="hidden md:flex md:self-end md:items-center md:justify-between md:mt-14 max-md:mt-10 md:w-[100%] ">
                        <h3 className="text-white font-semibold ">{selectedCommunity.name}</h3>

                        <div className="flex items-center gap-4">
                            <button className="text-serene flex items-center gap-1 border border-serene rounded-sm font-medium text-[.82rem] px-3 py-1 ">
                                <LuPlus className="size-[.95rem] text-serene " />
                                Say something
                            </button>
                            <LuMoreHorizontal onClick={toggleDropdown}   className="border border-[#717171] rounded-md  text-[#fffcab]  size-7 px-[5px] cursor-pointer "/>
                        </div>
                    </div>
                </ProfileHeader>
                
                {/* MORE OPTIONS FOR MENU BAR */}
                {/* <div className=""> */}

                {isOpen && (
                    <ul className="text-white text-sm font-medium flex flex-col lg:w-[140px] xl:w-[180px] absolute lg:ml-[80%] xl:ml-[82%] text-opacity-70 bg-[#5e5e5e] rounded-xl mt-1 p-1 cursor-pointer shadow-lg "> 
                        <li className="hover:bg-[#555321] rounded-md py-3 pl-4 " onClick={handleOptionClick}>Leave community</li>
                        <li className="hover:bg-[#555321] rounded-md py-3 pl-4" onClick={handleOptionClick}>Mute community</li>
                    </ul>
                )}

                {/* </div> */}
            </div>
        
            

            <section className="mt-8 mb-10 lg:mx-4 xl:mx-7 flex items-center justify-center ">
                <div className="tab-btns hidden">
                    <CommunityActionBtns btnText="Post" />
                    <CommunityActionBtns btnText="About" />
                </div>

                {/* COMMUNITY POSTS */}
                <div className="grid grid-cols-[3fr_2fr] auto-rows-auto place-content-center">
                    <div className="post-cont mr-10">
                        {/* ALL POSTS WILL BE WITHIN THIS POST-CONT DIV */}
                        <h4 className="text-serene-gray text-sm font-medium  flex items-center gap-2 mb-3 ">Hot
                            <img src={ruleArrowDown} alt="" className="w-3 h-3" />
                        </h4>

                        {posts.length === 0 
                        ? ( <h1 className="text-white text-center font-semibold">NO POSTS YET</h1>) 
                        : ( Array.isArray(posts) && posts.map((post) => (
                                <Post key={post._id}>
                                    {post.message}
                                </Post>
                            ))
                        )}


                       
                        {/* <Post>
                            <p>One thing that has really helped me is focusing on small, manageable steps. I started by setting tiny goals for myself, like getting out of bed at a certain time or going for a short walk. These might seem insignificant, but accomplishing them gave me a sense of achievement and gradually built up my confidence.</p>
                        </Post>

                        <Post>
                            <p>Today felt like hell😥 I even considered suicide.</p>
                            <img src={postPic} alt="post picture" className="my-3" />
                        </Post> */}
                    </div>


                    {/* COMMUNITY RULE SECTION */}
                    <aside className="xl:h-[41rem] bg-[#272727]  rounded-[9px]  ">
                        <CommunityRuleCard 
                            communityName={selectedCommunity.name}
                            communityDescription={selectedCommunity.description}
                            communityRuleArr={selectedCommunity.rules}
                            communityRuleTopics={selectedCommunity.topics}
                        />
                    </aside>
                </div>
            </section>
        </Layout>
        </>
  )
}

export default Communities;
