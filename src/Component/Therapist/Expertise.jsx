import { Badge } from "../ui/badge";

const Expertise = ({expertise,experience}) => { 
    return (
      <>
        {/* Info Cards Section: Experience, Age Range, and Language */}
        <section className="flex flex-wrap items-start py-3 mt-8 max-w-full border-b border-t border-[#FFFFFF] border-opacity-20">
          <div className="flex flex-wrap flex-1 shrink gap-20 items-start w-full basis-0 min-w-[15rem] max-md:max-w-full">
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

        {/* Expertise Section: Therapist's Specialties */}
        <section className="flex flex-col mt-7 mb-3 max-w-full tracking-wide w-[39.5625rem]">
          <h2 className="gap-1.5 w-full text-base font-semibold leading-none whitespace-nowrap text-stone-300 max-md:max-w-full">
            EXPERTISE
          </h2>
          <div className="flex flex-wrap gap-6 items-center mt-4 w-full text-sm leading-none font-[450] max-w-[39.5625rem] text-neutral-950 max-md:max-w-full">
            {/* ExpertiseTag 1: Depression */}
            <Badge variant="first">{expertise[0]}</Badge>

            {/* ExpertiseTag 2: Anxiety */}
            <Badge variant="second">{expertise[1]}</Badge>
            {/* ExpertiseTag 3: Addiction */}
            <Badge variant="third">{expertise[2]}</Badge>

            {/* ExpertiseTag 4: Low Self-Esteem */}
            <Badge variant="fourth">{expertise[3]}</Badge>
          </div>
        </section>
      </>
    );
}
export default Expertise