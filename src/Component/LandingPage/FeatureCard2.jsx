

const FeatureCard2 = ({animation, bgImg, title}) => {
  return (
    <>
      <article data-aos="zoom-in-left" data-aos-duration="1500" {...animation} className="size-auto rounded-2xl bg-no-repeat bg-cover md:w-[80%] xl:w-[64%] h-[31.25rem] pb-7 px-10 flex flex-col justify-end  " 
                style={{
                backgroundImage: `url(${bgImg})`, 
              }}>
                <h2 className="text-[2rem] md:text-[2.44rem] font-bold">{title}</h2>
                <p className="text-[1.15rem] font-medium lg:pr-[15.5rem] md:leading-tight ">Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante.</p>
        </article>
    </>
  )
}

export default FeatureCard2;
