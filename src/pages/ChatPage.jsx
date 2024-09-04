import { sereneS } from "@/assets";
import Layout from "@/Component/Shared/Layout";
import { useGetOtherUsersQuery } from "@/services/Chat/ChatSlice";
import { IoSearchOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import ChatDetailsPage from "./ChatDetailsPage";
import { useState, useEffect } from "react";
import { useChatUserMutation } from "@/services/Chat/ChatSlice";


const ChatPage = () => {
    const [user, setUser] = useState(null);
    const [roomDetails, setRoomDetails] = useState({
        roomId: null,
        therapistProfilePic: null,
        therapistId: '',
        therapistName: '',
    });
    const [activeUserId, setActiveUserId] = useState(null);

    //*Getting userInfo from local storage
    useEffect(() => {
        //* Getting user info from local storage
        const storedUser = JSON.parse(localStorage.getItem("userInfo"));
        setUser(storedUser);
    }, []);

    //* All API queries
    const [ chatUser, { isLoading: chatUserLoading} ] = useChatUserMutation();
    const { data: allOtherUsers, isLoading: getOtherUsersLoading, isError: getOtherUsersError } = useGetOtherUsersQuery();
    // console.log(allOtherUsers);

    const otherUsers = allOtherUsers?.data;
    // console.log(otherUsers)


    //* Set up for chatting with user
    const handleChatUserClick = async (otherUser) => {
        // console.log(otherUserId)
        if(user) {
            try{
                const res = await chatUser({ userId1: user?._id, userId2: otherUser?._id }).unwrap();
                // console.log(res);
                const newRoomId = res?.data?._id;
                setRoomDetails({
                    roomId: newRoomId,
                    therapistProfilePic: otherUser.image,
                    therapistId: otherUser._id,
                    therapistName: otherUser.name,
                })
                setActiveUserId(otherUser._id);
            } catch (err) {
                console.error("Failed to chat:", err)
            }
        }
    };

    //* Handling loading and error states
    if (getOtherUsersLoading) return <p className="text-serene">Loading...</p>;
    if (getOtherUsersError) return <p className="text-serene">There was an error loading users.</p>;


  return (
    <>
        <Layout hideHeaderCSS={`hidden`}>
            <div className="h-screen md:max-h-[630px] md:grid md:grid-cols-[30%_70%] hidden" id="chatsection">
                {/* USERLIST SECTION */}
                <div className="userlist-section">
                    <div>
                        <div className="flex justify-evenly items-center pt-8 pb-5 mb-4 ">
                            <div><RxHamburgerMenu  className="text-[#c7c7c7] size-6 "/></div>
                            <div>
                                <form action="">
                                    <div className="bg-[#272727] px-5 py-2 rounded-full h-10 flex justify-center items-center">
                                        <label for="search"><IoSearchOutline className="text-[#a3a3a3] size-[18.5px] " /></label>
                                        <input type="text" className="bg-transparent border-none focus:outline-none focus:ring-0 focus:border-none text-white pl-2 placeholder:text-[#a3a3a3] font-medium " placeholder="Search.." />
                                    </div>
                                </form>
                            </div>
                        </div>

                        {/* RENDERED USERS SECTION */}
                        <section className="overflow-y-auto contact-space scrollbar-hide" id="userlist">
                            <nav>
                                <ul>
                                    {otherUsers.map((otherUser) => (
                                         <li 
                                         key={otherUser?._id}
                                         onClick={() => handleChatUserClick(otherUser)}
                                         className={`flex items-center mx-4 py-3 mt-1 px-2 w-[91%] ${ otherUser?._id === activeUserId ? "bg-[#202020] rounded-none" : ""}`}>
                                         <img src={otherUser?.image} alt="" className="size-11 rounded-full" />
                                         <div className="ml-3 flex items-center">
                                             <div className="text-white font-bold flex items-center justify-between w-60 ">
                                                 <p>{otherUser?.name}</p>
                                                 <time datetime="" className="text-[#c7c7c7] text-xs font-normal ">18:16</time>
                                             </div>
                                         </div>
                                     </li>
                                    ))}
                                </ul>
                            </nav>
                        </section>
                    </div>
                </div>

                <div className="relative">
                    {roomDetails.roomId ? (
                        <ChatDetailsPage 
                            {...roomDetails}
                        />
                    ) : (
                        <div className="flex  flex-col items-center justify-center gap-4 h-full bg-[#141414] ">
                            <img src={sereneS} alt="serene logo" className="size-12 opacity-75" />
                            <p className="text-[#c7c7c7] font-medium text-xl text-opacity-75">Select a chat to start messaging</p>
                        </div>
                    )}
                </div>
            </div>
        </Layout>
    </>
  )
}

export default ChatPage;