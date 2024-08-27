import { arrowRight, articlePic } from "@/assets";

const ArticleCard = ({articleTitle, articleDescription}) => {
    return ( 
        <article className="border-b-[.05rem] border-b-[#505050] flex flex-col md:items-center md:flex-row gap-4 mt-5 pb-5 ">
            <img src={articlePic} alt="" className="md:w-32 md:h-28 w-auto h-36 " />

            <div className="article-info md:pr-32 flex flex-col gap-2">
                <h4 className="font-semibold text-white text-sm md:text-base xl:text-lg ">{articleTitle}</h4>
                <p className="text-serene-gray font-medium text-[.82rem] md:text-sm leading-6 xl:text-base ">{articleDescription}</p>
                <button className="border border-1 border-serene rounded-sm text-serene font-medium text-xs flex items-center px-2 py-1 w-[6.5rem] xl:w-[7.5rem] mt-1 xl:text-sm ">
                    Read more 
                    <img src={arrowRight} alt="" className="inline-block ml-3 w-4" />
                </button>
            </div>
        </article>
     );
}
 
export default ArticleCard;