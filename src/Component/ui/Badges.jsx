export default function Badges({ children, styling }) {
  return (
    <p className={`${styling} inline-flex justify-center items-center p-[5px_10px] rounded-[19px] text-[.6rem] md:text-sm font-semibold xl:text-xs `}>
      {children}
    </p>
  );
}