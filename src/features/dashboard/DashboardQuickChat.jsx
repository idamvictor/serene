const ChatButton = ({ message }) => {
  return (
    <button className="text-center text-[#211f2a] font-semibold text-[.78rem] px-6 py-1 rounded-md border border-[#B2A4DC] bg-[#C1B4E9]">{message}</button>
  );
};

const DashboardQuickChat = () => {
  return (
    <section className="dashboard-quickChat flex flex-col justify-center gap-3 px-5 py-3 rounded-[.73rem] bg-[#E3DAFF] h-[10rem] ">
      <p className="text-[#605A74] font-semibold text-[.78rem] tracking-wide pr-3">
        You have been matched with one started his own journey few years ago to be your personal guide and to push each other
      </p>

      <div className="flex items-center gap-2">
        <div className="bg-[#EB5757] rounded-full flex items-center justify-center w-5 h-5 text-[.6rem] text-white font-semibold ">12</div>
       
        <p className="text-[#605A74] text-[.78rem] font-semibold flex items-center gap-1 tracking-wide">
          <strong className="text-[#0b0b0b] text-sm flex items-center">user id_12345</strong> is excited to meet you! Say hi to him 👋🏻
        </p>
      </div>

      <div className="flex gap-2 mt-2">
        <ChatButton message={`Hey`} />
        <ChatButton message={`Hello, good morning!`}/>
        <ChatButton message={`Hi, it's nice to meet you!`} />
      </div>
    </section>
  );
};

export default DashboardQuickChat;