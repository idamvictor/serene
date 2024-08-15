import { Onboarding } from "@/assets";
// import Modal from "../ui/Modal"
import AuthFlow from "../../features/authentication/AuthFlow";

const AuthLayout = ({ children }) => {
  return (
    <div className=" bg-serene-image bg-fixed bg-cover overflow-hidden w-screen h-screen flex ">
      <div className="w-full  max-w-[650px] md:h-full h-auto  max-h-[650px] m-auto rounded-2xl bg-[#272727] bg-opacity-70 backdrop-blur-xl">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
