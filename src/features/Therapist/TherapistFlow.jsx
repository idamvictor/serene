import { useState,useEffect } from "react";
import { useGetAllTherapistQuery } from "@/services/auth/therapistSlice";
import NavigationTabs from "../psychologists/NavigationTabs";
import Layout from "@/Component/Shared/Layout";
import Recommended from "@/Component/Therapist/Recommended";
import { useDispatch,useSelector } from "react-redux";
import { fetchTherapist } from "@/services/auth/therapistSlice2";

const TherapistFlow = ()=>{
  const dispatch = useDispatch();
  const therapists = useSelector(state => state.fetchTherapist.therapist)
  const highestRated = useSelector(
    (state) => state.fetchTherapist.highestRatedTherapist
  );
  const loading = useSelector(state=> state.fetchTherapist.loading )
  const error = useSelector(state=> state.fetchTherapist.error)
    //  const {data:therapist, error,isLoading} = useGetAllTherapistQuery();

       useEffect(() => {
         dispatch(fetchTherapist());
       }, [dispatch]);

     const [activeTab, setActiveTab] = useState("Recommended")

     
     const tabs = [
       { name: "Recommended", width: "20.75rem" },
       { name: "All therapist", width: "20.75rem" }
     ];
     console.log("Therapists data:", therapists
     );

     if (loading){
        return (
          <Layout>
            <div className="text-serene mt-52 ml-72">loading...</div>
          </Layout>
        ); 
     }
     if (error){
        return <div>error:{error.message}</div>
     }
    
 if (therapists && Array.isArray(therapists)) {

 const sortedTherapists = [...therapists].sort(
   (a, b) => b.experience - a.experience
 );

   


    return (
      <Layout>
        <div className="p-8 pt-28 ">
          <header>
            <h1 className="text-white text-4xl">Therapists</h1>
          </header>
          <div className="mt-10">
            <NavigationTabs
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              tabs={tabs}
            />
          </div>
          {activeTab === "Recommended" && (
            <div className="mt-20">
              {sortedTherapists.map((therapist) => (
                <div key={therapist._id}>
                  <Recommended
                    id = {therapist._id}
                    name={therapist.name}
                    type={therapist.type}
                    expertise={therapist.expertise}
                    about={therapist.about}
                    experience={therapist.experience}
                    ratings={therapist.ratings}
                    highest={therapist._id === highestRated._id}
                    image={therapist.image}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </Layout>
    );
  }
  return null
}
export default TherapistFlow

