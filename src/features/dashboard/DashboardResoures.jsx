import { videoPreviewPic } from "@/assets";
import ArticleCard from "@/Component/ui/ArticleCard";
import VideoCard from "@/Component/ui/VideoCard";
import { useState } from "react";

const ResourceBtn = ({activeTab, setActiveTab}) => {
    const tabs = ["Videos", "Articles", "Podcasts", "Careers"];

    return(
        <>
            {tabs.map((tab) => (
                <button 
                key={tab}
                className={`w-[25%] py-[.3rem] text-sm text-center rounded-md xl:text-[.95rem] ${
                    tab === activeTab
                        ? "bg-serene font-semibold text-[#191919] "
                        : "bg-[#201f1f] border border-[#201f1f] text-[#c7c7c7] "
                }`} 
                onClick={() => setActiveTab(tab)}
                >
                    {tab}
                </button>
                ))
            }
        </>
    );
};

const DashboardResources = () => {
    const [activeTab, setActiveTab] = useState("Videos");

    return (  
        <>
            <section className="dashboard-resources  bg-[#272727] flex flex-col rounded-lg col-span-2 h-auto mt-7 py-5 px-6 md:p-8 lg:mt-0 ">
                <div className="flex justify-between items-center">
                        <h4 className="text-white text-lg md:text-xl font-semibold">Resources</h4> 
                        <button className="text-serene-gray font-medium text-xs">See all</button>
                </div>

                <div className="resourceCard-btn-group md:flex md:justify-center md:mt-4 md:gap-7 hidden">
                    <ResourceBtn activeTab={activeTab} setActiveTab={setActiveTab} />
                </div>

                <main>
                {/* FOR VIDEOS SECTION */}
                {activeTab === "Videos" && (
                    <div className="mt-5 grid grid-cols-3 auto-rows-auto gap-3" >
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
                )}


                {/* FOR ARTICLES SECTION */}
                {activeTab === "Articles" && (
                    <>
                        <ArticleCard 
                            articleTitle={`How I was able to fight my depression of 10 years now`}
                            articleDescription={`For a decade, I lived in the shadow of depression. It was a constant companion, sapping my energy, motivation, and joy.`}
                        />
                        <ArticleCard 
                            articleTitle={`How I was able to fight my depression of 10 years now`}
                            articleDescription={`For a decade, I lived in the shadow of depression. It was a constant companion, sapping my energy, motivation, and joy.`}
                        />
                    </> 
                )}
                   
                </main>
            </section>
        </>
    );
}
 
export default DashboardResources;