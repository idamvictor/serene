const RecommendationCard = ({img, imgCaption, recommendedText, children}) => {
    return ( 
        <>
            <div className="recommendation-cont row-span-2 col-span-1 bg-[#272727] flex flex-col p-8 rounded-lg  ">
                <figure className="flex-col text-center ">
                    <img src={img} alt="Illustration" className="mx-auto my-0 mt-6 w-16 h-16" />
                    <figcaption className="text-serene-gray font-medium tracking-normal text-[.8rem] px-16 mt-5">{imgCaption}</figcaption>
                </figure>

                <div className="flex justify-between items-center mt-8">
                    <h4 className="text-white text-xs font-semibold">{recommendedText}</h4> 
                    <button className="text-serene-gray font-medium text-xs">See all</button>
                </div>

                <main className="mt-5 grid grid-cols-[1fr_1fr] auto-rows-auto place-content-center gap-3">{children}</main>
            </div>
        </>
     );
}
 
export default RecommendationCard;