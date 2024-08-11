const RecommendationCard = ({img, imgCaption, recommendedText, children}) => {
    return ( 
        <>
            <div className="recommendation-cont h-auto w-[34rem] bg-[#272727] flex-col p-8 m-11">
                <figure className="flex-col text-center ">
                    <img src={img} alt="Illustration" className="mx-auto my-0 mt-6" />
                    <figcaption className="text-serene-gray font-medium leading-6 text-base px-32 mt-5">{imgCaption}</figcaption>
                </figure>

                <div className="flex justify-between items-center mt-8">
                    <h4 className="text-white text-sm font-semibold">{recommendedText}</h4> 
                    <button className="text-serene-gray font-medium text-xs">See all</button>
                </div>

                <main className="mt-5 grid grid-cols-[1fr_1fr] auto-rows-auto justify-items-center gap-3">{children}</main>
            </div>
        </>
     );
}
 
export default RecommendationCard;