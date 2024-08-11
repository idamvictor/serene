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
      {/* <div className="text-serene mt-11 mx-11 font-medium text-lg"></div> */}
      <div className="dashboard-content grid grid-cols-2 gap-8 grid-rows-auto mx-9 py-3 ">
        <DashboardWelcomeMessage />
        <DashboardQuickChat />
        <DashboardRecommendedTherapist />
        <DashboardRecommendedCommunities />
        <MoodTracking />
        <DashboardResources />
      </div>
      
    </Layout>
  );
}

export default Dashboard;