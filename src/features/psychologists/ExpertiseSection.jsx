//=========================================== Expertise Section ======================================

export default function ExpertiseSection({ expertiseAreas }) {
  const colorMap = {
    Depression: "bg-yellow-300",
    Anxiety: "bg-violet-200",
    Addiction: "bg-stone-200",
    "Low Self-Esteem": "bg-blue-200",
  };

  return (
    <section className="flex flex-col mt-10 max-w-full tracking-wide leading-none w-[39.5625rem]">
      <h2 className="gap-1.5 w-full font-semibold whitespace-nowrap text-stone-300 max-md:max-w-full">
        EXPERTISE
      </h2>
      <div className="flex flex-wrap gap-10 items-center mt-4 w-full max-w-[39.5625rem] text-neutral-950 max-md:max-w-full">
        {expertiseAreas.map((area) => (
          <span
            key={area}
            className={`gap-2.5 self-stretch px-4 py-2.5 my-auto whitespace-nowrap ${colorMap[area]} rounded-3xl`}
          >
            {area}
          </span>
        ))}
      </div>
    </section>
  );
}
