import { Sheet, SheetContent, SheetTrigger } from "../Component/ui/sheet";
import { Button } from "../Component/ui/button";

import { Badge } from "../Component/ui/badge";
import { Input } from "../Component/ui/input";
// import { Button } from "../Component/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../Component/ui/dropdown-menu";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../Component/ui/card";
import { Search,Bell,LucideMessageCircle,ChevronLeft} from "lucide-react";
import { chat, searchIcon,bell, userDashboardProfilePic, arrowRight, rightArrow, menuBar } from "@/assets";
 


//! ------------ DON'T TOUCH WITHOUT PERMISSION --------------!
const Header = ({ onBack }) => {
  return (
    // <header className="flex justify-end border-b-[0.1rem] mt-5 bg-serene-black border-[#575757] lg:h-[60px] lg:px-6 col-start-2 col-end-3 row-start-1 row-end-2 sticky top-0 z-[900] text-serene-ash">
    //   <div className="flex items-center gap-5 mb-5 ">
    //     <Search className="hover:text-serene w-4 h-4 " />
    //     <Bell className="hover:text-serene w-4 h-4 " />
    //     <LucideMessageCircle className="hover:text-serene w-4 h-4 " />
    //     <img src={userDashboardProfilePic} alt="user profile icon" className="rounded-full h-9 w-9" />
    //   </div>
    // </header>
    //TODO: DELETE THE CODE ABOVE AFTER THOROUGH CHECKS


    //*NEW HEADER FOR THE DASHBOARD
    <header className={`serene-header fixed top-0 right-0 left-0  border-b-[0.1rem] border-[#575757] bg-serene-black h-[3.75rem] z-[900] text-serene-ash  lg:left-[12.625rem] xl:left-[15.625rem] flex items-center px-4 lg:px-7 py-10 ${onBack ? "lg:justify-between"  : "lg:justify-end" }`}>
      {onBack && (
        <img src={rightArrow} alt="" className="hidden lg:flex bg-[#2a2a2a] py-2 px-4 rounded-[6px] " onClick={onBack} />
      )}


      <div className="flex items-center ">
        <div className=" flex flex-row-reverse w-full items-center justify-between lg:justify-normal lg:flex-row ">
          <div className="flex items-center justify-center gap-7 ">
            <Search className="hover:text-serene w-5 h-5 " />
            <Bell className="hover:text-serene w-5 h-5 " />
            {/* <LucideMessageCircle className="hover:text-serene w-4 h-4 " /> */}
          </div>

          <div className="lg:ml-5">
            {onBack
              ? (<img src={rightArrow} alt="" className=" bg-[#2a2a2a] py-2 px-4 rounded-[6px] lg:hidden" onClick={onBack} />)
              : (<img src={userDashboardProfilePic} alt="user profile icon" className="rounded-full h-9 w-9 " />)
            }
          </div>
        </div>
      </div>
      
          
    </header>
  );
};

export default Header;
