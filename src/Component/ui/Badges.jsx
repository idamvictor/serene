const brandColors = ['#e1dc58', '#ebe5dd', '#e3daff'];

export const randomColorsFn = () => {
  const randomIndex = Math.floor(Math.random() * brandColors.length );
  return brandColors[randomIndex];
};


export default function Badges({ children, styling }) {
  const getColor = randomColorsFn();


  return (
    <p className={`${styling} inline-flex justify-center items-center p-[5px_10px] rounded-[19px] text-[.6rem] font-semibold xl:text-xs `}
      // style={{ backgroundColor: getColor }}
    >
      {children}
    </p>
  );
}