import { landingPageS, sereneS } from "@/assets";
import { IoIosArrowDroprightCircle } from "react-icons/io";


const LandingPage = () => {
  return (
    <> 
        <section className=" landingPage-cont relative overflow-hidden h-[80vh] lg:h-[100vh] w-[100vw] border bg-[#2e2e2e] bg-opacity-50">
            <header className="bg-[#393839] bg-opacity-40 h-20 lg:h-16 flex items-center justify-between px-8">
                <img src={sereneS} alt="serene logo" className="size-8" />
                <button className="text-serene font-medium text-sm flex items-center gap-1 border border-serene rounded-md px-6 py-3  "> Login
                  <IoIosArrowDroprightCircle className="text-lg" /> 
                </button>
                
            </header>

            <div className="landingPage-bg-logo absolute w-full lg:w-[35%] h-full bg-no-repeat opacity-35 blur-[2px] bg-blend-screen -rotate-[46.35deg] top-3 left-2 hidden lg:block " 
              style={{
                backgroundImage: `url(${sereneS})`, 
                backgroundSize: '400px',
            }}></div>
            <div  className="blur-3xl opacity-70 size-56 absolute top-[70%] left-2 rounded-full " style={{
                    background: "radial-gradient(circle, rgba(229, 200, 13, 0.4), rgba(127, 111, 7, 0.4))",
            }}></div>

            <div  className="blur-3xl opacity-70 size-56 absolute top-[10%] lg:top-[30%] right-0 rounded-full" style={{
                    background: "radial-gradient(circle, rgba(229, 200, 13, 0.4), rgba(127, 111, 7, 0.4))",
            }}></div>

            {/* Centered Content */}
            <div className="z-30 absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-10 text-center text-white  min-w-80 ">
              <h1 className="flex items-center justify-center gap-2 text-serene text-3xl lg:text-[1.7rem] font-bold ">
                <img src={sereneS} alt="serene logo" />
                Serene
              </h1>
              <p className=" text-3xl lg:text-6xl font-thin leading-normal ">Welcome to a space to be <strong className="font-bold">Invisible But Heard</strong></p>
              <button className="bg-serene rounded-md font-semibold  text-[#0b0b0b] lg:w-[50%] px-10 py-2 ">Get Started</button>
            </div>


        </section>
    </>
  )
}

export default LandingPage;
