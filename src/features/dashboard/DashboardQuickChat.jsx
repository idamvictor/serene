import { quickChatPic } from "@/assets";

const ChatButton = ({ message }) => {
  return (
    <button className="border border-[#B2A4DC] bg-[#C1B4E9] rounded-md text-center text-[#211f2a] font-semibold text-sm md:text-[.78rem] xl:text-[.95rem] px-6 py-1  ">{message}</button>
  );
};

const DashboardQuickChat = () => {
  return (
    <section className="dashboard-quickchat flex flex-col justify-center rounded-[.73rem] bg-[#E3DAFF] gap-3 py-5 lg:px-3 xl:px-5 xl:h-[10rem] ">
      <p className="quickchat-p1 text-[#605A74] md:font-semibold md:text-[.78rem] lg:text-[.8rem] xl:text-[.95rem] tracking-wide pr-3 ">
        You have been matched with one started his own journey few years ago to be your personal guide and to push each other
      </p>

      <div className="quickchat-otherUser flex items-center gap-2">
        <img src={quickChatPic} className="rounded-full flex items-center justify-center w-6 h-6 " />
       
        <p className="quickchat-p2 text-[#605A74] flex items-center flex-wrap gap-1 tracking-wide md:text-[.78rem] md:font-semibold xl:text-[.95rem]  ">
          <strong className="flex items-center text-[#0b0b0b] text-sm xl:text-base">Beaver</strong> is excited to meet you! Say hi to him 👋🏻
        </p>
      </div>

      <div className="flex gap-2 mt-2 flex-wrap">
        <ChatButton message={`Hey`} />
        <ChatButton message={`Hello, good morning!`}/>
        <ChatButton message={`Hi, it's nice to meet you!`} />
      </div>
    </section>
  );
};

export default DashboardQuickChat;