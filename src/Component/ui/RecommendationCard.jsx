const RecommendationCard = ({img, imgCaption, recommendedText, children}) => {
    return ( 
        <>
            <div className="recommendation-cont rounded-[.73rem] mt-7 md:bg-[#272727] md:flex md:flex-col md:p-4 md:h-[auto] lg:mt-0 lg:px-4 xl:p-8 ">
                <figure className="recommendation-cont-figure flex flex-col items-center justify-center text-center rounded-[.73rem]">
                    <img src={img} alt="Illustration" className=" mt-6 w-16 h-16 " />
                    <figcaption className="text-serene-gray font-medium tracking-normal text-base mt-5 px-16 md:text-sm md:px-6">{imgCaption}</figcaption>
                </figure>

                <div className="recommended-card flex justify-between items-center md:mt-8  ">
                    <h4 className="text-white md:text-[.81rem] font-semibold text-[.9rem] ">{recommendedText}</h4> 
                    <button className="text-serene-gray font-medium text-xs">See all</button>
                </div>

                <main className="lg:mt-5  lg:grid lg:grid-cols-2  xl:grid xl:grid-cols-[1fr_1fr] lg:auto-rows-auto lg:place-items-center lg:place-content-center lg:gap-[.6rem] flex flex-row items-center mt-2">{children}</main>
            </div>
        </>
     );
}
 
export default RecommendationCard;