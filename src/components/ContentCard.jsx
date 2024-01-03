import Image from "next/image";

export default function ContentCard() {
    return (
        <>
        <a href="#" className="max-w-[300px] lg:max-w-[240px] bg-gray-100 shadow-md mb-8 lg:mb-0 rounded-lg overflow-hidden">
            <figure className="w-full p-4">
                <Image 
                    src={'/assets/images/content1.jpeg'} width={350} height={100} 
                    className="rounded-lg"
                />
            </figure>
            <h1 className="font-inter-semibold text-[11px] text-justify m-4 mt-0">Pelatihan dan Pendampingan Web Desa Pucang, Bawang, Banjarnegara untuk Meningkatkan Layanan Publik</h1>
        </a>
        </>
    )
}