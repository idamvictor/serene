import { Sheet, SheetContent, SheetTrigger } from "../Component/ui/sheet";
import { Button } from "../Component/ui/button";
import {
  Bell,
  CircleUser,
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  Search,
  SearchIcon,
  ShoppingCart,
  Users,
} from "lucide-react";
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
import { searchIcon } from "@/assets";
 

const Header = () => {
  return (
    <header className="flex  items-center gap-4 border-b-[0.1rem] pt-24
     border-[#575757] bg-muted/40 px-4 lg:h-[60px] lg:px-6 col-start-2 col-end-3 
     row-start-1 row-end-2 sticky top-0 z-[900]">
      {/* search product */}
      <div className="w-full flex-1">
        {/* <img src={searchIcon} alt="search" /> */}
      </div>
      {/* <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" size="icon" className="rounded-full">
            <CircleUser className="h-5 w-5" />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Support</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu> */}
    </header>
  );
};

export default Header;
