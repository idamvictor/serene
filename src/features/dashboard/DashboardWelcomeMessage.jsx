
function DashboardWelcomeMessage() {
  const user = JSON.parse(localStorage.getItem("userInfo"));
  const username = user.username;
  return (
    <header className="dashboard-welcome lg:mx-6 lg:mb-2 lg:mt-[7rem] ">
        <h1 className="text-white font-semibold text-2xl mb-[.35rem] ">Hey  {username} 🖐🏻</h1>
      <p className="text-serene-gray font-medium text-base">We are excited that you have started this journey to greatness.</p>
    </header>
  )
}

export default DashboardWelcomeMessage;
