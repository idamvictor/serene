import { useNavigate } from "react-router-dom";

const RecommendationCard = ({img, imgCaption, recommendedText, children}) => {
    const navigate = useNavigate()

    const handleOnclick = ()=>{
        navigate("/therapists");
    }
    return ( 
        <>
            <div className="recommendation-cont rounded-[.73rem] mt-7 md:bg-[#272727] md:flex md:flex-col md:p-4 md:h-auto lg:h-[427.44px] lg:mt-0 lg:px-4 xl:py-8 xl:px-5 xl:h-auto ">
                <figure className="recommendation-cont-figure flex flex-col items-center justify-center text-center rounded-[.73rem]">
                    <img src={img} alt="Illustration" className=" mt-6 w-16 h-16 " />
                    <figcaption className="text-serene-gray font-medium tracking-normal text-base mt-5 px-16 md:text-sm md:px-6 xl:text-[.95rem] xl:w-[70%] ">{imgCaption}</figcaption>
                </figure>

                <div className="recommended-card flex justify-between items-center md:mt-8  ">
                    <h4 className="text-white md:text-[.81rem] font-semibold text-[.92rem] ">{recommendedText}</h4> 
                    <button 
                    onClick={handleOnclick}
                    className="text-serene-gray font-medium text-xs">See all</button>
                </div>

                <main className=" flex flex-row items-center mt-2 lg:mt-5 lg:grid lg:grid-cols-2 lg:auto-rows-auto lg:place-items-center lg:place-content-center lg:gap-[.6rem] ">{children}</main>
            </div>
        </>
     );
}
 
export default RecommendationCard;