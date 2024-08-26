import React, { useState } from "react";
import Layout from "@/Component/Shared/Layout";
import StarRating from "@/Component/ui/StarRating";

const Therapists = () => {
  const [activeTab, setActiveTab] = useState("Recommended");

  return (
    <Layout>
      
      <div className="p-8 pt-28">
        <header className="">
          <h1 className="text-4xl font-bold tracking-wide leading-none text-white max-md:max-w-full">
            Therapists
          </h1>
        </header>

        <RecommendationTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="mt-8">
          {activeTab === "Recommended" ? (
            <div>
              {/* Content for Recommended Therapists */}
              {/* <p>Here are the recommended therapists...</p> */}
              <RecommendedTherapistHeader />

              <div className="flex gap-10">
                {/* Therapist Card */}
                <TherapistCard showButton={true} />
                {/* Psychologist Profile */}
                <PsychologistProfile />{" "}
              </div>

              {/* Other Recommendation  */}
              <section>
                <h2 className="my-auto text-2xl tracking-wide leading-none font-[450] text-white text-opacity-90 w-[19.125rem]">
                  Other Recommendation{" "}
                </h2>

                <div className="flex gap-10">
                  <TherapistCard />
                  <AboutPsychologist />
                </div>
                <div className="flex gap-10">
                  <TherapistCard />
                  <AboutPsychologist />
                </div>
              </section>
            </div>
          ) : (
            <div>
              {/* Content for All Therapists */}
              <p>Here is the list of all therapists...</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Therapists;

//========================== Recommendation Tabs ===================

const RecommendationTabs = ({ activeTab, setActiveTab }) => {
  const baseClasses =
    "gap-2.5 self-stretch px-24 py-2 my-auto rounded-lg min-w-[15rem] max-md:px-5";
  const activeClasses =
    "font-semibold whitespace-nowrap bg-yellow-300 text-zinc-900";
  const inactiveClasses = "bg-stone-900 font-[450] text-stone-300";

  return (
    <nav className="flex flex-wrap gap-8 items-center mt-11 max-w-full text-base tracking-wide leading-none w-[40.125rem] max-md:mt-10">
      <button
        className={`${baseClasses} ${
          activeTab === "Recommended" ? activeClasses : inactiveClasses
        }`}
        aria-pressed={activeTab === "Recommended"}
        onClick={() => setActiveTab("Recommended")}
      >
        Recommended
      </button>
      <button
        className={`${baseClasses} ${
          activeTab === "All Therapists" ? activeClasses : inactiveClasses
        }`}
        aria-pressed={activeTab === "All Therapists"}
        onClick={() => setActiveTab("All Therapists")}
      >
        All Therapists
      </button>
    </nav>
  );
};

//================================ RecommendedTherapistHeader ==========================
function RecommendedTherapistHeader() {
  return (
    <section className="flex flex-wrap gap-10 justify-between items-end max-w-full w-[68.375rem]">
      <h2 className="my-auto text-2xl tracking-wide leading-none font-[450] text-white text-opacity-90 w-[19.125rem]">
        Recommended Therapist
      </h2>
      <div className="flex gap-2 items-center text-base font-medium tracking-wide text-white">
        <button className="flex overflow-hidden justify-center items-center self-stretch px-6 py-2.5 my-auto rounded-md border border-solid border-neutral-400 min-h-[2.5625rem] max-md:px-5">
          <span className="self-stretch px-2 my-auto">Edit Preference</span>
        </button>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a52548808558c9835dd6da9bff9caf2ae7baddebb4b03f0ac5c10b6b54baca34?apiKey=bc155cd4463f4c48a216b01c1991193c&"
          className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
          alt="Information icon"
        />
      </div>
    </section>
  );
}

//=========================== Therapist Card =========================

function TherapistCard({ showButton }) {
  return (
    <article className="flex flex-col shrink min-w-[15rem] w-[12.875rem]">
      
      {/* Therapist Image Section */}
      <div className="flex flex-col px-12 py-7 w-full rounded-xl border border-solid border-neutral-600 max-md:px-5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a239d0babd3a1049bd1c592c551e3bb57ebbe1d2529a843e20de4798e4efdae?apiKey=bc155cd4463f4c48a216b01c1991193c&"
          alt="Mary-Ann Okoli"
          className="object-contain self-center max-w-full rounded-full aspect-square w-[6.8125rem]"
        />

        {/* Therapist Information Section */}
        <div className="flex flex-col mt-6 w-full">
          <div className="flex flex-col items-start w-full tracking-normal text-center text-white text-opacity-90">
            <h2 className="text-xl font-semibold leading-tight">
              Mary-Ann Okoli
            </h2>
            <p className="mt-2 text-base font-[450]">Clinical psychologist</p>
          </div>

          {/* Star Rating Section */}
          <div className="flex gap-2.5 items-center mt-4 w-full">
            <div className="flex gap-2 items-center self-stretch my-auto">
              <StarRating rating="4" />
            </div>

            {/* Star Rating Text */}
            <div className="self-stretch my-auto text-base font-medium tracking-normal text-center text-white">
              (4.2)
            </div>
          </div>
        </div>
      </div>

      {/* Conditionally Render Choose Therapist Button */}
      {showButton && (
        <button className="flex overflow-hidden justify-center items-center self-center px-3 py-2 mt-8 max-w-full text-sm font-medium tracking-normal leading-none bg-yellow-300 rounded text-neutral-950 w-[11.5625rem]">
          <span className="self-stretch px-1 my-auto">Choose Therapist</span>
        </button>
      )}
    </article>
  );
}

// ================================ Phsychologist Profile ======================

function PsychologistProfile() {
  return (
    <article className="flex flex-col grow shrink min-w-[15rem] w-[48.375rem] max-md:max-w-full">
      {/* Header Section: Introduction and Description */}
      <header className="flex flex-col w-full text-base max-md:max-w-full">
        <div className="flex flex-col w-full max-md:max-w-full">
          <h1 className="flex gap-1.5 items-end self-start font-semibold tracking-wide leading-none text-white text-opacity-90">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2319626a188fe57f38de4336704c24fd752817ca8ab3df6ca00b6fc203f49bca?apiKey=bc155cd4463f4c48a216b01c1991193c&"
              alt=""
              className="object-contain shrink-0 w-6 aspect-square"
            />
            ABOUT PSYCHOLOGIST
          </h1>
          <p className="mt-4 tracking-wide leading-6 font-[450] text-stone-300 max-md:max-w-full max-sm:ml-1.5">
            I'm Dr. Ava Mitchell, and I'm here to offer a compassionate and
            supportive space for you. With expertise in cognitive-behavioral
            therapy (CBT) and mindfulness, I focus on helping you navigate
            anxiety, depression, and life transitions. My goal is to provide
            practical strategies and empathetic guidance as we work together to
            understand your unique challenges and build a path toward healing
            and personal growth. Your well-being is my priority, and I'm
            committed to supporting you every step of the way.
          </p>
        </div>

        {/* Info Cards Section: Experience, Age Range, and Language */}
        <section className="flex flex-wrap gap-4 items-start px-4 mt-8 max-w-full w-[38.1875rem]">
          <div className="flex flex-wrap flex-1 shrink gap-16 justify-between items-start w-full basis-0 min-w-[15rem] max-md:max-w-full">
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
                4 years
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
      </header>

      {/* Expertise Section: Therapist's Specialties */}
      <section className="flex flex-col mt-10 max-w-full tracking-wide w-[39.5625rem]">
        <h2 className="gap-1.5 w-full text-base font-semibold leading-none whitespace-nowrap text-stone-300 max-md:max-w-full">
          EXPERTISE
        </h2>
        <div className="flex flex-wrap gap-6 items-center mt-4 w-full text-sm leading-none font-[450] max-w-[39.5625rem] text-neutral-950 max-md:max-w-full">
          {/* ExpertiseTag 1: Depression */}
          <div className="gap-2 self-stretch px-3 py-1.5 my-auto whitespace-nowrap bg-yellow-300 rounded-3xl">
            Depression
          </div>

          {/* ExpertiseTag 2: Anxiety */}
          <div className="gap-2 self-stretch px-3 py-1.5 my-auto whitespace-nowrap bg-violet-200 rounded-3xl">
            Anxiety
          </div>

          {/* ExpertiseTag 3: Addiction */}
          <div className="gap-2 self-stretch px-3 py-1.5 my-auto whitespace-nowrap bg-stone-200 rounded-3xl">
            Addiction
          </div>

          {/* ExpertiseTag 4: Low Self-Esteem */}
          <div className="gap-2 self-stretch px-3 py-1.5 my-auto whitespace-nowrap bg-blue-200 rounded-3xl">
            Low Self-Esteem
          </div>
        </div>
      </section>
    </article>
  );
}

// ============================= About Psychologist ========================

function AboutPsychologist() {
  return (
    <section className="flex flex-col grow shrink self-stretch my-auto min-w-[15rem] w-[48.375rem] max-md:max-w-full">
      {/* Header Section: Title and Icon */}
      <header className="flex gap-1.5 items-end self-start font-semibold tracking-wide leading-none text-white text-opacity-90">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1007e65daa9e7010e96f0f566f506969834bd4340caa430c4c497a2c2d02a5fa?apiKey=bc155cd4463f4c48a216b01c1991193c&"
          alt=""
          className="object-contain shrink-0 w-6 aspect-square"
        />
        <h2>ABOUT PSYCHOLOGIST</h2>
      </header>

      {/* Description Section: Psychologist's Introduction */}
      <p className="mt-4 tracking-wide leading-6 font-[450] text-neutral-400 max-md:max-w-full">
        I'm Dr. Ava Mitchell, and I'm here to offer a compassionate and
        supportive space for you. With expertise in cognitive-behavioral therapy
        (CBT) and mindfulness, I focus on helping you navigate anxiety,
        depression, and life transitions. My goal is to provide practical
        strategies and empathetic guidance as we work together to understand
        your unique challenges and build a path toward healing and personal
        growth. Your well-being is my priority, and I'm committed to.
      </p>

      {/* View Details Button: Button to View More Information */}
      <button className="flex overflow-hidden gap-2 justify-center items-center self-start px-3 py-2 text-sm font-medium tracking-normal leading-none text-yellow-300 rounded border border-yellow-300 border-solid bg-white bg-opacity-0">
        <span className="self-stretch px-1 my-auto">View Details</span>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/25c1088774a80db31d4cde49c0d5db8daf40f6d091671b700f3497e6853af3f3?apiKey=bc155cd4463f4c48a216b01c1991193c&"
          alt=""
          className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
        />
      </button>
    </section>
  );
}
