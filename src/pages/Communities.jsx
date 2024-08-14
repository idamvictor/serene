import Post from "@/Component/ui/Post";
import Layout from "@/Component/Shared/Layout";
import { postPic } from "@/assets";
import CommunityRuleCard from "@/Component/ui/CommunityRuleCard";

const Communities = () => {
  return (
    <>
    <Layout>
        <header></header>

        <section className="mt-10 mx-10 flex items-center justify-center ">

            <div className="grid grid-cols-[3fr_2fr] auto-rows-auto place-content-center">
                <div className="post-cont mr-10">
                    {/* ALL POSTS WILL BE WITHIN THIS POST-CONT DIV */}
                    <h4 className="text-serene">Hot</h4>
                    <Post>
                        <p>One thing that has really helped me is focusing on small, manageable steps. I started by setting tiny goals for myself, like getting out of bed at a certain time or going for a short walk. These might seem insignificant, but accomplishing them gave me a sense of achievement and gradually built up my confidence.</p>
                    </Post>

                    <Post>
                        <p>Today felt like hell😥 I even considered suicide.</p>
                        <img src={postPic} alt="post picture" className="my-3" />
                    </Post>
                </div>

                <aside className="h-[39rem] bg-[#272727]  rounded-[9px]  ">
                    <CommunityRuleCard />
                </aside>
            </div>

        </section>
    </Layout>
     
    </>
  )
}

export default Communities;
