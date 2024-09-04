import React, {useState} from 'react'
import { profileAvatar } from '@/assets';
import Info from './Info';
import Input from './Input';
import ToogleButton from './ToogleButton';
import Support from './Support';
import Accordion from './Accordion';

function Tabs({activeTab, setActiveTab}) {
    const tabs = ["Profile", "Security", "Notifications", "Support"];

    return(
        <>
            {tabs.map((tab) => (
                <button 
                key={tab}
                className={`w-[25%] py-[.3rem] text-sm text-center rounded-md xl:text-[.95rem] ${
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
        </>
    );
}

const Setting = () => {
    const [activeTab, setActiveTab] = useState("Profile");


    return (  
        <>
            <section className="dashboard-resources  flex flex-col rounded-lg col-span-2 h-auto mt-7 py-5 px-6 lg:px-4 md:mt-10 xl:px-8 ">


                <div className="resourceCard-btn-group md:flex md:justify-center md:mt-14 md:gap-7 hidden">
                    <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
                </div>

               
                <main>
                {/* FOR VIDEOS SECTION */}
                {activeTab === "Profile" && (

                    <div className=''>
                        <Info desc='General Infomation' />
                    <div className="flex gap-10 justify-even items-center mt-10" >
                        <img src={profileAvatar} alt="" />
                        <button className='bg-serene px-6 py-2 font-medium rounded text-center'>Change Avatar</button>
                        <button className='border border-serene px-6 py-2 font-medium rounded text-center text-serene'>Delete Avatar</button> 
                    </div>
                    <div className='mt-8 flex flex-col relative mb-32'>
                        <Input name={'Profile Name'} placeholder={'JELLYBEAN'} />
                        {/* <button className='text-serene  font-medium p-3 absolute top-[70px] right-[630px]'>Generate new Profile name</button> */}
                    </div>
                    <div className='mt-8 flex flex-col'>
                        <Input name={'Status Recently'} placeholder={'JELLYBEAN'}/>
                    </div>
                    <div className='flex mt-4'>
                        {/* <button className='mt-6 text-serene font-medium'>View Preferences </button>
                        <img src={trailing} alt="" className='pt-6 px-1 cursor-pointer'/> */}
                        <Accordion />
                    </div>
                    </div>
                )}


                {/* FOR ARTICLES SECTION */}
                {activeTab === "Security" && (
                    <>
                        <Info desc='Your Wallet ID' />

                         <div className='mt-8 flex flex-col relative mb-32'>
                            <Input name={'Wallet ID'} placeholder={'JELLYBEAN'} />
                            <button className='text-serene  font-medium p-3 absolute top-[70px] right-[630px]'>Create New Wallet</button>
                        </div>
                    </> 
                )}

                {
                    activeTab === "Notifications" && (
                        <>
                                <ToogleButton text={'Pop Notification on Desktop'} />
                                <ToogleButton text={'Turn On all Chat Notifications'} />
                                <ToogleButton text={'Turn On all Tagged Messages'} />
                                <ToogleButton text={'Turn On all Community Messages'} />
                                <ToogleButton text={'New Update Notifications'} />

                                
                        </>
                    )
                }

                {
                    activeTab === "Support" && (
                        <>
                            <Support text={'About Us'}/> 
                            <Support text={'Privacy Policy'}/>
                            <Support text={'Terms and Conditons'}/>
                            <Support text={'FAQs'}/>
                            <Support text={'Contact Us'}/>
                        </>
                    )
                }   

              
                   
                </main>
            </section>
        </>
    );
}

export default Setting