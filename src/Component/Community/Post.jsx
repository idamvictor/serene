import { userProfilePic, postMessage, postForwardArrow, userDashboardProfilePic } from "@/assets";
import { IoIosMore } from "react-icons/io";
import { PiShareFat } from "react-icons/pi";
import { PiSmileyBold } from "react-icons/pi";
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

        <main className="text-[.92rem] tracking-wide leading-6 pt-2 text-[#c7c7c7]">
          {children}
        </main>

        <div className="comment-box text-xs flex gap-[.6rem] h-10 items-center w-[25%] ">
          <PostActionBtn
              btnIcon={<FaRegComment className="size-4" />}
              btnIconAlt={"comment icon"}
              btnTitle={`20`}
          />
            {/* <PostActionBtn
              btnIcon={<PiShareFat  className="size-4" />}
              btnIconAlt={"forward icon"}
              btnTitle={`Share`}
          /> */}
        </div>

              {/* COMMENTS SECTION */}
        <section aria-labelledby="comments-section" className="mt-1">
          <form>
              <label for="comment" className="flex rounded-[49px] items-center justify-end">
              <textarea id="comment" name="comment" rows="1" className="relative bg-transparent rounded-[49px] shadow-sm focus:outline-none focus:ring-0 focus:border-serene border-[#343434] py-[17px] px-9 block w-full placeholder:text-[#989898] placeholder:font-bold text-sm font-medium text-white" placeholder="Add a comment...">
              </textarea>
              <PiSmileyBold  className="absolute size-5 text-[#c7c7c7] mr-4 "/>
              </label>
          </form>


          <ul className="mt-1 ">
            <li>
              <article className="p-2 bg-transparent rounded mb-4 border">
                <header className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <img src={userDashboardProfilePic} alt="" className="size-5" />
                    <h3 className="font-semibold">Jelly Bean</h3>
                  </div>

                  <div className="flex items-center gap-1">
                    <time datetime="2024-08-31">1 week</time>
                    <IoIosMore  className="text-[#989898] size-5"/> 
                  </div>
                
                </header>
                <p>This is the comment text.</p>
                <footer className="mt-2">
                  <button className="text-blue-500">Reply</button>
                </footer>
              </article>
            </li>
          </ul>

        </section>

        
      </div>
    </>
  );
};

export default Post;