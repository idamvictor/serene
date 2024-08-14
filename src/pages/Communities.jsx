import Post from "@/Component/ui/Post";
import Layout from "@/Component/Shared/Layout";
import { postPic, ruleArrowDown } from "@/assets";
import CommunityRuleCard from "@/Component/ui/CommunityRuleCard";
import ProfileHeader from "@/features/psychologists/ProfileHeader";

const Communities = () => {
  return (
    <>
    <Layout>

        {/* <ProfileHeader /> */}
        {/* <header></header> */}

        <section className="mt-10 mb-10 mx-10 flex items-center justify-center ">

            <div className="grid grid-cols-[3fr_2fr] auto-rows-auto place-content-center">
                <div className="post-cont mr-10">
                    {/* ALL POSTS WILL BE WITHIN THIS POST-CONT DIV */}
                    <h4 className="text-serene-gray text-sm font-medium  flex items-center gap-2 mb-3 ">Hot
                        <img src={ruleArrowDown} alt="" className="w-3 h-3" />
                    </h4>
                    <Post>
                        <p>One thing that has really helped me is focusing on small, manageable steps. I started by setting tiny goals for myself, like getting out of bed at a certain time or going for a short walk. These might seem insignificant, but accomplishing them gave me a sense of achievement and gradually built up my confidence.</p>
                    </Post>

                    <Post>
                        <p>Today felt like hell😥 I even considered suicide.</p>
                        <img src={postPic} alt="post picture" className="my-3" />
                    </Post>
                </div>

                <aside className="xl:h-[41rem] bg-[#272727]  rounded-[9px]  ">
                    <CommunityRuleCard />
                </aside>
            </div>

        </section>
    </Layout>
     
    </>
  )
}

export default Communities;
