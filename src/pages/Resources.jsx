import Layout from "@/Component/Shared/Layout";


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
  return (
    <Layout>
      <section className="mt-28 mx-7 ">
      <h1 className="text-white text-3xl font-bold">Resources</h1>

      <div className=" md:flex justify-center md:mt-6 md:gap-6 ">
        <ResourceBtn />
      </div>

      </section>
    </Layout>
  );
};

export default Resources;
