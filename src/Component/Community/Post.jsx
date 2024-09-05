import { userProfilePic, postMessage, postForwardArrow, userDashboardProfilePic } from "@/assets";
import { IoIosMore } from "react-icons/io";
import { PiShareFat } from "react-icons/pi";
import { PiSmileyBold } from "react-icons/pi";
import { FaRegComment } from "react-icons/fa";
import { formatDistanceToNowStrict } from 'date-fns';
import { useState, useEffect, useMemo, useCallback } from "react";
import { useDeleteCommentsMutation, useGetCommentsQuery, useSendCommentsMutation } from "@/services/community/CommentSlice";
import { useDeletePostMutation } from "@/services/community/CommunitySlice";


//* Action Btns for post
export const PostActionBtn = ({btnIcon, btnIconAlt, btnTitle, btnLogic }) => {
    return ( 
        <>
            <button onClick={btnLogic} className="flex items-center justify-center gap-1 text-[#b1b1b1] bg-[#282828]  font-medium rounded-full px-[.9rem] py-[.375rem] ">
                <img src={btnIcon} alt={btnIconAlt} className="w-4 h-4" />
                {/* <div>{btnIcon}</div> */}
                <span>{btnTitle}</span>
            </button>
        </>
     );
};

//* Format timestamp from backend 
const TimeAgo = ({ timestamp }) => {
    const date = useMemo(() => formatDistanceToNowStrict(new Date(timestamp)), [timestamp]);  
    return date;
};

//* POST COMPONENT
const Post = ({children, posterName, posterImg, postTime, postID, refetchPosts, postOwnerId}) => {
  const [isCommentOpen, setIsCommentOpen] = useState(false);
  const [ commentMessage, setCommentMessage ] = useState('');
  const [ user, setUser ] = useState(null);
  const [ postOptionOpen, setPostOptionOpen ] = useState(null);
  const [ commentOptionOpen, setCommentOptionOpen ] = useState(null);

  //* Getting user info from local storage
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("userInfo"));
    setUser(storedUser);
  }, []);

  //* ALL API QUERIES
  const { data: allComments, refetch: refetchComments } = useGetCommentsQuery(postID);
  const [ sendComments, { isLoading: loadingSendComment} ] = useSendCommentsMutation();
  const [ deletePost ] = useDeletePostMutation();
  const [ deleteComments ] = useDeleteCommentsMutation();

  //* Destructuring
  const postComments = useMemo(() => allComments?.data || [], [allComments]);
  // console.log(postComments)

  //* Handle comment section toggle
  const handleCommentClick = () => {
    setIsCommentOpen(prevState => !prevState);
  };

  //* Handle posting comments
  const handleCommentSubmit = useCallback(async (e) => {
    e.preventDefault();
    if (user) {
      try {
        await sendComments({ userId: user._id, comment: commentMessage, postID }).unwrap();
        setCommentMessage('');
        refetchComments();
      } catch (error) {
        console.error("Failed to create comment:", error);
      }
    }
  }, [commentMessage, postID, refetchComments, sendComments, user]);

  const handleKeyDown = (e) => {
    if ( e.key === 'Enter' && !e.shiftKey ) {
      e.preventDefault();
      handleCommentSubmit(e);
    }
  };

  //* Handle delete posts
  const handleDeletePost = useCallback(async () => {
    if (postID && user && user._id === postOwnerId) {
      try {
        await deletePost(postID).unwrap();
        refetchPosts();
      } catch (error) {
        console.error("Failed to delete post:", error);
      }
    }
  }, [deletePost, postID, postOwnerId, refetchPosts, user]);

  //* Handle delete comments
  const handleDeleteComment = useCallback(async (commentId) => {
    if (user && user._id === postOwnerId) {
      try {
        await deleteComments(commentId).unwrap();
        refetchComments();
      } catch (error) {
        console.error("Failed to delete comment:", error);
      }
    }
  }, [deleteComments, postOwnerId, refetchComments, user]);

  //* Handle more options click for post
  const handleMoreOptionsClick = useCallback(() => {
    setPostOptionOpen((prevState) => (prevState === postID ? null : postID));
  }, [postID]);

  //* Handle more options click for comments
  const handleCommentMoreOptions = useCallback((commentId) => {
    setCommentOptionOpen((prevId) => (prevId === commentId ? null : commentId));
  }, []);

  return (
    <>
      <div className="text-white border-t-[1px] border-t-[#3e3e3e] flex flex-col mb-2 relative">

        {/* POST HEADER */}
        <div className="flex items-center justify-between mt-3  ">
            <div className="flex items-center justify-center gap-1 ">
                <img src={posterImg} alt="user profile pic" className="w-8 h-8 rounded-full "  />
                <h4 className="username text-[.92rem] font-semibold ml-1 ">{posterName}</h4>
                <div className="dot rounded-full bg-white w-[.125rem] h-[.125rem] "></div>
                <time dateTime="" className="text-[.64rem] text-[#8d8d8d] font-medium"> <TimeAgo timestamp={postTime} /> </time>
            </div>
            <IoIosMore onClick={handleMoreOptionsClick} className="text-[#b9b9b9] size-5  "/>
        </div>

        {/* POST MORE OPTIONS BUTTON */}
        {postOptionOpen === postID && user && user._id === postOwnerId && (
          <button 
            onClick={handleDeletePost}
            className="text-white text-sm text-opacity-70 font-medium absolute self-end mt-9 bg-[#5e5e5e] shadow-lg hover:bg-[#555321] rounded-xl px-3 py-1 cursor-pointer ">
            Delete
          </button>
        )}

        {/* POST CONTENT */}
        <main className="text-[.92rem] tracking-wide leading-6 pt-2 text-[#c7c7c7]">
          {children}
        </main>

        {/* POST COMMENT OR SHARE BTNS */}
        <div className="comment-box text-xs flex gap-[.6rem] h-10 items-center w-[25%] ">
          <PostActionBtn
              // btnIcon={<FaRegComment className="size-4" />}
              btnIcon={postMessage}
              btnIconAlt={"comment icon"}
              btnTitle={postComments.length}
              btnLogic={handleCommentClick}
          />
            {/* <PostActionBtn
              btnIcon={<PiShareFat  className="size-4" />}
              btnIconAlt={"forward icon"}
              btnTitle={`Share`}
          /> */}
        </div>

      {/* COMMENTS SECTION */}
      {isCommentOpen && (
        <section aria-labelledby="comments-section" className="mt-1">
        <form onSubmit={handleCommentSubmit}>
            <label className="flex rounded-[49px] items-center justify-end">
            <textarea 
              value={commentMessage} 
              onKeyDown={handleKeyDown}
              onChange={(e) => setCommentMessage(e.target.value)} 
              rows="1" 
              className="relative bg-transparent border-[#343434] rounded-[49px] shadow-sm focus:outline-none focus:ring-0 focus:border-serene py-[17px] px-9 block w-full placeholder:text-[#989898] placeholder:font-bold text-sm font-medium text-white" 
              placeholder="Add a comment...">
            </textarea>
            <PiSmileyBold  className="absolute size-5 text-[#c7c7c7] mr-4 "/>
            </label>
        </form>

        {/* RENDERED COMMENTS*/}
        <ul className="mt-1 overflow-y-auto h-fit scrollbar-hide ">
          {postComments.map((postComment) => (
             <li key={postComment._id}>
             <article className="p-2 bg-transparent rounded flex flex-col gap-3 ">
               <header className="flex items-center justify-between">
                 <div className="flex items-center gap-2 ">
                   <img src={postComment.userId?.avatar} alt="" className="size-5" />
                   <h3 className="font-semibold text-xs ">{postComment.userId?.username}</h3>
                 </div>
 
                 <div className="flex items-center gap-6 relative">
                   <time dateTime="2024-08-31" className="text-[#a3a3a3] text-xs "><TimeAgo timestamp={postComment.createdAt} /></time>

                   {/* COMMENT MORE OPTIONS BTN */}
                   <IoIosMore 
                    onClick={() => handleCommentMoreOptions(postComment._id)} 
                    className="text-[#989898] size-5"/> 
                    
                 </div>
                 {commentOptionOpen === postComment._id && user && user._id === postOwnerId && (
                        <button 
                          onClick={() => handleDeleteComment(postComment._id)}
                          className="text-white text-xs text-opacity-70 font-medium absolute ml-[90%] mt-10 bg-[#5e5e5e] shadow-lg hover:bg-[#555321] rounded-xl px-3 py-1 cursor-pointer ">
                          Delete
                        </button>
                  )}
               </header>
 
               <p className="text-[#e8e8e8] text-sm ">{postComment.comment}</p>
 
               <footer className="">
                 <button className="text-[#989898] text-xs font-semibold ">Reply</button>
               </footer>
             </article>
           </li>
          ))}
        </ul>

      </section>

      )}
        
        
      </div>
    </>
  );
};

export default Post;