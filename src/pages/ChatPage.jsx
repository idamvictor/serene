import { userDashboardProfilePic } from "@/assets";
import Layout from "@/Component/Shared/Layout";
import { useGetOtherUsersQuery } from "@/services/Chat/ChatSlice";
import { IoSearchOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import ChatDetailsPage from "./ChatDetailsPage";

const ChatPage = () => {
    const { data: allOtherUsers, isLoading, isError} = useGetOtherUsersQuery();
    console.log(allOtherUsers);

    const users = allOtherUsers?.data;

     // Handling loading and error states
     if (isLoading) return <p className="text-serene">Loading...</p>;
     if (isError) return <p className="text-serene">There was an error loading users.</p>;


  return (
    <>
        <Layout hideHeaderCSS={`hidden`}>
            <div className="h-screen md:max-h-[630px] md:grid md:grid-cols-[30%_70%] hidden" id="chatsection">
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
                                </ul>
                            </nav>
                        </section>
                    </div>
                </div>

                <ChatDetailsPage />
                
            </div>
        </Layout>
    </>
  )
}

export default ChatPage;
