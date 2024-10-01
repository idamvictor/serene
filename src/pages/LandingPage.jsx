import { featurePic1, featurePic2, featurePic3, landingPageS, sereneS, starRating, therapistImg1, therapistImg2 } from "@/assets";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { useEffect } from "react";
import TherapistLanding from "@/Component/LandingPage/TherapistLanding";
import TherapistLanding2 from "@/Component/LandingPage/TherapistLanding2";
import { circleData } from "@/lib/circleData";
import { articleData, resourcesAbout, videoData } from "@/lib/resourcesData";
import SmallArticleCard from "@/Component/ui/ResourcesPage/SmallArticleCard";
import LandingVideoCard from "@/Component/LandingPage/LandingVideoCard";

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
        <section className="relative h-[80vh] lg:h-[100vh] ">
          <div className="landingPage-bg-logo absolute w-full lg:w-[35%] h-full bg-no-repeat opacity-35 blur-[.125rem] bg-blend-screen -rotate-[46.35deg] top-3 left-2 hidden lg:block " 
            style={{
              backgroundImage: `url(${sereneS})`, 
              backgroundSize: '25rem',
          }}></div>
              
          <RadialEllipse customStyling=' top-[70%] left-0' />
          <RadialEllipse customStyling='top-[10%] lg:top-[30%] right-0' />

          {/* Centered Content */}
          <div className="z-30 absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-10 text-center text-white min-w-80 ">
            <h1 className="flex items-center justify-center gap-2 text-serene text-3xl lg:text-[1.7rem] font-bold ">
              <img src={sereneS} alt="serene logo" />
              Serene
            </h1>
            <p className=" text-3xl lg:text-6xl font-thin leading-normal ">Welcome to a space to be <strong className="font-bold">Invisible But Heard</strong></p>
            <button className="bg-serene rounded-sm font-semibold  text-[#0b0b0b] lg:w-[50%] px-10 py-2 ">Get Started</button>
          </div>
        </section>

        {/* SECTION 2 */}
        <section className="relative h-auto p-7 md:px-14">
          <RadialEllipse customStyling='z-[-30] size-[34rem] top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 hidden md:block' />

          <h1 className="text-center text-4xl md:text-5xl font-bold">Features <br /> <strong className="font-semibold text-xl md:text-2xl">What we at serene offer to our users </strong></h1>

          <div className=" grid grid-cols-1 z-[1000] place-items-center">

            <div className="mt-24 flex flex-col justify-center items-center gap-10 lg:flex-row lg:justify-between">
              <article data-aos="zoom-in-down" data-aos-duration="1500" className=" relative border-[.0875rem] border-[#9f9f9f] rounded-2xl  md:w-[36%] h-[37.5rem] flex flex-col gap-5 font-semibold px-10 ">
                <img src={featurePic2} alt="" className="absolute place-self-center mt-[-3.5rem] md:mt-[-4.5rem] size-28 md:size-36 " />
                <h2 className=" text-[2rem] md:text-[2.44rem] mt-[8rem] md:mt-[10rem] ">Privacy</h2>
                <p className="text-[1.15rem] font-medium md:pr-[6rem] md:leading-tight ">Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante.</p>
              </article>

              <article data-aos="zoom-in-left" data-aos-duration="1500" className="size-auto rounded-2xl bg-no-repeat bg-cover md:w-[64%] h-[31.25rem] pb-7 px-10 flex flex-col justify-end  " 
                style={{
                backgroundImage: `url(${featurePic1})`, 
              }}>
                <h2 className="text-[2rem] md:text-[2.44rem] font-bold">Communities</h2>
                <p className="text-[1.15rem] font-medium md:pr-[15.5rem] md:leading-tight ">Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante.</p>
              </article>
            </div>
          

            <div className="flex flex-col-reverse justify-center items-center gap-10 lg:flex-row lg:justify-between">
              <article data-aos="zoom-in-right" data-aos-duration="1500" className="size-auto rounded-2xl bg-cover bg-no-repeat md:w-[64%] h-[31.25rem]  flex flex-col justify-end px-10 pb-7 "  
                style={{
                backgroundImage: `url(${featurePic3})`, 
              }}>
                <h2 className="text-[2rem] md:text-[2.44rem] font-bold">Consultations</h2>
                <p className="text-[1.15rem] font-medium md:pr-[15.5rem] md:leading-tight z-30">Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante.</p>
              </article>

              <article data-aos="zoom-in-up" data-aos-duration="1500" className=" border-[.0875rem] border-[#9f9f9f] rounded-2xl md:w-[36%] h-[37.5rem] flex flex-col gap-5 font-semibold px-10 mt-10 lg:mt-0">
                <h2 className=" text-[2rem] md:text-[2.44rem] mt-[8rem] md:mt-[10rem] ">Resources</h2>
                <p className="text-[1.15rem] font-medium md:pr-[6rem] md:leading-tight ">Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante.</p>
              </article>
            </div>
           
          </div>
        </section>

        {/* SECTION 3 */}
        <section className=" relative h-auto flex flex-col lg:flex-row justify-center items-center gap-7 py-10 px-7 text-[#dadada] "> 
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

        {/* SECTION 4 */}
        <section className="relative h-[70vh] md:h-[100vh] md:py-96 flex justify-center items-center">
              <div className="absolute w-[40%] z-50 text-center text-[#dadada] flex flex-col items-center justify-center gap-10 ">
                <h1 className="font-bold text-2xl md:text-6xl"> Our Therapists Expertise</h1>
                <button className="bg-serene rounded-sm font-semibold  text-[#0b0b0b] text-sm md:text-base lg:w-[58%] px-5 md:px-10 py-2 ">Book a Session</button>
              </div>
 
              <RadialEllipse customStyling='size-[22rem] blur-[9rem] ' />

              {
                circleData.map((item, index) => (
                  <div 
                    key={index} 
                    className="absolute size-16 md:size-[7.5rem] bg-cover bg-center flex justify-center items-end text-center"
                    style={{
                      backgroundImage: `url(${item.img})`,
                      transform: window.innerWidth < 768
                        ? `rotate(${index * (360 / circleData.length)}deg) translate(10rem) rotate(-${index * (360 / circleData.length)}deg)`
                        : `rotate(${index * (360 / circleData.length)}deg) translate(19.5rem) rotate(-${index * (360 / circleData.length)}deg)`,
                    }}
                  >
                    <p className="z-50 font-bold text-xs md:text-base text-[#eceaea] ">{item.text}</p>
                </div>
                ))
              }

        </section>

        {/* SECTION 5 */}
        <section className="h-auto py-20 flex flex-col justify-center items-center ">
              <RadialEllipse customStyling='size-[30rem] blur-[12rem] ' />

              <div className="w-[90%]">

                {/* ROW 1 */}
                <div className="flex items-center justify-between">
                  <div className="text-[#dadada] w-[60%] flex flex-col justify-center gap-5 ">
                    <h2 className="text-[3.5rem] font-bold  ">Resources made for you</h2>
                    <p className="text-2xl w-[88%] leading-normal tracking-wide font-Poppins font-light ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi eget.</p>
                    <button className="bg-serene rounded-sm font-semibold  text-[#0b0b0b] text-sm md:text-base lg:w-[20%] px-5 md:px-10 py-2 ">Explore</button>
                  </div>

                  <div className="w-[36%] h-[29rem] border-[.0875rem] border-[#c9c9c9] px-10 flex flex-col  justify-center ">
                    <h3 className="text-white text-opacity-80 text-2xl font-bold">Trending</h3>
                    {articleData.map((item, index) => (
                      <SmallArticleCard 
                        articlePreviewImg={item.img}
                        articleAuthor={item.author}
                        articleTag={item.tag}
                        articleTitle={item.title}
                        landingStyling='gap-5'
                        key={index}
                      />
                    ))}
                  </div>
                </div>

                {/* ROW 2 */}
                <div className="flex items-end justify-between">
                  <div className="relative w-[35%] h-[29rem] border-[.0875rem] border-[#c9c9c9] flex flex-col justify-center px-10">
                    <h3 className="text-white text-opacity-80 text-2xl font-bold">Recommended</h3>
                    {videoData.map((item, index) => (
                      <LandingVideoCard 
                        key={index}
                        videoImg={item.img}
                        videoDuration={item.videoDuration}
                        videoChannel={item.channel}
                        videoTitle={item.title}
                        videoPostDate={item.postDate}
                        videoViews={item.views}
                      />
                    ))}
                  </div>

                  <div className="-ml-40 mb-10 w-[72%] h-[16rem] rounded-[9rem] border-[.0938rem] border-[#a3a3a3]  backdrop-blur-[.625rem] backdrop-brightness-75 grid grid-cols-3 place-content-center gap-14 items-center px-24  "
                     style={{
                      background: 'linear-gradient(135deg,rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.15) 70%)',
                    }}
                  >
                    {resourcesAbout.map((item, index) => (
                        <article key={index} className=" flex flex-col gap-3 font-Poppins text-[#dadada] ">
                          <h3 className="font-semibold text-2xl">{item.title}</h3>
                          <hr className="bg-[#e3daff] h-1 w-[13%] " />
                          <p className="font-extralight">{item.description} </p>
                        </article>
                      ))}
                  </div>
                </div>

              </div>
        </section>

        {/* FOOTER */}
        <footer className="h-auto flex items-center justify-center px-7 pt-36 pb-20 bg-[#1F1E1F66] backdrop-blur-[1rem] ">
          <div className="flex flex-col w-[60%] ">
            <div className="border-b-[.0625rem] border-b-white border-opacity-25 flex flex-col items-center justify-center gap-5 pb-40">
              <h2 className="font-medium text-[2.5rem] ">Secure. Engaging. Inclusive.</h2>
              <p className="w-[95%] text-center text-lg ">We’re a diverse and passionate team that takes ownership of your design and empower you to execute the roadmap. We stay light on our feet and truly enjoy delivering great work.</p>
              <button className="bg-serene rounded-sm font-semibold  text-[#0b0b0b] text-sm md:text-base lg:w-[35%] px-5 md:px-10 py-2 ">Get Started</button>
            </div>


            <div className="flex items-center justify-between mt-5">
              <img src={sereneS} alt="Serene logo" className="size-8" />
              <p className="text-xl">© 2024 Serene. All Rights Reserved. </p>
              <div className="flex items-center justify-center gap-2">
                <GrFacebookOption className="size-10 border-[.09rem] border-white border-opacity-25 px-2 rounded-full "  />
                <FaLinkedinIn className="size-10 border-[.09rem] border-white border-opacity-25 px-3 rounded-full "/>
                <FaXTwitter className="size-10 border-[.09rem] border-white border-opacity-25 px-3 rounded-full "/>
              </div>
            </div>
          </div>
        </footer>

      </main>
       
    </>
  )
}

export default LandingPage;
