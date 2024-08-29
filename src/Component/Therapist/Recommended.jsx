import { Badge } from "../ui/badge";
import StarRating from "../ui/StarRating";

const Recommended = ({name,about,ratings,expertise,type,experience,highest,image}) =>{
   
    return (
      <section className="flex gap-10 mt-10 w-full ">
        <article className="flex flex-col items-center  shrink min-w-[15rem] w-[12.875rem]">
          {/* Therapist Image Section */}
          <div className="flex flex-col px-12 py-7 w-full rounded-xl border border-solid border-neutral-600 max-md:px-5">
            <img
              loading="lazy"
              src={image}
              alt="Mary-Ann Okoli"
              className="object-contain self-center max-w-full rounded-full aspect-square w-[6.8125rem]"
            />

            {/* Therapist Information Section */}
            <div className="flex flex-col items-center mt-5 ">
              <div className="flex flex-col items-center w-full tracking-normal text-center text-white text-opacity-90">
                <h2 className="text-lg font-semibold ">{name}</h2>
                <p className="mt-2 text-base font-[450]">{type}</p>
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
            <button className="bg-serene mt-5 mb-10 px-2 w-40 rounded-md py-2">
              <span className="self-stretch px-1 my-auto ">
                Choose Therapist
              </span>
            </button>
          )}
        </article>
        <article className="mt-10">
          {/* Header Section */}
          <header className="flex flex-col w-full text-base max-md:max-w-full">
            <div className="flex flex-col w-full max-md:max-w-full">
              <h1 className="flex items-center gap-1.5  self-start font-[550] tracking-wide leading-none text-white text-opacity-90">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/2319626a188fe57f38de4336704c24fd752817ca8ab3df6ca00b6fc203f49bca?apiKey=bc155cd4463f4c48a216b01c1991193c&"
                  alt=""
                  className="object-contain shrink-0 w-6 aspect-square"
                />
                ABOUT THERAPIST
              </h1>
              <p className=" mt-4 tracking-wide leading-6 font-[450] text-serene-gray text-base max-md:max-w-full max-sm:ml-1.5 opacity-70">
                {about}
              </p>
            </div>

            {/* Info Cards Section: Experience, Age Range, and Language */}
            {highest && (
              <section className="flex flex-wrap  items-start py-3 mt-8 max-w-full  border-b border-t border-[#FFFFFF] border-opacity-20 ">
                <div className="flex flex-wrap flex-1 shrink gap-20  items-start w-full basis-0 min-w-[15rem] max-md:max-w-full">
                  {/* InfoCard 1: Years Of Experience */}
                  <div className="flex flex-col">
                    <div className="flex gap-1.5 items-end font-semibold tracking-wide leading-none text-neutral-400">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1bd4b7d58e5dc97b3a17e701e00472d27d1e0d23213e7cb95cc5e7c93ab85d57?apiKey=bc155cd4463f4c48a216b01c1991193c&"
                        alt=""
                        className="object-contain shrink-0 w-6 aspect-square"
                      />
                      <div>Years Of Experience</div>
                    </div>
                    <div className="mt-4 tracking-wide font-[450] text-white text-opacity-90">
                      {experience} years
                    </div>
                  </div>

                  {/* InfoCard 2: Age Range */}
                  <div className="flex flex-col">
                    <div className="flex gap-1.5 items-end font-semibold tracking-wide leading-none text-neutral-400">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed2206d9a006ddac39a23aee954db2135801e073400a2817cfbfb1ddbb4baf30?apiKey=bc155cd4463f4c48a216b01c1991193c&"
                        alt=""
                        className="object-contain shrink-0 w-6 aspect-square"
                      />
                      <div>Age Range</div>
                    </div>
                    <div className="mt-4 tracking-wide font-[450] text-white text-opacity-90">
                      25-40 years
                    </div>
                  </div>

                  {/* InfoCard 3: Language */}
                  <div className="flex flex-col">
                    <div className="flex gap-1.5 items-end font-semibold tracking-wide leading-none text-neutral-400">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a9542f682a5358a22d1b79675b9c9a21821215d4fd4afa340e41e4e84321ceb?apiKey=bc155cd4463f4c48a216b01c1991193c&"
                        alt=""
                        className="object-contain shrink-0 w-6 aspect-square"
                      />
                      <div>Language</div>
                    </div>
                    <div className="gap-0 self-start px-3.5 py-px mt-4 tracking-wide text-white rounded-xl bg-zinc-600 font-[450]">
                      English
                    </div>
                  </div>
                </div>
              </section>
            )}
          </header>

          {/* Expertise Section: Therapist's Specialties */}
          {highest ? (
            <section className="flex flex-col mt-7 mb-3 max-w-full tracking-wide w-[39.5625rem]">
              <h2 className="gap-1.5 w-full text-base font-semibold leading-none whitespace-nowrap text-stone-300 max-md:max-w-full">
                EXPERTISE
              </h2>
              <div className="flex flex-wrap gap-6 items-center mt-4 w-full text-sm leading-none font-[450] max-w-[39.5625rem] text-neutral-950 max-md:max-w-full ">
                {/* ExpertiseTag 1: Depression */}
                <Badge variant="first">{expertise[0]}</Badge>

                {/* ExpertiseTag 2: Anxiety */}
                <Badge variant="second"> {expertise[1]}</Badge>
                {/* ExpertiseTag 3: Addiction */}
                <Badge variant="third"> {expertise[2]}</Badge>

                {/* ExpertiseTag 4: Low Self-Esteem */}
               
                <Badge variant="fourth"> {expertise[3]}</Badge>
              </div>
            </section>
          ) : (
            <button className="border-serene  rounded border flex justify-center gap-2 text-serene py-1 px-5 mt-10">
              <span>View Details</span>{" "}
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/25c1088774a80db31d4cde49c0d5db8daf40f6d091671b700f3497e6853af3f3?apiKey=bc155cd4463f4c48a216b01c1991193c&"
                alt=""
                className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
              />
            </button>
          )}
        </article>
      </section>
    );
}
export default Recommended