import { Link } from 'react-router-dom';
import { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { IoCubeSharp, IoPerson, IoSettings } from "react-icons/io5";
import { RiGlobalFill, RiLogoutBoxFill } from "react-icons/ri";
import { IoIosPeople } from "react-icons/io";
import {sereneSign } from "@/assets";
import { Dashboard } from '@/pages';

//* LINKS COMPONENT
export const NAV_LINK = ({reactIcon: Icon, reactIconStyling, linkName}) => {
  return ( 
    <>
      <Link className="flex items-center gap-2 hover:text-serene text-base py-[12px]  ">
          {Icon && <Icon className={`text-xl`} />}
          {linkName}
      </Link>
    </>
   );
};


//* SIDE BAR COMPONENT
export function SideBar() {
  const [active, setActive] = useState("");

  const handleClick = (link) => {
    setActive(link);
};

  return (
    <aside className="serene-sidebar lg:bg-[#272727] text-serene-ash lg:fixed lg:top-0 lg:z-[1000] lg:bottom-0 lg:col-start-1 lg:col-end-2 lg:row-span-3 lg:h-full lg:w-[15.625rem] ">
      <div className="lg:px-5 lg:pt-10 lg:pb-10 ">
      
        <div className="serene-logo">
          <img src={sereneSign} className='lg:w-[7rem] lg:h-[2.75rem] ' />  
        </div>

        <div className="lg:mt-12 lg:flex lg:flex-col lg:justify-between lg:gap-24">
          <nav className="top-nav lg:flex lg:flex-col lg:gap-2">
            <NAV_LINK 
              reactIcon={AiFillHome}
              linkName={"Dashboard"}
            />
             <NAV_LINK 
              reactIcon={IoIosPeople}
              linkName={"Communities"}
            />
             <NAV_LINK 
              reactIcon={IoPerson}
              linkName={"Therapist"}
            />
             <NAV_LINK 
              reactIcon={IoCubeSharp}
              linkName={"Rooms"}
            />
             <NAV_LINK 
              reactIcon={RiGlobalFill}
              linkName={"Resources"}
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

      {/* <div className="flex flex-col items-baseline">
        <div className="ml-5 my-14 lg:h-[60px]">
          <Link to="/" className="font-semibold pl-6">
            <img src={sereneSign} width={120} />
          </Link>
        </div>

        <div className="">
          <nav className="flex flex-col gap-5 leading-normal text-base font-medium tracking-[1px] ">
            <Link
              to="/"
              className={`flex items-center  gap-3 rounded-sm  py-2 transition-all  ${
                active === "Dashboard"
                  ? " text-serene"
                  : "text-muted-foreground  hover:text-serene "
              }`}
              onClick={() => handleClick("Dashboard")}
            >
              <AiFillHome className="text-xl" />
              Dashboard
            </Link>

            <Link
              to="/join-communities"
              className={`flex items-center gap-3 rounded-sm  py-2 transition-all ${
                active === "Communities"
                  ? " text-serene"
                  : "text-muted-foreground  hover:text-serene "
              }`}
              onClick={() => handleClick("Communities")}
            >
              <div className="flex items-center justify-center gap-3">
                {" "}
                <IoIosPeople className="text-2xl" />
                Communities
              </div>
            </Link>

            <Link
              to="/Therapist"
              className={`flex items-center gap-3 rounded-sm  py-2 transition-all ${
                active === "Therapist"
                  ? " text-serene"
                  : "text-muted-foreground hover:text-serene "
              }`}
              onClick={() => handleClick("Therapist")}
            >
              <IoPerson className="text-xl" />
              Therapist
            </Link>

            <Link
              to="/Rooms"
              className={`flex items-center gap-3 rounded-sm  py-2 transition-all ${
                active === "Rooms"
                  ? " text-serene"
                  : "text-muted-foreground hover:text-serene "
              }`}
              onClick={() => handleClick("Rooms")}
            >
              <IoCubeSharp className="text-xl" />
              Rooms
            </Link>

            <Link
              to="/Resources"
              className={`flex items-center gap-3 rounded-sm py-2 transition-all ${
                active === "Resources"
                  ? " text-serene"
                  : "text-muted-foreground  hover:text-serene"
              }`}
              onClick={() => handleClick("Resources")}
            >
              <RiGlobalFill className="text-xl" />
              Resources
            </Link>

            <div className="flex flex-col gap-11 mt-64 ">
              <Link className="flex items-center gap-3  hover:text-serene">
                <IoSettings />
                Settings
              </Link>

              <Link className="flex items-center gap-3  hover:text-serene">
                <RiLogoutBoxFill />
                Log out
              </Link>
            </div>

          </nav>
        </div>
      </div> */}
    </aside>
  );
};

export default SideBar;
