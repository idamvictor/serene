import Post from "@/Component/ui/Post";
import Layout from "@/Component/Shared/Layout";

const Communities = () => {
  return (
    <>
    <Layout>
        <header></header>

        <section className="mt-10 mx-10 flex items-center justify-center">
            <div className="grid grid-cols-[3fr_1fr] grid-rows-auto place-content-center gap-10 ">
                <div>
                    <h4 className="text-serene">Hot</h4>
                    <Post></Post>
                </div>

                <aside className="w-[18.8rem] h-[25rem] bg-[#272727] rounded-[9px] "></aside>
            </div>

        </section>
    </Layout>
     
    </>
  )
}

export default Communities;
