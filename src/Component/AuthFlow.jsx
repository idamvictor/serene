import React, { useState } from 'react'
import { sereneSign, Frame,metamask,coinbase,rainbow,wallet,metamany,login} from '@/assets'
const AuthFlow = () => {
    const [currentUser, setcurrentUser] = useState(false)
  return (
    <div>
      {/* <Auth/> */}
      <ConnectWallet/>
        
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




const ConnectWallet = ()=>{
  return (
    <section className="text-white ml-4 mt-7">
      <div className="flex ">
        <div className="w-1/3">
          <h4 className="font-semibold text-white">Connect a Wallet</h4>
          <div className="mt-8">
            <h5 className="font-semibold text-[#D9D9D9] text-base">Approved</h5>
            <div className="flex items-center gap-2 mt-8">
              <img src={metamask} width={40} />
              <span className="text-white font-semibold">Metamask Wallet</span>
            </div>
          </div>
          <div className="mt-10">
            <h5 className="font-semibold text-[#D9D9D9] text-base">
              Coming Soon
            </h5>
            <div className="flex items-center gap-2 mt-7">
              <img src={coinbase} width={30} />
              <span className="metamask">Coinbase Wallet</span>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <img src={rainbow} width={30} />
              <span className="metamask">Rainbow</span>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <img src={wallet} width={30} />
              <span className="metamask">WalletConnect</span>
            </div>
          </div>
        </div>

        <div className="w-1/12 flex justify-center">
          <div className="border border-[#7B7B7B]"></div>
        </div>

        <div className="w-2/3 mt-5">
          <h4 className="font-semibold text-white text-base text-center">
            What is Wallet?
          </h4>
          <div className="flex items-start mt-6 gap-4">
            <img src={metamany} width={60} />
            <div>
              <h5 className="font-semibold text-white">
                A Home For Your Digital Assets
              </h5>
              <p className="text-gray-400 text-sm">
                Wallets are used to send, receive, store and display digital
                assets like Ethereum and NFTs.
              </p>
            </div>
          </div>
          <div className="flex items-start mt-6 gap-4">
            <img src={login} width={60} />
            <div>
              <h5 className="font-semibold text-white">A Way To Log In</h5>
              <p className="text-gray-400 text-sm">
                Instead of creating new accounts and passwords on every website,
                just connect your wallet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AuthFlow;