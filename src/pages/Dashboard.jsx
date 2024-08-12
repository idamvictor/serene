import Layout from "@/Component/Shared/Layout";
import DashboardQuickChat from "@/features/dashboard/DashboardQuickChat";
import DashboardRecommendedTherapist from "@/features/dashboard/DashboardRecommendedTherapist";
import DashboardWelcomeMessage from "@/features/dashboard/DashboardWelcomeMessage";
import MoodTracking from "@/features/dashboard/MoodTracking";
import DashboardRecommendedCommunities from "@/features/dashboard/DashboardRecommendedCommunities";
import DashboardResources from "@/features/dashboard/DashboardResoures";


const Dashboard = () => {
  return (
    <Layout>
      <div className="dashboard-content grid grid-cols-2 grid-rows-[auto_auto_auto] gap-6 mx-8 my-3 ">
        <DashboardWelcomeMessage />

        <div className="grid gap-6">
          <DashboardQuickChat />
          <DashboardRecommendedCommunities />
        </div>

        <div className="grid gap-6">
          <DashboardRecommendedTherapist />
          <MoodTracking />
        </div>
      
  
        <DashboardResources />
      </div>
      
    </Layout>
  );
}

export default Dashboard;