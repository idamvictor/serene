import { useState } from "react";
import {
  americanExpress,
  bitcoin,
  discover,
  etherium,
  masterCard,
  paypal,
  radioButton,
  usdc,
  usdt,
  visa,
} from "@/assets";
import Web3 from "web3"

// Main PaymentInfo Component
function PaymentInfo() {

  // const contractAddress = "0xE194051F9c21c3Dd0B32B966a1F26E8D9c32Db7d";
  // const ABI = [
  //   { inputs: [], stateMutability: "nonpayable", type: "constructor" },
  //   {
  //     anonymous: false,
  //     inputs: [
  //       {
  //         indexed: true,
  //         internalType: "address",
  //         name: "owner",
  //         type: "address",
  //       },
  //       {
  //         indexed: true,
  //         internalType: "address",
  //         name: "spender",
  //         type: "address",
  //       },
  //       {
  //         indexed: false,
  //         internalType: "uint256",
  //         name: "value",
  //         type: "uint256",
  //       },
  //     ],
  //     name: "Approval",
  //     type: "event",
  //   },
  //   {
  //     anonymous: false,
  //     inputs: [
  //       {
  //         indexed: true,
  //         internalType: "address",
  //         name: "from",
  //         type: "address",
  //       },
  //       { indexed: true, internalType: "address", name: "to", type: "address" },
  //       {
  //         indexed: false,
  //         internalType: "uint256",
  //         name: "value",
  //         type: "uint256",
  //       },
  //     ],
  //     name: "Transfer",
  //     type: "event",
  //   },
  //   {
  //     inputs: [],
  //     name: "_totalSupply",
  //     outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
  //     stateMutability: "view",
  //     type: "function",
  //   },
  //   {
  //     inputs: [
  //       { internalType: "address", name: "owner", type: "address" },
  //       { internalType: "address", name: "spender", type: "address" },
  //     ],
  //     name: "allowance",
  //     outputs: [
  //       { internalType: "uint256", name: "remaining", type: "uint256" },
  //     ],
  //     stateMutability: "view",
  //     type: "function",
  //   },
  //   {
  //     inputs: [
  //       { internalType: "address", name: "spender", type: "address" },
  //       { internalType: "uint256", name: "amount", type: "uint256" },
  //     ],
  //     name: "approve",
  //     outputs: [{ internalType: "bool", name: "success", type: "bool" }],
  //     stateMutability: "nonpayable",
  //     type: "function",
  //   },
  //   {
  //     inputs: [{ internalType: "address", name: "account", type: "address" }],
  //     name: "balanceOf",
  //     outputs: [{ internalType: "uint256", name: "balance", type: "uint256" }],
  //     stateMutability: "view",
  //     type: "function",
  //   },
  //   {
  //     inputs: [],
  //     name: "decimals",
  //     outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
  //     stateMutability: "view",
  //     type: "function",
  //   },
  //   {
  //     inputs: [
  //       { internalType: "uint256", name: "amount", type: "uint256" },
  //       { internalType: "address", name: "minter", type: "address" },
  //     ],
  //     name: "mintTokens",
  //     outputs: [{ internalType: "bool", name: "success", type: "bool" }],
  //     stateMutability: "nonpayable",
  //     type: "function",
  //   },
  //   {
  //     inputs: [],
  //     name: "name",
  //     outputs: [{ internalType: "string", name: "", type: "string" }],
  //     stateMutability: "view",
  //     type: "function",
  //   },
  //   {
  //     inputs: [],
  //     name: "symbol",
  //     outputs: [{ internalType: "string", name: "", type: "string" }],
  //     stateMutability: "view",
  //     type: "function",
  //   },
  //   {
  //     inputs: [],
  //     name: "totalSupply",
  //     outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
  //     stateMutability: "view",
  //     type: "function",
  //   },
  //   {
  //     inputs: [
  //       { internalType: "address", name: "recipient", type: "address" },
  //       { internalType: "uint256", name: "amount", type: "uint256" },
  //     ],
  //     name: "transfer",
  //     outputs: [{ internalType: "bool", name: "success", type: "bool" }],
  //     stateMutability: "nonpayable",
  //     type: "function",
  //   },
  //   {
  //     inputs: [
  //       { internalType: "address", name: "sender", type: "address" },
  //       { internalType: "address", name: "recipient", type: "address" },
  //       { internalType: "uint256", name: "amount", type: "uint256" },
  //     ],
  //     name: "transferFrom",
  //     outputs: [{ internalType: "bool", name: "success", type: "bool" }],
  //     stateMutability: "nonpayable",
  //     type: "function",
  //   },
  // ];

  // const web3 = new Web3(
  //   "https://sepolia.infura.io/v3/cf560557c9b640158273f0cd835e0522"
  // );

  // let blockNumber;
  // let contract = new web3.eth.Contract(ABI, contractAddress);


  // let handlePayment = setInterval(function() {

  //   contract
  //     .getPastEvents(
  //       "Transfer",
  //       {
  //         fromBlock: 6592858,
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
  //         clearInterval(handlePayment);
  //       }else {
  //         console.log('payment unsuccessful')
  //       }
  //       //clearInterval(handlePayment);  //remove
  //     });
  // }, 5000)

  // async function getBlockNum() {
  //   blockNumber = await web3.eth.getBlockNumber()
  //   console.log(blockNumber)
  // }

  // getBlockNum();


  const [activeSection, setActiveSection] = useState(null);

  const handleClick = (section) => {
    // setActiveSection(activeSection === section ? null : section);
    setActiveSection(section);
  };

  return (
    <div className="flex flex-col items-start gap-[24px] w-[39.5625rem]">
      <h1 className="text-[#FFFFFF] text-2xl font-[450]">Choose your payment method</h1>
      <section
        className="cursor-pointer px-5 pb-3 rounded-xl border border-solid border-neutral-500 self-stretch"
        onClick={() => handleClick("paypal")}
      >
        <PaypalPayment isActive={activeSection === "paypal"} />
        {activeSection === "paypal" && <PaypalPaymentDetails />}
      </section>
      <section
        className="cursor-pointer px-5 pb-3 rounded-xl border border-solid border-neutral-500 self-stretch"
        onClick={() => handleClick("crypto")}
      >
        <CryptoCurrencyPayment isActive={activeSection === "crypto"} />
        {activeSection === "crypto" && <CryptoPaymentDetails />}
      </section>
      <section
        className="cursor-pointer px-5 pb-3 rounded-xl border border-solid border-neutral-500 self-stretch"
        onClick={() => handleClick("creditcard")}
      >
        <CreditCardPayment isActive={activeSection === "creditcard"} />
        {activeSection === "creditcard" && <CreditCardPaymentDetails />}
      </section>
    </div>
  );
}

export default PaymentInfo;

// PayPal Payment Section
function PaypalPayment({ isActive }) {
  return (
    <div className="flex gap-5 max-md:flex-col">
      <div className="flex flex-col w-4/5 max-md:ml-0 max-md:w-full">
        <div className="flex flex-col mt-5 w-full text-sm tracking-wide max-md:mt-10">
          <div className="flex gap-1 items-start self-start font-medium leading-none text-white whitespace-nowrap">
            <img
              loading="lazy"
              src={isActive ? bitcoin : radioButton}
              alt="PayPal icon"
              className="object-contain shrink-0 w-5 aspect-square"
            />

            <div className="flex-1 shrink">PayPal</div>
          </div>
          <p className="mt-3 ml-5 leading-5 text-stone-300 max-md:ml-2.5">
            Safe payment online. Credit card needed. PayPal not necessary
          </p>
        </div>
      </div>
      <div className="flex flex-col ml-5 w-1/5 max-md:ml-0 max-md:w-full">
        <img
          loading="lazy"
          src={paypal}
          alt="Payment logo"
          className="object-contain shrink-0 aspect-[1.23] w-[80px] max-md:mt-10"
        />
      </div>
    </div>
  );
}

// Cryptocurrency Payment Section

function CryptoCurrencyPayment({ isActive }) {
  const icons = [bitcoin, usdt, usdc, etherium];

  return (
    <div className="flex gap-5 max-md:flex-col">
      <div className="flex flex-col w-4/5 max-md:ml-0 max-md:w-full">
        <div className="flex flex-col mt-5 w-full text-sm tracking-wide max-md:mt-10">
          <div className="flex gap-1 items-start self-start font-medium leading-none text-white whitespace-nowrap">
            <img
              loading="lazy"
              src={isActive ? bitcoin : radioButton}
              alt="Cryptocurrency icon"
              className="object-contain shrink-0 w-5 aspect-square"
            />
            <div className="flex-1 shrink">Cryptocurrency</div>
          </div>
          <p className="mt-3 ml-5 leading-5 text-stone-300 max-md:ml-2.5">
            Pay through a secure blockchain using your crypto wallet
          </p>
        </div>
      </div>
      <div className="flex ml-5 w-1/5 max-md:ml-0 max-md:w-full">
        {icons.map((icon, index) => (
          <img
            key={index}
            loading="lazy"
            src={icon}
            alt={`Crypto icon ${index + 1}`}
            className="object-contain shrink-0 aspect-square w-[1.375rem]"
          />
        ))}
      </div>
    </div>
  );
}

// Credit Card Payment Section
function CreditCardPayment({ isActive }) {
  const icons = [
    { src: visa, alt: "Visa" },
    { src: americanExpress, alt: "American Express" },
    { src: masterCard, alt: "MasterCard" },
    { src: discover, alt: "Discover" },
  ];

  return (
    <div className="flex gap-5 max-md:flex-col">
      <div className="flex flex-col w-4/5 max-md:ml-0 max-md:w-full">
        <div className="flex flex-col mt-5 w-full text-sm tracking-wide max-md:mt-10">
          <div className="flex gap-1 items-start self-start font-medium leading-none text-white whitespace-nowrap">
            <img
              loading="lazy"
              src={isActive ? bitcoin : radioButton}
              alt="Credit card icon"
              className="object-contain shrink-0 w-5 aspect-square"
            />
            <div className="flex-1 shrink">Credit card</div>
          </div>
          <p className="mt-3 ml-5 leading-5 text-stone-300 max-md:ml-2.5">
            Safe transfer through your bank account, using Visa, MasterCard,
            Discover
          </p>
        </div>
      </div>
      <div className="flex ml-5 w-1/5 max-md:ml-0 max-md:w-full">
        {icons.map((icon, index) => (
          <img
            key={index}
            loading="lazy"
            src={icon.src}
            className="object-contain shrink-0 self-stretch my-auto aspect-square w-[1.375rem]"
            alt={icon.alt}
          />
        ))}
      </div>
    </div>
  );
}

// Payment Method Details (Placeholder Components)
const PaypalPaymentDetails = () => (
  <div className="p-4">
    <p>Coming Soon...</p>
  </div>
);

const CryptoPaymentDetails = () => (
  <div className="p-4">
    <CurrencySelector />
  </div>
);

const CreditCardPaymentDetails = () => (
  <div className="p-4">
    <CreditCardForm />
  </div>
);

//============================ Currency Selector ==============================
const currencies = ["USDT", "USDC", "ETH", "BTC"];

const CurrencySelector = () => (
  <nav className="flex gap-6 items-center text-sm font-medium text-neutral-400">
    {currencies.map((currency) => (
      <CurrencyButton key={currency} currency={currency} />
    ))}
  </nav>
);

// ======================== CUrrency Button ===================================

const CurrencyButton = ({ currency }) => (
  <button className="flex justify-center items-center px-3 py-2 rounded border border-zinc-400 bg-transparent w-[5.75rem]">
    <span>{currency}</span>
  </button>
);

//======================= Credit Card Form =======================================

const CreditCardForm = () => {
  return (
    <form className="flex flex-col pl-6 tracking-wide max-w-[495px] text-white text-opacity-80 max-md:pl-5">
      {/* Card Number */}
      <div className="flex flex-col mb-2.5 w-full text-sm font-medium">
        <label htmlFor="card-number" className="mb-2">
          Card Number
        </label>
        <div className="relative flex w-full mt-2 rounded-xl border border-solid border-neutral-500 border-opacity-90 min-h-[49px]">
          <input
            type="text"
            id="card-number"
            className="w-full h-auto bg-transparent border-none outline-none text-inherit px-4"
            aria-label="Card Number"
          />
        </div>
      </div>

      <div className="flex gap-4">
        {/* CVV Code */}
        <div className="flex flex-col mb-2.5 w-full text-sm font-medium">
          <label htmlFor="cvv-code" className="mb-2 flex">
            Cvv code{" "}
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/46ea87cfecce06dccdbd870c8610ef67b3beb330cb9763d5a1168212d29a417a?apiKey=df44ca8e15de4475b0d7b182ebb1db7c&"
              alt=""
              className="ml-2 w-[15px] h-[15px]"
            />
          </label>

          <div className="relative flex w-full mt-2 rounded-xl border border-solid border-neutral-500 border-opacity-90 min-h-[49px]">
            <input
              type="text"
              id="cvv-code"
              className="w-full h-auto bg-transparent border-none outline-none text-inherit px-4"
              aria-label="Cvv code"
            />

            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/052e0635357d0c017b38f7e73fa33f882de727164f1f0077c7a3b901dfda023b?apiKey=df44ca8e15de4475b0d7b182ebb1db7c&"
              alt=""
              className="absolute right-2 bottom-2 w-6 h-6"
            />
          </div>
        </div>
        {/* Expiry Date */}
        <div className="flex flex-col mb-2.5 w-full text-sm font-medium">
          <label htmlFor="expiry-date" className="mb-2">
            Expiry Date
          </label>
          <div className="relative flex w-full mt-2 rounded-xl border border-solid border-neutral-500 border-opacity-90 min-h-[49px]">
            <input
              type="text"
              id="expiry-date"
              className="w-full h-auto bg-transparent border-none outline-none text-inherit px-4"
              placeholder="MM/YY"
              aria-label="Expiry Date"
            />
          </div>
        </div>{" "}
      </div>

      {/* Name on Card */}
      <div className="flex flex-col mb-2.5 w-full text-sm font-medium">
        <label htmlFor="name-on-card" className="mb-2">
          Name on Card
        </label>
        <div className="relative flex w-full mt-2 rounded-xl border border-solid border-neutral-500 border-opacity-90 min-h-[49px]">
          <input
            type="text"
            id="name-on-card"
            className="w-full h-auto bg-transparent border-none outline-none text-inherit px-4"
            aria-label="Name on Card"
          />
        </div>
      </div>
    </form>
  );
};
