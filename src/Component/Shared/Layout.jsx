import Header from "../Header";
import SideBar from "../SideBar";
import { useState } from "react";

const Layout = ({ children, onBack }) => {
  const [displaySidebar, setDisplaySidebar] = useState(false);

  const handleSidebarDisplay = () => {
    setDisplaySidebar((prev) => !prev);
  };

  return (
    <section className="lg:mx-auto w-screen">
      <div className="lg:min-h-screen">
        {/* Debug: Check if isOpen is being passed correctly */}
        {console.log('Sidebar Open:', displaySidebar)}

        {/* Pass the isOpen prop to SideBar */}
        <SideBar isOpen={displaySidebar} />

        <Header onBack={onBack} handleSidebarDisplay={handleSidebarDisplay} />

        <main className="layout-main md:text-white lg:ml-[12.625rem] xl:ml-[15.625rem] overflow-y-auto">
          {children}
        </main>
      </div>
    </section>
  );
};

export default Layout;