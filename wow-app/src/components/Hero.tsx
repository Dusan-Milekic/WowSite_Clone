export default function Hero() {
    return (
        <>
            <div className="relative">
                <video
                    src="https://res.cloudinary.com/dot9iikam/video/upload/v1759500850/video_wow_1_cruufv.mp4"
                    autoPlay
                    loop
                    muted
                    className="hidden leading-none absolute w-full h-[800px] top-0 -z-10 md:block object-cover"
                ></video>

                <div className="holder h-[800px] relative">
                    <img
                        src="MidnightMobilesm.png"
                        alt="Midnight"
                        className="w-full h-full object-cover object-top absolute top-0 -z-10 md:hidden"
                    />
                    <img part="image" className="absolute top-96 translate-y-10 w-[420px] left-1/2 -translate-x-1/2 md:top-8 md:w-[480px] md:translate-x-0 md:ml-60 md:left-0" src="https://blz-contentstack-images.akamaized.net/v3/assets/blt3452e3b114fab0cd/blte82ef8135378a09b/5d4883cabf384b03afd01553/Logo-wow.png" alt="World of Warcraft: Midnight Logo" loading="lazy"></img>
                </div>
                <div className="text relative -top-48 w-[453px] mx-auto space-y-3 md:ml-32 md:-translate-y-80 md:w-[720px] 2xl:w-[773px] 2xl:ml-24">
                    <h1 className="text-4xl text-center font-bold font-mavenPro uppercase 2xl:text-5xl">World of Warcraft: Midnight Revealed!</h1>
                    <p className="text-center font-mavenPro 2xl:text-xl opacity-80">Return to the elven kingdom of Quel'Thalas as Xal'atath's invasion of Azeroth begins, and the Voidstorm threatens to cover the world in darkness.</p>
                    <div className="flex gap-5 justify-center pt-10">

                        <button className="w-64 h-[74px] bg-[#aa2409cc] border border-[#FF2B00] text-[#F8B700] text-2xl">PRE-PURCHASE</button>
                        <button className="w-60 h-[74px] bg-[#0000004d] border border-[#F8B700] text-[#F8B700] text-2xl">LEARN MORE</button>


                    </div>
                </div>
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-screen h-40 bg-gradient-to-b from-[#0a0d2c] to-[#1f1106] pointer-events-none"></div>
                <div className="relative w-screen -ml-[50vw] left-1/2 -mt-96 md:-mt-[500px] -z-50">
                    <img
                        src="bg-leather.jpg"
                        alt="Leather Texture"
                        className="object-cover w-full h-[500px] md:h-[600px]"
                        style={{
                            maskImage: 'linear-gradient(to bottom, transparent 0%, black 40%)',
                            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 40%)'
                        }}
                    />
                </div>
            </div>

        </>
    )
}