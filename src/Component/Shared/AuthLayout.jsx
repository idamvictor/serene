import { Onboarding } from "@/assets";
// import Modal from "../ui/Modal"
import AuthFlow from "../../features/authentication/AuthFlow";

const AuthLayout = ({ children }) => {
  return (
    <div className="bg-serene-image bg-fixed bg-cover  overflow-hidden w-screen h-screen flex">
      <div className="absolute inset-0 bg-black/60"></div>
      {children}
    </div>
  );
};

export const Modal = ({ children }) => {
  return (
    <div className="w-full max-w-[650px]  md:h-full h-auto max-h-[700px] pb-32 m-auto rounded-2xl bg-[#272727] bg-opacity-70 backdrop-blur-xl">
      <div>{children}</div>
    </div>
  );
};

export default AuthLayout;
