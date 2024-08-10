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
import { chat, searchIcon,bell } from "@/assets";
 

const Header = () => {
  return (
    <header
      className="flex justify-end border-b-[0.1rem] pt-4 mt-7  bg-serene-black
     border-[#575757] lg:h-[60px] lg:px-6 col-start-2 col-end-3 
     row-start-1 row-end-2 sticky top-0 z-[900] text-serene-ash"
    >
      <div className="flex gap-5 mb-5 mr-10">
        <Search className="hover:text-serene w-4" />
        <Bell className="hover:text-serene w-4" />
        <LucideMessageCircle className="hover:text-serene w-4" />
      </div>
    </header>
  );
};

export default Header;
