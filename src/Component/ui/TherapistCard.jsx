import {star} from '@/assets';
import Badges from './Badges';


const TherapistCard = () => {
    return ( 
        <>
            <div className="therapistCard-cont border-[1px] rounded-xl border-[#747474] w-[12.5rem] p-4 xl:w-[14.6rem] ">
                <div className="therapistCard-profile flex gap-3">
                    <img src="" alt="" className="h-9 w-9 bg-[#d9d9d9] rounded-full" />

                    <div className="therapistCard-info">
                        <p className="text-white font-semibold text-[.8rem] xl:text-base ">Dike Odogwu</p>
                        <p className="text-serene-gray text-[.7rem] font-medium my-1 xl:text-sm ">Family Therapist</p>
                        <div className="therapistCard-rating flex items-center gap-1  ">
                            <img src={star} alt="" />
                            <span className="text-[#7B7B7B] text-[.65rem] font-medium xl:text-xs ">4.92</span>
                        </div>
                    </div>
                </div>

                <div className="text-[#191919] flex gap-2 flex-wrap mt-6">
                    <Badges styling="bg-serene-purple ">Depression</Badges>
                    <Badges styling="bg-serene ">Anxiety</Badges>
                    <Badges styling="bg-serene-ash">Family issues</Badges>
                </div>
            </div>
        </>
     );
}
 
export default TherapistCard;