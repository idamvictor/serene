import { recommendedTherapistImage } from "@/assets";
import RecommendationCard from "@/Component/ui/RecommendationCard";
import TherapistCard from "@/Component/ui/TherapistCard";
import { fetchTherapist } from "@/services/auth/therapistSlice2";
import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { star } from "@/assets";
import Badges from "../../Component/ui/Badges";

const DashboardRecommendedTherapist = () => {
   const dispatch = useDispatch()
    const therapists = useSelector(state => state.fetchTherapist.therapist)

    const loading = useSelector(state => state.fetchTherapist.loading)
    const error = useSelector(state => state.fetchTherapist.error)

    useEffect(()=>{
        dispatch(fetchTherapist())
    },[dispatch])

    if (loading) {
      return (
          <div className="text-serene mt-52 ml-72">loading...</div>
      );
    }

    if (error) {
      return <div>error:{error.message}</div>;
    }

    if (therapists && Array.isArray(therapists)) {

 const sortedTherapists = [...therapists].sort(
   (a, b) => b.experience - a.experience
 );
  return (
    <>
      <div className="dashboard-therapist">
        <RecommendationCard
          img={recommendedTherapistImage}
          imgCaption={
            "You don't have any scheduled appointment with a therapist"
          }
          recommendedText={"Recommended therapists for you"}
        >
          {sortedTherapists.slice(0, 2).map((therapist) => (
            <div>
              <TherapistCard>
                <div className="therapistCard-profile flex gap-3">
                  <img
                    src={therapist.image}
                    alt=""
                    className="h-9 w-9 bg-[#d9d9d9] rounded-full"
                  />

                  <div className="therapistCard-info">
                    <p className="text-white font-semibold text-[.8rem] w-32 xl:text-[.85rem] ">
                      {therapist.name}
                    </p>
                    <p className="text-serene-gray text-[.7rem] font-medium my-1 xl:text-xs ">
                      {therapist.type}
                    </p>
                    <div className="therapistCard-rating flex items-center gap-1  ">
                      <img src={star} alt="" />
                      <span className="text-[#7B7B7B] text-[.65rem] font-medium xl:text-xs ">
                        {therapist.ratings}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-[#191919] flex gap-2 flex-wrap mt-6 ">
                  <Badges styling="bg-serene-purple">
                    {therapist.expertise[0]}
                  </Badges>
                  <Badges styling="bg-serene">{therapist.expertise[1]}</Badges>
                  <Badges styling="bg-serene-ash">
                    {therapist.expertise[2]}
                  </Badges>
                </div>
              </TherapistCard>
            </div>
          ))}

          {/* <TherapistCard /> */}
          {/* <TherapistCard /> */}
        </RecommendationCard>
      </div>
    </>
  );
}
return null
}

export default DashboardRecommendedTherapist;