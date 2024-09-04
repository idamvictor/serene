import { userDashboardProfilePic } from "@/assets";
import Layout from "@/Component/Shared/Layout";
import { useGetOtherUsersQuery } from "@/services/Chat/ChatSlice";
import { IoSearchOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

const ChatPage = () => {
    const { data: allOtherUsers } = useGetOtherUsersQuery();
    console.log(allOtherUsers)

    const users = allOtherUsers?.data;


  return (
    <>
        <Layout>
            {/* <div className="text-white mt-28 ">
                CHAT PAGE
            </div> */}

            {/* <div class="md:w-screen absolute top-3 h-8" id="header">
                <div class="md:hidden">
                    <img alt="" id="headerimg" class="w-8 h-8" />
                </div>
            </div> */}

            <div className="h-screen md:max-h-[630px] md:w-screen md:grid md:grid-cols-[1fr_3fr] md:pt-12 hidden mt-4" id="chatsection">
                <div className="">
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
                                    {users.map((user) => (
                                         <li className="flex items-center mx-4 py-1 mt-1 rounded-lg px-2 w-[87%] ">
                                         <img src={user?.image} alt="" className="size-11 rounded-full" />
                                         <div className="ml-3 flex items-center">
                                             <div className="text-white font-bold flex items-center justify-between w-60 ">
                                                 <p>{user?.name}</p>
                                                 <time datetime="" className="text-[#c7c7c7] text-xs font-normal ">18:16</time>
                                             </div>
                                         </div>
                                     </li>
                                    ))}

                                    {/* <li className="flex items-center mx-4 py-1 mt-1 rounded-lg px-2 w-[87%] ">
                                        <img src={userDashboardProfilePic} alt="" className="size-10 rounded-full" />
                                        <div className="ml-3 flex items-center">
                                            <div className="text-white font-bold flex items-center justify-between w-60 ">
                                                <p>Mary Ann Okoli</p>
                                                <time datetime="" className="text-[#c7c7c7] text-xs font-normal ">18:16</time>
                                            </div>
                                        </div>
                                    </li> */}
                                </ul>
                            </nav>
                        </section>
                    </div>
                </div>

                <div className=" bg-[#181818]">
                    <div className="h-full flex flex-col" >
                        {/* Fist Div */}
                        <div className="bg-[#272727] h-24 w-full flex items-center justify-between px-4 pr-12">
                            <div className="flex hidden" id="profile-section">
                                <img src="../images/therapist.jfif" alt="" className="h-10 w-10 rounded-full hidden" id="prof-pic" />
                                <div className="ml-2">
                                    <div className="text-white font-semibold text-sm" id="other-user"></div>
                                    <div className="text-[#C7C7C7] font-normal text-sm" id="onlinestatus"></div>
                                </div>
                            </div>
                            <div>{/* <img src="../images/svgs/call.svg" alt="" class="h-6 w-6 relative float-right hidden" id="call-icon" /> */}</div>
                        </div>

                        {/* Second Div  */}
                        <div className="flex-grow">
                            <div className="overflow-y-auto pt-4 h-[480px] scroll-smooth my-scrollbar" id="chat-space"></div>
                
                            <form id="chatForm" className="hidden">
                                <div className="h-10 w-full bg-[#464646] flex items-center justify-between">
                                    <div className="flex">
                                        <img src="../images/svgs/smiley.svg" alt="" className="ml-8 mr-3" />
                                        <div className="px-1 py-2 rounded-full h-10 w-96 flex items-center">
                                            <input type="text" name="msg" id="msg" className="bg-[#464646] border-none focus:outline-none w-full text-white" placeholder="Start typing....." autocomplete="off" />
                                        </div>
                                    </div>
                                    <button className="flex justify-end pr-8" id="chatFormBut">
                                        <img src="../images/svgs/sendbuton.svg" alt="" />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    </>
  )
}

export default ChatPage;
