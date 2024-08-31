import { userProfilePic, postMessage, postForwardArrow } from "@/assets";
import { IoIosMore } from "react-icons/io";
import { PiShareFat } from "react-icons/pi";
import { FaRegComment } from "react-icons/fa";
import { formatDistanceToNowStrict } from 'date-fns';

export const PostActionBtn = ({btnIcon, btnIconAlt, btnTitle }) => {
    return ( 
        <>
            <button className="flex items-center justify-center gap-1 text-[#b1b1b1] bg-[#282828]  font-medium rounded-full px-[.9rem] py-[.375rem] ">
                {/* <img src={btnIcon} alt={btnIconAlt} className="w-4 h-4" /> */}
                <div>{btnIcon}</div>
                <span>{btnTitle}</span>
            </button>
        </>
     );
};


const TimeAgo = ({ timestamp }) => {
    const timeAgo = formatDistanceToNowStrict(new Date(timestamp));  
    return timeAgo;
  };

const Post = ({children, posterName, posterImg, postTime}) => {

  return (
    <>
      <div className="text-white border-t-[1px] border-t-[#3e3e3e] flex flex-col mb-2 ">
        <div className="flex items-center justify-between mt-3">
            <div className="flex items-center justify-center gap-1 ">
                <img src={userProfilePic} alt="user profile pic" className="w-8 h-8 rounded-full "  />
                <h4 className="username text-[.92rem] font-semibold ml-1 ">{posterName}</h4>
                <div className="dot rounded-full bg-white w-[.125rem] h-[.125rem] "></div>
                <time dateTime="" className="text-[.64rem] text-[#8d8d8d] font-medium"><TimeAgo timestamp={postTime}  /></time>
            </div>
            <IoIosMore  className="text-[#b9b9b9] size-5  "/>
        </div>

        <main className="text-[.92rem] tracking-wide leading-6 pt-2 ">
            {children}
            </main>

        <div className="comment-box text-xs flex gap-[.6rem] h-10 items-center w-[25%] ">
            <PostActionBtn
                btnIcon={<FaRegComment className="size-4" />}
                btnIconAlt={"comment icon"}
                btnTitle={`20`}
            />
             <PostActionBtn
                btnIcon={<PiShareFat  className="size-4" />}
                btnIconAlt={"forward icon"}
                btnTitle={`Share`}
            />
        </div>

        
      </div>
    </>
  );
};

export default Post;