import { useState,useEffect } from "react";
import { metamask, coinbase, rainbow, wallet, metamany, login,sereneSign,spinner } from "@/assets";
import AuthLayout, { Modal } from "@/Component/Shared/AuthLayout";
import { useDispatch } from "react-redux";
import { useLoginUserMutation } from "@/services/auth/apiSlice";
import Web3 from "web3";
import { setCredentials } from "@/services/auth/authSlice";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

// Loader Component
const Loader = () => {
  return (
    <div className="flex justify-center items-center h-full text-white">
      <div className="loader text-serene">
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
           <img src={spinner} width={50} height={50} />
          </div>
        </div>
      </div>
    </div>
  );
};

const ConnectWallet = () => {
  const notify = () =>
    toast("Welcome!  Be serene :)", {
      duration: 5000,
      style: {
        padding: "10px 40px",
        borderRadius: "5px",
        border: "1px solid #C7C7C7",
        background: "#0B0B0B",
        color: "#E3DAFF",
      },
    });
  const navigate = useNavigate();
  const [loginUser] = useLoginUserMutation();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false); 

  async function connectWallet() {
    if (window.ethereum) {
      setIsLoading(true); 
      var web3 = new Web3(window.ethereum);
      await window.ethereum.send("eth_requestAccounts");
      var accounts = await web3.eth.getAccounts();
      const walletid = accounts[0];

      try {
        const response = await loginUser(walletid).unwrap();
        if (response.newuser) {
          navigate("/survey");

        } else {
          navigate("/survey");
           notify();
          
        }
        dispatch(setCredentials(response.data));
      } catch (error) {
        console.error("login/sign error:", error);
      } finally {
        setIsLoading(false); 
      }
    } else {
      console.log("Click on Metamask to create an account");
    }
  }

  return (
    <AuthLayout>
      <Modal>
        {isLoading ? (
          <Loader /> 
        ) : (
          <section className="text-white mx-6 mt-14">
            <div className="flex ">
              <div className="w-1/3">
                <h4 className="font-semibold text-white">Connect a Wallet</h4>
                <div className="mt-8">
                  <h5 className="font-semibold text-[#D9D9D9] text-base">
                    Approved
                  </h5>
                  <div className="flex items-center gap-2 mt-8">
                    <img src={metamask} width={40} />
                    <span
                      id="connectButton"
                      onClick={connectWallet}
                      className="text-serene opacity-65 hover:opacity-95 font-semibold  hover:text-serene cursor-pointer"
                    >
                      Metamask Wallet
                    </span>
                   
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
                <div className="border border-[#393939]"></div>
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
                      Wallets are used to send, receive, store and display
                      digital assets like Ethereum and NFTs.
                    </p>
                  </div>
                </div>
                <div className="flex items-start mt-6 gap-4">
                  <img src={login} width={60} />
                  <div>
                    <h5 className="font-semibold text-white">
                      A Way To Log In
                    </h5>
                    <p className="text-gray-400 text-sm">
                      Instead of creating new accounts and passwords on every
                      website, just connect your wallet.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </Modal>
    </AuthLayout>
  );
};

export default ConnectWallet;
