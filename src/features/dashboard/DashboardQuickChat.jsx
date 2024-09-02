import { quickChatPic } from "@/assets";

const ChatButton = ({ message }) => {
  return (
    <button className="border border-[#B2A4DC] bg-[#C1B4E9] rounded-md text-center text-[#211F2A] font-medium text-sm lg:text-[.78rem] xl:text-sm px-6 py-1 lg:px-2  ">
      {message}
    </button>
  );
};

const DashboardQuickChat = () => {
  return (
    <section className="dashboard-quickchat flex flex-col justify-center rounded-[.73rem] bg-[#E3DAFF] gap-3 py-5 lg:py-4 lg:px-3 lg:h-[192px] xl:px-5 xl:h-44 ">
      <p className="quickchat-p1 tracking-wide pr-3 text-[#605A74] md:font-semibold md:text-[.78rem] lg:text-[.8rem] xl:text-sm  ">
        You have been matched with one started his own journey few years ago to be your personal guide and to push each other
      </p>

      <div className="quickchat-otherUser flex items-center gap-2">
        <img src={quickChatPic} className="rounded-full flex items-center justify-center w-6 h-6 " />
       
        <p className="quickchat-p2 text-[#605A74] flex items-center flex-wrap gap-1 tracking-wide md:text-[.78rem] md:font-semibold xl:text-sm  ">
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