import Header from "../Header";
import SideBar from "../SideBar";


//! ------------ DON'T TOUCH WITHOUT PERMISSION --------------!
const Layout = ({ children }) => {
  return (
    <section className="lg:mx-auto lg:max-w-screen-2xl lg:h-screen">
      <div className="lg:grid lg:grid-cols-[auto_1fr] lg:grid-rows-[5rem_1fr] lg:min-h-screen ">
        <SideBar />

        <Header />

        <main className="lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3 lg:overflow-y-auto lg:ml-[15.625rem] ">
          {children}
        </main>
      </div>
    </section>
  );
};

export default Layout;
