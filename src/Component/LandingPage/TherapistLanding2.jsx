
const TherapistLanding2 = ({width, title, customStyling }) => {
  return (
    <>
    <div className="">
      <article className={`xl:w-full h-[29.18rem] rounded-2xl flex items-center justify-center border-[2px] border-[#565656] lg:border-none min-w-[18.75rem]  ${customStyling} `}>
              <p className={`font-medium text-[1.60rem] ${width} `}>{title}</p>
          </article>
    </div>
      
    </>
  )
}

export default TherapistLanding2;
