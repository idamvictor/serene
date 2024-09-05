// import { videoPreviewPic } from "@/assets";
// import ArticleCard from "@/Component/ui/ResourcesPage/ArticleCard";
// import VideoCard from "@/Component/ui/ResourcesPage/VideoCard";
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { cryingWoman, articlePic } from "@/assets";

// const ResourceBtn = ({ activeTab, setActiveTab }) => {
//   const tabs = ["Videos", "Articles", "Podcasts", "Careers"];

//   return (
//     <>
//       {tabs.map((tab) => (
//         <button
//           key={tab}
//           className={`w-[25%] py-[.3rem] text-sm text-center rounded-md xl:text-[.95rem] ${
//             tab === activeTab
//               ? "bg-serene font-semibold text-[#191919] "
//               : "bg-[#201f1f] border border-[#201f1f] text-[#c7c7c7] "
//           }`}
//           onClick={() => setActiveTab(tab)}
//           disabled={tab === "Podcasts" || tab === "Careers"} // Disable the Podcasts and Careers buttons
//           style={{
//             cursor:
//               tab === "Podcasts" || tab === "Careers"
//                 ? "not-allowed"
//                 : "pointer",
//             opacity: tab === "Podcasts" || tab === "Careers" ? 0.5 : 1,
//           }}
//         >
//           {tab}
//         </button>
//       ))}
//     </>
//   );
// };

// const DashboardResources = () => {
//   const [activeTab, setActiveTab] = useState("Videos");

//   return (
//     <>
//       <section className="dashboard-resources  bg-[#272727] flex flex-col rounded-lg col-span-2 h-auto mt-7 py-5 px-6 lg:px-4 md:mt-[-18px] xl:px-8 ">
//         <div className="flex justify-between items-center">
//           <h4 className="text-white text-lg md:text-xl font-semibold">
//             Resources
//           </h4>
//           <Link
//             to={"/resources"}
//             className="text-serene-gray font-medium text-xs"
//           >
//             See all
//           </Link>
//         </div>

//         <div className="resourceCard-btn-group md:flex md:justify-center md:mt-4 md:gap-7 hidden">
//           <ResourceBtn activeTab={activeTab} setActiveTab={setActiveTab} />
//         </div>

//         <main>
//           {/* FOR VIDEOS SECTION */}
//           {activeTab === "Videos" && (
//             <div className="mt-5 grid grid-cols-1 place-content-center lg:grid-cols-3 auto-rows-auto gap-3">
//               <VideoCard
//                 videoUrl={
//                   "https://www.youtube.com/watch?v=ga-MniJxQz8&pp=ygUgdmlkZW8gb24gZGVwcmVzc2lvbiBhbmQgYW54aWV0eSA%3D"
//                 }
//                 videoPreviewImg={videoPreviewPic}
//                 videoTitle={`Depression and Axiety No More`}
//                 videoChannel={`TEDxTalks`}
//                 videoViews={`11k`}
//                 videoPostDate={`1hour`}
//                 videoDuration={`15:30`}
//               />
//               <VideoCard
//                 videoUrl={
//                   "https://www.youtube.com/watch?v=d96akWDnx0w&pp=ygUgdmlkZW8gb24gZGVwcmVzc2lvbiBhbmQgYW54aWV0eSA%3D"
//                 }
//                 videoPreviewImg={videoPreviewPic}
//                 videoTitle={`WARNING SIGNS | A Cinematic Short Film about Mental Health`}
//                 videoChannel={`Christian Maté Grab`}
//                 videoViews={`140k`}
//                 videoPostDate={`1week`}
//                 videoDuration={`2:30`}
//               />
//               <VideoCard
//                 videoUrl={
//                   "https://www.youtube.com/watch?v=wptx2v9mpf8&pp=ygUgdmlkZW8gb24gZGVwcmVzc2lvbiBhbmQgYW54aWV0eSA%3D"
//                 }
//                 videoPreviewImg={videoPreviewPic}
//                 videoTitle={`Overcome Depression`}
//                 videoChannel={`KGH Foundation`}
//                 videoViews={`20k`}
//                 videoPostDate={`4months`}
//                 videoDuration={`1:00`}
//               />
//             </div>
//           )}

//           {/* FOR ARTICLES SECTION */}
//           {activeTab === "Articles" && (
//             <>
//               <ArticleCard
//                 articleImg={articlePic}
//                 articleTitle={`How I was able to fight my depression of 10 years now`}
//                 articleDescription={`For a decade, I lived in the shadow of depression. It was a constant companion, sapping my energy, motivation, and joy.`}
//               />
//               <ArticleCard
//               articleImg={cryingWoman}
//                 articleTitle={`How depression ruined my live`}
//                 articleDescription={`Depression affected my life in ways i coudnt imagine possible, starting with my career and then my marriage life and eventually my general well being`}
//               />
//             </>
//           )}
//         </main>
//       </section>
//     </>
//   );
// };

// export default DashboardResources;

import { videoPreviewPic } from "@/assets";
import ArticleCard from "@/Component/ui/ResourcesPage/ArticleCard";
import VideoCard from "@/Component/ui/ResourcesPage/VideoCard";
import { useState } from "react";
import { Link } from "react-router-dom";
import { cryingWoman, articlePic } from "@/assets";

const ResourceBtn = ({ activeTab, setActiveTab }) => {
  const tabs = ["Videos", "Articles", "Podcasts", "Careers"];

  return (
    <>
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`w-[25%] py-[.3rem] text-sm text-center rounded-md xl:text-[.95rem] ${
            tab === activeTab
              ? "bg-serene font-semibold text-[#191919]"
              : "bg-[#201f1f] border border-[#201f1f] text-[#c7c7c7]"
          }`}
          onClick={() => setActiveTab(tab)}
          disabled={tab === "Podcasts" || tab === "Careers"} // Disable the Podcasts and Careers buttons
          style={{
            cursor:
              tab === "Podcasts" || tab === "Careers"
                ? "not-allowed"
                : "pointer",
            opacity: tab === "Podcasts" || tab === "Careers" ? 0.5 : 1,
          }}
        >
          {tab}
        </button>
      ))}
    </>
  );
};

const DashboardResources = () => {
  const [activeTab, setActiveTab] = useState("Videos");

  return (
    <>
      <section className="dashboard-resources bg-[#272727] flex flex-col rounded-lg col-span-2 h-auto mt-7 py-5 px-6 lg:px-4 md:mt-[-18px] xl:px-8">
        <div className="flex justify-between items-center">
          <h4 className="text-white text-lg md:text-xl font-semibold">
            Resources
          </h4>
          <Link
            to={"/resources"}
            className="text-serene-gray font-medium text-xs"
          >
            See all
          </Link>
        </div>

        <div className="resourceCard-btn-group md:flex md:justify-center md:mt-4 md:gap-7 hidden">
          <ResourceBtn activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>

        <main>
          {/* FOR VIDEOS SECTION */}
          {activeTab === "Videos" && (
            <div className="mt-5 grid grid-cols-1 place-content-center lg:grid-cols-3 auto-rows-auto gap-3">
              <VideoCard
                videoUrl={
                  "https://www.youtube.com/watch?v=ga-MniJxQz8&pp=ygUgdmlkZW8gb24gZGVwcmVzc2lvbiBhbmQgYW54aWV0eSA%3D"
                }
                videoPreviewImg={videoPreviewPic}
                videoTitle={`Depression and Anxiety No More`}
                videoChannel={`TEDxTalks`}
                videoViews={`11k`}
                videoPostDate={`1 hour ago`}
                videoDuration={`15:30`}
              />
              <VideoCard
                videoUrl={
                  "https://www.youtube.com/watch?v=d96akWDnx0w&pp=ygUgdmlkZW8gb24gZGVwcmVzc2lvbiBhbmQgYW54aWV0eSA%3D"
                }
                videoPreviewImg={videoPreviewPic}
                videoTitle={`WARNING SIGNS | A Cinematic Short Film about Mental Health`}
                videoChannel={`Christian Maté Grab`}
                videoViews={`140k`}
                videoPostDate={`1 week ago`}
                videoDuration={`2:30`}
              />
              <VideoCard
                videoUrl={
                  "https://www.youtube.com/watch?v=wptx2v9mpf8&pp=ygUgdmlkZW8gb24gZGVwcmVzc2lvbiBhbmQgYW54aWV0eSA%3D"
                }
                videoPreviewImg={videoPreviewPic}
                videoTitle={`Overcome Depression`}
                videoChannel={`KGH Foundation`}
                videoViews={`20k`}
                videoPostDate={`4 months ago`}
                videoDuration={`1:00`}
              />
            </div>
          )}

          {/* FOR ARTICLES SECTION */}
          {activeTab === "Articles" && (
            <>
              <Link to="resources">
                <ArticleCard
                  articleImg={articlePic}
                  articleTitle={`How I was able to fight my depression of 10 years now`}
                  articleDescription={`For a decade, I lived in the shadow of depression. It was a constant companion, sapping my energy, motivation, and joy.`}
                />
              </Link>
              <Link to="resources">
                <ArticleCard
                  articleImg={cryingWoman}
                  articleTitle={`How depression ruined my life`}
                  articleDescription={`Depression affected my life in ways I couldn’t imagine possible, starting with my career and then my marriage life and eventually my general well-being.`}
                />
              </Link>
            </>
          )}
        </main>
      </section>
    </>
  );
};

export default DashboardResources;
