// import {
//   articleFeaturedPic,
//   filterIcon,
//   arrowDown,
//   smallArticleCardPic, cryingWoman, articlePic, depressedMan, anxiousWoman
// } from "@/assets";
// import SmallArticleCard from "./SmallArticleCard";
// import ArticleCard from "./ArticleCard";
// import ArticleContent from "./ArticleContent";


// const ArticleSection = ({ selectedArticle, setSelectedArticle }) => {
//   //* function to call when you want to display the article content UI
//   const handleReadMore = (article) => {
//     setSelectedArticle(article);
//   };

//   const featuredArticle = {
//     title: "What Are Mental Disorders?",
//     description: "An article that explores various mental disorders.",
//     author: "Kendra Cherry, MSEd",
//     date: "Updated on February 17, 2022",
//     content:
//       "Full content of 'What Are Mental Disorders?' article goes here...",
//   };

//   const trendingArticles = [
//     {
//       articleImg: smallArticleCardPic,
//       title: "Should I Tell My Partner What Happens in Therapy?",
//       author: "Sanjana Gupta",
//       tag: "Family issues",
//       content:
//         "Full content of 'Should I Tell My Partner What Happens in Therapy?' article goes here...",
//     },
//     {
//       articleImg: anxiousWoman,
//       title: "What Are the Symptoms of Social Anxiety?",
//       author: "Courtney Telloian",
//       tag: "Anxiety",
//       content:
//         "Full content of 'What Are the Symptoms of Social Anxiety?' article goes here...",
//     },
//     {
//       articleImg: depressedMan,
//       title: "Is Depression a Disability?",
//       author: "Julia Childs Heyl, MSW",
//       tag: "Depression",
//       content:
//         "Full content of 'Is Depression a Disability?' article goes here...",
//     },
//   ];

//   const relatedArticles = [
//     {
//       articleImg: articlePic,
//       title: "How I was able to fight my depression of 10 years now",
//       description:
//         "For a decade, I lived in the shadow of depression. It was a constant companion, sapping my energy, motivation, and joy.",
//       content:
//         "Full content of 'How I was able to fight my depression of 10 years now' article goes here...",
//     },
//     {
//       articleImg: cryingWoman,
//       title: "How depression ruined my live",
//       description:
//         "Depression affected my life in ways i coudnt imagine possible, starting with my career and then my marriage life and eventually my general well being",
//       content:
//         "Full content of 'How I was able to fight my depression of 10 years now' article goes here...",
//     },
//   ];

//   return (
//     <>
//       {!selectedArticle && (
//         <section className="articleResource-cont mb-4 grid grid-cols-1 md:grid-cols-[2fr_1fr] auto-rows-auto gap-3 lg:gap-5 xl:gap-7">
//           {/* FEATURED ARTICLE SECTION */}
//           <section className="articleFeature-section mt-2 lg:mt-0">
//             <div className="flex flex-col-reverse lg:flex-row lg:items-end border border-[#7e7e7e] bg-[#303030] rounded-[11px] h-fit lg:h-[21.313rem]">
//               <div className="mx-4 mt-10 flex flex-col gap-3 mb-[1.5rem] lg:w-[50%] lg:mx-0 lg:ml-3 xl:ml-5">
//                 <span className="text-[#c7c7c7] text-sm font-semibold">
//                   Featured
//                 </span>
//                 <h3 className="text-[#fefefe] text-xl lg:text-2xl xl:text-3xl tracking-wide font-bold">
//                   {featuredArticle.title}
//                 </h3>
//                 <p className="text-[#a3a3a3] text-[10px] lg:text-[8px] xl:text-[10px] tracking-wide">
//                   By {featuredArticle.author} | {featuredArticle.date}
//                 </p>
//                 <button
//                   className="text-serene text-[11px] text-center border border-serene font-medium px-[14px] py-[8.24px] rounded-[2.75px] w-[25%] mt-5"
//                   onClick={() => handleReadMore(featuredArticle)}
//                 >
//                   Read
//                 </button>
//               </div>
//               <img
//                 src={articleFeaturedPic}
//                 alt=""
//                 className="w-full h-[134px] lg:w-[50%] lg:h-[21.313rem] rounded-t-[11px] lg:rounded-t-[0px] lg:rounded-r-[11px]"
//               />
//             </div>
//           </section>

//           {/* TRENDING ARTICLES SECTION */}
//           <section className="">
//             <h2 className="text-white text-lg lg:text-xl text-opacity-80 font-bold">
//               Trending
//             </h2>

//             {trendingArticles.map((article, index) => (
//               <SmallArticleCard
//                 key={index}
//                 articlePreviewImg={article.articleImg}
//                 articleTag={article.tag}
//                 articleTitle={article.title}
//                 articleAuthor={article.author}
//                 onClick={() => handleReadMore(article)}
//               />
//             ))}
//           </section>

//           {/* RELATED ARTICLES SECTION */}
//           <section className="md:col-span-2">
//             <div className="flex justify-between items-center">
//               <h2 className="text-white font-semibold xl:text-lg">
//                 Related Articles
//               </h2>
//               <div className="filter-dropdown border border-red-100 flex items-center rounded-xl w-[4rem] justify-around py-[.1rem]">
//                 <img src={filterIcon} alt="" className="size-4" />
//                 <input
//                   type="text"
//                   placeholder="All"
//                   id="filter"
//                   className="outline-none text-xs bg-transparent w-4 font-medium box-border"
//                 />
//                 <img src={arrowDown} alt="" className="size-4" />
//               </div>
//             </div>

//             <div className="flex flex-col lg:mt-5">
//               {relatedArticles.map((article, index) => (
//                 <ArticleCard
//                   articleImg={article.articleImg}
//                   key={index}
//                   articleTitle={article.title}
//                   articleDescription={article.description}
//                   onClick={() => handleReadMore(article)}
//                 />
//               ))}
//             </div>
//           </section>
//         </section>
//       )}

//       {/* WHEN ARTICLE IS SELECTED */}
//       {selectedArticle && (
//         <ArticleContent
//           article={selectedArticle}
//           onBack={() => setSelectedArticle(null)}
//         />
//       )}
//     </>
//   );
// };

// export default ArticleSection;



import {
  articleFeaturedPic,
  filterIcon,
  arrowDown,
  smallArticleCardPic,
  cryingWoman,
  articlePic,
  depressedMan,
  anxiousWoman, articleContentPic
} from "@/assets";
import SmallArticleCard from "./SmallArticleCard";
import ArticleCard from "./ArticleCard";
import ArticleContent from "./ArticleContent";

const ArticleSection = ({ selectedArticle, setSelectedArticle }) => {
  //* function to call when you want to display the article content UI
  const handleReadMore = (article) => {
    setSelectedArticle(article);
  };

  const featuredArticle = {
    title: "What Are Mental Disorders?",
    description: "An article that explores various mental disorders.",
    author: "Kendra Cherry, MSEd",
    date: "Updated on February 17, 2022",
    content: "Full content of 'What Are Mental Disorders?' article goes here...",
    image: articleFeaturedPic,
  };

  const trendingArticles = [
    {
      articleImg: articleContentPic,
      title: "Should I Tell My Partner What Happens in Therapy?",
      author: "Sanjana Gupta",
      tag: "Family issues",
      content: "Full content of 'Should I Tell My Partner What Happens in Therapy?' article goes here...",
      image: smallArticleCardPic,
    },
    {
      articleImg: anxiousWoman,
      title: "What Are the Symptoms of Social Anxiety?",
      author: "Courtney Telloian",
      tag: "Anxiety",
      content: "Full content of 'What Are the Symptoms of Social Anxiety?' article goes here...",
      image: anxiousWoman,
    },
    {
      articleImg: depressedMan,
      title: "Is Depression a Disability?",
      author: "Julia Childs Heyl, MSW",
      tag: "Depression",
      content: "Full content of 'Is Depression a Disability?' article goes here...",
      image: depressedMan,
    },
  ];

  const relatedArticles = [
    {
      articleImg: articlePic,
      title: "How I was able to fight my depression of 10 years now",
      description: "For a decade, I lived in the shadow of depression. It was a constant companion, sapping my energy, motivation, and joy.",
      content: "Full content of 'How I was able to fight my depression of 10 years now' article goes here...",
      image: articlePic,
    },
    {
      articleImg: cryingWoman,
      title: "How depression ruined my life",
      description: "Depression affected my life in ways I couldn't imagine possible, starting with my career and then my marriage life and eventually my general well-being",
      content: "Full content of 'How depression ruined my life' article goes here...",
      image: cryingWoman,
    },
  ];

  return (
    <>
      {!selectedArticle && (
        <section className="articleResource-cont mb-4 grid grid-cols-1 md:grid-cols-[2fr_1fr] auto-rows-auto gap-3 lg:gap-5 xl:gap-7">
          {/* FEATURED ARTICLE SECTION */}
          <section className="articleFeature-section mt-2 lg:mt-0">
            <div className="flex flex-col-reverse lg:flex-row lg:items-end border border-[#7e7e7e] bg-[#303030] rounded-[11px] h-fit lg:h-[21.313rem]">
              <div className="mx-4 mt-10 flex flex-col gap-3 mb-[1.5rem] lg:w-[50%] lg:mx-0 lg:ml-3 xl:ml-5">
                <span className="text-[#c7c7c7] text-sm font-semibold">
                  Featured
                </span>
                <h3 className="text-[#fefefe] text-xl lg:text-2xl xl:text-3xl tracking-wide font-bold">
                  {featuredArticle.title}
                </h3>
                <p className="text-[#a3a3a3] text-[10px] lg:text-[8px] xl:text-[10px] tracking-wide">
                  By {featuredArticle.author} | {featuredArticle.date}
                </p>
                <button
                  className="text-serene text-[11px] text-center border border-serene font-medium px-[14px] py-[8.24px] rounded-[2.75px] w-[25%] mt-5"
                  onClick={() => handleReadMore(featuredArticle)}
                >
                  Read
                </button>
              </div>
              <img
                src={articleFeaturedPic}
                alt=""
                className="w-full h-[134px] lg:w-[50%] lg:h-[21.313rem] rounded-t-[11px] lg:rounded-t-[0px] lg:rounded-r-[11px]"
              />
            </div>
          </section>

          {/* TRENDING ARTICLES SECTION */}
          <section className="">
            <h2 className="text-white text-lg lg:text-xl text-opacity-80 font-bold">
              Trending
            </h2>

            {trendingArticles.map((article, index) => (
              <SmallArticleCard
                key={index}
                articlePreviewImg={article.articleImg}
                articleTag={article.tag}
                articleTitle={article.title}
                articleAuthor={article.author}
                onClick={() => handleReadMore(article)}
              />
            ))}
          </section>

          {/* RELATED ARTICLES SECTION */}
          <section className="md:col-span-2">
            <div className="flex justify-between items-center">
              <h2 className="text-white font-semibold xl:text-lg">
                Related Articles
              </h2>
              <div className="filter-dropdown border border-red-100 flex items-center rounded-xl w-[4rem] justify-around py-[.1rem]">
                <img src={filterIcon} alt="" className="size-4" />
                <input
                  type="text"
                  placeholder="All"
                  id="filter"
                  className="outline-none text-xs bg-transparent w-4 font-medium box-border"
                />
                <img src={arrowDown} alt="" className="size-4" />
              </div>
            </div>

            <div className="flex flex-col lg:mt-5">
              {relatedArticles.map((article, index) => (
                <ArticleCard
                  articleImg={article.articleImg}
                  key={index}
                  articleTitle={article.title}
                  articleDescription={article.description}
                  onClick={() => handleReadMore(article)}
                />
              ))}
            </div>
          </section>
        </section>
      )}

      {/* WHEN ARTICLE IS SELECTED */}
      {selectedArticle && (
        <ArticleContent
          article={selectedArticle}
          onBack={() => setSelectedArticle(null)}
        />
      )}
    </>
  );
};

export default ArticleSection;
