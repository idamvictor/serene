// import ReactPlayer from "react-player";
// import { useState, useEffect, useRef } from "react";
// import {
//   playVideoIcon,
//   videoPreviewPic,
//   filterIcon,
//   arrowDown,
//   yellowShareIcon,
//   saveAddIcon,
//   smallVideoCardPic,
// } from "@/assets";
// import SmallVideoCard from "./SmallVideoCard";
// import VideoCard from "./VideoCard";
// import { useGetVideoQuery } from "@/services/auth/VideoSlice";

// const VideoSection = ({ isVideoPlaying, setIsVideoPlaying }) => {
//   const handlePlay = () => {
//     setIsVideoPlaying(true);
//   };

//   const {data: videos, error, isLoading}  = useGetVideoQuery()
//   console.log(videos)

//   //* function to handle reset
//   // const handleStop = () => {
//   //     setIsVideoPlaying(false);
//   // };

//   return (
//     <>
//       <section
//         className={` mb-4 grid grid-cols-1 lg:grid-cols-[2fr_1fr] auto-rows-auto gap-3 lg:gap-5 xl:gap-7 `}
//       >
//         {/* VIDEO PLAYER SECTION */}
//         <div className="rounded-[11px] h-[13rem] lg:h-full overflow-hidden border border-[#666666] lg:col-span-1 lg:row-span-1 ">
//           <ReactPlayer
//             url="https://www.youtube.com/watch?v=ga-MniJxQz8&pp=ygUgdmlkZW8gb24gZGVwcmVzc2lvbiBhbmQgYW54aWV0eSA%3D"
//             onStart={handlePlay}
//             playIcon={
//               <div className="rounded-full border border-[#919191] border-opacity-[6%] bg-[#000000] bg-opacity-25 backdrop-blur-md size-[60px] md:size-[80px] xl:size-[100px] flex items-center justify-center ">
//                 <img
//                   src={playVideoIcon}
//                   className="size-8 md:size-10 xl:size-12"
//                 />
//               </div>
//             }
//             playing={true}
//             controls={true}
//             width={"100%"}
//             height={"100%"}
//             light={!isVideoPlaying ? true : null}
//           />
//         </div>

//         {/* LAYOUT WHEN VIDEO IS NOT PLAYED */}
//         {!isVideoPlaying && (
//           <>
//             {/* RECOMMENDED VIDEOS */}
//             <section className="lg:col-span-1 ">
//               <h2 className="  text-white text-lg lg:text-xl text-opacity-80 font-bold ">
//                 Recommended
//               </h2>
//               <div>
//                 {/* 4 VIDEOS SHOULD BE RENDERED HERE */}

//                 <SmallVideoCard
//                   videoDuration={`15:30`}
//                   videoTitle={`Imagine There Was No Stigma to Mental Illness`}
//                   videoChannel={`Dr. Jeffrey Lieberman | TEDxCharlottesville`}
//                   videoViews={`120k`}
//                   videoPostDate={`3 weeks`}
//                 />
//                 <SmallVideoCard
//                   videoDuration={`6:30`}
//                   videoTitle={`Everything you think you know about addiction is wrong`}
//                   videoChannel={`Johann Hari`}
//                   videoViews={`45k`}
//                   videoPostDate={`4 hours`}
//                 />
//                 <SmallVideoCard
//                   videoDuration={`1:00`}
//                   videoTitle={`What is Happiness?`}
//                   videoChannel={`Professor Dave`}
//                   videoViews={`20k`}
//                   videoPostDate={`1 month`}
//                 />
//                 <SmallVideoCard
//                   videoDuration={`12:39`}
//                   videoTitle={`What makes a good life?`}
//                   videoChannel={`Robert Waldinger`}
//                   videoViews={`50k`}
//                   videoPostDate={`3 days`}
//                 />
//               </div>
//             </section>

//             {/* MORE VIDEOS SECTION */}
//             <section className="more-videos-section lg:col-span-2">
//               <div className=" flex justify-between items-center">
//                 <h2 className="text-white font-semibold xl:text-lg ">
//                   Other videos
//                 </h2>

//                 <div className="filter-dropdown border border-red-100 flex items-center rounded-xl w-[4rem] justify-around py-[.1rem] ">
//                   <img src={filterIcon} alt="" className="size-4 " />
//                   <input
//                     type="text"
//                     placeholder="All"
//                     id="filter"
//                     className=" outline-none text-xs bg-transparent w-4 font-medium box-border "
//                   />
//                   <img src={arrowDown} alt="" className="size-4" />
//                 </div>

//                 {/* <ul id="dropdown-list">
//                             <li data-value="option-1">Option 1</li>
//                         </ul> */}
//               </div>

//               <div className="mt-5 grid grid-cols-1 place-content-center lg:grid-cols-3 auto-rows-auto gap-3">
//                 <VideoCard
//                   videoPreviewImg={videoPreviewPic}
//                   videoTitle={`How to manage your mental health|Leon Taylor|TEDxClapham`}
//                   videoChannel={`TEDxTalks`}
//                   videoViews={`11k`}
//                   videoPostDate={`1hour`}
//                   videoDuration={`15:30`}
//                 />
//                 <VideoCard
//                   videoPreviewImg={videoPreviewPic}
//                   videoTitle={`WARNING SIGNS | A Cinematic Short Film about Mental Health`}
//                   videoChannel={`Christian Maté Grab`}
//                   videoViews={`140k`}
//                   videoPostDate={`1week`}
//                   videoDuration={`2:30`}
//                 />
//                 <VideoCard
//                   videoPreviewImg={videoPreviewPic}
//                   videoTitle={`We see you. A campaign for mental health care`}
//                   videoChannel={`KGH Foundation`}
//                   videoViews={`20k`}
//                   videoPostDate={`4months`}
//                   videoDuration={`1:00`}
//                 />
//               </div>
//             </section>
//           </>
//         )}

//         {/* LAYOUT WHEN IT IS PLAYED */}
//         {isVideoPlaying && (
//           <>
//             <section className="row-span-2">
//               <h2 className=" text-white text-xl text-opacity-80 font-bold">
//                 Related video
//               </h2>
//               <div className="row-span-2 ">
//                 {/* NOTE: 8 VIDEOS SHOULD BE RENDERED HERE */}
//                 <SmallVideoCard
//                   videoPreviewImg={smallVideoCardPic}
//                   videoDuration={`15:30`}
//                   videoTitle={`Imagine There Was No Stigma to Mental Illness`}
//                   videoChannel={`Dr. Jeffrey Lieberman | TEDxCharlottesville`}
//                   videoViews={`120k`}
//                   videoPostDate={`3 weeks`}
//                 />
//                 <SmallVideoCard
//                   videoPreviewImg={smallVideoCardPic}
//                   videoDuration={`6:30`}
//                   videoTitle={`Everything you think you know about addiction is wrong`}
//                   videoChannel={`Johann Hari`}
//                   videoViews={`45k`}
//                   videoPostDate={`4 hours`}
//                 />
//                 <SmallVideoCard
//                   videoPreviewImg={smallVideoCardPic}
//                   videoDuration={`1:00`}
//                   videoTitle={`What is Happiness?`}
//                   videoChannel={`Professor Dave`}
//                   videoViews={`20k`}
//                   videoPostDate={`1 month`}
//                 />
//                 <SmallVideoCard
//                   videoPreviewImg={smallVideoCardPic}
//                   videoDuration={`12:39`}
//                   videoTitle={`What makes a good life?`}
//                   videoChannel={`Robert Waldinger`}
//                   videoViews={`50k`}
//                   videoPostDate={`3 days`}
//                 />
//                 <SmallVideoCard
//                   videoPreviewImg={smallVideoCardPic}
//                   videoDuration={`15:30`}
//                   videoTitle={`Imagine There Was No Stigma to Mental Illness`}
//                   videoChannel={`Dr. Jeffrey Lieberman | TEDxCharlottesville`}
//                   videoViews={`120k`}
//                   videoPostDate={`3 weeks`}
//                 />
//                 <SmallVideoCard
//                   videoPreviewImg={smallVideoCardPic}
//                   videoDuration={`6:30`}
//                   videoTitle={`Everything you think you know about addiction is wrong`}
//                   videoChannel={`Johann Hari`}
//                   videoViews={`45k`}
//                   videoPostDate={`4 hours`}
//                 />
//                 <SmallVideoCard
//                   videoPreviewImg={smallVideoCardPic}
//                   videoDuration={`1:00`}
//                   videoTitle={`What is Happiness?`}
//                   videoChannel={`Professor Dave`}
//                   videoViews={`20k`}
//                   videoPostDate={`1 month`}
//                 />
//                 <SmallVideoCard
//                   videoPreviewImg={smallVideoCardPic}
//                   videoDuration={`12:39`}
//                   videoTitle={`What makes a good life?`}
//                   videoChannel={`Robert Waldinger`}
//                   videoViews={`50k`}
//                   videoPostDate={`3 days`}
//                 />
//               </div>
//             </section>

//             {/* VIDEO DESCRIPTION SECTION */}
//             <section className=" row-start-2 row-end-3 lg:col-span-1 xl:mt-[-.8rem] ">
//               <div className="flex items-center justify-between ">
//                 <div className="text-white text-sm flex flex-col gap-1 mt-1 lg:mt-0">
//                   <p>TED</p>
//                   <span className="">120k views | Posted 4 days ago</span>
//                 </div>

//                 <div className="flex gap-2 lg:gap-4 xl:gap-7 items-center ">
//                   <button className="text-serene text-xs lg:text-sm flex items-center gap-1 border border-serene font-medium rounded-[4px] py-1 px-2 xl:py-2 xl:px-3  ">
//                     <img src={yellowShareIcon} alt="" className="size-4" />
//                     Share
//                   </button>
//                   <button className="text-[#0b0b0b] text-xs lg:text-sm bg-serene flex items-center gap-1 border border-serene font-medium rounded-[4px] py-1 px-2 xl:py-2 xl:px-3  ">
//                     <img src={saveAddIcon} alt="" className="size-4" />
//                     Save
//                   </button>
//                 </div>
//               </div>
//               <h5 className="text-white text-lg lg:text-xl font-medium mt-3 lg:mt-5 leading-[27px] ">
//                 Robert Waldinger: What makes a good life? Lessons from the
//                 longest study on happiness | TED
//               </h5>
//               <p className="text-white text-sm mt-3 lg:mt-5 tracking-wide leading-[26px] ">
//                 What keeps us happy and healthy as we go through life? If you
//                 think it's fame and money, you're not alone – but, according to
//                 psychiatrist Robert Waldinger, you're mistaken. As the director
//                 of 75-year-old study on adult development, Waldinger has
//                 unprecedented access to data on true happiness and satisfaction.
//                 In this talk, he shares three important lessons learned from the
//                 study as well as some practical, old-as-the-hills wisdom on how
//                 to build a fulfilling, long life.
//               </p>
//             </section>
//           </>
//         )}
//       </section>
//     </>
//   );
// };

// export default VideoSection;

// ========================================= Section 2 ======================================================

// import ReactPlayer from "react-player";
// import { useState, useEffect, useRef } from "react";
// import {
//   playVideoIcon,
//   videoPreviewPic,
//   filterIcon,
//   arrowDown,
//   yellowShareIcon,
//   saveAddIcon,
//   smallVideoCardPic,
// } from "@/assets";
// import SmallVideoCard from "./SmallVideoCard";
// import VideoCard from "./VideoCard";
// import { useGetVideoQuery } from "@/services/auth/VideoSlice";

// const VideoSection = ({ isVideoPlaying, setIsVideoPlaying }) => {
//   const handlePlay = () => {
//     setIsVideoPlaying(true);
//   };

//   // const {data: videos, error, isLoading}  = useGetVideoQuery()
//   // console.log(videos)

//   //* function to handle reset
//   // const handleStop = () => {
//   //     setIsVideoPlaying(false);
//   // };

//   return (
//     <>
//       <section
//         className={` mb-4 grid grid-cols-1 lg:grid-cols-[2fr_1fr] auto-rows-auto gap-3 lg:gap-5 xl:gap-7 `}
//       >
//         {/* VIDEO PLAYER SECTION */}
//         <div className="rounded-[11px] h-[13rem] lg:h-full overflow-hidden border border-[#666666] lg:col-span-1 lg:row-span-1 ">
//           <ReactPlayer
//             url="https://www.youtube.com/watch?v=ga-MniJxQz8&pp=ygUgdmlkZW8gb24gZGVwcmVzc2lvbiBhbmQgYW54aWV0eSA%3D"
//             onStart={handlePlay}
//             playIcon={
//               <div className="rounded-full border border-[#919191] border-opacity-[6%] bg-[#000000] bg-opacity-25 backdrop-blur-md size-[60px] md:size-[80px] xl:size-[100px] flex items-center justify-center ">
//                 <img
//                   src={playVideoIcon}
//                   className="size-8 md:size-10 xl:size-12"
//                 />
//               </div>
//             }
//             playing={true}
//             controls={true}
//             width={"100%"}
//             height={"100%"}
//             light={!isVideoPlaying ? true : null}
//           />
//         </div>

//         {/* LAYOUT WHEN VIDEO IS NOT PLAYED */}
//         {!isVideoPlaying && (
//           <>
//             {/* RECOMMENDED VIDEOS */}
//             <section className="lg:col-span-1 ">
//               <h2 className="  text-white text-lg lg:text-xl text-opacity-80 font-bold ">
//                 Recommended
//               </h2>
//               <div>
//                 {/* 4 VIDEOS SHOULD BE RENDERED HERE */}

//                 <SmallVideoCard
//                 videoUrl={`https://www.youtube.com/watch?v=ga-MniJxQz8&pp=ygUgdmlkZW8gb24gZGVwcmVzc2lvbiBhbmQgYW54aWV0eSA%3D`}
//                   videoDuration={`15:30`}
//                   videoTitle={`Imagine There Was No Stigma to Mental Illness`}
//                   videoChannel={`Dr. Jeffrey Lieberman | TEDxCharlottesville`}
//                   videoViews={`120k`}
//                   videoPostDate={`3 weeks`}
//                 />
//                 <SmallVideoCard
//                 videoUrl={`https://www.youtube.com/watch?v=d96akWDnx0w&pp=ygUgdmlkZW8gb24gZGVwcmVzc2lvbiBhbmQgYW54aWV0eSA%3D`}
//                   videoDuration={`6:30`}
//                   videoTitle={`Everything you think you know about addiction is wrong`}
//                   videoChannel={`Johann Hari`}
//                   videoViews={`45k`}
//                   videoPostDate={`4 hours`}
//                 />
//                 <SmallVideoCard
//                 videoUrl={`https://www.youtube.com/watch?v=wptx2v9mpf8&pp=ygUgdmlkZW8gb24gZGVwcmVzc2lvbiBhbmQgYW54aWV0eSA%3D`}
//                   videoDuration={`1:00`}
//                   videoTitle={`What is Happiness?`}
//                   videoChannel={`Professor Dave`}
//                   videoViews={`20k`}
//                   videoPostDate={`1 month`}
//                 />
//                 <SmallVideoCard
//                 videoUrl={`https://www.youtube.com/watch?v=ZebSXPUCPFc&pp=ygUgdmlkZW8gb24gZGVwcmVzc2lvbiBhbmQgYW54aWV0eSA%3D`}
//                   videoDuration={`12:39`}
//                   videoTitle={`What makes a good life?`}
//                   videoChannel={`Robert Waldinger`}
//                   videoViews={`50k`}
//                   videoPostDate={`3 days`}
//                 />
//               </div>
//             </section>

//             {/* MORE VIDEOS SECTION */}
//             <section className="more-videos-section lg:col-span-2">
//               <div className=" flex justify-between items-center">
//                 <h2 className="text-white font-semibold xl:text-lg ">
//                   Other videos
//                 </h2>

//                 <div className="filter-dropdown border border-red-100 flex items-center rounded-xl w-[4rem] justify-around py-[.1rem] ">
//                   <img src={filterIcon} alt="" className="size-4 " />
//                   <input
//                     type="text"
//                     placeholder="All"
//                     id="filter"
//                     className=" outline-none text-xs bg-transparent w-4 font-medium box-border "
//                   />
//                   <img src={arrowDown} alt="" className="size-4" />
//                 </div>

//                 {/* <ul id="dropdown-list">
//                             <li data-value="option-1">Option 1</li>
//                         </ul> */}
//               </div>

//               <div className="mt-5 grid grid-cols-1 place-content-center lg:grid-cols-3 auto-rows-auto gap-3">
//                 <VideoCard
//                   videoUrl={`https://www.youtube.com/watch?v=1I9ADpXbD6c&pp=ygUgdmlkZW8gb24gZGVwcmVzc2lvbiBhbmQgYW54aWV0eSA%3D`}
//                   videoTitle={`How to manage your mental health|Leon Taylor|TEDxClapham`}
//                   videoChannel={`TEDxTalks`}
//                   videoViews={`11k`}
//                   videoPostDate={`1hour`}
//                   videoDuration={`15:30`}
//                 />
//                 <VideoCard
//                   videoUrl={`https://www.youtube.com/watch?v=1I9ADpXbD6c&pp=ygUgdmlkZW8gb24gZGVwcmVzc2lvbiBhbmQgYW54aWV0eSA%3D`}
//                   videoTitle={`WARNING SIGNS | A Cinematic Short Film about Mental Health`}
//                   videoChannel={`Christian Maté Grab`}
//                   videoViews={`140k`}
//                   videoPostDate={`1week`}
//                   videoDuration={`2:30`}
//                 />
//                 <VideoCard
//                   videoUrl={`https://www.youtube.com/watch?v=ZebSXPUCPFc&pp=ygUgdmlkZW8gb24gZGVwcmVzc2lvbiBhbmQgYW54aWV0eSA%3D`}
//                   videoTitle={`We see you. A campaign for mental health care`}
//                   videoChannel={`KGH Foundation`}
//                   videoViews={`20k`}
//                   videoPostDate={`4months`}
//                   videoDuration={`1:00`}
//                 />
//               </div>
//             </section>
//           </>
//         )}

//         {/* LAYOUT WHEN IT IS PLAYED */}
//         {isVideoPlaying && (
//           <>
//             <section className="row-span-2">
//               <h2 className=" text-white text-xl text-opacity-80 font-bold">
//                 Related video
//               </h2>
//               <div className="row-span-2 ">
//                 {/* NOTE: 8 VIDEOS SHOULD BE RENDERED HERE */}
//                 <SmallVideoCard
//                   videoPreviewImg={smallVideoCardPic}
//                   videoDuration={`15:30`}
//                   videoTitle={`Imagine There Was No Stigma to Mental Illness`}
//                   videoChannel={`Dr. Jeffrey Lieberman | TEDxCharlottesville`}
//                   videoViews={`120k`}
//                   videoPostDate={`3 weeks`}
//                 />
//                 <SmallVideoCard
//                   videoPreviewImg={smallVideoCardPic}
//                   videoDuration={`6:30`}
//                   videoTitle={`Everything you think you know about addiction is wrong`}
//                   videoChannel={`Johann Hari`}
//                   videoViews={`45k`}
//                   videoPostDate={`4 hours`}
//                 />
//                 <SmallVideoCard
//                   videoPreviewImg={smallVideoCardPic}
//                   videoDuration={`1:00`}
//                   videoTitle={`What is Happiness?`}
//                   videoChannel={`Professor Dave`}
//                   videoViews={`20k`}
//                   videoPostDate={`1 month`}
//                 />
//                 <SmallVideoCard
//                   videoPreviewImg={smallVideoCardPic}
//                   videoDuration={`12:39`}
//                   videoTitle={`What makes a good life?`}
//                   videoChannel={`Robert Waldinger`}
//                   videoViews={`50k`}
//                   videoPostDate={`3 days`}
//                 />
//                 <SmallVideoCard
//                   videoPreviewImg={smallVideoCardPic}
//                   videoDuration={`15:30`}
//                   videoTitle={`Imagine There Was No Stigma to Mental Illness`}
//                   videoChannel={`Dr. Jeffrey Lieberman | TEDxCharlottesville`}
//                   videoViews={`120k`}
//                   videoPostDate={`3 weeks`}
//                 />
//                 <SmallVideoCard
//                   videoPreviewImg={smallVideoCardPic}
//                   videoDuration={`6:30`}
//                   videoTitle={`Everything you think you know about addiction is wrong`}
//                   videoChannel={`Johann Hari`}
//                   videoViews={`45k`}
//                   videoPostDate={`4 hours`}
//                 />
//                 <SmallVideoCard
//                   videoPreviewImg={smallVideoCardPic}
//                   videoDuration={`1:00`}
//                   videoTitle={`What is Happiness?`}
//                   videoChannel={`Professor Dave`}
//                   videoViews={`20k`}
//                   videoPostDate={`1 month`}
//                 />
//                 <SmallVideoCard
//                   videoPreviewImg={smallVideoCardPic}
//                   videoDuration={`12:39`}
//                   videoTitle={`What makes a good life?`}
//                   videoChannel={`Robert Waldinger`}
//                   videoViews={`50k`}
//                   videoPostDate={`3 days`}
//                 />
//               </div>
//             </section>

//             {/* VIDEO DESCRIPTION SECTION */}
//             <section className=" row-start-2 row-end-3 lg:col-span-1 xl:mt-[-.8rem] ">
//               <div className="flex items-center justify-between ">
//                 <div className="text-white text-sm flex flex-col gap-1 mt-1 lg:mt-0">
//                   <p>TED</p>
//                   <span className="">120k views | Posted 4 days ago</span>
//                 </div>

//                 <div className="flex gap-2 lg:gap-4 xl:gap-7 items-center ">
//                   <button className="text-serene text-xs lg:text-sm flex items-center gap-1 border border-serene font-medium rounded-[4px] py-1 px-2 xl:py-2 xl:px-3  ">
//                     <img src={yellowShareIcon} alt="" className="size-4" />
//                     Share
//                   </button>
//                   <button className="text-[#0b0b0b] text-xs lg:text-sm bg-serene flex items-center gap-1 border border-serene font-medium rounded-[4px] py-1 px-2 xl:py-2 xl:px-3  ">
//                     <img src={saveAddIcon} alt="" className="size-4" />
//                     Save
//                   </button>
//                 </div>
//               </div>
//               <h5 className="text-white text-lg lg:text-xl font-medium mt-3 lg:mt-5 leading-[27px] ">
//                 Robert Waldinger: What makes a good life? Lessons from the
//                 longest study on happiness | TED
//               </h5>
//               <p className="text-white text-sm mt-3 lg:mt-5 tracking-wide leading-[26px] ">
//                 What keeps us happy and healthy as we go through life? If you
//                 think it's fame and money, you're not alone – but, according to
//                 psychiatrist Robert Waldinger, you're mistaken. As the director
//                 of 75-year-old study on adult development, Waldinger has
//                 unprecedented access to data on true happiness and satisfaction.
//                 In this talk, he shares three important lessons learned from the
//                 study as well as some practical, old-as-the-hills wisdom on how
//                 to build a fulfilling, long life.
//               </p>
//             </section>
//           </>
//         )}
//       </section>
//     </>
//   );
// };

// export default VideoSection;

//=============================== another section =========================================
// import ReactPlayer from "react-player";
// import {
//   playVideoIcon,
//   filterIcon,
//   arrowDown,
//   yellowShareIcon,
//   saveAddIcon,
// } from "@/assets";
// import SmallVideoCard from "./SmallVideoCard";
// import VideoCard from "./VideoCard";

// const VideoSection = ({ isVideoPlaying, setIsVideoPlaying }) => {
//   const handlePlay = () => {
//     setIsVideoPlaying(true);
//   };

//   const recommendedVideos = [
//     {
//       videoUrl:
//         "https://www.youtube.com/watch?v=ga-MniJxQz8&pp=ygUgdmlkZW8gb24gZGVwcmVzc2lvbiBhbmQgYW54aWV0eSA%3D",
//       videoDuration: "15:30",
//       videoTitle: "Imagine There Was No Stigma to Mental Illness",
//       videoChannel: "Dr. Jeffrey Lieberman | TEDxCharlottesville",
//       videoViews: "120k",
//       videoPostDate: "3 weeks",
//     },
//     {
//       videoUrl:
//         "https://www.youtube.com/watch?v=d96akWDnx0w&pp=ygUgdmlkZW8gb24gZGVwcmVzc2lvbiBhbmQgYW54aWV0eSA%3D",
//       videoDuration: "6:30",
//       videoTitle: "Everything you think you know about addiction is wrong",
//       videoChannel: "Johann Hari",
//       videoViews: "45k",
//       videoPostDate: "4 hours",
//     },
//     {
//       videoUrl:
//         "https://www.youtube.com/watch?v=wptx2v9mpf8&pp=ygUgdmlkZW8gb24gZGVwcmVzc2lvbiBhbmQgYW54aWV0eSA%3D",
//       videoDuration: "1:00",
//       videoTitle: "What is Happiness?",
//       videoChannel: "Professor Dave",
//       videoViews: "20k",
//       videoPostDate: "1 month",
//     },
//     {
//       videoUrl:
//         "https://www.youtube.com/watch?v=ZebSXPUCPFc&pp=ygUgdmlkZW8gb24gZGVwcmVzc2lvbiBhbmQgYW54aWV0eSA%3D",
//       videoDuration: "12:39",
//       videoTitle: "What makes a good life?",
//       videoChannel: "Robert Waldinger",
//       videoViews: "50k",
//       videoPostDate: "3 days",
//     },
//   ];

//   const moreVideos = [
//     {
//       videoUrl:
//         "https://www.youtube.com/watch?v=1I9ADpXbD6c&pp=ygUgdmlkZW8gb24gZGVwcmVzc2lvbiBhbmQgYW54aWV0eSA%3D",
//       videoTitle: "How to manage your mental health|Leon Taylor|TEDxClapham",
//       videoChannel: "TEDxTalks",
//       videoViews: "11k",
//       videoPostDate: "1hour",
//       videoDuration: "15:30",
//     },
//     {
//       videoUrl:
//         "https://www.youtube.com/watch?v=1I9ADpXbD6c&pp=ygUgdmlkZW8gb24gZGVwcmVzc2lvbiBhbmQgYW54aWV0eSA%3D",
//       videoTitle: "WARNING SIGNS | A Cinematic Short Film about Mental Health",
//       videoChannel: "Christian Maté Grab",
//       videoViews: "140k",
//       videoPostDate: "1week",
//       videoDuration: "2:30",
//     },
//     {
//       videoUrl:
//         "https://www.youtube.com/watch?v=ZebSXPUCPFc&pp=ygUgdmlkZW8gb24gZGVwcmVzc2lvbiBhbmQgYW54aWV0eSA%3D",
//       videoTitle: "We see you. A campaign for mental health care",
//       videoChannel: "KGH Foundation",
//       videoViews: "20k",
//       videoPostDate: "4months",
//       videoDuration: "1:00",
//     },
//   ];

//   return (
//     <section className="mb-4 grid grid-cols-1 lg:grid-cols-[2fr_1fr] auto-rows-auto gap-3 lg:gap-5 xl:gap-7">
//       {/* VIDEO PLAYER SECTION */}
//       <div className="rounded-[11px] h-[13rem] lg:h-full overflow-hidden border border-[#666666] lg:col-span-1 lg:row-span-1">
//         <ReactPlayer
//           url="https://www.youtube.com/watch?v=ga-MniJxQz8&pp=ygUgdmlkZW8gb24gZGVwcmVzc2lvbiBhbmQgYW54aWV0eSA%3D"
//           onStart={handlePlay}
//           playIcon={
//             <div className="rounded-full border border-[#919191] border-opacity-[6%] bg-[#000000] bg-opacity-25 backdrop-blur-md size-[60px] md:size-[80px] xl:size-[100px] flex items-center justify-center">
//               <img
//                 src={playVideoIcon}
//                 className="size-8 md:size-10 xl:size-12"
//               />
//             </div>
//           }
//           playing={true}
//           controls={true}
//           width={"100%"}
//           height={"100%"}
//           light={!isVideoPlaying ? true : null}
//         />
//       </div>

//       {/* LAYOUT WHEN VIDEO IS NOT PLAYED */}
//       {!isVideoPlaying && (
//         <>
//           {/* RECOMMENDED VIDEOS */}
//           <section className="lg:col-span-1">
//             <h2 className="text-white text-lg lg:text-xl text-opacity-80 font-bold">
//               Recommended
//             </h2>
//             <div>
//               {recommendedVideos.map((video, index) => (
//                 <SmallVideoCard
//                   key={index}
//                   videoUrl={video.videoUrl}
//                   videoDuration={video.videoDuration}
//                   videoTitle={video.videoTitle}
//                   videoChannel={video.videoChannel}
//                   videoViews={video.videoViews}
//                   videoPostDate={video.videoPostDate}
//                 />
//               ))}
//             </div>
//           </section>

//           {/* MORE VIDEOS SECTION */}
//           <section className="more-videos-section lg:col-span-2">
//             <div className="flex justify-between items-center">
//               <h2 className="text-white font-semibold xl:text-lg">
//                 Other videos
//               </h2>
//               <div className="filter-dropdown border border-red-100 flex items-center rounded-xl w-[4rem] justify-around py-[.1rem]">
//                 <img src={filterIcon} alt="" className="size-4" />
//                 <input
//                   type="text"
//                   placeholder="All"
//                   id="filter"
//                   className="outline-none text-xs bg-transparent w-4 font-medium box-border"
//                 />
//                 <img src={arrowDown} alt="" className="size-4" />
//               </div>
//             </div>

//             <div className="mt-5 grid grid-cols-1 place-content-center lg:grid-cols-3 auto-rows-auto gap-3">
//               {moreVideos.map((video, index) => (
//                 <VideoCard
//                   key={index}
//                   videoUrl={video.videoUrl}
//                   videoTitle={video.videoTitle}
//                   videoChannel={video.videoChannel}
//                   videoViews={video.videoViews}
//                   videoPostDate={video.videoPostDate}
//                   videoDuration={video.videoDuration}
//                 />
//               ))}
//             </div>
//           </section>
//         </>
//       )}

//       {/* LAYOUT WHEN IT IS PLAYED */}
//       {isVideoPlaying && (
//         <>
//           <section className="row-span-2">
//             <h2 className="text-white text-xl text-opacity-80 font-bold">
//               Related video
//             </h2>
//             <div className="row-span-2">
//               {recommendedVideos.map((video, index) => (
//                 <SmallVideoCard
//                   key={index}
//                   videoUrl={video.videoUrl}
//                   videoDuration={video.videoDuration}
//                   videoTitle={video.videoTitle}
//                   videoChannel={video.videoChannel}
//                   videoViews={video.videoViews}
//                   videoPostDate={video.videoPostDate}
//                 />
//               ))}
//             </div>
//           </section>

//           {/* VIDEO DESCRIPTION SECTION */}
//           <section className="row-start-2 row-end-3 lg:col-span-1 xl:mt-[-.8rem]">
//             <div className="flex items-center justify-between">
//               <div className="text-white text-sm flex flex-col gap-1 mt-1 lg:mt-0">
//                 <p>TED</p>
//                 <span>120k views | Posted 4 days ago</span>
//               </div>

//               <div className="flex gap-2 lg:gap-4 xl:gap-7 items-center">
//                 <button className="text-serene text-xs lg:text-sm flex items-center gap-1 border border-serene font-medium rounded-[4px] py-1 px-2 xl:py-2 xl:px-3">
//                   <img src={yellowShareIcon} alt="" className="size-4" />
//                   Share
//                 </button>
//                 <button className="text-serene text-xs lg:text-sm flex items-center gap-1 border border-serene font-medium rounded-[4px] py-1 px-2 xl:py-2 xl:px-3">
//                   <img src={saveAddIcon} alt="" className="size-4" />
//                   Save
//                 </button>
//               </div>
//             </div>

//             <p className="text-white mt-4 text-sm text-opacity-80">
//               In this thought-provoking talk, Dr. Jeffrey Lieberman delves into
//               the importance of addressing mental health stigma and the
//               implications it has on society. By challenging preconceived
//               notions and offering new perspectives, this video aims to shed
//               light on the critical issues surrounding mental health.
//             </p>
//           </section>
//         </>
//       )}
//     </section>
//   );
// };

// export default VideoSection;

// ===============================================================================================================================
import React, { useState } from "react";
import ReactPlayer from "react-player";
import {
  playVideoIcon,
  filterIcon,
  arrowDown,
  yellowShareIcon,
  saveAddIcon,
} from "@/assets";
import SmallVideoCard from "./SmallVideoCard";
import VideoCard from "./VideoCard";

const VideoSection = ({ isVideoPlaying, setIsVideoPlaying }) => {
  const [currentVideoUrl, setCurrentVideoUrl] = useState(
    "https://www.youtube.com/watch?v=ga-MniJxQz8&pp=ygUgdmlkZW8gb24gZGVwcmVzc2lvbiBhbmQgYW54aWV0eSA%3D"
  );

  const handlePlay = () => {
    setIsVideoPlaying(true);
  };

  const handleVideoClick = (videoUrl) => {
    setCurrentVideoUrl(videoUrl);
    setIsVideoPlaying(true);
  };

  const recommendedVideos = [
    {
      videoUrl:
        "https://www.youtube.com/watch?v=ga-MniJxQz8&pp=ygUgdmlkZW8gb24gZGVwcmVzc2lvbiBhbmQgYW54aWV0eSA%3D",
      videoDuration: "15:30",
      videoTitle: "Overcome Depression & Anxiety",
      videoChannel: "Dr. Jeffrey Lieberman | TEDxCharlottesville",
      videoViews: "120k",
      videoPostDate: "3 weeks",
    },
    {
      videoUrl:
        "https://www.youtube.com/watch?v=d96akWDnx0w&pp=ygUgdmlkZW8gb24gZGVwcmVzc2lvbiBhbmQgYW54aWV0eSA%3D",
      videoDuration: "6:30",
      videoTitle: "OVERCOME DEPRESSION",
      videoChannel: "Johann Hari",
      videoViews: "45k",
      videoPostDate: "4 hours",
    },
    {
      videoUrl:
        "https://www.youtube.com/watch?v=wptx2v9mpf8&pp=ygUgdmlkZW8gb24gZGVwcmVzc2lvbiBhbmQgYW54aWV0eSA%3D",
      videoDuration: "1:00",
      videoTitle: "What Is ANXIETY Short Film",
      videoChannel: "Professor Dave",
      videoViews: "20k",
      videoPostDate: "1 month",
    },
    {
      videoUrl:
        "https://www.youtube.com/watch?v=ZebSXPUCPFc&pp=ygUgdmlkZW8gb24gZGVwcmVzc2lvbiBhbmQgYW54aWV0eSA%3D",
      videoDuration: "12:39",
      videoTitle: "If you're feeling depressed, anxious, sad, or angry WATCH THIS!!!",
      videoChannel: "Robert Waldinger",
      videoViews: "50k",
      videoPostDate: "3 days",
    },
  ];

  const moreVideos = [
    {
      videoUrl:
        "https://www.youtube.com/watch?v=1I9ADpXbD6c&pp=ygUgdmlkZW8gb24gZGVwcmVzc2lvbiBhbmQgYW54aWV0eSA%3D",
      videoTitle:
        "FIGHT DEPRESSION",
      videoChannel: "TEDxTalks",
      videoViews: "11k",
      videoPostDate: "1hour",
      videoDuration: "15:30",
    },
    {
      videoUrl:
        "https://www.youtube.com/watch?v=1I9ADpXbD6c&pp=ygUgdmlkZW8gb24gZGVwcmVzc2lvbiBhbmQgYW54aWV0eSA%3D",
      videoTitle: "FIGHT DEPRESSION",
      videoChannel: "Christian Maté Grab",
      videoViews: "140k",
      videoPostDate: "1week",
      videoDuration: "2:30",
    },
    {
      videoUrl:
        "https://www.youtube.com/watch?v=ZebSXPUCPFc&pp=ygUgdmlkZW8gb24gZGVwcmVzc2lvbiBhbmQgYW54aWV0eSA%3D",
      videoTitle: "We see you. A campaign for mental health care",
      videoChannel: "KGH Foundation",
      videoViews: "20k",
      videoPostDate: "4months",
      videoDuration: "1:00",
    },
  ];

  return (
    <section className="mb-4 grid grid-cols-1 lg:grid-cols-[2fr_1fr] auto-rows-auto gap-3 lg:gap-5 xl:gap-7">
      {/* VIDEO PLAYER SECTION */}
      <div className="rounded-[11px] h-[13rem] lg:h-full overflow-hidden border border-[#666666] lg:col-span-1 lg:row-span-1">
        <ReactPlayer
          url={currentVideoUrl}
          onStart={handlePlay}
          playIcon={
            <div className="rounded-full border border-[#919191] border-opacity-[6%] bg-[#000000] bg-opacity-25 backdrop-blur-md size-[60px] md:size-[80px] xl:size-[100px] flex items-center justify-center">
              <img
                src={playVideoIcon}
                className="size-8 md:size-10 xl:size-12"
              />
            </div>
          }
          playing={true}
          controls={true}
          width={"100%"}
          height={"100%"}
          light={!isVideoPlaying ? true : null}
        />
      </div>

      {/* LAYOUT WHEN VIDEO IS NOT PLAYED */}
      {!isVideoPlaying && (
        <>
          {/* RECOMMENDED VIDEOS */}
          <section className="lg:col-span-1">
            <h2 className="text-white text-lg lg:text-xl text-opacity-80 font-bold">
              Recommended
            </h2>
            <div>
              {recommendedVideos.map((video, index) => (
                <SmallVideoCard
                  key={index}
                  videoUrl={video.videoUrl}
                  videoDuration={video.videoDuration}
                  videoTitle={video.videoTitle}
                  videoChannel={video.videoChannel}
                  videoViews={video.videoViews}
                  videoPostDate={video.videoPostDate}
                  onClick={() => handleVideoClick(video.videoUrl)}
                />
              ))}
            </div>
          </section>

          {/* MORE VIDEOS SECTION */}
          <section className="more-videos-section lg:col-span-2">
            <div className="flex justify-between items-center">
              <h2 className="text-white font-semibold xl:text-lg">
                Other videos
              </h2>
              <div className="filter-dropdown border border-red-100 flex items-center rounded-xl w-[4rem] justify-around py-[.1rem]">
                <img src={filterIcon} alt="" className="size-4" />
                <input
                  type="text"
                  placeholder="All"
                  id="filter"
                  className="outline-none text-xs bg-transparent w-4 font-medium box-border"
                />
                <img src={arrowDown} alt="" className="size-4" />
              </div>
            </div>

<<<<<<< HEAD
                {/* MORE VIDEOS SECTION */}
                <section className="more-videos-section lg:col-span-2">
                    <div className=" flex justify-between items-center">
                        <h2 className="text-white font-semibold xl:text-lg ">Other videos</h2>
                        

                        {/* CUSTOM FILTER BUTTON REMOVED */}
                        {/* <div className="filter-dropdown border border-red-100 flex items-center rounded-xl w-[4rem] justify-around py-[.1rem] ">
                            <img src={filterIcon} alt="" className="size-4 " />
                            <input type="text" placeholder="All" id="filter" className=" outline-none text-xs bg-transparent w-4 font-medium box-border "/>
                            <img src={arrowDown} alt="" className="size-4"  />
                        </div>

                        <ul id="dropdown-list">
                            <li data-value="option-1">Option 1</li>
                        </ul>  */}
                    </div>
    
                    <div className="mt-5 grid grid-cols-1 place-content-center lg:grid-cols-3 auto-rows-auto gap-3" >
                        <VideoCard 
                            videoPreviewImg={videoPreviewPic}
                            videoTitle={`How to manage your mental health|Leon Taylor|TEDxClapham`}
                            videoChannel={`TEDxTalks`}
                            videoViews={`11k`}
                            videoPostDate={`1hour`}
                            videoDuration={`15:30`}
                        />
                        <VideoCard 
                            videoPreviewImg={videoPreviewPic}
                            videoTitle={`WARNING SIGNS | A Cinematic Short Film about Mental Health`}
                            videoChannel={`Christian Maté Grab`}
                            videoViews={`140k`}
                            videoPostDate={`1week`}
                            videoDuration={`2:30`}
                        /> 
                        <VideoCard 
                            videoPreviewImg={videoPreviewPic}
                            videoTitle={`We see you. A campaign for mental health care`}
                            videoChannel={`KGH Foundation`}
                            videoViews={`20k`}
                            videoPostDate={`4months`}
                            videoDuration={`1:00`}
                        />
                    </div>
                </section>
            </>
        )}
            
            {/* LAYOUT WHEN IT IS PLAYED */}
        {isVideoPlaying && (
            <>
                <section className='row-span-2'>
                    <h2 className=' text-white text-xl text-opacity-80 font-bold'>Related video</h2>
                    <div className='row-span-2 '>
                    {/* NOTE: 8 VIDEOS SHOULD BE RENDERED HERE */}
                    <SmallVideoCard 
                        videoPreviewImg={smallVideoCardPic}
                        videoDuration={`15:30`}
                        videoTitle={`Imagine There Was No Stigma to Mental Illness`}
                        videoChannel={`Dr. Jeffrey Lieberman | TEDxCharlottesville`}
                        videoViews={`120k`}
                        videoPostDate={`3 weeks`}
                       />
                       <SmallVideoCard 
                        videoPreviewImg={smallVideoCardPic}
                        videoDuration={`6:30`}
                        videoTitle={`Everything you think you know about addiction is wrong`}
                        videoChannel={`Johann Hari`}
                        videoViews={`45k`}
                        videoPostDate={`4 hours`}
                       />
                       <SmallVideoCard 
                        videoPreviewImg={smallVideoCardPic}
                        videoDuration={`1:00`}
                        videoTitle={`What is Happiness?`}
                        videoChannel={`Professor Dave`}
                        videoViews={`20k`}
                        videoPostDate={`1 month`}
                       />
                       <SmallVideoCard 
                        videoPreviewImg={smallVideoCardPic}
                        videoDuration={`12:39`}
                        videoTitle={`What makes a good life?`}
                        videoChannel={`Robert Waldinger`}
                        videoViews={`50k`}
                        videoPostDate={`3 days`}
                       />
                        <SmallVideoCard 
                        videoPreviewImg={smallVideoCardPic}
                        videoDuration={`15:30`}
                        videoTitle={`Imagine There Was No Stigma to Mental Illness`}
                        videoChannel={`Dr. Jeffrey Lieberman | TEDxCharlottesville`}
                        videoViews={`120k`}
                        videoPostDate={`3 weeks`}
                       />
                       <SmallVideoCard 
                        videoPreviewImg={smallVideoCardPic}
                        videoDuration={`6:30`}
                        videoTitle={`Everything you think you know about addiction is wrong`}
                        videoChannel={`Johann Hari`}
                        videoViews={`45k`}
                        videoPostDate={`4 hours`}
                       />
                       <SmallVideoCard 
                        videoPreviewImg={smallVideoCardPic}
                        videoDuration={`1:00`}
                        videoTitle={`What is Happiness?`}
                        videoChannel={`Professor Dave`}
                        videoViews={`20k`}
                        videoPostDate={`1 month`}
                       />
                       <SmallVideoCard 
                        videoPreviewImg={smallVideoCardPic}
                        videoDuration={`12:39`}
                        videoTitle={`What makes a good life?`}
                        videoChannel={`Robert Waldinger`}
                        videoViews={`50k`}
                        videoPostDate={`3 days`}
                       />
                    </div>
                </section>
=======
            <div className="mt-5 grid grid-cols-1 place-content-center lg:grid-cols-3 auto-rows-auto gap-3">
              {moreVideos.map((video, index) => (
                <VideoCard
                  key={index}
                  videoUrl={video.videoUrl}
                  videoTitle={video.videoTitle}
                  videoChannel={video.videoChannel}
                  videoViews={video.videoViews}
                  videoPostDate={video.videoPostDate}
                  videoDuration={video.videoDuration}
                  // onClick={() => handleVideoClick(video.videoUrl)}
                  onClick={handleVideoClick}
                />
              ))}
            </div>
          </section>
        </>
      )}

      {/* LAYOUT WHEN IT IS PLAYED */}
      {isVideoPlaying && (
        <>
          <section className="row-span-2">
            <h2 className="text-white text-xl text-opacity-80 font-bold">
              Related video
            </h2>
            <div className="row-span-2">
              {recommendedVideos.map((video, index) => (
                <SmallVideoCard
                  key={index}
                  videoUrl={video.videoUrl}
                  videoDuration={video.videoDuration}
                  videoTitle={video.videoTitle}
                  videoChannel={video.videoChannel}
                  videoViews={video.videoViews}
                  videoPostDate={video.videoPostDate}
                  // onClick={() => handleVideoClick(video.videoUrl)}
                  onClick={handleVideoClick}
                />
              ))}
            </div>
          </section>
>>>>>>> 41b67be9aefcd055918f9bd4f9e28210c7aa80f3

          {/* VIDEO DESCRIPTION SECTION */}
          <section className="row-start-2 row-end-3 lg:col-span-1 xl:mt-[-.8rem]">
            <div className="flex items-center justify-between">
              <div className="text-white text-sm flex flex-col gap-1 mt-1 lg:mt-0">
                <p>TED</p>
                <span>120k views • 3 weeks ago</span>
              </div>
              <div className="flex gap-2">
                <button className="flex items-center gap-1 px-2 py-1 bg-[#323232] rounded-full text-white text-xs">
                  <img src={yellowShareIcon} alt="Share" className="size-4" />
                  <span>Share</span>
                </button>
                <button className="flex items-center gap-1 px-2 py-1 bg-[#323232] rounded-full text-white text-xs">
                  <img src={saveAddIcon} alt="Save" className="size-4" />
                  <span>Save</span>
                </button>
              </div>
            </div>
            <p className="text-white text-opacity-80 text-sm mt-3">
              Jeffrey Lieberman explores the stigma surrounding mental illness,
              emphasizing how society's negative perceptions have shaped the
              mental health landscape. He discusses the need for open
              conversations and understanding to combat these stigmas.
            </p>
          </section>
        </>
      )}
    </section>
  );
};

export default VideoSection;
