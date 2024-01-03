import Image from "next/image";

export default function ContentCard() {
    return (
        <>
        <div className="max-w-[300px] lg:max-w-[240px] bg-gray-100 shadow-md mb-8 lg:mb-0">
            <figure className="w-full">
                <Image src={'/assets/images/content1.jpeg'} width={350} height={100} />
            </figure>
            <h1 className="font-inter-semibold text-[11px] text-justify m-4">Pelatihan dan Pendampingan Web Desa Pucang, Bawang, Banjarnegara untuk Meningkatkan Layanan Publik</h1>
        </div>
        </>
    )
}