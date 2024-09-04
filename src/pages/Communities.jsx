import Post from "@/Component/Community/Post";
import Layout from "@/Component/Shared/Layout";
import { communityCoverPic, communityProfilePic, menuBar, postPic, ruleArrowDown, yellowPlusSign } from "@/assets";
import CommunityRuleCard from "@/Component/Community/CommunityRuleCard";
import ProfileHeader from "@/features/psychologists/ProfileHeader";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useGetCommunitiesQuery, useGetCommunityPostQuery, useGetUserCommunityQuery, useLeaveCommunityMutation } from "@/services/community/CommunitySlice";
import { LuMoreHorizontal, LuPlus } from "react-icons/lu";
import { useState, useEffect } from "react";
import PopupModal from "@/Component/Shared/PopupModal";
import PostModal from "@/Component/Community/PostModal";


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
    //* All useStates
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [ isPostOpen, setIsPostOpen ] = useState(false);
    const [user, setUser] = useState(null);

    //* Getting user info from local storage
    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("userInfo"));
        setUser(storedUser);
    }, []);
  

    //* Accessing the communityId from the URL
    const { communityID } = useParams();
    const navigate = useNavigate();

    //* All API queries
    const { data: allCommunities } = useGetCommunitiesQuery();
    const {data: allPosts, refetch: refetchPosts} = useGetCommunityPostQuery(communityID);
    const [leaveCommunity, { isLoading: loadingLeave }] = useLeaveCommunityMutation();
    const { refetch: refetchUserCommunities } = useGetUserCommunityQuery();

    //* Destructuring
    const communities = allCommunities?.data || [];
    const posts = allPosts?.data || [];

    //* Getting a single community
    const selectedCommunity = communities.find((community) => community._id === communityID )
    // console.log(selectedCommunity);
    if (!selectedCommunity) {
        return <h1 className="text-white text-center font-semibold">Community not found</h1>;
    }

    //* Set up to go back to previous page
    const handleBackClick = () => navigate("/community");

    //* To handle menu dropdown toggle
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    //* To handle Popup when a user wants to make a post 
    const handleOpenPostModal = () => {
        setIsPostOpen(true);
        closeMenu();
    };
    const handleClosePostModal = () => setIsPostOpen(false);

    //* To handle Popup when a user wants to leave a community
    const handleOpenModal = () => {
        setIsModalOpen(true);
        closeMenu();
    };
    const handleCloseModal = () => setIsModalOpen(false);
      

    //* Set up for leaving a community
    const handleLeaveClick = async () => {
        if (user) {
            try {
                const res = await leaveCommunity({communityId: communityID, userId: user._id}).unwrap();
                console.log("Left community successfully!", res);
                navigate(`/community`);
                refetchUserCommunities();
            } catch(error) {
                handleCloseModal();
                console.error("Failed to leave community:", error)
            }
        }
       
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
                            <button onClick={handleOpenPostModal} className="text-serene flex items-center gap-1 border border-serene rounded-sm font-medium text-[.82rem] px-3 py-1 ">
                                <LuPlus className="size-[.95rem] text-serene " />
                                Say something
                            </button>
                            <LuMoreHorizontal onClick={toggleMenu}   className="border border-[#717171] rounded-md  text-[#fffcab]  size-7 px-[5px] cursor-pointer "/>
                        </div>
                    </div>
                </ProfileHeader>
                
                {/* MORE OPTIONS FOR MENU BAR */}
                {isMenuOpen && (
                    <ul className="text-white text-sm font-medium flex flex-col lg:w-[140px] xl:w-[180px] absolute lg:ml-[80%] xl:ml-[82%] text-opacity-70 bg-[#5e5e5e] rounded-xl mt-1 p-1 cursor-pointer shadow-lg "> 
                        <li className="hover:bg-[#555321] rounded-md py-3 pl-4 " onClick={handleOpenModal}>Leave community</li>
                        <li className="hover:bg-[#555321] rounded-md py-3 pl-4" onClick={closeMenu}>Mute community</li>
                    </ul>
                )}
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
                                <Post 
                                    key={post._id}
                                    posterName={post.userId?.username}
                                    // posterImg={post.userId?.avatar}
                                    postTime={post.time}
                                >
                                    {post.message}
                                </Post>
                            ))
                        )}
                    </div>

                    {/* COMMUNITY RULE SECTION */}
                    <aside className="xl:h-[41rem] xl:w-[28rem] bg-[#272727]  rounded-[9px]  ">
                        <CommunityRuleCard 
                            key={selectedCommunity._id}
                            communityName={selectedCommunity.name}
                            communityDescription={selectedCommunity.description}
                            communityRuleArr={selectedCommunity.rules}
                            communityRuleTopics={selectedCommunity.topics}
                        />
                    </aside>
                </div>
            </section>

            <PopupModal 
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                popupTitle={`Are you sure you want to leave the Cheers Champion community?`}
                btn1={`Cancel`}
                btn2="Leave"
                btn2Logic={handleLeaveClick}
                loadingLeave={loadingLeave}
            />

            <PostModal 
                isOpen={isPostOpen}
                onClose={handleClosePostModal}
                communityId={communityID}
                refetchPosts={refetchPosts}
            />
        </Layout>
        </>
  )
}

export default Communities;