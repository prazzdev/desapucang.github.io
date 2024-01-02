export default function HeroSection() {
    return (
        <>
        <section id="hero" className="min-h-[50vh] bg-red-">
            <div id="tagline" className="h-[60vh] lg:h-[70vh] w-[100vw] flex flex-col justify-center px-5 lg:px-[8em] text-white">
                <h5 className="font-inknutantiqua-reg text-sm lg:text-xl">Selamat Datang di Website Resmi</h5>
                <h1 className="font-mclaren-reg text-[2em] lg:text-[3.3em]">Desa Pucang</h1>
                <h3 className="font-mclaren-reg text-[1em] lg:text-[1.7em] tracking-widest">Kec. Bawang, Kab. Banjarnegara</h3>
            </div>
        </section>
        </>
    )
}