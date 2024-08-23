import Header from "../Header";
import SideBar from "../SideBar";


//! ------------ DON'T TOUCH WITHOUT PERMISSION --------------!
const Layout = ({ children, onBack }) => {
  return (
    <section className="lg:mx-auto w-screen ">
      <div className="lg:min-h-screen ">
        <SideBar />

        <Header onBack={onBack} />

        <main className="layout-main lg:ml-[12.625rem] xl:ml-[15.625rem] overflow-y-auto ">
          {children}
        </main>
      </div>
    </section>
  );
};

export default Layout;
