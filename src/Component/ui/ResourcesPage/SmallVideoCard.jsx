// import ReactPlayer from "react-player";

// const SmallVideoCard = ({ 
//   videoUrl,
//   videoTitle,
//   videoChannel,
//   videoViews,
//   videoPostDate,
//   videoDuration,
//   onClick,
// }) => {
//   return (
//     <>
//       <article onClick={() => onClick(videoUrl)}  className="smallVideo-card-cont flex items-center gap-1 mt-3 ">
//         <div className="w-[150px] overflow-hidden rounded-[3px] flex flex-col items-end justify-end h-[80%]">
//           <ReactPlayer
//             url={videoUrl}
//             width={"100%"}
//             height={"100%"}
//             light={true}
//             controls={true}
//             playIcon={
//               <div className="rounded-full border border-[#919191] border-opacity-[6%] bg-[#000000] bg-opacity-25 backdrop-blur-md size-[60px] md:size-[80px] xl:size-[100px] flex items-center justify-center opacity-0 ">
//                 H1
//               </div>
//             }
//           />

//           <span className="absolute text-white text-[.6rem] xl:text-[9px] text-center text-opacity-80 bg-[#787878] font-semibold rounded-lg w-[30px] mr-1 mb-1 ">
//             {videoDuration}
//           </span>
//         </div>

//         <div className="video-details">
//           <h3
//             className="text-[#fefefe] font-semibold text-sm text-ellipsis overflow-hidden w-[12rem] xl:w-[15rem]"
//             style={{
//               WebkitLineClamp: 2,
//               WebkitBoxOrient: "vertical",
//               display: "-webkit-box",
//             }}
//           >
//             {videoTitle}
//           </h3>
//           <p className="text-[#c7c7c7] text-[11px] text-xs mt-1 ">
//             {videoChannel}
//           </p>
//           <div className="smallVideo-meta">
//             <span className="text-white text-opacity-80 text-[10px] ">
//               {videoViews} views | {videoPostDate} ago
//             </span>
//           </div>
//         </div>
//       </article>
//     </>
//   );
// };

// export default SmallVideoCard;




import ReactPlayer from "react-player";

const SmallVideoCard = ({ 
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
    <article
      onClick={() => onClick(videoUrl, videoDescription)} // Passing videoDescription
      className="smallVideo-card-cont flex items-center gap-1 mt-3"
    >
      <div className="w-[150px] overflow-hidden rounded-[3px] flex flex-col items-end justify-end h-[80%] relative"> {/* Added relative positioning */}
        <ReactPlayer
          url={videoUrl}
          width={"100%"}
          height={"100%"}
          light={true}
          controls={true}
          playIcon={
            <div className="rounded-full border border-[#919191] border-opacity-[6%] bg-[#000000] bg-opacity-25 backdrop-blur-md size-[60px] md:size-[80px] xl:size-[100px] flex items-center justify-center opacity-0">
              H1
            </div>
          }
        />
        <span className="absolute text-white text-[.6rem] xl:text-[9px] text-center text-opacity-80 bg-[#787878] font-semibold rounded-lg w-[30px] mr-1 mb-1">
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
        <p className="text-[#c7c7c7] text-[11px] text-xs mt-1">
          {videoChannel}
        </p>
        <div className="smallVideo-meta">
          <span className="text-white text-opacity-80 text-[10px]">
            {videoViews} views | {videoPostDate} ago
          </span>
        </div>
      </div>
    </article>
  );
};

export default SmallVideoCard;
