import { userDashboardProfilePic } from "@/assets";
import { IoClose } from "react-icons/io5";


const PostModal = () => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    const username = user.username;
    const userImg = user.avatar;

    console.log(user)

  return (
    <>
      <div 
        className="fixed inset-0 flex items-center justify-center z-[1000]" 
        aria-modal="true" 
        role="dialog"
        // onClick={onClose}
    >
        <div className="fixed inset-0 bg-black opacity-75"  onClick={(e) => e.stopPropagation()}></div>

        <div className="bg-[#272727]  border border-[#2a2a2a] rounded-lg size-[580px]  z-[100] px-6 py-12 ">
        <form action="" className="flex flex-col gap-5">
            <div className="flex items-center justify-between">
                <div className="post-userDetails flex items-center gap-3">
                    <img src={userDashboardProfilePic} alt="" className="size-12 rounded-full" />
                    <h3 className="text-white text-sm font-semibold ">{username}</h3>
                </div>
                
                <IoClose className="size-8 text-[#a3a3a3] cursor-pointer " />
            </div>

            <textarea name="" id="" cols="30" className="placeholder-white placeholder-opacity-50 placeholder:text-lg text-lg w-full h-80 bg-transparent border-[#666666] border-opacity-40 mt-6 rounded-[.6875rem] text-white font-medium " placeholder="What do you want to talk about?"></textarea>
                
            <button className="self-end text-[#0b0b0b] bg-serene border border-serene px-6 py-1 text-[.8rem] font-semibold rounded-[4px] ">Post</button>
        </form>
            
        </div>
    </div>
    </>
  )
}

export default PostModal;
