import { menuBar, userProfilePic, postMessage, postForwardArrow } from "@/assets";

const Post = ({children}) => {
  return (
    <>
      <div>
        <div>
            <div>
                <img src={userProfilePic} alt="" />
                <h4 className="username">User13453</h4>
                <div className="dot rounded-full bg-white"></div>
                <time datetime="">30mins ago</time>
            </div>

            <img src={menuBar} alt="" />
        </div>

        <main>{children}</main>

        <div className="comment-box">
            <div>
                <img src={postMessage} alt="" />
                <span>20</span>
            </div>
            
            <div>
                <img src={postForwardArrow} alt="" />
                <span>Share</span>
            </div>
        </div>

        
      </div>
    </>
  )
}

export default Post;
