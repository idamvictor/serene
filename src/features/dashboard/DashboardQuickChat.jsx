function DashboardQuickChat() {
  return (
    <section className="flex flex-col justify-center items-center gap-[24px] p-[33px_30px] self-stretch rounded-[15px] bg-[#E3DAFF]">
      <p className="text-[#605A74] font-[500] text-[16px]">
        You have been matched with one started his own journey few years ago to
        be your personal guide and to push each other
      </p>
      <div>
        <span className="bg-[#EB5757] rounded-xl inline-block w-6">12</span>
        <em>user id_12345</em>
        <span className="text-[#605A74]">
          is excited to meet you! Say hi to him 👋🏻
        </span>
      </div>
      <div className="flex items-start gap-[8px] self-stretch">
        <ChatButton>Hey</ChatButton>
        <ChatButton>Hello, good morning!</ChatButton>
        <ChatButton>Hi, its nice to meet you!</ChatButton>
      </div>
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
