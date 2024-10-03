import { starRating } from "@/assets";


const TherapistLanding = ({ animation, therapistImg }) => {
  return (
    <>

      <div className="">
        <article {...animation}  
          className="bg-[#3e3e3e] border-[.125rem] lg:border-[.1875rem] border-[#565656]  xl:w-full h-[29.18rem] rounded-2xl text-white text-opacity-90 flex flex-col items-center justify-center gap-3 relative min-w-[18.75rem]  ">
                <img src={therapistImg} alt="therapist image"  className=" size-36 lg:size-44 rounded-full " />
                <h2 className="font-semibold text-2xl lg:text-[2rem] mt-5"> Mary-Ann Okoli</h2>
                <p className="text-lg lg:text-2xl  ">Clinical Psychologist</p>
                <p className=" text-lg lg:text-2xl flex items-center gap-2 ">
                  <img src={starRating} alt="therapist star rating" className=" w-36 h-7 lg:w-44 lg:h-7  " />
                  (4.2)
                </p>
                <div className="bg-[#636378] text-[#cbe6ff] text-lg lg:text-xl font-semibold px-4 py-1 rounded-3xl absolute top-0 left-10 mt-[-1rem] ">Recommended</div>
              </article>
      </div>
      
    </>
  )
}

export default TherapistLanding;
