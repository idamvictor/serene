import { menuBar } from "@/assets";
import ReactPlayer from "react-player";

const VideoCard = ({
  videoUrl,
  videoTitle,
  videoChannel,
  videoViews,
  videoPostDate,
  videoDuration,
  videoDescription, // Added videoDescription prop
  onClick,
}) => {
  return (
    <div
      onClick={() => onClick(videoUrl, videoDescription)} // Passing videoDescription
      className="videoCard-cont border border-[#101010] bg-[#101010] rounded-md pb-2"
    >
      <div className="flex flex-col items-end justify-end">
        <ReactPlayer
          url={videoUrl}
          width={"100%"}
          height={"180px"}
          light={true}
          controls={true}
          playIcon={
            <div className="rounded-full border border-[#919191] border-opacity-[6%] bg-[#000000] bg-opacity-25 backdrop-blur-md size-[60px] md:size-[80px] xl:size-[100px] flex items-center justify-center opacity-0">
              H1
            </div>
          }
        />
        <span className="absolute text-white text-[.7rem] xl:text-[.65rem] text-center text-opacity-80 bg-[#787878] font-semibold rounded-lg w-[38px] mr-2 mb-1">
          {videoDuration}
        </span>
      </div>

      <div className="videoCard-details flex flex-col gap-2 mt-1 ml-1 mr-2">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <h4
              className="font-semibold text-white opacity-80 lg:text-sm lg:overflow-hidden lg:text-ellipsis lg:w-[12rem] xl:w-[15rem]"
              style={{
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                display: "-webkit-box",
              }}
            >
              {videoTitle}
            </h4>
            <img
              src={menuBar}
              alt=""
              className="rotate-90 w-[.9rem] lg:w-[.75rem] h-[.625rem]"
            />
          </div>

          <p className="font-medium text-white opacity-70 text-[.87rem] lg:text-sm">
            {videoChannel}
          </p>
        </div>

        <div className="text-white text-[.8rem] opacity-70 flex justify-between items-center">
          <span>{videoViews} views</span>
          <span>{videoPostDate} ago</span>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
