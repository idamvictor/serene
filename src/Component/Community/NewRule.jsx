import { ruleArrowDown } from "@/assets";


const NewRule = ({rule}) => {
  return (
    <>
        <div className="flex items-center justify-between ">
            <li className="text-serene-gray text-[.92rem] w-[90%]  "> 
                <p className="ml-3 tracking-wider w-[90%] ">{rule}</p>
            </li>
            <img src={ruleArrowDown} alt="" className="" />
        </div>
    </>
  )
};

export default NewRule;
