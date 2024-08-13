import { menuBar, userProfilePic, postMessage, postForwardArrow } from "@/assets";

const Post = ({children}) => {
  return (
    <>
      <div className="text-white border-t-[1px] border-t-[#3e3e3e]  ">
        <div className="flex">
            <div className="flex items-center">
                <img src={userProfilePic} alt="" className="w-4 h-4 rounded-full "  />
                <h4 className="username text-sm">User13453</h4>
                <div className="dot rounded-full bg-white"></div>
                <time datetime="" className="text-xs">30mins ago</time>
            </div>

            <img src={menuBar} alt="" />
        </div>

        <main>{children}</main>

        <div className="comment-box text-xs flex ">
            <div className="flex items-center">
                <img src={postMessage} alt="" />
                <span>20</span>
            </div>
            
            <div className="flex items-center">
                <img src={postForwardArrow} alt="" />
                <span>Share</span>
            </div>
        </div>

        
      </div>
    </>
  )
}

export default Post;
