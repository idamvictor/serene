import StarRating from "../ui/StarRating";
import { useNavigate } from "react-router-dom";
import About from "./About";
import Expertise from "./Expertise";
const Recommended = ({name,about,ratings,expertise,type,experience,highest,image,id}) =>{
   const navigate = useNavigate();
    return (
      <section className="flex flex-wrap md:flex-nowrap gap-10 mt-10 w-full ">
        <article className="flex flex-col items-center  shrink min-w-[15rem] w-[12.875rem]">
          {/* Therapist Image Section */}
          <div className="flex flex-col px-12 py-7 w-full rounded-xl border border-solid border-neutral-600 max-md:px-5">
            <img
              loading="lazy"
              src={image}
              alt="Therapist image"
              className="object-contain self-center max-w-full rounded-full aspect-square w-[6.8125rem]"
            />

            {/* Therapist Information Section */}
            <div className="flex flex-col items-center mt-5 ">
              <div className="flex flex-col items-center w-full tracking-normal text-center text-white text-opacity-90">
                <h2 className="text-lg font-semibold ">{name}</h2>
                <p className="mt-2 text-base font-[400]">{type}</p>
              </div>

              {/* Star Rating Section */}
              <div className="flex gap-2.5 items-center mt-4 w-full">
                <div className="flex gap-2 items-center self-stretch my-auto">
                  <StarRating rating={ratings} />
                </div>

                {/* Star Rating Text */}
                <div className="self-stretch my-auto text-base font-medium tracking-normal text-center text-white">
                  (4.2)
                </div>
              </div>
            </div>
          </div>

          {/* Conditionally Render Choose Therapist Button */}
          {highest && (
            <button
              className="bg-serene mt-5 mb-10 px-2 w-40 rounded-md py-2"
              onClick={() => navigate(`/therapist/${id}`)}
            >
              <span className="self-stretch px-1 my-auto text-black ">
                Choose Therapist
              </span>
            </button>
          )}
        </article>
        <div>
          <About about={about} />
          {highest ? (
            <div>
              <Expertise experience={experience} expertise={expertise} />
              <h1 className="text-serene">Other Reccomendtion</h1>
            </div>
          ) : (
            <button
              onClick={() => navigate(`/therapist/${id}`)}
              className="border-serene rounded border flex justify-center gap-2 text-serene py-1 px-5 mt-10"
            >
              <span>View Details</span>{" "}
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/25c1088774a80db31d4cde49c0d5db8daf40f6d091671b700f3497e6853af3f3?apiKey=bc155cd4463f4c48a216b01c1991193c&"
                alt=""
                className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
              />
            </button>
          )}
        </div>
      </section>
    );
}
export default Recommended