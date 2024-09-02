import Layout from "@/Component/Shared/Layout";
import PaymentInfo from "@/features/payment/PaymentInfo";
import SectionSummary from "@/features/payment/SessionSummary";
import Footer from "@/Component/Therapist/footer";
// import AppointmentDetails from "@/features/payment/AppointmentDetails";
// import CryptoPaymentMethodSection from "@/features/payment/CryptoPaymentMethodSection";

function Payment() {
  return (
    <Layout>
      <div className="text-serene mt-11 mx-11 font-medium text-lg flex items-start gap-[60px] self-stretch flex-wrap">
        <PaymentInfo />
        <SectionSummary />
        {/* <CryptoPaymentMethodSection />
        <AppointmentDetails /> */}
      </div>
      <Footer
      buttonNote="Checkout"
      />
      
    </Layout>
  );
}

export default Payment;
