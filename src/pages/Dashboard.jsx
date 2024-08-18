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

        <div className="lg:mx-8 lg:mb-4 lg:mt-8 lg:flex lg:justify-center lg:items-center">
          <div className="lg:grid lg:grid-cols-2 lg:grid-rows-[auto_auto_auto] lg:gap-7">
            <div className="flex flex-col gap-7 lg:col-span-1">
              <DashboardQuickChat />
              <DashboardRecommendedCommunities />
            </div>

            <div className="second-dashboardcolumn flex flex-col gap-7 lg:col-span-1">
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