import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavigationTabs from "../psychologists/NavigationTabs";
import StarRating from "@/Component/ui/StarRating";
import { headerImg } from "@/assets";
import { useGetAllTherapistQuery } from "@/services/auth/therapistSlice";
import Layout from "@/Component/Shared/Layout";
import ProfileHeader from "../psychologists/ProfileHeader";
import About from "@/Component/Therapist/About";
import Expertise from "@/Component/Therapist/Expertise";
import { reviewer } from "@/lib/data";
import Reviews from "@/Component/Therapist/Reviews";

const Therapist2 = () =>{
    const [activeTab, setactiveTab] = useState("Overview")
    const  [reviewsData, setReviewsData] = useState(null)
    const {id} = useParams();
    const {data:therapist, error, isLoading} = useGetAllTherapistQuery()

    console.log(therapist)


    useEffect(()=>{
      if(therapist?.data && Array.isArray(therapist.data) && id ){

        const selectTherapist = therapist.data.find((t)=> t._id === id)

        const AddReviewsTherapist = {
          ...selectTherapist,
          reviews: reviewer[id] || []
        };

        setReviewsData(AddReviewsTherapist)
      }else{
        console.error("Therapist not found with id:" ,id)
      }
    },[therapist,id])

   

    const tabs = [ { name: "Booking", width: "14.75rem" },
    { name: "Overview", width: "14.75rem" },
    { name: "Reviews", width: "14.75rem" },
  ]

  if (isLoading){
    return <Layout><div className="text-serene">Loading ...</div></Layout>
  }

  if (error){
    return <Layout>error:{error}</Layout>
  }
   if (!reviewsData) {
     return (
       <Layout>
         <div className="text-serene">Loading data...</div>
       </Layout>
     );
   }

   console.log(reviewsData)

    return (
      <Layout>
        <main className="flex flex-col mt-20 mx-11">
          <ProfileHeader
            name={reviewsData.name}
            title={reviewsData.type}
            avatarSrc={reviewsData.image}
            coverSrc={headerImg}
            profileHeaderStyling={`size-20 lg:size-32`}
            profileCoverStyling={`h-28`}
          >
            {" "}
            <div className="flex flex-col self-end mt-16 max-md:mt-10">
              <h1 className="text-xl font-semibold  leading-tight text-white">
                {reviewsData.name}
              </h1>
              <p className="mt-1.5 text-base font-normal  text-white opacity-75">
                {reviewsData.type}
              </p>
              <div className="flex gap-2.5 items-center mt-1.5 w-full">
                <StarRating rating={reviewsData.ratings} />
                <span className="self-stretch my-auto text-base font-medium text-white">
                  ({reviewsData.ratings})
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
          about={reviewsData.about}
          />
          <Expertise
          experience={reviewsData.experience}
          expertise={reviewsData.expertise}
          />
        </div>
          )}
          {activeTab === "Reviews" && (
            <div>
              <Reviews
              reviews={reviewsData}
              />
            </div>
          )}
        </main>
      </Layout>
    );

}
export default Therapist2