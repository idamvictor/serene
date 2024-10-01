import { featurePic1, featurePic2, featurePic3, landingPageS, sereneS, starRating, therapistImg1, therapistImg2 } from "@/assets";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { useEffect } from "react";
import TherapistLanding from "@/Component/LandingPage/TherapistLanding";
import TherapistLanding2 from "@/Component/LandingPage/TherapistLanding2";


export const RadialEllipse = ({customStyling}) => {
  return (
    <div  className={`blur-3xl opacity-70 size-56 absolute rounded-full ${customStyling}` }
      style={{
      background: "radial-gradient(circle, rgba(229, 200, 13, 0.4), rgba(127, 111, 7, 0.4))",
    }}></div>
  );
};
 

const LandingPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  
  return (
    <> 
      <main className="bg-[#2e2e2e] bg-opacity-60 w-[100vw] text-white ">
        
        {/* HEADER */}
        <header className="bg-[#393839] bg-opacity-40 h-20 lg:h-16 flex items-center justify-between px-8">
          <img src={sereneS} alt="serene logo" className="size-8" />
          <button className="text-serene font-medium text-sm flex items-center gap-1 border border-serene rounded-md px-6 py-3  "> Login
            <IoIosArrowDroprightCircle className="text-lg" /> 
          </button>
        </header>
        
        {/* SECTION 1 */}
        <section className="relative h-[75vh] lg:h-[100vh] ">
          <div className="landingPage-bg-logo absolute w-full lg:w-[35%] h-full bg-no-repeat opacity-35 blur-[2px] bg-blend-screen -rotate-[46.35deg] top-3 left-2 hidden lg:block " 
            style={{
              backgroundImage: `url(${sereneS})`, 
              backgroundSize: '400px',
          }}></div>
              
          <RadialEllipse customStyling=' top-[70%] left-0' />
          <RadialEllipse customStyling='top-[10%] lg:top-[30%] right-0' />

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

        {/* SECTION 2 */}
        <section className="relative h-auto p-7 md:px-14 border">
          <RadialEllipse customStyling='z-[-30] size-[34rem] top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 hidden md:block' />

          <h1 className="text-center text-4xl md:text-5xl font-bold">Features <br /> <strong className="font-semibold text-xl  md:text-2xl">What we at serene offer to our users </strong></h1>

          <div className=" grid grid-cols-1 z-[1000] place-items-center">

            <div className="mt-24 flex flex-col gap-10 md:flex-row justify-between">
              <article data-aos="zoom-in-down" data-aos-duration="1500" className=" relative border-[1.4px] border-[#9f9f9f] rounded-2xl md:w-[29.38rem] h-[37.5rem] flex flex-col gap-5 font-semibold px-10 ">
                <img src={featurePic2} alt="" className="absolute place-self-center mt-[-3.5rem] md:mt-[-4.5rem] size-28 md:size-36 " />
                <h2 className=" text-[2rem] md:text-[2.44rem] mt-[8rem] md:mt-[10rem] ">Privacy</h2>
                <p className="text-[1.15rem] font-medium md:pr-[6rem] md:leading-tight ">Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante.</p>
              </article>

              <article data-aos="zoom-in-left" data-aos-duration="1500" className="size-auto rounded-2xl bg-no-repeat bg-cover md:w-[46.88rem] h-[31.25rem] pb-7 px-10 flex flex-col justify-end  " 
                style={{
                backgroundImage: `url(${featurePic1})`, 
              }}>
                <h2 className="text-[2rem] md:text-[2.44rem] font-bold">Communities</h2>
                <p className="text-[1.15rem] font-medium md:pr-[15.5rem] md:leading-tight ">Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante.</p>
              </article>
            </div>
          

            <div className="flex flex-col gap-10 md:flex-row justify-between">
              <article data-aos="zoom-in-right" data-aos-duration="1500" className="size-auto rounded-2xl bg-cover bg-no-repeat md:w-[46.88rem] h-[31.25rem] mt-10 flex flex-col justify-end px-10 pb-7 "  
                style={{
                backgroundImage: `url(${featurePic3})`, 
              }}>
                <h2 className="text-[2rem] md:text-[2.44rem] font-bold">Consultations</h2>
                <p className="text-[1.15rem] font-medium md:pr-[15.5rem] md:leading-tight z-30">Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante.</p>
              </article>

              <article data-aos="zoom-in-up" data-aos-duration="1500" className=" border-[1.4px] border-[#9f9f9f] rounded-2xl md:w-[29.38rem] h-[37.5rem] flex flex-col gap-5 font-semibold px-10">
                <h2 className=" text-[2rem] md:text-[2.44rem] mt-[8rem] md:mt-[10rem] ">Resources</h2>
                <p className="text-[1.15rem] font-medium md:pr-[6rem] md:leading-tight ">Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante.</p>
              </article>
            </div>
           
          </div>
        </section>

        {/* SECTION 3 */}
        <section className=" relative border h-auto flex flex-col lg:flex-row justify-center items-center gap-7 py-10 px-7 text-[#dadada] "> 
          <h1 className="font-bold text-4xl text-center lg:text-left lg:text-[4rem] lg:w-[27%] tracking-wide leading-tight ">Our Network of 700+ licensed therapists</h1>

          <RadialEllipse customStyling='right-0 top-[10%] size-[16rem] blur-[6rem] lg:blur-[8rem] ' />

          <div className=" overflow-x-auto flex items-center w-full h-[32rem] scrollbar-hide lg:w-[60%] lg:h-auto lg:overflow-visible lg:grid lg:grid-cols-2 gap-7 lg:gap-2 ">
            <TherapistLanding 
              animation={{
                'data-aos': "flip-left", 
                'data-aos-easing': "ease-out-cubic", 
                'data-aos-duration': "1800"
              }}
              therapistImg={therapistImg1}
            />

            <TherapistLanding2
              title='Book a session to chat and video call at your selected time'
              width='w-[65%]'
            />

            <TherapistLanding2 
              title='Personalised recommendations to suit your needs'
              width='w-[75%]'
              customStyling=''
            />

            <TherapistLanding 
              animation={{
                'data-aos': "flip-right", 
                'data-aos-easing': "ease-out-cubic", 
                'data-aos-duration': "1800"
              }}
              therapistImg={therapistImg2}
            />
          </div>
        </section>

      </main>
       
    </>
  )
}

export default LandingPage;
