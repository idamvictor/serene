
const PopupModal = ({ isOpen, onClose, popupTitle, btn1, btn2, btn2Logic  }) => {
    if (!isOpen) return null;


  return (
    <>
  
        <div 
        className="fixed inset-0 flex items-center justify-center z-50" 
        aria-modal="true" 
        role="dialog"
        // onClick={onClose}
    >
        <div className="fixed inset-0 bg-black opacity-50"  onClick={(e) => e.stopPropagation()}></div>

        <div className="bg-[#272727] rounded-lg w-[480px] z-10 px-6 py-8 flex flex-col items-center gap-6 text-center">
            <h3 className="text-[#fcfcfc] text-xl tracking-wide font-semibold">
               {popupTitle}
            </h3>

            <div className="flex flex-col px-7 w-full gap-2.5 text-sm font-semibold">
                <button className="border border-serene bg-serene py-2 px-3 rounded-[4px] cursor-pointer" onClick={onClose}>{btn1}</button>

                <button className="border border-[#ff6767] text-[#ff6767] py-2 px-3 rounded-[4px] cursor-pointer"
                    onClick={btn2Logic}
                >
                    {btn2}
                </button>
            </div>
        </div>
    </div>
   
        
    </>
  )
}

export default PopupModal;
