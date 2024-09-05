const brandColors = ['#e1dc58', '#ebe5dd', '#e3daff'];

export const randomColorsFn = () => {
  const randomIndex = Math.floor(Math.random() * brandColors.length );
  return brandColors[randomIndex];
};

//* THE BADGES BG COLOUR SHOULD CHANGE DEPENDING ON THE THE WORDS LIKE "ANXIETY " ETC 
//* PAGES WHERE THE BADGES WERE IMPLEMENTED SHOULD BE REFACTORED WHEN THE FUNCTION ABOVE IS IMPLEMENTED. STYLINGS SHOULD BE BASED ON THE PAGES IT'S BEEN USED IN
export default function Badges({ children, styling }) {
  const getColor = randomColorsFn();


  return (
    <p className={`${styling} inline-flex justify-center items-center p-[5px_10px] rounded-[19px] text-[.6rem] font-semibold xl:text-xs text-[#191919]`}
      // style={{ backgroundColor: getColor }}
    >
      {children}
    </p>
  );
}