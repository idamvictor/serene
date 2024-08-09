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
import { chat, searchIcon,bell } from "@/assets";
 

const Header = () => {
  return (
    <header
      className="flex justify-end border-b-[0.1rem] pt-4 mt-7  
     border-[#575757] lg:h-[60px] lg:px-6 col-start-2 col-end-3 
     row-start-1 row-end-2 sticky top-0 z-[900] text-serene"
    >
      <div className="flex gap-5 mb-5 mr-10">
        <img src={searchIcon} width={18} />
        <img src={bell} width={18} />
        <img src={chat} width={18} />
      </div>
    </header>
  );
};

export default Header;
