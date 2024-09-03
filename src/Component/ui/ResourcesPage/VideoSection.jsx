

import React, { useState } from "react";
import ReactPlayer from "react-player";
import {
  playVideoIcon,
  yellowShareIcon,
  saveAddIcon,
  videoPreviewPic,
  smallVideoCardPic,
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
    // (Your recommended videos data)
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
      videoTitle:
        "If you're feeling depressed, anxious, sad, or angry WATCH THIS!!!",
      videoChannel: "Robert Waldinger",
      videoViews: "50k",
      videoPostDate: "3 days",
    },
  ];

  const moreVideos = [
    // (Your more videos data)
    {
      videoUrl:
        "https://www.youtube.com/watch?v=1I9ADpXbD6c&pp=ygUgdmlkZW8gb24gZGVwcmVzc2lvbiBhbmQgYW54aWV0eSA%3D",
      videoTitle: "FIGHT DEPRESSION",
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

  const renderVideoList = (videos) => {
    return videos.map((video, index) => (
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
    ));
  };

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

      {/* CONDITIONAL RENDERING */}
      {!isVideoPlaying ? (
        <>
          <section className="lg:col-span-1">
            <h2 className="text-white text-lg lg:text-xl text-opacity-80 font-bold">
              Recommended
            </h2>
            <div>{renderVideoList(recommendedVideos)}</div>
          </section>
          <section className="more-videos-section lg:col-span-2">
            <div className="flex justify-between items-center">
              <h2 className="text-white font-semibold xl:text-lg">
                Other videos
              </h2>
            </div>
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
                  onClick={() => handleVideoClick(video.videoUrl)}
                />
              ))}
            </div>
          </section>
        </>
      ) : (
        <>
          <section className="row-span-2">
            <h2 className="text-white text-xl text-opacity-80 font-bold">
              Related video
            </h2>
            <div className="row-span-2">
              {renderVideoList(recommendedVideos)}
            </div>
          </section>
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
