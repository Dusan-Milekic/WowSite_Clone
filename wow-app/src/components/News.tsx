export default function News() {
    return (
        <>
            <div>
                <h1 className="text-4xl text-center pt-10">Latest News & Updates</h1>
            </div>
            {/* Leather background overlay */}
            <div className=" w-full relative h-[700px] -z-5 pointer-events-none">
                <img
                    src="bg-leather.jpg"
                    alt="Leather Texture"
                    className="object-cover w-full h-full"

                />
            </div>
            <div className="relative -top-96  -mt-64 grid grid-cols-4 gap-[420px] max-w-7xl mx-auto  px-10 overflow-auto">

                <div className=" bg-black w-[402px]">
                    <div className="image-holder border border-gray-700">
                        <img part="image" src="//bnetcmsus-a.akamaihd.net/cms/blog_thumbnail/63/63KJ6LF3263V1758137690775.jpg" loading="lazy" ></img>
                    </div>
                    <div className="text-holder p-5 border border-gray-700">
                        <h3>WoW Anniversary Edition: Brave the Shadow of the Necropolis</h3>
                        <p>October 3, 2025</p>
                    </div>
                </div>

                <div className=" bg-black w-[402px]">
                    <div className="image-holder border border-gray-700">
                        <img part="image" src="//bnetcmsus-a.akamaihd.net/cms/blog_thumbnail/63/63KJ6LF3263V1758137690775.jpg" loading="lazy" ></img>
                    </div>
                    <div className="text-holder p-5 border border-gray-700">
                        <h3>WoW Anniversary Edition: Brave the Shadow of the Necropolis</h3>
                        <p>October 3, 2025</p>
                    </div>
                </div>

                <div className=" bg-black w-[402px]">
                    <div className="image-holder border border-gray-700">
                        <img part="image" src="//bnetcmsus-a.akamaihd.net/cms/blog_thumbnail/63/63KJ6LF3263V1758137690775.jpg" loading="lazy" ></img>
                    </div>
                    <div className="text-holder p-5 border border-gray-700">
                        <h3>WoW Anniversary Edition: Brave the Shadow of the Necropolis</h3>
                        <p>October 3, 2025</p>
                    </div>
                </div>

                <div className=" bg-black w-[402px]">
                    <div className="image-holder border border-gray-700">
                        <img part="image" src="//bnetcmsus-a.akamaihd.net/cms/blog_thumbnail/63/63KJ6LF3263V1758137690775.jpg" loading="lazy" ></img>
                    </div>
                    <div className="text-holder p-5 border border-gray-700">
                        <h3>WoW Anniversary Edition: Brave the Shadow of the Necropolis</h3>
                        <p>October 3, 2025</p>
                    </div>
                </div>
            </div>
            <button className="relative -top-80 w-40 h-12 bg-red-600 left-1/2 -translate-x-1/2">VIEW ALL NEWS</button>
        </>



    )
}