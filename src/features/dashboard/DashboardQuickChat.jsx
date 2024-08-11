const ChatButton = ({ message }) => {
  return (
    <button className="text-center text-[#211f2a] font-semibold text-xs px-3 py-2 rounded-lg border border-[#B2A4DC] bg-[#C1B4E9]">{message}</button>
  );
};

const DashboardQuickChat = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-3 p-4 rounded-md bg-[#E3DAFF] w-[24rem] h-auto">
      <p className="text-[#605A74] font-medium text-xs tracking-wide">
        You have been matched with one started his own journey few years ago to
        be your personal guide and to push each other
      </p>

      <div className="flex items-center gap-2">
        <div className="bg-[#EB5757] rounded-full flex items-center justify-center w-5 h-5 text-[.6rem] text-white">12</div>
       
        <p className="text-[#605A74] text-[.8rem] font-medium flex items-center gap-1 tracking-wide">
          <strong className="text-[#0b0b0b] flex items-center">user id_12345</strong> is excited to meet you! Say hi to him 👋🏻
        </p>
      </div>

      <div className="flex gap-2">
        <ChatButton message={`Hey`} />
        <ChatButton message={`Hello, Good morning!`}/>
        <ChatButton message={`Hi, it's nice to meet you!`} />
      </div>
    </section>
  );
};

export default DashboardQuickChat;