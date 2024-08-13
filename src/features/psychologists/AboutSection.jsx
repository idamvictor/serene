import { about } from "@/assets";


//================================= About Section ============================

export default function AboutSection({ content }) {
  return (
    <section className="flex flex-col items-start mt-10 w-full max-md:max-w-full">
      <h2 className="flex gap-1.5 items-end self-start font-semibold tracking-wide leading-none text-white text-opacity-90">
        <img
          loading="lazy"
          src={about}
          alt=""
          className="object-contain shrink-0 w-6 aspect-square"
        />
        ABOUT PSYCHOLOGIST
      </h2>
      <p className="mt-4 tracking-wide leading-6 font-[450] text-stone-300 max-md:max-w-full">
        {content}
      </p>
    </section>
  );
}
