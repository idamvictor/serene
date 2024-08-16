const RecommendationCard = ({img, imgCaption, recommendedText, children}) => {
    return ( 
        <>
            <div className="recommendation-cont md:bg-[#272727] md:flex md:flex-col md:p-8 md:rounded-[.73rem] md:h-[auto] ">
                <figure className="recommendation-cont-figure flex flex-col items-center justify-center text-center">
                    <img src={img} alt="Illustration" className=" mt-6 w-16 h-16 " />
                    <figcaption className="text-serene-gray font-medium tracking-normal text-base mt-5 px-16 ">{imgCaption}</figcaption>
                </figure>

                <div className="flex justify-between items-center mt-8">
                    <h4 className="text-white text-[.81rem] font-semibold ">{recommendedText}</h4> 
                    <button className="text-serene-gray font-medium text-xs">See all</button>
                </div>

                <main className="md:mt-5 md:grid md:grid-cols-[1fr_1fr] md:auto-rows-auto md:place-items-center md:place-content-center md:gap-[.6rem] flex  ">{children}</main>
            </div>
        </>
     );
}
 
export default RecommendationCard;