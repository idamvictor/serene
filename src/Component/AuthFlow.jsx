import React, { useState } from 'react'
import { sereneSign, Frame} from '@/assets'
const AuthFlow = () => {
    const [currentUser, setcurrentUser] = useState(false)
  return (
    <div>
      <Auth/>
        
    </div>
  )
}


const Auth = () => {
  return (
    <div className="flex flex-col justify-between items-center my-16 h-auto md:my-24 md:h-52">
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
        <span className="text-[#E3E3E3] font-semibold text-base md:text-lg">
          Sign Up
        </span>
        <div>
          <button className="bg-serene px-12 py-2 md:px-24 md:py-3 font-semibold flex justify-center items-center gap-2 md:gap-3">
            Continue with Wallet
          </button>
          <p className="text-[#E3E3E3] text-xs md:text-sm font-medium flex gap-2 md:gap-3 items-center justify-center mt-2 md:mt-3">
            <img src={Frame} className="w-4 md:w-auto" />
            This helps keeps you completely anonymous
          </p>
        </div>
        <div>
          <h4 className="text-white font-medium text-xs md:text-sm mt-12 md:mt-24">
            Don't have a metamask wallet?{" "}
            <span className="text-serene">Quickly create one</span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Auth;