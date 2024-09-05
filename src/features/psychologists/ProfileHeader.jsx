// import StarRating from "@/Component/ui/StarRating";  //TODO: DELETE

export default function ProfileHeader({ name, avatarSrc, coverSrc, children, profileHeaderStyling, profileCoverStyling, title, rating, }) {
  return (
    <header className="flex flex-col w-full rounded-none md:max-w-full">
      <img
        loading="lazy"
        src={coverSrc}
        alt="Profile cover"
        className={`lg:w-full rounded-lg  ${profileCoverStyling}`}
      />
      <div className="flex z-10 gap-2 items-start self-start -mt-12 ml-14 max-md:ml-2.5 w-[93%] ">
        <img
          loading="lazy"
          src={avatarSrc}
          alt={`${name}'s avatar`}
          className={` border-[.3rem] border-[#131313] rounded-full ${profileHeaderStyling} `}
        />

        {children}
      </div>
    </header>
  );
};



