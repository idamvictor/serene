import AuthLayout from "@/Component/Shared/AuthLayout";
import { Modal } from "@/Component/Shared/AuthLayout";
import { framer2,arrow } from "@/assets";
import { useNavigate } from "react-router-dom";

const WelcomeMsg = () => {
  const user = JSON.parse(localStorage.getItem("userInfo"));
  const username = user.username;
const navigate = useNavigate()

  const handleSubmit = () => {
    navigate('/')
    console.log("Final submission");
  };

  return (
    <AuthLayout>
      <Modal>
        <>
          <div className="text-white my-4 mx-4">
            <div className="text-center flex flex-col gap-5 align-center">
              <h1 className="font-semibold text-xl lg:text-4xl">
                {username}, Welcome to Serene!
              </h1>
              <p className="flex bg-[#f1ea29] bg-opacity-20 text-serene text-left text-xs md:text-sm lg:text-sm p-1 lg:p-3 rounded-lg gap-5">
                <img src={framer2} width={24} height={24} alt="Frame icon" />
                Thanks for telling us your preferences! We would be recommending
                therapists, communities, and channels that fit your profile.
              </p>
            </div>
            <div className="flex flex-col gap-2 lg:gap-4 mt-6">
              <h4 className="font-semibold text-sm lg:text-base">
                What happens next?
              </h4>
              <p className="text-[#C7C7C7] text-sm">
                You will be matched with an accountability partner, who is meant
                to act like your guide throughout your healing process. The said
                person has gone through similar experiences and so, is in the
                best position to guide you to healing.
              </p>
              <h4 className="font-semibold text-base">
                Who will be my therapist?
              </h4>
              <p className="text-[#C7C7C7] text-sm">
                Based on the responses that you gave, you’ll get a list of
                recommended therapists that is perfect for you and your journey.
              </p>
              <h4 className="font-semibold text-base">
                How do I talk to my therapist?
              </h4>
              <p className="text-[#C7C7C7] text-sm">
                You have many options for how you choose to communicate with
                your therapist. You can send audio, video, or text messages to
                your therapist at any time in the messaging room.
              </p>
            </div>
            <button
              onClick={handleSubmit} 
              className="flex font-medium mx-auto py-4 px-10 mt-5 fixed bottom-8 right-20 md:bottom-16 md:right-60 bg-serene text-black rounded-md gap-2"
            >
              Go to dashboard <img src={arrow} width={24} height={24} />
            </button>
          </div>
        </>
      </Modal>
    </AuthLayout>
  );
};

export default WelcomeMsg;
