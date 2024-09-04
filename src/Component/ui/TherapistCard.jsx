

const TherapistCard = ({children}) => {
   

    return (
      <>
        <div className="therapistCard-cont border-[1px] rounded-xl border-[#747474] p-4 mr-4 pr-12 lg:pr-0 lg:mr-0 lg:h-44 lg:max-w-full ">
            {children}
          </div>
      </>
    );
    }
 
export default TherapistCard;