import { experience, about, lang } from "@/assets";


//======================================= Experience Details ================================

export default function ExperienceDetails ({ years, ageRange, language }) {
  return (
    <section className="flex flex-col mt-10 max-w-full w-[42rem]">
      <hr className="w-full border border-solid border-white border-opacity-10 min-h-[1px] max-md:max-w-full" />
      <div className="flex flex-wrap gap-8 items-start mt-8 max-w-full w-[35.6875rem]">
        <div className="flex flex-col grow shrink w-[11.875rem]">
          <h3 className="flex gap-1.5 items-end w-full font-semibold tracking-wide leading-none text-stone-300">
            <img
              loading="lazy"
              src={experience}
              alt=""
              className="object-contain shrink-0 w-6 aspect-square"
            />
            Years Of Experience
          </h3>
          <p className="mt-4 tracking-wide font-[450] text-white text-opacity-90">
            {years} years
          </p>
        </div>
        <div className="flex flex-col grow shrink w-[6.375rem]">
          <h3 className="flex gap-1.5 items-end w-full font-semibold tracking-wide leading-none text-stone-300">
            <img
              loading="lazy"
              src={about}
              alt=""
              className="object-contain shrink-0 w-6 aspect-square"
            />
            Age range
          </h3>
          <p className="mt-4 tracking-wide font-[450] text-white text-opacity-90">
            {ageRange}
          </p>
        </div>
        <div className="flex flex-col grow shrink whitespace-nowrap w-[6.125rem]">
          <h3 className="flex gap-1.5 items-end w-full font-semibold tracking-wide leading-none text-stone-300">
            <img
              loading="lazy"
              src={lang}
              alt=""
              className="object-contain shrink-0 w-6 aspect-square"
            />
            Language
          </h3>
          <span className="gap-0 self-start px-3.5 py-px mt-4 tracking-wide text-white rounded-xl bg-zinc-600 font-[450]">
            {language}
          </span>
        </div>
      </div>
      <hr className="mt-8 w-full border border-solid border-white border-opacity-10 min-h-[1px] max-md:max-w-full" />
    </section>
  );
};