import { IoMdArrowDropright } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
const Footer = ({ buttonNote,onClickNote }) => {
       const [theEnd, setTheEnd] = useState(true);
         let lastScroll = window.scrollY;
          useEffect(() => {
            const handleScroll = () => {
              if (window.scrollY > lastScroll) {
                setTheEnd(false);
              } else {
                setTheEnd(true);
              }
              lastScroll = window.scrollY;
            };
            window.addEventListener("scroll", handleScroll);
            return () => {
              window.removeEventListener("scroll", handleScroll);
            };
          }, []);
    const navigate = useNavigate()
  return (
    <footer
      className={`bg-[#202020] p-5 fixed w-full lg:w-[83%] bottom-0 flex items-center justify-end transition-transform duration-300 ${
        theEnd ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <button
        onClick={(currencyy) => navigate(`${onClickNote}`)}
        className="bg-serene text-[#0B0B0B] py-1 lg:py-2 font-medium px-1 lg:px-4 rounded-lg text-sm flex items-center"
      >
        {buttonNote}
        <IoMdArrowDropright className="text-2xl" />
      </button>
    </footer>
  );
};
export default Footer;
