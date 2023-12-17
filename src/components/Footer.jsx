import Image from "next/image";

export default function Footer() {
    return (
        <>
        <footer className="flex flex-row justify-between bg-[#434C51] py-[4em] pl-[5em] pr-[13em] text-gray-100">
            <div>
                <h1 className="font-inter-bold text-xl mb-3">Desa Pucang</h1>
                <ul className="leading-5">
                    <li>Jl. Raya Pucang, Kecamatan Bawang</li>
                    <li>Kabupaten Banjarnegara</li>
                    <li>Provinsi Jawa Tengah</li>
                    <li>Kode Pos 53471</li>
                </ul>
            </div>
            <div>
                <h1 className="font-inter-bold text-xl mb-3">Kategori</h1>
                <div className="flex flex-wrap">
                    <a href="" className="py-1 px-6 bg-[#2E3D45] mr-3">Berita Desa</a>
                    <a href="" className="py-1 px-6 bg-[#2E3D45] mr-3">Layanan Mandiri</a>
                    <a href="" className="py-1 px-6 bg-[#2E3D45] mr-3">Data Desa</a>
                </div>
            </div>
            <div className="flex flex-row font-inter-reg">
                <a href="#" className="mr-2">
                    <figure className="p-2 bg-gray-300 rounded-full">
                        <Image src={'/assets/images/facebook.svg'} width={22} height={22} />
                    </figure>
                </a>
                <a href="#" className="mr-2">
                    <figure className="p-2 bg-gray-300 rounded-full">
                        <Image src={'/assets/images/twitter.svg'} width={22} height={22} />
                    </figure>
                </a>
                <a href="#" className="mr-2">
                    <figure className="p-2 bg-gray-300 rounded-full">
                        <Image src={'/assets/images/instagram.svg'} width={22} height={22} />
                    </figure>
                </a>
            </div>
        </footer>
        </>
    )
}