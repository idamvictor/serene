// import Layout from "@/Component/Shared/Layout";
// import ArticleSection from "@/Component/ui/ResourcesPage/ArticleSection";
// import VideoSection from "@/Component/ui/ResourcesPage/VideoSection";
// import { useState } from "react";


// const ResourceBtn = ({activeTab, setActiveTab}) => {
//   const tabs = ["Videos", "Articles", "Podcasts", "Careers"];
//   const handleTabButtonClick = (tab) => {
//       setActiveTab(tab);
//   };



//   return(
//       <>
//           {tabs.map((tab) => (
//               <button 
//               key={tab}
//               className={`w-[25%] py-[.3rem] text-xs lg:text-sm text-center rounded-md xl:text-[.95rem] ${
//                   tab === activeTab
//                       ? "bg-serene font-semibold text-[#191919] "
//                       : "bg-[#201f1f] border border-[#201f1f] text-[#c7c7c7] "
//               }`} 
//               onClick={() => handleTabButtonClick(tab)}
//               >
//                   {tab}
//               </button>
//               ))
//           }
//       </>
//   );
// };


// //* MAIN RESOURCES COMPONENT
// const Resources = () => {
//   const [activeTab, setActiveTab] = useState("Videos");
//   const [isVideoPlaying, setIsVideoPlaying] = useState(false);  //* to control the video logic when a video is being played
//   // const [selectedArticle, setSelectedArticle] = useState(false); //* to control the article logic when an article is selected
//   const [selectedArticle, setSelectedArticle] = useState(null);

//   const handleBackClick = () => {
//     setIsVideoPlaying(false);
//     setSelectedArticle(false)   
//   };

//   return (
//     <Layout 
//       onBack={(isVideoPlaying || selectedArticle ) ? handleBackClick : null} 
//     >
//       <section className="mt-24 lg:mt-28 mx-4 lg:mx-5 xl:mx-8 ">
//       <h1 className="text-white text-xl lg:text-2xl xl:text-3xl font-bold">Resources</h1>

//       <div className="flex gap-2 items-center md:flex justify-center md:mt-6 md:gap-6 mb-4 lg:mb-7 mt-2">
//         <ResourceBtn 
//           activeTab={activeTab} 
//           setActiveTab={setActiveTab} 
//         />
//       </div>

//       {/* RESOURCES MAIN CONTENT */}
//       <main>
//         {/* VIDEO SECTION */}
//         {activeTab === "Videos" && (
//           <VideoSection
//             isVideoPlaying={isVideoPlaying} 
//             setIsVideoPlaying={setIsVideoPlaying}
//           />
//         )}

//         {/* ARTICLE SECTION */}
//         {activeTab === "Articles" && (
//           <ArticleSection
//             selectedArticle={selectedArticle}
//             setSelectedArticle={setSelectedArticle}
//           />
//         )}

//       </main>

//       </section>
//     </Layout>
//   );
// };

// export default Resources;




import Layout from "@/Component/Shared/Layout";
import ArticleSection from "@/Component/ui/ResourcesPage/ArticleSection";
import VideoSection from "@/Component/ui/ResourcesPage/VideoSection";
import { useState } from "react";

const ResourceBtn = ({ activeTab, setActiveTab }) => {
  const tabs = ["Videos", "Articles", "Podcasts", "Careers"];

  const handleTabButtonClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`w-[25%] py-[.3rem] text-xs lg:text-sm text-center rounded-md xl:text-[.95rem] ${
            tab === activeTab
              ? "bg-serene font-semibold text-[#191919] "
              : "bg-[#201f1f] border border-[#201f1f] text-[#c7c7c7] "
          }`}
          onClick={() => handleTabButtonClick(tab)}
          disabled={tab === "Podcasts" || tab === "Careers"} // Disable Podcasts and Careers
          style={{
            cursor: tab === "Podcasts" || tab === "Careers" ? "not-allowed" : "pointer",
            opacity: tab === "Podcasts" || tab === "Careers" ? 0.5 : 1,
          }}
        >
          {tab}
        </button>
      ))}
    </>
  );
};

//* MAIN RESOURCES COMPONENT
const Resources = () => {
  const [activeTab, setActiveTab] = useState("Videos");
  const [isVideoPlaying, setIsVideoPlaying] = useState(false); //* to control the video logic when a video is being played
  const [selectedArticle, setSelectedArticle] = useState(null); //* to control the article logic when an article is selected

  const handleBackClick = () => {
    setIsVideoPlaying(false);
    setSelectedArticle(false);
  };

  return (
    <Layout onBack={isVideoPlaying || selectedArticle ? handleBackClick : null}>
      <section className="mt-24 lg:mt-28 mx-4 lg:mx-5 xl:mx-8 ">
        <h1 className="text-white text-xl lg:text-2xl xl:text-3xl font-bold">Resources</h1>

        <div className="flex gap-2 items-center md:flex justify-center md:mt-6 md:gap-6 mb-4 lg:mb-7 mt-2">
          <ResourceBtn activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>

        {/* RESOURCES MAIN CONTENT */}
        <main>
          {/* VIDEO SECTION */}
          {activeTab === "Videos" && (
            <VideoSection
              isVideoPlaying={isVideoPlaying}
              setIsVideoPlaying={setIsVideoPlaying}
            />
          )}

          {/* ARTICLE SECTION */}
          {activeTab === "Articles" && (
            <ArticleSection
              selectedArticle={selectedArticle}
              setSelectedArticle={setSelectedArticle}
            />
          )}
        </main>
      </section>
    </Layout>
  );
};

export default Resources;
