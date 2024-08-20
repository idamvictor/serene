import { menuBar, videoPreviewPic } from "@/assets";


const VideoCard = ({videoPreviewImg, videoTitle, videoChannel, videoViews, videoPostDate}) => {
  return (
    <>
        <div className="videoCard-cont border border-[#101010]  bg-[#101010] rounded-md w-[32%] pb-2 ">
            <div>
                <img src={videoPreviewImg} alt="" className="rounded-md" />
            </div>

            <div className="videoCard-details flex flex-col gap-2 mt-1 ml-1 mr-2 ">
                <div className="flex justify-between items-center">
                    <h4 className="font-semibold text-white opacity-80 text-sm">{videoTitle}</h4>
                    <img src={menuBar} alt="" className="rotate-90 w-[12px] h-[10px] " />
                </div>

                <p className="font-medium text-white opacity-70 text-sm">{videoChannel}</p>

                <div className="text-white text-[.8rem] opacity-70 flex justify-between items-center ">
                    <p>{videoViews} views</p>
                    <p>{videoPostDate} ago</p>
                </div>
            </div>
        </div>
      
    </>
  )
}

export default VideoCard;
