import Layout from "@/Component/Shared/Layout";
import DashboardQuickChat from "@/features/dashboard/DashboardQuickChat";
import DashboardRecommendedTherapist from "@/features/dashboard/DashboardRecommendedTherapist";
import DashboardWelcomeMessage from "@/features/dashboard/DashboardWelcomeMessage";
import RecommendedCommunities from "@/features/dashboard/RecommendedCommunities"
import MoodTracking from "@/features/dashboard/MoodTracking"

const Dashboard = () => {
  return (
    <Layout>
      <DashboardWelcomeMessage />
      <DashboardQuickChat />
      <DashboardRecommendedTherapist />
      <RecommendedCommunities />
      <MoodTracking/>
    </Layout>
  );
}

export default Dashboard