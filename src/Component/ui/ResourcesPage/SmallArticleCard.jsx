import Badges from "@/Component/ui/Badges";

const SmallArticleCard = ({ articlePreviewImg, articleTag, articleTitle, articleAuthor, onClick, landingStyling }) => {
  return (
    <>
      <article 
        className={`smallVideo-card-cont flex items-center gap-1 mt-3 cursor-pointer ${landingStyling} `} 
        onClick={onClick}
      >
        <div className="w-[7.4375rem] overflow-hidden rounded-[.1875rem] flex flex-col items-end justify-end">
          <img src={articlePreviewImg} alt="" className="size-full relative" />
        </div>

        <div className="">
          <Badges styling={`bg-serene-gray px-[.4575rem] py-[.1906rem] mb-1 `}>{articleTag}</Badges> 

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

          <p className="text-[#c7c7c7] text-[.6875rem] text-xs mt-1">By {articleAuthor}</p>
        </div>
      </article>  
    </>
  );
}

export default SmallArticleCard;
