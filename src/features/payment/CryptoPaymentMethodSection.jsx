import Layout from "@/Component/Shared/Layout";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Web3 from "web3";
import { fetchTherapist } from "@/services/auth/therapistSlice2";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CryptoModal from "./CryptoModal";
import { useSendInfoMutation, saveDate } from "@/services/auth/cryptoSlice";

function CryptoPaymentMethodSection({isModalOpen,closeModal,openAppointModal}) {
  const [isConfirmed, setIsConfirmed] = useState(true);
  const navigate = useNavigate();
 const { id } = useParams();
 const dispatch = useDispatch();
 const therapists = useSelector((state) => state.fetchTherapist.therapist);
const [therapistData, setTherapistData] = useState([]);
const [sendInfo] = useSendInfoMutation();


 const selectedTime = useSelector((state) => state.Booking.selectedDateTime);

 const time = selectedTime?.Time;
 const Idate = selectedTime?.date;

 let date = "";

 if (Idate) {
   const currentDate = new Date(Idate);
   const year = currentDate.getFullYear();
   const month = String(currentDate.getMonth() + 1).padStart(2, "0");
   const day = String(currentDate.getDate()).padStart(2, "0");

   date = `${year}-${month}-${day}`;
 }

 console.log(date);

  useEffect(() => {
    dispatch(fetchTherapist());
  }, [dispatch]);

   useEffect(() => {
     if (Array.isArray(therapists) && therapists.length > 0) {
       const selectTherapist = therapists.find((t) => t._id === id);
       if (selectTherapist) {
         setTherapistData(selectTherapist);
       } else {
         setTherapistData(null);
       }
     }
   }, [therapists, id]);

 
  const test = () => {
    alert("testt");
  };

  const contractAddress = "0xE194051F9c21c3Dd0B32B966a1F26E8D9c32Db7d";
  const ABI = [
    { inputs: [], stateMutability: "nonpayable", type: "constructor" },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "spender",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
      ],
      name: "Approval",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "from",
          type: "address",
        },
        { indexed: true, internalType: "address", name: "to", type: "address" },
        {
          indexed: false,
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
      ],
      name: "Transfer",
      type: "event",
    },
    {
      inputs: [],
      name: "_totalSupply",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "owner", type: "address" },
        { internalType: "address", name: "spender", type: "address" },
      ],
      name: "allowance",
      outputs: [
        { internalType: "uint256", name: "remaining", type: "uint256" },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "spender", type: "address" },
        { internalType: "uint256", name: "amount", type: "uint256" },
      ],
      name: "approve",
      outputs: [{ internalType: "bool", name: "success", type: "bool" }],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "account", type: "address" }],
      name: "balanceOf",
      outputs: [{ internalType: "uint256", name: "balance", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "decimals",
      outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint256", name: "amount", type: "uint256" },
        { internalType: "address", name: "minter", type: "address" },
      ],
      name: "mintTokens",
      outputs: [{ internalType: "bool", name: "success", type: "bool" }],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "name",
      outputs: [{ internalType: "string", name: "", type: "string" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "symbol",
      outputs: [{ internalType: "string", name: "", type: "string" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "totalSupply",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "recipient", type: "address" },
        { internalType: "uint256", name: "amount", type: "uint256" },
      ],
      name: "transfer",
      outputs: [{ internalType: "bool", name: "success", type: "bool" }],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "sender", type: "address" },
        { internalType: "address", name: "recipient", type: "address" },
        { internalType: "uint256", name: "amount", type: "uint256" },
      ],
      name: "transferFrom",
      outputs: [{ internalType: "bool", name: "success", type: "bool" }],
      stateMutability: "nonpayable",
      type: "function",
    },
  ];

  const web3 = new Web3(
    "https://sepolia.infura.io/v3/cf560557c9b640158273f0cd835e0522"
  );

  let blockNumber;
  let contract = new web3.eth.Contract(ABI, contractAddress);

  async function getBlockNum() {
    blockNumber = await web3.eth.getBlockNumber();
    console.log(blockNumber);
  }

  getBlockNum();

  // let handlePayment = setInterval(function() {

  //   contract
  //     .getPastEvents(
  //       "Transfer",
  //       {
  //         fromBlock: blockNumber,
  //         toBlock: "latest",
  //       },
  //       (error, events) => {
  //         console.log(error);
  //       }
  //     )
  //     .then((event) => {
  //       console.log(event);
  //       const data = event;
  //       console.log(data[0].returnValues.value)
  //       let amount = data[0].returnValues.value;
  //       if(amount === 100000000000000000000) {
  //         console.log('payment successful')
  //         setIsConfirmed(true);
  //         clearInterval(handlePayment);
  //       }else {
  //         console.log('payment unsuccessful')
  //       }
  //       //clearInterval(handlePayment);  //remove
  //     });
  // }, 15000)
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const professionalId = therapistData?._id
  const userId = userInfo?._id;



  const handleConfirm = async () => {
    const userDetails = { userId, professionalId, date };
    console.log(userDetails);

    try {
      if (isConfirmed) {
        const response = await sendInfo(userDetails).unwrap();
        dispatch(saveDate(( response.data.link)));
        console.log("Response sent successfully:", response.data.link);
        closeModal()
        openAppointModal()
      }
    } catch (error) {
      console.error("Failed to submit response:", error);
    }
  };
  

  return (
    // <div className="App">
    //   <button
    //     onClick={openModal}
    //     className="bg-blue-500 text-white p-2 rounded"
    //   >
    //     Open Modal
    //   </button>

      <CryptoModal isOpen={isModalOpen} onClose={closeModal}>
          <section className="flex flex-col items-center px-20 py-6 mt-20 h-[630px] rounded-lg border border-zinc-700 bg-neutral-800 max-w-[35.688rem] max-md:px-5">
            <div className="text-center max-w-[21.125rem] w-full h-20">
              <h1 className="text-2xl font-semibold text-white text-opacity-90">
                Crypto Payment Method
              </h1>
              <p className="mt-5 text-sm font-medium text-amber-300">
                Kindly make a payment of{" "}
                <span className="font-semibold">6 USDT</span> to this USDT
                wallet address
              </p>
            </div>

            <div className="mt-6 text-center text-white text-opacity-90 flex flex-col items-center">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/958ff975f89b873f7da7ee27126aadc56b6d59ece0fd4ed3f01f5fc77939189d?placeholderIfAbsent=true&apiKey=df44ca8e15de4475b0d7b182ebb1db7c"
                className="object-contain w-[253px] rounded-xl align-middle flex"
                alt="QR Code"
              />
              <div className="mt-3.5">OR</div>
              <div className="mt-3 flex items-center justify-between px-2 py-3.5 rounded-xl bg-stone-600 border border-neutral-400 border-opacity-70">
                <span className="text-sm font-bold">
                  0x634bC37172eCDD1Eb18Fb1C1f1E043006be5Cc60
                </span>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b99d60c349c49c6094c96ff97cf735cf2c7c2aaba1f24c81ffbb90fd9fe575d?placeholderIfAbsent=true&apiKey=df44ca8e15de4475b0d7b182ebb1db7c"
                  className="w-[23px]"
                  alt="Copy to clipboard icon"
                />
              </div>
            </div>

            <div className="flex justify-center mt-2 w-[2.375rem]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/10e0f191bb9b58eb053810dc7219865543cd0e31bbdbeb27b825c93328b71833?placeholderIfAbsent=true&apiKey=df44ca8e15de4475b0d7b182ebb1db7c"
                className="w-full rounded-full shadow-[0px_1px_3px_rgba(0,0,0,0.3)]"
                alt="Payment status icon"
              />
            </div>

            <div className="mt-1 text-sm font-medium text-center text-white text-opacity-90">
              Waiting for Payment
            </div>

            <button
              disabled={!isConfirmed}
              onClick={handleConfirm}
              className={`mt-7 px-1 py-2 text-sm font-medium text-serene bg-transparent border border-serene rounded w-[308px] ${
                !isConfirmed && "opacity-25"
              } `}
              type="button"
            >
              Confirm Payment
            </button>
          </section>
      </CryptoModal>
   
  );
}

export default CryptoPaymentMethodSection;
