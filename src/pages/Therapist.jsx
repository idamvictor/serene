import React, { useState } from "react";
import Layout from "@/Component/Shared/Layout";
import { profilePhoto, headerImg } from "@/assets";
import ProfileHeader from "@/features/psychologists/ProfileHeader";
import NavigationTabs from "@/features/psychologists/NavigationTabs";
import AboutSection from "@/features/psychologists/AboutSection";
import ExperienceDetails from "@/features/psychologists/ExperienceDetails";
import ExpertiseSection from "@/features/psychologists/ExpertiseSection";

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
        <ProfileHeader
          name={profileData.name}
          title={profileData.title}
          rating={profileData.rating}
          avatarSrc={profileData.avatarSrc}
          coverSrc={profileData.coverSrc}
        />

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
