import ArticleCard from "@/Component/ui/ArticleCard";

const ResourceBtn = ({ resource }) => {
    return(
        <button className="w-[25%] py-[.3rem] text-sm border border-[#201f1f] text-center rounded-md text-[#c7c7c7] bg-[#201f1f] hover:bg-serene hover:text-[#191919] hover:font-semibold hover:border-serene xl:text-base ">
            {resource}
        </button>
    );
};

const DashboardResources = () => {
    return (  
        <>
            <section className="dashboard-resources  bg-[#272727] flex flex-col rounded-lg col-span-2 h-auto md:p-8 lg:mt-0 mt-7 py-5 px-6 ">
                <div className="flex justify-between items-center">
                        <h4 className="text-white text-lg md:text-xl font-semibold">Resources</h4> 
                        <button className="text-serene-gray font-medium text-xs">See all</button>
                </div>

                <div className="resourceCard-btn-group md:flex md:justify-center md:mt-4 md:gap-7 hidden">
                    <ResourceBtn resource={"Articles"} />
                    <ResourceBtn resource={"Videos"} />
                    <ResourceBtn resource={"Podcasts"} />
                    <ResourceBtn resource={"Careers"} />
                </div>

                <main>
                    <ArticleCard 
                        articleTitle={`How I was able to fight my depression of 10 years now`}
                        articleDescription={`For a decade, I lived in the shadow of depression. It was a constant companion, sapping my energy, motivation, and joy.`}
                    />
                    <ArticleCard 
                        articleTitle={`How I was able to fight my depression of 10 years now`}
                        articleDescription={`For a decade, I lived in the shadow of depression. It was a constant companion, sapping my energy, motivation, and joy.`}
                    />
                </main>
            </section>
        </>
    );
}
 
export default DashboardResources;