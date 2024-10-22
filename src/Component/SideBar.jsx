import { Link, useLocation,useNavigate} from 'react-router-dom';
import { useEffect, useState, useResolvedPath } from "react";
import { AiFillHome } from "react-icons/ai";
import { IoCubeSharp, IoPerson, IoSettings, IoChatbubblesSharp } from "react-icons/io5";
import { RiGlobalFill, RiLogoutBoxFill } from "react-icons/ri";
import { IoIosPeople } from "react-icons/io";
import {sereneSign } from "@/assets";

//* LINKS COMPONENT
export const NAV_LINK = ({reactIcon: Icon, reactIconStyling, linkName, destinationLink}) => {
  const location = useLocation();
  const [active, setActive] = useState("");
  const isActive = location.pathname === destinationLink || location.pathname.startsWith(`${destinationLink}/`);

  useEffect(() => {
  //* Setting the active state based on the current location path
    location.pathname.startsWith(destinationLink)
      ? setActive(destinationLink)
      : setActive("")

  }, [location.pathname, destinationLink]);

  const handleClick = () => {
    setActive(destinationLink);
  };

  return ( 
    <>
      <Link 
        to={destinationLink} 
        className={`flex items-center gap-2 lg:text-sm xl:text-base py-[12px]  
          ${isActive ? "text-serene border-l-2 border-l-white bg-serene bg-opacity-[8%] " : "hover:text-serene text-muted-foreground"} `}
        onClick={handleClick} >
          {Icon && <Icon className={`text-xl ml-4`} />}
          {linkName}
      </Link>
    </>
   );
};






//* SIDE BAR COMPONENT
export function SideBar({ isOpen }) {
  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    navigate("/");
  };
  
  const navigate = useNavigate();
  // Debug: Confirm the sidebar is receiving the correct isOpen prop
  console.log("Rendering SideBar with isOpen:", isOpen);

  return (
    <aside
      className={`lg:block lg:bg-[#272727] text-serene-ash lg:fixed fixed z-50 bg-[#272727] top-20 w-[15rem] h-[30rem] pt-2  lg:top-0 lg:z-[1000] lg:bottom-0 lg:h-full lg:w-[12.625rem] xl:w-[15.625rem] 
    transform transition-transform duration-300 ease-in-out ${
      isOpen ? "translate-x-0 block" : "-translate-x-full hidden"
    } lg:translate-x-0`}
    >
      <div className="lg:pt-8 xl:pt-10 xl:">
        <div className="serene-logo lg:mx-5">
          <img
            src={sereneSign}
            className="lg:w-[6.2rem] xl:w-[7rem] lg:h-[2.75rem] w-[5rem] lg:py-0 lg:ml-0 py-5 ml-3  "
          />
        </div>

        <div className="sideBar-links-cont lg:mx-2 lg:mt-12 lg:flex lg:flex-col lg:justify-between lg:gap-24 xl:mt-6 xl:gap-48">
          <nav className="top-nav lg:flex lg:flex-col lg:gap-1">
            <NAV_LINK
              destinationLink={"/dashboard"}
              reactIcon={AiFillHome}
              linkName={"Dashboard"}
            />
            <NAV_LINK
              destinationLink={"/community"}
              reactIcon={IoIosPeople}
              linkName={"Communities"}
            />
            <NAV_LINK
              destinationLink={"/therapists"}
              reactIcon={IoPerson}
              linkName={"Therapists"}
            />
            <NAV_LINK
              destinationLink={"/resources"}
              reactIcon={RiGlobalFill}
              linkName={"Resources"}
            />
            {/* <NAV_LINK
              destinationLink={"/chats"}
              reactIcon={RiGlobalFill}
              linkName={"Chats"}
            /> */}
            {/* <NAV_LINK
              destinationLink={"/payment"}
              reactIcon={RiGlobalFill}
              linkName={"Payment"}
            /> */}
            <NAV_LINK
              destinationLink={"/bookings"}
              reactIcon={RiGlobalFill}
              linkName={"My Bookings"}
            />
             <NAV_LINK
              destinationLink={"/chat"}
              reactIcon={IoChatbubblesSharp}
              linkName={"Chats"}
            />
            
          </nav>

          <nav className="bottom-nav lg:flex lg:flex-col lg:gap-4 ">
            <NAV_LINK
              destinationLink={"/settings"}
              reactIcon={IoSettings}
              linkName={"Settings"}
            />
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 lg:text-sm xl:text-base py-[12px] text-muted-foreground hover:text-serene"
            >
              <RiLogoutBoxFill className="text-xl ml-4" />
              Log out
            </button>
          </nav>
        </div>
      </div>
    </aside>
  );
}



