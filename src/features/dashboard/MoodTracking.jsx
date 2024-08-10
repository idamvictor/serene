import { moodImg } from "@/assets";

function DashboardQuickChat() {
  return (
    <section className="flex flex-col justify-center items-center gap-[24px] p-[33px_30px] self-stretch rounded-[15px] bg-serene-ash">
      <p className="text-[#191919] font-[600] text-[26px]">
        What's your mood like today 
      </p>
      <p className="text-[20px] font-[600] text-[#666]">4 August</p>
      <div className="flex items-start gap-[8px] self-stretch">
        <ChatButton>Hey</ChatButton>
        <ChatButton>Hello, good morning!</ChatButton>
        <ChatButton>Hi, its nice to meet you!</ChatButton>
      </div>
      <img src={moodImg} alt="" />
    </section>
  );
}

export default DashboardQuickChat;

function ChatButton({ children }) {
  return (
    <button className="flex justify-center items-center gap-[10px] p-[10px_26px] rounded-[10px] border border-[#B2A4DC] bg-[#C1B4E9]">
      {children}
    </button>
  );
}
