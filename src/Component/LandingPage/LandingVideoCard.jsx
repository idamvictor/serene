

const LandingVideoCard = ({videoImg, videoDuration, videoTitle, videoChannel, videoViews, videoPostDate}) => {
  return (
    <>
        <article className="smallVideo-card-cont flex items-center gap-3 mt-3">
            <div className="w-[7.4375rem] overflow-hidden rounded-[.1875rem] flex flex-col items-end justify-end">
                <img src={videoImg} alt="Video Preview Image" className="size-full relative" />
                <span className="absolute text-white text-[.6rem] xl:text-[.5625rem] text-center text-opacity-80 bg-[#787878] font-semibold rounded-lg w-[1.875rem] mr-1 mb-1">
                    {videoDuration}
                </span>
            </div>

            <div className="video-details">
                <h3
                    className="text-[#fefefe] font-semibold text-sm text-ellipsis overflow-hidden w-[12rem] xl:w-[15rem]"
                    style={{
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    display: "-webkit-box",
                    }}
                >
                    {videoTitle}
                </h3>
                <p className="text-[#c7c7c7] text-xs mt-1">
                    {videoChannel}
                </p>
                <div className="smallVideo-meta">
                    <span className="text-white text-opacity-80 text-[.625rem]">
                    {videoViews} views | {videoPostDate} ago
                    </span>
                </div>
            </div>
        </article>
    </>
  )
};

export default LandingVideoCard;
