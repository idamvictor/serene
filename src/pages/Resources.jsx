import Layout from "@/Component/Shared/Layout";
import VideoSection from "@/Component/ui/VideoSection";
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

const Resources = () => {
  const [activeTab, setActiveTab] = useState("Videos");

  return (
    <Layout>
      <section className="mt-28 lg:mx-5 xl:mx-7 ">
      <h1 className="text-white lg:text-2xl xl:text-3xl font-bold">Resources</h1>

      <div className=" md:flex justify-center md:mt-6 md:gap-6 ">
        <ResourceBtn activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      <main>
      {activeTab === "Videos" && (
        <VideoSection />
      )}
      </main>

      </section>
    </Layout>
  );
};

export default Resources;
