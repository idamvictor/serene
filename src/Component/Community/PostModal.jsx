import { userDashboardProfilePic } from "@/assets";
import { useSendCommunityPostMutation } from "@/services/community/CommunitySlice";
import { IoClose } from "react-icons/io5";
import { spinner } from "@/assets";
import { useEffect, useState } from "react";
// import { postSocket } from "@/App";

const PostModal = ({ isOpen, onClose, communityId, refetchPosts}) => {
  const [postMessage, setPostMessage] = useState('');
  const [user, setUser] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);


  useEffect(() => {
    //* Getting user info from local storage
    const storedUser = JSON.parse(localStorage.getItem("userInfo"));
    setUser(storedUser);

    // if (postSocket) {
    //   postSocket.connect();

    //   postSocket.on('receive-post', () => {
    //     console.log('Received post event');
    //     refetchPosts();
    //   });

    //   return () => {
    //     console.log('Disconnecting socket');
    //     postSocket.off('receive-post');
    //     postSocket.disconnect();
    //   };
    // }
   
  }, [refetchPosts]);

  
  //* All API queries
  const [sendCommunityPost, { isLoading }] = useSendCommunityPostMutation();

  //* Set up for sending post request when the user clicks post
  const handlePostSubmit = async (e) => {
    e.preventDefault();
    if (user && !isSubmitting) {
      try{
        await sendCommunityPost({ communityId, userId: user._id, message: postMessage }).unwrap();
        // postSocket.emit('new-post', {communityId, userId: user?._id, message: postMessage});
        setPostMessage('');
        refetchPosts();
        onClose();
      } catch (error) {
        setPostMessage('');
        onClose();
        console.error("Failed to create post:", error)
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleKeyDown = (e) => {
    if ( e.key === 'Enter' && !e.shiftKey ) {
      e.preventDefault(); 
      handlePostSubmit(e);
    }
  };

  //* Close modal if not open
    if (!isOpen) return null;

   
  return (
    <>
      <div 
        className={`fixed inset-0 flex items-center justify-center z-[1000] transition-opacity duration-300  ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
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
              onKeyDown={handleKeyDown}
              required
              className="placeholder-white placeholder-opacity-50 placeholder:text-lg text-lg w-full h-80 bg-transparent border-[#666666] border-opacity-40 mt-6 rounded-[.6875rem] text-white font-medium focus:outline-none focus:ring-0 focus:border-serene " 
              placeholder="What do you want to talk about?"></textarea>
                
            <button 
              type="submit" 
              disabled={isLoading} 
              className={`self-end border border-serene hover:bg-transparent hover:text-serene px-6 py-1 text-[.8rem]  font-semibold rounded-[4px] ${isLoading ? 'bg-transparent text-serene' : 'bg-serene text-[#0b0b0b]'}`}>
  {isLoading ? <img src={spinner} alt="Loading..." className="size-5" /> : 'Post'}
</button>

        </form>
            
        </div>
    </div>
    </>
  )
}

export default PostModal;