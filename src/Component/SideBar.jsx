import { Link, useLocation } from 'react-router-dom';
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
export function SideBar() {

  return (
    <aside className="serene-sidebar lg:bg-[#272727] text-serene-ash lg:fixed lg:top-0 lg:z-[1000] lg:bottom-0 lg:h-full lg:w-[12.625rem] xl:w-[15.625rem] ">
      <div className="relative h-full lg:pt-8 xl:pt-10 xl:pb-10 ">
      
        <div className="serene-logo lg:mx-5">
          <img src={sereneSign} className='lg:w-[6.2rem]   xl:w-[7rem] lg:h-[2.75rem] ' />  
        </div>

        <div className="sideBar-links-cont mt-8 lg:mx-2 lg:flex lg:flex-col lg:justify-between ">
          <nav className="top-nav lg:flex lg:flex-col lg:gap-1">
            <NAV_LINK 
              destinationLink={"/"}
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
             <NAV_LINK
              destinationLink={"/payment"}
              reactIcon={RiGlobalFill}
              linkName={"Payment"}
            />
        
             <NAV_LINK
              destinationLink={"/experiment"}
              reactIcon={RiGlobalFill}
              linkName={"Experiment"}
            />
             <NAV_LINK
              destinationLink={"/chat"}
              reactIcon={IoChatbubblesSharp}
              linkName={"Chats"}
            />
            
          </nav>

          <nav className="bottom-nav absolute bottom-0 lg:flex lg:flex-col lg:gap-1 ">
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
