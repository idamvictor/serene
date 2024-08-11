import { recommendedTherapistImage } from "@/assets";
import RecommendationCard from "@/Component/ui/RecommendationCard";
import TherapistCard from "@/Component/ui/TherapistCard";

const DashboardRecommendedTherapist = () => {
  return (
    <>
      <div className="dashboard-therapist">
        <RecommendationCard 
              img={recommendedTherapistImage}
              imgCaption={"You don't have any scheduled appointment with a therapist"}
              recommendedText={"Recommended therapists for you"}
          >
            <TherapistCard />
            <TherapistCard />
        </RecommendationCard>
      </div>
    </>
  )
}

export default DashboardRecommendedTherapist;