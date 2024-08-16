// import { useState } from "react";
// import {
//   americanExpress,
//   bitcoin,
//   discover,
//   etherium,
//   masterCard,
//   paypal,
//   radioButton,
//   usdc,
//   usdt,
//   visa,
// } from "@/assets";

// // Main PaymentInfo Component
// function PaymentInfo() {
//   const [activeSection, setActiveSection] = useState(null);

//   const handleClick = (section) => {
//     setActiveSection(section);
//   };

//   return (
//     <div className="flex flex-col items-start gap-[24px] w-[39.5625rem]">
//       <div className="self-stretch text-[rgba(255,255,255,0.9)] font-[450] text-[1rem] leading-[1.25rem] tracking-[0.0125rem] font-haas-grotesk">
//         Choose your payment method
//       </div>
//       <section
//         className="cursor-pointer px-5 pb-3 rounded-xl border border-solid border-neutral-500 self-stretch"
//         onClick={() => handleClick("paypal")}
//       >
//         <PaypalPayment />
//         {activeSection === "paypal" && <PaypalPaymentDetails />}
//       </section>
//       <section
//         className="cursor-pointer p-5 rounded-xl border border-solid border-neutral-500 self-stretch"
//         onClick={() => handleClick("crypto")}
//       >
//         <CryptoCurrencyPayment />
//         {activeSection === "crypto" && <CryptoPaymentDetails />}
//       </section>
//       <section
//         className="cursor-pointer p-5 rounded-xl border border-solid border-neutral-500 self-stretch"
//         onClick={() => handleClick("creditcard")}
//       >
//         <CreditCardPayment />
//         {activeSection === "creditcard" && <CreditCardPaymentDetails />}
//       </section>
//     </div>
//   );
// }

// export default PaymentInfo;

// // PayPal Payment Section
// function PaypalPayment() {
//   return (
//     <div className="flex gap-5 max-md:flex-col">
//       <div className="flex flex-col w-4/5 max-md:ml-0 max-md:w-full">
//         <div className="flex flex-col mt-5 w-full text-sm tracking-wide max-md:mt-10">
//           <div className="flex gap-1 items-start self-start font-medium leading-none text-white whitespace-nowrap">
//             <img
//               loading="lazy"
//               src={radioButton}
//               alt="PayPal icon"
//               className="object-contain shrink-0 w-5 aspect-square"
//             />
//             <div className="flex-1 shrink">PayPal</div>
//           </div>
//           <p className="mt-3 ml-5 leading-5 text-stone-300 max-md:ml-2.5">
//             Safe payment online. Credit card needed. PayPal not necessary
//           </p>
//         </div>
//       </div>
//       <div className="flex flex-col ml-5 w-1/5 max-md:ml-0 max-md:w-full">
//         <img
//           loading="lazy"
//           src={paypal}
//           alt="Payment logo"
//           className="object-contain shrink-0 aspect-[1.23] w-[80px] max-md:mt-10"
//         />
//       </div>
//     </div>
//   );
// }

// // Cryptocurrency Payment Section

// function CryptoCurrencyPayment() {
//   const icons = [bitcoin, usdt, usdc, etherium];

//   return (
//     <div className="flex gap-5 max-md:flex-col">
//       <div className="flex flex-col w-4/5 max-md:ml-0 max-md:w-full">
//         <div className="flex flex-col mt-5 w-full text-sm tracking-wide max-md:mt-10">
//           <div className="flex gap-1 items-start self-start font-medium leading-none text-white whitespace-nowrap">
//             <img
//               loading="lazy"
//               src={radioButton}
//               alt="Cryptocurrency icon"
//               className="object-contain shrink-0 w-5 aspect-square"
//             />
//             <div className="flex-1 shrink">Cryptocurrency</div>
//           </div>
//           <p className="mt-3 ml-5 leading-5 text-stone-300 max-md:ml-2.5">
//             Pay through a secure blockchain using your crypto wallet
//           </p>
//         </div>
//       </div>
//       <div className="flex ml-5 w-1/5 max-md:ml-0 max-md:w-full">
//         {icons.map((icon, index) => (
//           <img
//             key={index}
//             loading="lazy"
//             src={icon}
//             alt={`Crypto icon ${index + 1}`}
//             className="object-contain shrink-0 aspect-square w-[1.375rem]"
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// // Credit Card Payment Section
// function CreditCardPayment() {
//   const icons = [
//     { src: visa, alt: "Visa" },
//     { src: americanExpress, alt: "American Express" },
//     { src: masterCard, alt: "MasterCard" },
//     { src: discover, alt: "Discover" },
//   ];

//   return (
//     <div className="flex gap-5 max-md:flex-col">
//       <div className="flex flex-col w-4/5 max-md:ml-0 max-md:w-full">
//         <div className="flex flex-col mt-5 w-full text-sm tracking-wide max-md:mt-10">
//           <div className="flex gap-1 items-start self-start font-medium leading-none text-white whitespace-nowrap">
//             <img
//               loading="lazy"
//               src={radioButton}
//               alt="Credit card icon"
//               className="object-contain shrink-0 w-5 aspect-square"
//             />
//             <div className="flex-1 shrink">Credit card</div>
//           </div>
//           <p className="mt-3 ml-5 leading-5 text-stone-300 max-md:ml-2.5">
//             Safe transfer through your bank account, using Visa, MasterCard,
//             Discover
//           </p>
//         </div>
//       </div>
//       <div className="flex ml-5 w-1/5 max-md:ml-0 max-md:w-full">
//         {icons.map((icon, index) => (
//           <img
//             key={index}
//             loading="lazy"
//             src={icon.src}
//             className="object-contain shrink-0 self-stretch my-auto aspect-square w-[1.375rem]"
//             alt={icon.alt}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// // Payment Method Details (Placeholder Components)
// const PaypalPaymentDetails = () => (
//   <div className="p-4 ">
//     <p>Details about PayPal payment method...</p>
//   </div>
// );

// const CryptoPaymentDetails = () => (
//   <div className="p-4">
//     <p>Details about Cryptocurrency payment method...</p>
//   </div>
// );

// const CreditCardPaymentDetails = () => (
//   <div className="p-4 ">
//     <p>Details about Credit Card payment method...</p>
//   </div>
// );



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

// Main PaymentInfo Component
function PaymentInfo() {
  const [activeSection, setActiveSection] = useState(null);

  const handleClick = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className="flex flex-col items-start gap-[24px] w-[39.5625rem]">
      <div className="self-stretch text-[rgba(255,255,255,0.9)] font-[450] text-[1rem] leading-[1.25rem] tracking-[0.0125rem] font-haas-grotesk">
        Choose your payment method
      </div>
      <section
        className="cursor-pointer px-5 pb-3 rounded-xl border border-solid border-neutral-500 self-stretch"
        onClick={() => handleClick("paypal")}
      >
        <PaypalPayment />
        {activeSection === "paypal" && <PaypalPaymentDetails />}
      </section>
      <section
        className="cursor-pointer px-5 pb-3 rounded-xl border border-solid border-neutral-500 self-stretch"
        onClick={() => handleClick("crypto")}
      >
        <CryptoCurrencyPayment />
        {activeSection === "crypto" && <CryptoPaymentDetails />}
      </section>
      <section
        className="cursor-pointer px-5 pb-3 rounded-xl border border-solid border-neutral-500 self-stretch"
        onClick={() => handleClick("creditcard")}
      >
        <CreditCardPayment />
        {activeSection === "creditcard" && <CreditCardPaymentDetails />}
      </section>
    </div>
  );
}

export default PaymentInfo;

// PayPal Payment Section
function PaypalPayment() {
  return (
    <div className="flex gap-5 max-md:flex-col">
      <div className="flex flex-col w-4/5 max-md:ml-0 max-md:w-full">
        <div className="flex flex-col mt-5 w-full text-sm tracking-wide max-md:mt-10">
          <div className="flex gap-1 items-start self-start font-medium leading-none text-white whitespace-nowrap">
            <img
              loading="lazy"
              src={radioButton}
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

function CryptoCurrencyPayment() {
  const icons = [bitcoin, usdt, usdc, etherium];

  return (
    <div className="flex gap-5 max-md:flex-col">
      <div className="flex flex-col w-4/5 max-md:ml-0 max-md:w-full">
        <div className="flex flex-col mt-5 w-full text-sm tracking-wide max-md:mt-10">
          <div className="flex gap-1 items-start self-start font-medium leading-none text-white whitespace-nowrap">
            <img
              loading="lazy"
              src={radioButton}
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
function CreditCardPayment() {
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
              src={radioButton}
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
    <p>Details about PayPal payment method...</p>
  </div>
);

const CryptoPaymentDetails = () => (
  <div className="p-4">
    <p>Details about Cryptocurrency payment method...</p>
  </div>
);

const CreditCardPaymentDetails = () => (
  <div className="p-4">
    <p>Details about Credit Card payment method...</p>
  </div>
);
