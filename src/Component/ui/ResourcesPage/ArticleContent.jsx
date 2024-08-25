import { articleContentPic, facebookIcon, instaIcon, userProfilePic, verifiedBadge, filterIcon, arrowDown,  } from "@/assets";
import ArticleCard from "./ArticleCard";


const ArticleContent = () => {
  return (
    <>
        <article className="mb-8 lg:w-[90%] xl:w-4/5">
            <img src={articleContentPic} alt="" className=" " />


            <header>
                <h1 className="text-white text-2xl lg:text-4xl xl:text-5xl font-medium leading-[1.3] md:leading-[1.1] mt-5 ">Discover how yoga can improve physical and mental health for women of all ages across Africa</h1>

                <div className="article-meta text-[#d9d9d9] text-sm xl:text-base flex flex-col md:flex-row md:items-center justify-between gap-3 mt-5 tracking-wide ">
                    <div className="author-cont flex items-center gap-2 ">
                        <img src={userProfilePic} alt="" className="size-8 rounded-full " />
                        <p className="article-author">By <span className="text-serene font-medium" >Nnenna Crystal</span></p>
                    </div>

                    <div className="reviewer-cont flex items-center ">
                        <img src={userProfilePic} alt="reviewer picture" className="size-8 rounded-full" />
                        <img src={verifiedBadge} alt="verified badge icon" className="mb-[-.5rem] mx-[-4px] " />
                        <p className="article-reviewer">Medically reviewed by <span className="text-serene font-medium ">Kelechi Amanda, MD</span></p>
                    </div>

                    <p className="article-postDate">Published on Nov 13, 2024</p>
                </div>

                <div className="article-highlights flex items-center justify-between flex-wrap gap-[.2rem] md:gap-0 text-[#afb8be] text-sm xl:text-base font-bold  mt-5  ">
                    |<span className="text-serene font-medium">Diets</span>|
                    <span className="text-serene font-medium">Lifestyle disease</span>|
                    <span className="text-serene font-medium">Traditional diets</span>|
                    <span className="text-serene font-medium">Life sicknesses</span>|
                    <span className="text-serene font-medium">Who you can meet</span>|
                </div>
            </header>

            <main className="text-[#d9d9d9] mt-7 ">
                {/* MAIN SECTION */}
                {/* Each section has the same styling so the section element can be reiterated through depending on how many sections the article has */}
                <section className="flex flex-col gap-3  xl:text-lg leading-8 tracking-[.25px] mb-8 ">
                    <h2 className="text-[#fefefe] text-xl md:text-2xl font-semibold ">Major Topics</h2>

                    <p className="">Maintaining good health becomes increasingly important as women age, requiring a proactive approach to health screenings and lifestyle choices. By staying vigilant about health, women can prevent and manage potential health issues more effectively. This comprehensive health checklist is designed specifically for women over 30, providing guidance on key areas to </p>

                    <p>Maintaining good health becomes increasingly important as women age, requiring a proactive approach to health screenings and lifestyle choices. By staying vigilant about health, women can prevent and manage potential health issues more effectively. This comprehensive health checklist is designed specifically for women over 30, providing guidance on key areas to </p>
                </section>

                {/* SUB-SECTION 1 */}
                <section className="flex flex-col gap-3 xl:text-lg leading-8 tracking-[.25px] mb-8 ">
                    <h2 className="text-[#fefefe] text-xl md:text-2xl font-semibold ">Sub Topics</h2>

                    <p className="">Maintaining good health becomes increasingly important as women age, requiring a proactive approach to health screenings and lifestyle choices. By staying vigilant about health, women can prevent and manage potential health issues more effectively. This comprehensive health checklist is designed specifically for women over 30, providing guidance on key areas to </p>

                    <p>Maintaining good health becomes increasingly important as women age, requiring a proactive approach to health screenings and lifestyle choices. By staying vigilant about health, women can prevent and manage potential health issues more effectively. This comprehensive health checklist is designed specifically for women over 30, providing guidance on key areas to </p>
                </section>

                {/* SUB-SECTION 2 */}
                <section className="flex flex-col gap-3 xl:text-lg leading-8 tracking-[.25px] mb-8 ">
                    <h2 className="text-[#fefefe] text-xl md:text-2xl font-semibold ">Sub Topics</h2>

                    <p className="">Maintaining good health becomes increasingly important as women age, requiring a proactive approach to health screenings and lifestyle choices. By staying vigilant about health, women can prevent and manage potential health issues more effectively. This comprehensive health checklist is designed specifically for women over 30, providing guidance on key areas to </p>

                    <p>Maintaining good health becomes increasingly important as women age, requiring a proactive approach to health screenings and lifestyle choices. By staying vigilant about health, women can prevent and manage potential health issues more effectively. This comprehensive health checklist is designed specifically for women over 30, providing guidance on key areas to </p>
                </section>
            </main>

           <footer className="flex items-center text-[#d9d9d9] font-medium tracking-[.15px] gap-3 ">
                Share
                <img src={facebookIcon} alt="facebook icon" />
                <img src={instaIcon} alt="instagram icon" />
           </footer>

           
             {/* RELATED ARTICLES SECTION */}
             <section className="mt-16">
                 <div className=" flex justify-between items-center">
                     <h2 className="text-white font-semibold text-xl ">Related Articles</h2>
                     
                     {/* FILTER CUSTOM BUTTON  */}
                     <div className="filter-dropdown border border-red-100 flex items-center rounded-xl w-[4rem] justify-around py-[.1rem] ">
                         <img src={filterIcon} alt="" className="size-4 " />
                         <input type="text" placeholder="All" id="filter" className=" outline-none text-sm bg-transparent w-4 font-medium box-border "/>
                         <img src={arrowDown} alt="" className="size-4"  />
                     </div>
     
                     {/* <ul id="dropdown-list">
                         <li data-value="option-1">Option 1</li>
                     </ul> */}
                 </div>
     
                 <div className="flex flex-col" >
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
           
        </article>
      
    </>
  )
}

export default ArticleContent;
