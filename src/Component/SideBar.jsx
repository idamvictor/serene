import React, { useState } from "react";
import { Home, LineChart, Package, ShoppingCart, Users } from "lucide-react";
import { NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";

import { rightArrow, sereneSign } from "@/assets";

export function SideBar() {
  const [active, setActive] = useState("");

  const handleClick = (link) => {
    setActive(link);
  };

  return (
    <aside className="hidden md:block bg-[#272727] text-serene-ash serene-sidebar sticky top-0 z-[1000] col-start-1 col-end-2 row-span-3">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex flex-col items-start gap-11  mx-4 border-[#575757] min-h-56 lg:h-[60px]">
          <NavLink
            to="/"
            className="flex items-center gap-2 font-semibold mt-11"
          >
            <img src={sereneSign} width={30} />
            <span className="text-3xl text-serene">serene</span>
          </NavLink>
          <div className="flex gap-7 items-center justify-center text-base text-[#FFFEE0] my-11">
            <span className="bg-[#FFFEE0] font-semibold text-black rounded-full px-3 py-2">
              23
            </span>
            user id_23586
            <img src={rightArrow} className="gap-11" />
          </div>
        </div>
        <div className="flex-1">
          <nav className="flex flex-col gap-5 mt-5 leading-normal text-base font-bold">
            <NavLink
              to="/"
              className={`flex items-center gap-3 rounded-sm px-3 py-2 transition-all ${
                active === "Dashboard"
                  ? "bg-serene text-serene-black"
                  : "text-muted-foreground hover:bg-serene hover:text-serene-black"
              }`}
              onClick={() => handleClick("Dashboard")}
            >
              <Home className="h-4 w-4" />
              Dashboard
            </NavLink>
            <NavLink
              to="/Communities"
              className={`flex items-center gap-3 rounded-sm px-3 py-2 transition-all ${
                active === "Communities"
                  ? "bg-serene text-serene-black"
                  : "text-muted-foreground hover:bg-serene hover:text-serene-black"
              }`}
              onClick={() => handleClick("Communities")}
            >
              <ShoppingCart className="h-4 w-4" />
              Communities
            </NavLink>
            <NavLink
              to="/Therapist"
              className={`flex items-center gap-3 rounded-sm px-3 py-2 transition-all ${
                active === "Therapist"
                  ? "bg-serene text-serene-black"
                  : "text-muted-foreground hover:bg-serene hover:text-serene-black"
              }`}
              onClick={() => handleClick("Therapist")}
            >
              <Package className="h-4 w-4" />
              Therapist
            </NavLink>
            <NavLink
              to="/Rooms"
              className={`flex items-center gap-3 rounded-sm px-3 py-2 transition-all ${
                active === "Rooms"
                  ? "bg-serene text-serene-black"
                  : "text-muted-foreground hover:bg-serene hover:text-serene-black"
              }`}
              onClick={() => handleClick("Rooms")}
            >
              <Users className="h-4 w-4" />
              Rooms
            </NavLink>
            <NavLink
              to="/Resources"
              className={`flex items-center gap-3 rounded-sm px-3 py-2 transition-all ${
                active === "Resources"
                  ? "bg-serene text-serene-black"
                  : "text-muted-foreground hover:bg-serene hover:text-serene-black"
              }`}
              onClick={() => handleClick("Resources")}
            >
              <LineChart className="h-4 w-4" />
              Resources
            </NavLink>
          </nav>
        </div>
      </div>
    </aside>
  );
}

export default SideBar;
