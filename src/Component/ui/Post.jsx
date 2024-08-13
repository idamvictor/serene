import { menuBar, userProfilePic, postMessage, postForwardArrow } from "@/assets";

export const PostActionBtn = ({btnIcon, btnIconAlt, btnTitle, }) => {
    return ( 
        <>
            <button className="flex items-center justify-center gap-1 bg-[#282828] rounded-full px-[.9rem] py-[.375rem] ">
                <img src={btnIcon} alt={btnIconAlt} className="w-4 h-4" />
                <span>{btnTitle}</span>
            </button>
        </>
     );
};

const Post = ({children}) => {
  return (
    <>
      <div className="text-white border-t-[1px] border-t-[#3e3e3e] flex flex-col mb-2 ">
        <div className="flex justify-between mt-3">
            <div className="flex items-center justify-center gap-1 ">
                <img src={userProfilePic} alt="user profile pic" className="w-8 h-8 rounded-full "  />
                <h4 className="username text-[.92rem] font-semibold ml-1 ">User 13453</h4>
                <div className="dot rounded-full bg-white w-[.125rem] h-[.125rem] "></div>
                <time datetime="" className="text-[.64rem] text-[#8d8d8d] font-medium">30mins ago</time>
            </div>

            <img src={menuBar} alt={"more options icon"} />
        </div>

        <main className="text-[.92rem] tracking-wide leading-6 pt-2 ">
            {children}
            </main>

        <div className="comment-box text-xs flex gap-[.6rem] h-10 items-center w-[25%] ">
            <PostActionBtn
                btnIcon={postMessage}
                btnIconAlt={"comment icon"}
                btnTitle={`20`}
            />
             <PostActionBtn
                btnIcon={postForwardArrow}
                btnIconAlt={"forward icon"}
                btnTitle={`Share`}
            />
        </div>

        
      </div>
    </>
  );
};

export default Post;
