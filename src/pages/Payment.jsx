import Layout from "@/Component/Shared/Layout";
import PaymentInfo from "@/features/payment/PaymentInfo";
import SectionSummary from "@/features/payment/SessionSummary";
import Footer from "@/Component/Therapist/footer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppointmentDetails from "@/features/payment/AppointmentDetails";
import CryptoPaymentMethodSection from "@/features/payment/CryptoPaymentMethodSection";

function Payment() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAppointModal, setIsAppointModal] = useState(false)
  const [stringDate,setStringDate] = useState(null)
  const [therapistData, setTherapistData] = useState(null)

   const openModal = () => setIsModalOpen(true);
   const closeModal = () => setIsModalOpen(false);
   const openAppointModal = () => setIsAppointModal(true)
   const closeAppointModal = ()=> setIsAppointModal(false)
  const navigate = useNavigate()
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <Layout onBack={handleBack}>
      <div className="text-serene mt-32 mx-11 font-medium text-lg flex items-start gap-[60px] self-stretch flex-wrap">
        <PaymentInfo />
        <SectionSummary
          stringDate={stringDate}
          setStringDate={setStringDate}
          setTherapistData={setTherapistData}
        />
        <CryptoPaymentMethodSection
          isModalOpen={isModalOpen}
          closeModal={closeModal}
          openAppointModal={openAppointModal}
        />

        {isAppointModal && (
          <AppointmentDetails
            stringDate={stringDate}
            therapistData={therapistData}
            openAppointModal={isAppointModal}
            closeAppointModal={closeAppointModal}
          />
        )}
      </div>
      <Footer buttonNote="Checkout" onClickNote={openModal} />
    </Layout>
  );
}

export default Payment;
