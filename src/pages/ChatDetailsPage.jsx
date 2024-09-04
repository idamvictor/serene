import { PiSmileyBold } from "react-icons/pi";
import { LuSendHorizonal } from "react-icons/lu";
import { MdAlternateEmail } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { LuMoreHorizontal } from "react-icons/lu";
import { userDashboardProfilePic } from "@/assets";

const ChatDetailsPage = ({userProfilePic, userName }) => {
  return (
    <>
        <div className=" bg-[#181818]">
            <div className="h-full flex flex-col" >
                {/* Fist Div */}
                <div className="bg-[#272727] h-24 flex items-center justify-between px-8">
                    <div className="flex items-center gap-1" id="profile-section">
                        <img src={userDashboardProfilePic} alt="" className=" size-9 rounded-full" id="prof-pic" />
                        <div className="ml-2">
                            <div className="text-white font-semibold" id="other-user">Mark</div>
                            <div className="text-[#a3a3a3] text-xs" id="onlinestatus">Less than 5 mins</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <IoSearchOutline className="text-[#c7c7c7] size-[18.5px] " />
                        <LuMoreHorizontal className="size-5 text-white" />
                    </div>
                </div>

                {/* Second Div  */}
                <div className="flex-grow relative">
                    <div className="overflow-y-auto pt-4 h-[480px]  scroll-smooth scrollbar-hide" id="chat-space">

                            {/* RECEIVER CHAT BUBBLE */}
                        <div className="flex items-start space-x-2 p-2 rounded-lg w-64 mt-1 ml-8 text-xs ">
                            <img src={userDashboardProfilePic} alt="" className="size-6 rounded-full" />
                            <div className="flex flex-col bg-[#272727] rounded-lg p-1 min-w-48">
                                {/* <span className="text-white font-semibold m-1">Mark</span> */}
                                <p className="text-[#c7c7c7] font-medium mt-1 ml-1 mr-1">Do you offer discounts from payment 
                                30k and above.</p>
                                <span className="text-[#a3a3a3] self-end text-[0.65rem] mt-[0.2rem]">12:30</span>
                            </div>
                        </div>

                        {/* SENDER CHAT BUBBLE */}
                        <div className="mb-2 mr-8  h-fit text-xs absolute right-0 bg-serene  rounded-lg px-2 p-1 min-w-44 max-w-52 flex flex-col ">
                            <div class="absolute top-0 right-0 transform -translate-y-1 -translate-x-1/2 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-serene border-l-8 border-l-transparent -rotate-90"></div>
                            <span className="text-[#191919] font-medium ">Good evening all</span>
                            <span className="text-[0.65rem] text-[#686868] self-end ">4:30AM</span>
                            {/* </div> */}
                        </div>
                    </div>
                        
        
                    <form id="chatForm" className="">
                        <div className=" absolute w-full bg-[#272727] flex items-center justify-center gap-5 bottom-0 border-t-[1px] border-t-[#464646] ">
                            <div className="flex items-center gap-5">
                                <PiSmileyBold className="size-5 text-[#c7c7c7] " />
                                <div className="px-1 py-2 w-[40rem] flex items-center">
                                    <input type="text" name="msg" id="msg" className="bg-transparent border-none focus:outline-none focus:ring-0 focus:border-none py-3 w-full text-white placeholder:text-[#a3a3a3] placeholder:text-sm font-medium " placeholder="Start typing..." autocomplete="off" />
                                </div>
                            </div>
                            <button className="flex items-center gap-4" id="chatFormBut">
                                <MdAlternateEmail className="text-[#a3a3a3] size-5 " />
                                <LuSendHorizonal  className="text-serene size-5"/>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default ChatDetailsPage;
