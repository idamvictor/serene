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

  const notify = (message) =>
    toast(message, {
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
    if (window.ethereum && window.ethereum.checkMetamask) {
      setIsLoading(true); 
      var web3 = new Web3(window.ethereum);
      await window.ethereum.send("eth_requestAccounts");
      var accounts = await web3.eth.getAccounts();
      const walletid = accounts[0];

      try {
        const response = await loginUser(walletid).unwrap();
         dispatch(setCredentials(response.data));
        if (response.newuser) {
          navigate("/survey");
          notify("Fill in the survey")

        } else {
          navigate("/");
           notify("Welcome Back!");
          
        }
        // dispatch(setCredentials(response.data));
      } catch (error) {
        notify("login/sign error: server down!");
      } finally {
        setIsLoading(false); 
      }
    } else {
      notify("redirecting you to metamask...");
       window.open(
         "https://chromewebstore.google.com/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn",
         "_blank"
       );
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
                  <div className="flex flex-wrap items-center gap-2 mt-8">
                    <img
                      src={metamask}
                      width={40}
                      className="hover:w-12 hover:cursor-pointer"
                    />
                    <span
                      id="connectButton"
                      onClick={connectWallet}
                      className="text-serene text-sm opacity-65 hover:opacity-95 font-semibold  hover:text-serene cursor-pointer"
                    >
                      Metamask Wallet
                    </span>
                  </div>
                </div>
                <div className="mt-10">
                  <h5 className="font-semibold text-[#D9D9D9] text-sm">
                    Coming Soon
                  </h5>
                  <div className="flex flex-wrap items-center gap-2 mt-7">
                    <img src={coinbase} width={30} />
                    <span className="metamask">Coinbase Wallet</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 mt-4">
                    <img src={rainbow} width={30} />
                    <span className="metamask">Rainbow</span>
                  </div>
                  <div className="flex flex-wrap items-center text-sm gap-2 mt-4">
                    <img src={wallet} width={30} />
                    <span className="metamask text-sm">WalletConnect</span>
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
                <div className="flex flex-wrap lg:flex-nowrap items-start mt-6 gap-4">
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
                <div className="flex flex-wrap lg:flex-nowrap items-start mt-6 gap-4">
                  <img src={login} width={60} />
                  <div>
                    <h5 className="font-semibold text-white">
                      A Way To Log In
                    </h5>
                    <p className="text-gray-400 text-sm">
                      Instead of creating new accounts and passwords on every
                      website, just connect your wallet, which would take you to install your wallet then when that is done head back here for the rest of your serene journey!
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
