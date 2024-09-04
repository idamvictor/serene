import StarRating from "@/Component/ui/StarRating"
const Reviews = ({reviews}) =>{

    return (
      <div>
        {reviews.reviews.length > 0 ? (
          <div className="px-3 py-11 lg:pr-60">
            {reviews.reviews.map((review) => (
              <div className="py-3">
                <div className="flex gap-4">
                  <img src={review.image} alt="" loading="lazy" />
                  <span className="text-white font-semibold text-base">
                    {review.name}
                    <StarRating rating={reviews.ratings}/>
                  </span>
                </div>
                <p className="mt-4 tracking-wide leading-6 font-[450] text-serene-gray text-base max-md:max-w-full max-sm:ml-1.5 opacity-70 border-b text-left py-4  ">
                  {review.reviews}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-serene">No data found</p>
        )}
      </div>
    );
}
export default Reviews