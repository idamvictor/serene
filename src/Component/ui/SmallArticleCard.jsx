
import Badges from "@/Component/ui/Badges";

const SmallArticleCard = ({articlePreviewImg, articleTag, articleTitle, articleAuthor}) => {
  return (
    <>
        <article className="smallVideo-card-cont flex items-center gap-1 mt-3 ">
            <div className="w-[119px] overflow-hidden rounded-[3px] flex flex-col items-end justify-end ">
                <img src={articlePreviewImg} alt="" className="size-full relative" />
            </div>

            <div className="">
                <Badges styling={`bg-serene-gray px-[7.32px] py-[3.05px] mb-1 `}>{articleTag}</Badges>

                <h3 
                    className="text-[#fefefe] font-semibold text-sm text-ellipsis overflow-hidden w-[12rem] xl:w-[15rem]"
                    style={{
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        display: '-webkit-box',
                    }}
                >
                    {articleTitle}
                </h3>

                <p className="text-[#c7c7c7] text-[11px] text-xs mt-1 ">By {articleAuthor}</p>
            
            </div>
        </article>  
    </>
  )
}

export default SmallArticleCard;