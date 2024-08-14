import Header from "../Header";
import SideBar from "../SideBar";


//! ------------ DON'T TOUCH WITHOUT PERMISSION --------------!
const Layout = ({ children }) => {
  return (
    <section className="mx-auto max-w-screen-2xl h-screen">
      <div className="grid grid-cols-[auto_1fr] grid-rows-[5rem_1fr] min-h-screen ">
        <SideBar />

        <Header />

        <main className="col-start-2 col-end-3 row-start-2 row-end-3 overflow-y-auto ml-[15.625rem] ">
          {children}
        </main>
      </div>
    </section>
  );
};

export default Layout;
