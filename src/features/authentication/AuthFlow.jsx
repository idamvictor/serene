import React, { useState } from "react";
import { sereneSign, Frame } from "@/assets";
import AuthLayout, { Modal } from "../../Component/Shared/AuthLayout";
import { Link, useNavigate } from "react-router-dom";
const AuthFlow = () => {
  const navigate = useNavigate();

  return (
    <AuthLayout>
      <Modal>
        <div className="flex flex-col justify-between items-center mt-20 h-auto md:my-24 md:h-32">
          <div className="flex mb-5 md:mb-7">
            <img src={sereneSign} width={80} className="md:w-24" />
          </div>
          <div className="text-center">
            <h3 className="text-white text-2xl md:text-4xl flex flex-col font-thin mb-2 md:mb-3">
              Welcome to a space to be
            </h3>
            <span className="font-semibold text-white text-2xl md:text-4xl text-center">
              Invisible But Heard
            </span>
          </div>
          <div className="flex flex-col justify-center items-center gap-3 md:gap-4 mt-10 md:mt-14">
            <div>
              <Link
                to="/wallet"
                className="bg-serene px-12 py-2 rounded-lg md:px-24 md:py-3 font-semibold flex justify-center items-center gap-2 md:gap-3"
              >
                Continue with Wallet
              </Link>
              <p className="text-[#E3E3E3] text-xs md:text-sm font-medium flex gap-2 md:gap-3 items-center justify-center mt-2 md:mt-3">
                <img src={Frame} className="w-4 md:w-auto" />
                This helps keeps you completely anonymous
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </AuthLayout>
  );
};

export default AuthFlow;
