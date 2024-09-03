import StarRating from "../ui/StarRating";
import { Badge } from "../ui/badge";



const AllTherapist = ({name,type,gender,expertise,ratings,image}) => {
    return (
      <div className=" mt-10 border-white border-opacity-35 rounded-lg p-4 shadow-lg border ">
        <div className="mb-4 flex flex-col">
          <div className="flex gap-3 items-center">
            <img
              src={image}
              loading="lazy"
              className=" w-20 h-20 rounded-full mr-4"
            />
            <div className="flex flex-col">
              <h3 className="text-white font-semibold text-lg flex flex-col mt-3">
                {name}
                <span className="text-gray-400 text-sm font-medium">
                  {type}
                </span>
              </h3>
              <div className="flex gap-3 items-center">
                <StarRating rating={ratings} />
                <span className="text-white">({ratings})</span>
              </div>
            </div>
          </div>
          <h2 className="text-white text-sm mt-6">EXPERTISE</h2>
          <div className=" text-sm flex gap-2 px-1 pt-3 pb-10 border-white border-b border-opacity-15  ">
            {/* ExpertiseTag 1: Depression */}
            <Badge variant="first">{expertise[0]}</Badge>
            <Badge variant="second">{expertise[1]}</Badge>
            <Badge variant="third">{expertise[2]}</Badge>
          </div>
        </div>
      </div>
    );
}
export default AllTherapist