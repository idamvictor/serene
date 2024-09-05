import React, {useState} from 'react'
import Card from './Card';
import {  recommendedTherapistImage } from '@/assets';

function Tabs({activeTab, setActiveTab}) {
    const tabs = ["Upcoming", "Completed", "Cancelled"];

    return(
        <>
              <div className='w-full flex gap-7 px-12'>
            
            {tabs.map((tab) => (

                
                <button 
                key={tab}
                className={`w-[33.33%] py-[.3rem] text-sm text-center rounded-md xl:text-[.95rem] ${
                    tab === activeTab
                        ? "bg-serene font-semibold text-[#191919] "
                        : "bg-[#201f1f] border border-[#201f1f] text-[#c7c7c7] "
                }`} 
                onClick={() => setActiveTab(tab)}
                >
                    {tab}
                </button>
                ))
            }
             </div> 
        </>
    );
}

const Setting = () => {
    const [activeTab, setActiveTab] = useState("Upcoming");


    return (  
        <>
            <section className="dashboard-resources  flex flex-col rounded-lg col-span-2 h-auto mt-7 py-5 px-6 lg:px-4 md:mt-10 xl:px-8 ">


                <div className='mt-12 px-12'>
                    <h3 className='text-2xl font-bold text-white'>My Bookings</h3>
                </div>
                <div className="resourceCard-btn-group md:flex md:justify-center md:mt-10 md:gap-7 hidden">
                    <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
                </div>

               
                <main>
                {/* FOR VIDEOS SECTION */}
                {activeTab === "Upcoming" && (
                    <div className='flex gap-7 px-12 mt-12'>
                       
                        <Card />
                        <Card /> 
                
                    </div>
                )}


                {/* FOR ARTICLES SECTION */}
                {activeTab === "Completed" && (
                    <>
                        {/* <Info desc='Your Wallet ID' /> */}

                         <div className='mx-[500px] mt-[100px] '>
                           <img src={recommendedTherapistImage} alt="" className='w-[318px] h-[267px]' />
                           <div className='mt-6'>
                                <p className='text-serene-ash font-medium'>You haven't completed any session</p>
                                <p className='text-serene font-medium'>See Recommended therapists for you</p>
                           </div>
                        </div>

                    </> 
                )}

                {
                    activeTab === "Cancelled" && (
                        <>
                            <div className='mx-[500px] mt-[100px] '>
                                <img src={recommendedTherapistImage} alt="" className='w-[318px] h-[267px]' />
                                <div className='mt-6'>
                                        <p className='text-serene-ash font-medium text-center'>Nothing to Show Here</p>
                                        
                                </div>
                             </div>

                                
                        </>
                    )
                }

               
                   
                </main>
            </section>
        </>
    );
}

export default Setting