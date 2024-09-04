
const About = ({about}) =>{
    return(
        <header className="flex flex-col w-full text-base max-md:max-w-full ">
      <div className="flex flex-col w-full max-md:max-w-full">
        <h1 className="flex items-center gap-1.5 self-start font-[550] tracking-wide leading-none text-white text-opacity-90">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2319626a188fe57f38de4336704c24fd752817ca8ab3df6ca00b6fc203f49bca?apiKey=bc155cd4463f4c48a216b01c1991193c&"
            alt=""
            className="object-contain shrink-0 w-6 aspect-square"
          />
          ABOUT THERAPIST
        </h1>
        <p className="mt-4 tracking-wide text-wrap leading-6 font-[450] text-serene-gray text-base max-md:max-w-full max-sm:ml-1.5 opacity-70">
          {about}
        </p>
      </div>
      </header>
    )
}
export default About