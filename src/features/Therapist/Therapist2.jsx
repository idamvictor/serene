import { useState } from "react";
import { useParams } from "react-router-dom";
import NavigationTabs from "../psychologists/NavigationTabs";
import StarRating from "@/Component/ui/StarRating";
import { headerImg } from "@/assets";
import { useGetAllTherapistQuery } from "@/services/auth/therapistSlice";
import Layout from "@/Component/Shared/Layout";
import ProfileHeader from "../psychologists/ProfileHeader";
import About from "@/Component/Therapist/About";
import Expertise from "@/Component/Therapist/Expertise";

const Therapist2 = () =>{
    const [activeTab, setactiveTab] = useState("Overview")
    
    const {id} = useParams();
    const {data:therapist, error, isLoading} = useGetAllTherapistQuery()

    console.log(therapist)

    const tabs = [ { name: "Booking", width: "14.75rem" },
    { name: "Overview", width: "14.75rem" },
    { name: "Reviews", width: "14.75rem" },
  ]

  if (isLoading){
    return <Layout>Loading.....</Layout>
  }

  if (error){
    return <Layout>error:{error}</Layout>
  }

  if (therapist.data && Array.isArray(therapist.data)){

    const selectedTherapist = therapist.data.find((t)=> t._id === id)
    console.log(selectedTherapist)


    return (
      <Layout>
        <main className="flex flex-col mt-20 mx-11">
          <ProfileHeader
            name={selectedTherapist.name}
            title={selectedTherapist.type}
            avatarSrc={selectedTherapist.image}
            coverSrc={headerImg}
            profileHeaderStyling={`size-14 lg:size-32`}
            profileCoverStyling={`h-28`}
          >
            {" "}
            <div className="flex flex-col self-end mt-16 max-md:mt-10">
              <h1 className="text-xl font-semibold  leading-tight text-white">
                {selectedTherapist.name}
              </h1>
              <p className="mt-1.5 text-base font-normal  text-white opacity-75">
                {selectedTherapist.type}
              </p>
              <div className="flex gap-2.5 items-center mt-1.5 w-full">
                <StarRating rating={5} />
                <span className="self-stretch my-auto text-base font-medium text-white">
                  ({selectedTherapist.ratings})
                </span>
              </div>
            </div>
          </ProfileHeader>
          <div className="mt-10">
            <NavigationTabs
              tabs={tabs}
              activeTab={activeTab}
              setActiveTab={setactiveTab}
            />
          </div>
          {activeTab === "Overview" && (
        <div className="mt-10">
          <About
          about={selectedTherapist.about}
          />
          <Expertise
          experience={selectedTherapist.experience}
          expertise={selectedTherapist.expertise}
          />
        </div>
          )}
          
        </main>
      </Layout>
    );
}
}
export default Therapist2