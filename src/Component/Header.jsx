import { Search,Bell} from "lucide-react";
import {  userDashboardProfilePic, rightArrow, } from "@/assets";
import { useMediaQuery } from "react-responsive";
 


//! ------------ DON'T TOUCH WITHOUT PERMISSION --------------!
const Header = ({ onBack,handleSidebarDisplay}) => {
const mdScreen = useMediaQuery({ query: "(max-width: 1024px)" }); 

  const handleMdScreen = () => {
    if(mdScreen){
      console.log("button clicked");
      handleSidebarDisplay()
      
    }
  }
  return (
    //TODO: DELETE THE CODE ABOVE AFTER THOROUGH CHECKS

    //*NEW HEADER FOR THE DASHBOARD
    <header
      className={`serene-header fixed top-0 right-0 left-0  border-b-[0.1rem] border-[#575757] bg-serene-black h-[3.75rem] z-[900] text-serene-ash  lg:left-[12.625rem] xl:left-[15.625rem] flex items-center px-4 lg:px-7 py-10 ${
        onBack ? "lg:justify-between" : "lg:justify-end"
      }`}
    >
      {onBack && (
        <img
          src={rightArrow}
          alt=""
          className="hidden lg:flex bg-[#2a2a2a] py-2 px-4 rounded-[6px] "
          onClick={onBack}
        />
      )}

      <div className="flex items-center ">
        <div className=" flex flex-row-reverse w-full items-center justify-between lg:justify-normal lg:flex-row ">
          <div className="flex items-center justify-center gap-7 ">
            <Search className="hover:text-serene w-5 h-5 " />
            <Bell className="hover:text-serene w-5 h-5 " />
            {/* <img
              src={userDashboardProfilePic}
              alt="user profile icon"
              className="rounded-full h-9 w-9 "
            /> */}

            {/* todo!! make sure you make the image dynamic */}

            {/* <LucideMessageCircle className="hover:text-serene w-4 h-4 " /> */}
          </div>

          <div className="lg:ml-5">
            {onBack ? (
              <img
                src={rightArrow}
                alt=""
                className=" bg-[#2a2a2a] py-2 px-4 rounded-[6px] lg:hidden"
                onClick={onBack}
              />
            ) : (
              <img
                src={userDashboardProfilePic}
                alt="user profile icon"
                className="rounded-full h-9 w-9 "
                onClick={handleMdScreen}
              />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
