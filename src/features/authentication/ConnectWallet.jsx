import { metamask, coinbase, rainbow, wallet, metamany, login } from "@/assets";
import AuthLayout from "@/Component/Shared/AuthLayout";
import Web3 from "web3";
const ConnectWallet = () => {
     var account = null;
  var shortAcct = null;

  async function connectWallet() {
    if (window.ethereum) {
      var web3 = new Web3(window.ethereum);
      await window.ethereum.send("eth_requestAccounts");
      var accounts = await web3.eth.getAccounts();
      account = accounts[0];
      shortAcct = `${account.slice(0, 6)}....${account.slice(-6)}`;
      document.getElementById("connectButton").textContent = shortAcct;
    }
}
  return (
    <AuthLayout>
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
                  className="text-white font-semibold hover:text-serene cursor-pointer"
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
                  Instead of creating new accounts and passwords on every
                  website, just connect your wallet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AuthLayout>
  );
};

export default ConnectWallet