export default function Hero() {
    return (
        <>
            <div className="absolute top-0 -z-50 w-full">
                <video
                    src="https://res.cloudinary.com/dot9iikam/video/upload/v1759500850/video_wow_1_cruufv.mp4"
                    autoPlay
                    loop
                    muted
                    className="hidden leading-none absolute w-full h-[850px] top-0 -z-10 md:block object-cover"
                ></video>

                <div className="holder h-[900px] relative">
                    <img
                        src="MidnightMobilesm.png"
                        alt="Midnight"
                        className="w-full h-full object-cover object-top absolute top-0 -z-10 md:hidden"
                    />
                    <img part="image" className="absolute top-96 translate-y-10 w-[420px] left-1/2 -translate-x-1/2 md:top-8 md:w-[480px] md:translate-x-0 md:ml-28 md:mt-24 md:left-0" src="https://blz-contentstack-images.akamaized.net/v3/assets/blt3452e3b114fab0cd/blte82ef8135378a09b/5d4883cabf384b03afd01553/Logo-wow.png" alt="World of Warcraft: Midnight Logo" loading="lazy"></img>
                </div>

                {/* Leather background overlay */}
                <div className="absolute w-full left-0 top-[350px] md:h-[800px] md:top-[150px] h-[700px] -z-5 pointer-events-none">
                    <img
                        src="bg-leather.jpg"
                        alt="Leather Texture"
                        className="object-cover w-full h-full"
                        style={{
                            maskImage: 'linear-gradient(to bottom, transparent 0%, transparent 40%, black 80%, black 100%)',
                            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, transparent 40%, black 80%, black 100%)'
                        }}
                    />
                </div>
                <div className="text relative -mt-72 md:-mt-36 w-[453px] mx-auto space-y-3 md:ml-32 md:-translate-y-96 md:w-[720px] 2xl:w-[773px] 2xl:ml-24 z-10">
                    <h1 className="text-4xl text-center font-bold font-mavenPro uppercase md:text-left 2xl:text-5xl">World of Warcraft: Midnight Revealed!</h1>
                    <p className="text-center font-mavenPro md:text-left 2xl:text-xl opacity-80">Return to the elven kingdom of Quel'Thalas as Xal'atath's invasion of Azeroth begins, and the Voidstorm threatens to cover the world in darkness.</p>
                    <div className="flex gap-5 justify-center md:justify-start pt-10">
                        <button className="w-64 h-[74px] bg-[#aa2409cc] border border-[#FF2B00] text-[#F8B700] text-2xl">PRE-PURCHASE</button>
                        <button className="w-60 h-[74px] bg-[#0000004d] border border-[#F8B700] text-[#F8B700] text-2xl">LEARN MORE</button>
                    </div>

                </div>

                {/* Leather background overlay */}


            </div>
        </>
    )
}