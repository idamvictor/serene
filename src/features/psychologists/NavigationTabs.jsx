export default function NavigationTabs({ activeTab, setActiveTab, tabs}) {
 

  return (
    <nav className="flex  gap-5 items-center w-full tracking-wide whitespace-nowrap font-[450] text-stone-300 max-md:max-w-full">
      {tabs.map((tab) => (
        <div
          key={tab.name}
          className={`gap-2.5 self-stretch flex justify-center py-1.5 my-auto rounded-lg min-h-[2.25rem] transition-colors duration-300 cursor-pointer ${
            tab.name === activeTab
              ? "bg-serene font-semibold text-[#191919] text-sm lg:text-base"
              : "bg-[#201F1F] hover:bg-stone-700 hover:text-white text-sm text-center lg:text-base"
          }`}
          style={{ width: tab.width }}
          onClick={() => setActiveTab(tab.name)}
        >
          {tab.name}
        </div>
      ))}
    </nav>
  );
}
