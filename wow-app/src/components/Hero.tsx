export default function Hero() {
    return (
        <>
            <video src="https://res.cloudinary.com/dot9iikam/video/upload/v1759500850/video_wow_1_cruufv.mp4" autoPlay loop muted className="hidden leading-none absolute w-full top-0 -z-10 md:block"></video>

            <div className="holder h-[800px] relative">
                <img
                    src="MidnightMobilesm.png"
                    alt="Midnight"
                    className="w-full h-full object-cover object-top absolute top-0 -z-10 md:hidden"
                />
                <img part="image" className="absolute top-96 translate-y-10 w-[420px] left-1/2 -translate-x-1/2" src="https://blz-contentstack-images.akamaized.net/v3/assets/blt3452e3b114fab0cd/blte82ef8135378a09b/5d4883cabf384b03afd01553/Logo-wow.png" alt="World of Warcraft: Midnight Logo" loading="lazy"></img>
            </div>
            <div className="text relative -top-48 w-[453px] mx-auto space-y-3">
                <h1 className="text-4xl text-center font-bold font-mavenPro uppercase">World of Warcraft: Midnight Revealed!</h1>
                <p className="text-center font-mavenPro">Return to the elven kingdom of Quel'Thalas as Xal’atath’s invasion of Azeroth begins, and the Voidstorm threatens to cover the world in darkness.</p>
            </div>


        </>
    )
}