import ReactPlayer from 'react-player';
import { useState } from 'react';
import { playVideoIcon, videoPreviewPic, filterIcon, arrowDown, yellowShareIcon, saveAddIcon, smallVideoCardPic } from '@/assets';
import SmallVideoCard from './SmallVideoCard';
import VideoCard from './VideoCard';

const VideoSection = () => {
    const [isPlaying, setIsPlaying] = useState(false);
  
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

  return (
    <>
    <section className={` mb-4 grid grid-cols-1 lg:grid-cols-[2fr_1fr] auto-rows-auto gap-3 lg:gap-5 xl:gap-7 ${!isPlaying ?' text-serene ': 'text-white'}p`}>

            {/* VIDEO PLAYER SECTION */}
        <div  className='rounded-[11px] h-[13rem] lg:h-full overflow-hidden border border-[#666666] lg:col-span-1 lg:row-span-1'>
            <ReactPlayer
                url='https://www.youtube.com/watch?v=LXb3EKWsInQ'
                onStart={handlePlay}
                onPause={handlePlay}
                onEnded={handlePause}
                playIcon={playVideoIcon}
                controls={true} 
                width={"100%"}
                height={"100%"}
            />
        </div>
        

            {/* LAYOUT WHEN VIDEO IS NOT PLAYED */}
        {!isPlaying && (
            <>
                {/* RECOMMENDED VIDEOS */}
                <section className="lg:col-span-1 ">
                    <h2 className='  text-white text-lg lg:text-xl text-opacity-80 font-bold '>Recommended</h2>
                    <div>
                    {/* 4 VIDEOS SHOULD BE RENDERED HERE */}
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

                {/* MORE VIDEOS SECTION */}
                <section className="more-videos-section lg:col-span-2">
                    <div className=" flex justify-between items-center">
                        <h2 className="text-white font-semibold xl:text-lg ">Other videos</h2>
                        
                        <div className="filter-dropdown border border-red-100 flex items-center rounded-xl w-[4rem] justify-around py-[.1rem] ">
                            <img src={filterIcon} alt="" className="size-4 " />
                            <input type="text" placeholder="All" id="filter" className=" outline-none text-xs bg-transparent w-4 font-medium box-border "/>
                            <img src={arrowDown} alt="" className="size-4"  />
                        </div>

                        {/* <ul id="dropdown-list">
                            <li data-value="option-1">Option 1</li>
                        </ul> */}
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
        {isPlaying && (
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

            {/* VIDEO DESCRIPTION SECTION */}
                <section className=' row-start-2 row-end-3 lg:col-span-1 xl:mt-[-.8rem] '>
                    <div className='flex items-center justify-between '>  
                        <div className='text-white text-sm flex flex-col gap-1 mt-1 lg:mt-0'>
                            <p>TED</p>
                            <span className=''>120k views | Posted 4 days ago</span>
                        </div>

                        <div className='flex gap-2 lg:gap-4 xl:gap-7 items-center '>
                            <button className='text-serene text-xs lg:text-sm flex items-center gap-1 border border-serene font-medium rounded-[4px] py-1 px-2 xl:py-2 xl:px-3  '>
                                <img src={yellowShareIcon} alt="" className='size-4'  />
                                Share
                            </button>
                            <button className='text-[#0b0b0b] text-xs lg:text-sm bg-serene flex items-center gap-1 border border-serene font-medium rounded-[4px] py-1 px-2 xl:py-2 xl:px-3  '>
                                <img src={saveAddIcon} alt="" className='size-4' />
                                Save
                            </button>
                        </div>
                    </div>
                    <h5 className='text-white text-lg lg:text-xl font-medium mt-3 lg:mt-5 leading-[27px] '>Robert Waldinger: What makes a good life? Lessons from the longest study on happiness | TED</h5>  
                    <p className='text-white text-sm mt-3 lg:mt-5 tracking-wide leading-[26px] '>What keeps us happy and healthy as we go through life? If you think it's fame and money, you're not alone – but, according to psychiatrist Robert Waldinger, you're mistaken. As the director of 75-year-old study on adult development, Waldinger has unprecedented access to data on true happiness and satisfaction. In this talk, he shares three important lessons learned from the study as well as some practical, old-as-the-hills wisdom on how to build a fulfilling, long life.</p>
                </section>
            </>
        )}
         
    </section>
    </>
  )
}

export default VideoSection;
