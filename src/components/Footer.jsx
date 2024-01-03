import Image from "next/image";

export default function Footer() {
    return (
        <>
        <footer className="flex flex-col lg:flex-row justify-between bg-[#434C51] py-8 lg:py-[4em] pl-6 lg:pl-[5em] pr-0 lg:pr-[13em] text-gray-100">
            <div className="mb-5 lg:mb-0">
                <h1 className="font-inter-bold text-md lg:text-xl mb-1 lg:mb-3">Desa Pucang</h1>
                <ul className="leading-5 text-sm lg:text-md">
                    <li>Jl. Raya Pucang, Kecamatan Bawang</li>
                    <li>Kabupaten Banjarnegara</li>
                    <li>Provinsi Jawa Tengah</li>
                    <li>Kode Pos 53471</li>
                </ul>
            </div>
            <div className="mb-5 lg:mb-0">
                <h1 className="font-inter-bold text-md lg:text-xl mb-1 lg:mb-3">Kategori</h1>
                <div className="flex items-center flex-wrap">
                    <a href="" className="text-xs lg:text-md py-1 px-3 lg:px-6 bg-[#2E3D45] mr-3">Berita Desa</a>
                    <a href="" className="text-xs lg:text-md py-1 px-3 lg:px-6 bg-[#2E3D45] mr-3">Layanan Mandiri</a>
                    <a href="" className="text-xs lg:text-md py-1 px-3 lg:px-6 bg-[#2E3D45] mr-3">Data Desa</a>
                </div>
            </div>
            <div className="flex flex-row justify-center lg:justify-start font-inter-reg mt-5 lg:mt-0">
                <a href="#" className="mr-2">
                    <figure className="p-2 bg-gray-300 rounded-full">
                        <Image 
                            src={'/assets/images/facebook.svg'} width={22} height={22}
                            className="w-[18px] lg:w-[50px]"
                        />
                    </figure>
                </a>
                <a href="#" className="mr-2">
                    <figure className="p-2 bg-gray-300 rounded-full">
                        <Image 
                            src={'/assets/images/twitter.svg'} width={22} height={22}
                            className="w-[18px] lg:w-[50px]"
                        />
                    </figure>
                </a>
                <a href="#" className="mr-2">
                    <figure className="p-2 bg-gray-300 rounded-full">
                        <Image 
                            src={'/assets/images/instagram.svg'} width={22} height={22}
                            className="w-[18px] lg:w-[50px]"
                        />
                    </figure>
                </a>
            </div>
        </footer>
        </>
    )
}