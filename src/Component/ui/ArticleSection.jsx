import { articleFeaturedPic, filterIcon, arrowDown } from "@/assets";
import SmallArticleCard from "./SmallArticleCard";
import ArticleCard from "./ArticleCard";

const ArticleSection = () => {
  return (
    <>
      <section className="articleResource-cont mb-4  grid grid-cols-1 lg:grid-cols-[2fr_1fr] auto-rows-auto gap-3 lg:gap-5 xl:gap-7">
        <section className="articleFeature-section">
            <div className="flex items-end border border-[#7e7e7e] bg-[#303030] rounded-[11px] h-[21.313rem] ">
                <div className="w-[50%] flex flex-col gap-3 mb-[1.5rem] ml-5 ">
                    <span className="text-[#c7c7c7] font-semibold ">Featured</span>
                    <h3 className="text-[#fefefe] text-3xl tracking-wide font-bold  ">What Are Mental Disorders?</h3>
                    <p className="text-[#a3a3a3] text-[10px] tracking-wide  ">By Kendra Cherry, MSEd | Updated on February 17, 2022</p>
                    <button className="text-serene text-[11px] border border-serene font-medium px-[14px] py-[8.24px] rounded-[2.75px] w-[35%] mt-5 ">Read</button>
                </div>

                <img src={articleFeaturedPic} alt="" className="w-[50%] h-[21.313rem] rounded-r-[11px] " />
            </div>
        </section>


        {/* TRENDING ARTICLES SECTION */}
        <section className="">
            <h2 className='  text-white text-lg lg:text-xl text-opacity-80 font-bold '>Trending</h2>

            {/* 3 ARTICLE CARDS SHOULD BE RENDERED TO MATCH THE HEIGHT OF THE FEATURED SECTION */}
            <SmallArticleCard />
            <SmallArticleCard />
            <SmallArticleCard />
        </section>


        {/* RELATED ARTICLES SECTION */}
        <section className="col-span-2">
            <div className=" flex justify-between items-center">
                <h2 className="text-white font-semibold xl:text-lg ">Related Articles</h2>
                
                <div className="filter-dropdown border border-red-100 flex items-center rounded-xl w-[4rem] justify-around py-[.1rem] ">
                    <img src={filterIcon} alt="" className="size-4 " />
                    <input type="text" placeholder="All" id="filter" className=" outline-none text-xs bg-transparent w-4 font-medium box-border "/>
                    <img src={arrowDown} alt="" className="size-4"  />
                </div>

                {/* <ul id="dropdown-list">
                    <li data-value="option-1">Option 1</li>
                </ul> */}
            </div>

            <div className="mt-5 " >
                <ArticleCard 
                    articleTitle={`How I was able to fight my depression of 10 years now`}
                    articleDescription={`For a decade, I lived in the shadow of depression. It was a constant companion, sapping my energy, motivation, and joy.`}
                />
                <ArticleCard 
                    articleTitle={`How I was able to fight my depression of 10 years now`}
                    articleDescription={`For a decade, I lived in the shadow of depression. It was a constant companion, sapping my energy, motivation, and joy.`}
                />
            </div>
        </section>
      </section>
    </>
  )
}

export default ArticleSection;
