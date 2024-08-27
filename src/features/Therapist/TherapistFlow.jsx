import { useState } from "react";
import { useGetTherapistQuery } from "@/services/auth/therapistSlice";
import NavigationTabs from "../psychologists/NavigationTabs";
import Layout from "@/Component/Shared/Layout";
const TherapistFlow = ()=>{
     const {data:therapists, error,isLoading} = useGetTherapistQuery();
     const [activeTab, setActiveTab] = useState("Recommended")

     
     const tabs = [
       { name: "Recommended", width: "14.75rem" },
       { name: "All therapist", width: "14.75rem" },
     ];

     if (isLoading){
        return <div>loading...</div>
     }
     if (error){
        return <div>error:{error.message}</div>
     }

    return (
      <Layout>
        <header>
          <h1>Therapists</h1>
        </header>
        <div>
          <NavigationTabs
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            tabs={tabs}
          />
        </div>
        {activeTab === "Recommended" && (
          <div>{therapists?.map((therapist) => (
            <div key={therapist._id}>
              
            </div>
          ))}
          </div>
        )}
      </Layout>
    );
}
export default TherapistFlow