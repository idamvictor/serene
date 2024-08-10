import Layout from "@/Component/Shared/Layout";
import DashboardQuickChat from "@/features/dashboard/DashboardQuickChat";
import DashboardRecommendedTherapist from "@/features/dashboard/DashboardRecommendedTherapist";
import DashboardWelcomeMessage from "@/features/dashboard/DashboardWelcomeMessage";
import RecommendedCommunities from "@/features/dashboard/RecommendedCommunities"
import MoodTracking from "@/features/dashboard/MoodTracking"

const Dashboard = () => {
  return (
    <Layout>
      <div className="text-serene mt-11 mx-11 font-medium text-lg">
        Dashboard
        <DashboardWelcomeMessage />
        <DashboardQuickChat />
        <DashboardRecommendedTherapist />
        <RecommendedCommunities />
        <MoodTracking />
      </div>
    </Layout>
  );
}

export default Dashboard