import { menuBar, videoPreviewPic } from "@/assets";


const VideoCard = ({videoPreviewImg, videoTitle, videoChannel, videoViews, videoPostDate, videoDuration}) => {
  return (
    <>
        <div className="videoCard-cont border border-[#101010] bg-[#101010] rounded-md pb-2  ">
            <div className="flex flex-col items-end justify-end ">
                <img src={videoPreviewImg} alt="" className="rounded-md relative w-full h-[156px] " />
                <span className="absolute text-white text-[.7rem] xl:text-[.65rem] text-center text-opacity-80 bg-[#787878] font-semibold rounded-lg w-[38px] mr-2 mb-1 ">{videoDuration}</span>
            </div>

            <div className="videoCard-details flex flex-col gap-2 mt-1 ml-1 mr-2 ">
                <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                        <h4 
                            className="font-semibold text-white opacity-80  lg:text-sm lg:overflow-hidden lg:text-ellipsis lg:w-[12rem] xl:w-[15rem] " 
                            style={{
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: 'vertical',
                                display: '-webkit-box',
                            }}
                        >
                            {videoTitle}
                        </h4>
                        <img src={menuBar} alt="" className="rotate-90 w-[.9rem] lg:w-[.75rem] h-[.625rem] " />
                    </div>

                    <p className="font-medium text-white opacity-70 text-[.87rem] lg:text-sm">{videoChannel}</p>
                </div>
               
                <div className="text-white text-[.8rem] opacity-70 flex justify-between items-center ">
                    <span>{videoViews} views</span>
                    <span>{videoPostDate} ago</span>
                </div>
            </div>
        </div>
      
    </>
  )
}

export default VideoCard;
