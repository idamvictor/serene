//TODO: DELETE THIS FILE. NO LONGER NEEDED

import ArticleCard from "./ArticleCard";

const ResourceBtn = ({ resource }) => {
    return(
        <button className="px-16 py-[.3rem] text-sm text-center rounded-md text-[#c7c7c7] bg-[#201f1f] hover:bg-serene hover:text-[#191919] hover:font-semibold">
            {resource}
        </button>
    );
};

const ResourceCard = () => {
    return (  
        <>
            <section className="resourceCard-cont h-auto w-[80%] bg-[#272727] flex flex-col m-11 p-8 rounded-md">
                <div className="flex justify-between items-center">
                        <h4 className="text-white text-xl font-semibold">Resources</h4> 
                        <button className="text-serene-gray font-medium text-xs">See all</button>
                </div>

                <div className="resourceCard-btn-group flex justify-between mt-4">
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
 
export default ResourceCard;