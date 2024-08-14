// import StarRating from "@/Component/ui/StarRating";  //TODO: DELETE

export default function ProfileHeader({ name, avatarSrc, coverSrc, children, profileHeaderStyling, profileCoverStyling, title, rating, }) {
  return (
    <header className="flex flex-col w-full rounded-none max-md:max-w-full">
      <img
        loading="lazy"
        src={coverSrc}
        alt="Profile cover"
        className={`object-contain w-full rounded-lg  ${profileCoverStyling}`}
      />
      <div className="flex z-10 gap-2 items-start self-start -mt-12 ml-14 max-md:ml-2.5 w-[93%] ">
        <img
          loading="lazy"
          src={avatarSrc}
          alt={`${name}'s avatar`}
          className={`object-contain shrink-0 self-start border-[.3rem] border-[#131313] rounded-full ${profileHeaderStyling} `}
        />

        {children}

        {/* TODO: DELETE THE CODE BELOW */}
        {/* <div className="flex flex-col self-end mt-16 max-md:mt-10">
          <h1 className="text-xl font-semibold tracking-normal leading-tight text-white">
            {name}
          </h1>
          <p className="mt-1.5 text-base font-medium tracking-normal text-white">
            {title}
          </p>
          <div className="flex gap-2.5 items-center mt-1.5 w-full">
            <StarRating rating={4} />
            <span className="self-stretch my-auto text-base font-medium text-white">
              ({rating})
            </span>
          </div>
        </div> */}

      </div>
    </header>
  );
};
