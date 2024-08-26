import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { IoCubeSharp, IoPerson, IoSettings } from "react-icons/io5";
import { RiGlobalFill, RiLogoutBoxFill } from "react-icons/ri";
import { IoIosPeople } from "react-icons/io";
import {sereneSign } from "@/assets";

//* LINKS COMPONENT
export const NAV_LINK = ({reactIcon: Icon, reactIconStyling, linkName, destinationLink}) => {
  const location = useLocation();
  const [active, setActive] = useState("");

  useEffect(() => {
    //* Setting the active state based on the current location path
    if (location.pathname === destinationLink) {
      setActive(destinationLink);
    }
  }, [location.pathname, destinationLink]);

  const handleClick = (link) => {
    setActive(destinationLink);
  };

  return ( 
    <>
      <Link 
        to={destinationLink} 
        className={`flex items-center gap-2 text-base py-[12px]  
          ${location.pathname === destinationLink ? "text-serene " : "hover:text-serene text-muted-foreground"} `}
        onClick={handleClick} >
          {Icon && <Icon className={`text-xl`} />}
          {linkName}
      </Link>
    </>
   );
};


//* SIDE BAR COMPONENT
export function SideBar() {

  return (
    <aside className="serene-sidebar lg:bg-[#272727] text-serene-ash lg:fixed lg:top-0 lg:z-[1000] lg:bottom-0 lg:h-full lg:w-[15.625rem] ">
      <div className="lg:px-5 lg:pt-10 lg:pb-10 ">
      
        <div className="serene-logo">
          <img src={sereneSign} className='lg:w-[7rem] lg:h-[2.75rem] ' />  
        </div>

        <div className="lg:mt-12 lg:flex lg:flex-col lg:justify-between lg:gap-24">
          <nav className="top-nav lg:flex lg:flex-col lg:gap-2">
            <NAV_LINK 
              destinationLink={"/"}
              reactIcon={AiFillHome}
              linkName={"Dashboard"}
            />
             <NAV_LINK 
              destinationLink={"/join-communities"}
              reactIcon={IoIosPeople}
              linkName={"Communities"}
            />
             <NAV_LINK
              destinationLink={"/Therapist"} 
              reactIcon={IoPerson}
              linkName={"Therapist"}
            />
             <NAV_LINK
              destinationLink={"/resources"}
              reactIcon={RiGlobalFill}
              linkName={"Resources"}
            />
             <NAV_LINK
              destinationLink={"/payment"}
              reactIcon={RiGlobalFill}
              linkName={"Payment"}
            />
             <NAV_LINK
              destinationLink={"/therapists"}
              reactIcon={RiGlobalFill}
              linkName={"Therapists"}
            />
          </nav>

          <nav className="bottom-nav lg:flex lg:flex-col lg:gap-4 ">
            <NAV_LINK 
              reactIcon={IoSettings}
              linkName={"Settings"}
            />
            <NAV_LINK 
              reactIcon={RiLogoutBoxFill}
              linkName={"Log out"}
            />
          </nav>
        </div>
      </div>

    </aside>
  );
};

export default SideBar;
