import { userDashboardProfilePic } from "@/assets";
import { useSendCommunityPostMutation } from "@/services/community/CommunitySlice";
import { IoClose } from "react-icons/io5";
import { spinner } from "@/assets";
import { useEffect, useState } from "react";

const PostModal = ({ isOpen, onClose, communityId, refetchPosts}) => {
  const [postMessage, setPostMessage] = useState('');
  const [user, setUser] = useState(null);


  //* Getting user info from local storage
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("userInfo"));
    setUser(storedUser);
  }, []);
  
 

  //* All API queries
  const [sendCommunityPost, { isLoading }] = useSendCommunityPostMutation();

  //* Set up for sending post request when the user clicks post
  const handlePostSubmit = async (e) => {
    e.preventDefault();
    if (user) {
      try{
        await sendCommunityPost({ communityId, userId: user._id, message: postMessage }).unwrap();
        setPostMessage('');
        refetchPosts;
        onClose();
      } catch (error) {
        onClose();
        console.error("Failed to create post:", error)
      }
    }
  };

  //* Close modal if not open
    if (!isOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 flex items-center justify-center z-[1000]" 
        aria-modal="true" 
        role="dialog"
    >
        <div className="fixed inset-0 bg-black opacity-75"  onClick={(e) => e.stopPropagation()}></div>

        <div className="bg-[#272727]  border border-[#2a2a2a] rounded-lg size-[580px]  z-[100] px-6 py-12 ">
        <form action="" onSubmit={handlePostSubmit} className="flex flex-col gap-5">
            <div className="flex items-center justify-between">
                <div className="post-userDetails flex items-center gap-3">
                    <img src={userDashboardProfilePic} alt="" className="size-12 rounded-full" />
                    <h3 className="text-white text-sm font-semibold ">{user?.username}</h3>
                </div>
                
                <IoClose aria-label="Close modal" className="size-8 text-[#a3a3a3] cursor-pointer " onClick={onClose} />
            </div>

            <textarea 
              role="textbox"
              value={postMessage}
              onChange={(e) => setPostMessage(e.target.value)}
              required
              className="placeholder-white placeholder-opacity-50 placeholder:text-lg text-lg w-full h-80 bg-transparent border-[#666666] border-opacity-40 mt-6 rounded-[.6875rem] text-white font-medium " 
              placeholder="What do you want to talk about?"></textarea>
                
            <button 
              type="submit" 
              disabled={isLoading} 
              className="self-end text-[#0b0b0b] bg-serene border border-serene px-6 py-1 text-[.8rem] font-semibold rounded-[4px] ">
            {isLoading ? <img src={spinner} alt="Loading..." className="size-3" /> : 'Post'}
            </button>
        </form>
            
        </div>
    </div>
    </>
  )
}

export default PostModal;