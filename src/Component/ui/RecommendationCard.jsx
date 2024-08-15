const RecommendationCard = ({img, imgCaption, recommendedText, children}) => {
    return ( 
        <>
            <div className="recommendation-cont bg-[#272727] flex flex-col p-8 rounded-[.73rem] h-[auto] ">
                <figure className="flex flex-col items-center justify-center text-center">
                    <img src={img} alt="Illustration" className=" mt-6 w-16 h-16 " />
                    <figcaption className="text-serene-gray font-medium tracking-normal text-base mt-5 px-16 ">{imgCaption}</figcaption>
                </figure>

                <div className="flex justify-between items-center mt-8">
                    <h4 className="text-white text-[.81rem] font-semibold ">{recommendedText}</h4> 
                    <button className="text-serene-gray font-medium text-xs">See all</button>
                </div>

                <main className="mt-5 grid grid-cols-[1fr_1fr] auto-rows-auto place-items-center place-content-center gap-[.6rem]">{children}</main>
            </div>
        </>
     );
}
 
export default RecommendationCard;