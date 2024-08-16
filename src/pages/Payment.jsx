import Layout from "@/Component/Shared/Layout";
import PaymentInfo from "@/features/payment/PaymentInfo";
import SectionSummary from "@/features/payment/SessionSummary";

function Payment() {
  return (
    <Layout>
      <div className="text-serene mt-11 mx-11 font-medium text-lg flex items-start gap-[60px] self-stretch flex-wrap">
        <PaymentInfo />
        <SectionSummary />
      </div>
    </Layout>
  );
}

export default Payment;
