import React from 'react'
 import {
   Bell,
   CircleUser,
   Home,
   LineChart,
   Menu,
   Package,
   Package2,
   Search,
   ShoppingCart,
   Users,
 } from "lucide-react";

 import { Badge } from "../Component/ui/badge";
 import { Button } from "../Component/ui/button";
 
 import { Input } from "../Component/ui/input";
import { sereneSign } from '@/assets';

 export function SideBar() {
   return (
     <aside className="hidden  md:block bg-[#272727] text-serene-ash serene-sidebar sticky top-0 z-[1000] col-start-1 col-end-2 row-span-2">
       <div className="flex h-full max-h-screen flex-col gap-2">
         <div className=" flex flex-col gap-11 border-b-[0.1rem] border-[#575757] py-6 pb-32 lg:h-[60px] lg:px-6">
           <a href="/" className="flex items-center gap-2 font-semibold ">
             <img src={sereneSign} />
             <span className="text-2xl text-serene">serene</span>
           </a>
           <h4>
             {" "}
             <span className="bg-[#FFFEE0] text-black rounded-full p-1 mr-2">
               23
             </span>{" "}
               user id_23586
           </h4>
           
         </div>
         <div className="flex-1">
           <nav className="flex flex-col ">
             <a
               href="#"
               className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary serene-sidebar"
             >
               <Home className="h-4 w-4" />
               Dashboard
             </a>
             <a
               href="#"
               className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
             >
               <ShoppingCart className="h-4 w-4" />
               Communtity
             </a>
             <a
               href="#"
               className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
             >
               <Package className="h-4 w-4" />
               Therapist{" "}
             </a>
             <a
               href="#"
               className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
             >
               <Users className="h-4 w-4" />
               Rooms
             </a>
             <a
               href="#"
               className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
             >
               <LineChart className="h-4 w-4" />
               Resources
             </a>
           </nav>
         </div>
        
       </div>
     </aside>

     //  <section className="flex flex-col bg-white">
     //    <div className=" ">
     //      {" "}
     //      <h3 className="text-serene flex">
     //        {" "}
     //        <img
     //          src={sereneSign}
     //          alt="serene logo"
     //          width={24}
     //          className="object-contain"
     //        />
     //        serene
     //      </h3>
     //    </div>
     //    <div>
     //      <h4 className="text-serene-gray ">
     //        <span className="bg-serene-gray">23</span> user
     //        id_23586
     //      </h4>
     //    </div>
     //    <hr />
     //    <nav className="">
     //      <div className="serene-sidebar bg-[#272727] flex flex-col">
     //        <span>Dashboard</span>
     //        <span>Dashboard</span>
     //        <span>Dashboard</span>
     //        <span>Dashboard</span>
     //        <span>Dashboard</span>
     //        <span>Dashboard</span>
     //      </div>
     //      <div></div>
     //    </nav>
     //  </section>
   );
 }


export default SideBar