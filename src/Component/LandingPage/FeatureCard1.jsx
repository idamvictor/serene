

const FeatureCard1 = ({title, animation, cardImg }) => {
  return (
    <>
      <article {...animation} className=" relative border-[.0875rem] border-[#9f9f9f] rounded-2xl md:w-[80%] xl:w-[36%] h-[37.5rem] flex flex-col gap-5 font-semibold px-10 ">
       { cardImg ? <img src={cardImg} alt="" className="absolute place-self-center mt-[-3.5rem] md:mt-[-4.5rem] size-28 md:size-36 " /> : null}
        <h2 className=" text-[2rem] md:text-[2.44rem] mt-[8rem] md:mt-[10rem] ">{title}</h2>
        <p className="text-[1.15rem] font-medium md:pr-[6rem] md:leading-tight lg:leading-relaxed xl:leading-tight ">Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante.</p>
        </article>
    </>
  )
}

export default FeatureCard1;
