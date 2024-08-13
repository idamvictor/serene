// // ======================================= Navigation Tabs =========================================

// export default function NavigationTabs({ activeTab }){
//   const tabs = [
//     { name: "Booking", width: "14.75rem" },
//     { name: "Overview", width: "15.375rem" },
//     { name: "Reviews", width: "14.8125rem" },
//   ];

//   return (
//     <nav className="flex flex-wrap gap-5 items-center w-full tracking-wide whitespace-nowrap font-[450] text-stone-300 max-md:max-w-full">
//       {tabs.map((tab) => (
//         <div
//           key={tab.name}
//           className={`gap-2.5 self-stretch px-24 py-1.5 my-auto rounded-lg min-h-[2.25rem] transition-colors duration-300 ${
//             tab.name === activeTab
//               ? "bg-yellow-300 font-semibold text-zinc-900"
//               : "bg-stone-900 hover:bg-stone-700 hover:text-white"
//           }`}
//           style={{ width: tab.width }}
//         >
//           {tab.name}
//         </div>
//       ))}
//     </nav>
//   );
// };

export default function NavigationTabs({ activeTab, setActiveTab }) {
  const tabs = [
    { name: "Booking", width: "14.75rem" },
    { name: "Overview", width: "14.75rem" },
    { name: "Reviews", width: "14.75rem" },
  ];

  return (
    <nav className="flex flex-wrap gap-5 items-center w-full tracking-wide whitespace-nowrap font-[450] text-stone-300 max-md:max-w-full">
      {tabs.map((tab) => (
        <div
          key={tab.name}
          className={`gap-2.5 self-stretch flex justify-center py-1.5 my-auto rounded-lg min-h-[2.25rem] transition-colors duration-300 cursor-pointer ${
            tab.name === activeTab
              ? "bg-yellow-300 font-semibold text-zinc-900"
              : "bg-stone-900 hover:bg-stone-700 hover:text-white"
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
