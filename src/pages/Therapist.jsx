import { useState } from "react";
import Layout from "@/Component/Shared/Layout";
import { profilePhoto, headerImg } from "@/assets";
import ProfileHeader from "@/features/psychologists/ProfileHeader";
import NavigationTabs from "@/features/psychologists/NavigationTabs";
import AboutSection from "@/features/psychologists/AboutSection";
import ExperienceDetails from "@/features/psychologists/ExperienceDetails";
import ExpertiseSection from "@/features/psychologists/ExpertiseSection";
import StarRating from "@/Component/ui/StarRating";


export default function Therapist() {
  const [activeTab, setActiveTab] = useState("Overview");

  const profileData = {
    name: "Mary-Ann Okoli",
    title: "Clinical psychologist",
    rating: "4.2",
    avatarSrc: profilePhoto,
    coverSrc: headerImg,
    about:
      "I'm Dr. Ava Mitchell, and I'm here to offer a compassionate and supportive space for you. With expertise in cognitive-behavioral therapy (CBT) and mindfulness, I focus on helping you navigate anxiety, depression, and life transitions. My goal is to provide practical strategies and empathetic guidance as we work together to understand your unique challenges and build a path toward healing and personal growth. Your well-being is my priority, and I'm committed to supporting you every step of the way.",
    experience: {
      years: "4",
      ageRange: "25-40 years",
      language: "English",
    },
    expertiseAreas: ["Depression", "Anxiety", "Addiction", "Low Self-Esteem"],
  };

  return (
    <Layout>
      <main className="flex flex-col mt-11 mx-11">
        {/* <ProfileHeader
          name={profileData.name}
          title={profileData.title}
          rating={profileData.rating}
          avatarSrc={profileData.avatarSrc}
          coverSrc={profileData.coverSrc}
        /> */}    {/* TODO: DELETE  */}

        <ProfileHeader
          name={profileData.name}
          avatarSrc={profileData.avatarSrc}
          coverSrc={profileData.coverSrc}
          profileHeaderStyling={"max-w-full aspect-square w-[8.6875rem]"}
          profileCoverStyling={"aspect-[10] max-md:max-w-full"}
        >
          <div className="flex flex-col self-end mt-16 max-md:mt-10">
            <h1 className="text-xl font-semibold tracking-normal leading-tight text-white">
              {profileData.name}
            </h1>
            <p className="mt-1.5 text-base font-medium tracking-normal text-white">
              {profileData.title}
            </p>
            <div className="flex gap-2.5 items-center mt-1.5 w-full">
              <StarRating rating={5} />
              <span className="self-stretch my-auto text-base font-medium text-white">
                ({profileData.rating})
              </span>
            </div>
          </div>
        </ProfileHeader>

        <div className="flex flex-col mt-10 max-w-full text-base w-[51.625rem]">
          {/* Pass setActiveTab to NavigationTabs to update the active tab */}
          <NavigationTabs activeTab={activeTab} setActiveTab={setActiveTab} />

          {/* Conditionally render sections based on the active tab */}
          {activeTab === "Booking" && (
            <div className="text-white">Booking Content Goes Here</div>
          )}
          {activeTab === "Overview" && (
            <>
              <AboutSection content={profileData.about} />
              <ExperienceDetails
                years={profileData.experience.years}
                ageRange={profileData.experience.ageRange}
                language={profileData.experience.language}
              />
              <ExpertiseSection expertiseAreas={profileData.expertiseAreas} />
            </>
          )}
          {activeTab === "Reviews" && (
            <div className="text-white">Reviews Content Goes Here</div>
          )}
        </div>
      </main>
    </Layout>
  );
}
