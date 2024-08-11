import { articlePic, arrowRight} from "@/assets";

const ArticleCard = ({articleTitle, articleDescription}) => {
    return ( 
        <article className="border-b-[.05rem] border-b-[#505050] flex items-center gap-4 mt-5 pb-5">
            <img src={articlePic} alt="" className="w-32 h-28" />

            <div className="article-info pr-32 flex flex-col gap-2">
                <h4 className="font-semibold text-white text-base">{articleTitle}</h4>
                <p className="text-serene-gray font-medium text-sm leading-6">{articleDescription}</p>
                <button className="border border-1 border-serene rounded-sm text-serene font-medium text-xs px-2 py-1 w-[7rem] mt-1">
                    Read more 
                    <img src={arrowRight} alt="" className="inline-block ml-5 w-4" />
                </button>
            </div>
        </article>
     );
}
 
export default ArticleCard;