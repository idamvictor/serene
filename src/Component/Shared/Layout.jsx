import Header from "../Header";
import SideBar from "../SideBar";

const Layout = ({ children }) => {
  return (
    <section className="mx-auto max-w-screen-2xl">
      <div className="grid grid-cols-[13rem_1fr] grid-rows-[5rem_1fr] h-screen ">
        <SideBar />

        {/* this is the side bar  */}
       
          {/* nav will be here */}
          <Header />
        

        <main className="col-start-2 col-end-3 row-start-2 row-end-3">
          {children}
        </main>
      </div>
    </section>
  );
};

export default Layout;
