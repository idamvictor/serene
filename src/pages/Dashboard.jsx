import Layout from "@/Component/Shared/Layout";
import DashboardQuickChat from "@/features/dashboard/DashboardQuickChat";
import DashboardRecommendedTherapist from "@/features/dashboard/DashboardRecommendedTherapist";
import DashboardWelcomeMessage from "@/features/dashboard/DashboardWelcomeMessage";
import MoodTracking from "@/features/dashboard/MoodTracking";
import DashboardRecommendedCommunities from "@/features/dashboard/DashboardRecommendedCommunities";
import DashboardResources from "@/features/dashboard/DashboardResoures";
import AuthLayout from "@/Component/Shared/AuthLayout";


const Dashboard = () => {
  return (
    // <>
    //   <AuthLayout />
    // </>
    <Layout>
      <DashboardWelcomeMessage />

      <div className="mx-7 mb-4 mt-8 flex justify-center items-center">
        <div className="grid grid-cols-2 grid-rows-[auto_auto_auto] gap-7">
          <div className="flex flex-col gap-7">
            <DashboardQuickChat />
            <DashboardRecommendedCommunities />
          </div>

          <div className="flex flex-col gap-7">
            <DashboardRecommendedTherapist />
            <MoodTracking />
          </div>

          <DashboardResources />
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;