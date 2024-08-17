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
      <div className="dashboard-cont">

        <DashboardWelcomeMessage />

        <div className="md:mx-8 md:mb-4 md:mt-8 md:flex md:justify-center md:items-center">
          <div className="md:grid md:grid-cols-2 md:grid-rows-[auto_auto_auto] md:gap-7">
            <div className="flex flex-col gap-7 col-span-1">
              <DashboardQuickChat />
              <DashboardRecommendedCommunities />
            </div>

            <div className="second-dashboardcolumn flex flex-col gap-7 col-span-1">
              <DashboardRecommendedTherapist />
              <MoodTracking />
            </div>

            <DashboardResources />
          </div>
        </div>

      </div>
    
    </Layout>
  );
}

export default Dashboard;