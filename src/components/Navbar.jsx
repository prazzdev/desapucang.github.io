import Image from "next/image";
import NavMenu from "./partials/NavMenu";

export default function Navbar() {
    return (
        <>
        <nav className="flex flex-col bg-[#EEEEEE] overflow-x-hidden">
            <div className="flex justify-between items-center my-7 px-[6em]">
                <a 
                    href="/" id="logo" 
                    className="flex items-center">
                    <figure className="mr-5">
                        <Image 
                            src={'./assets/images/banjarnegara-kab.svg'} width={50} height={50}
                            className="" />
                    </figure>
                    <div className="caption">
                        <h1 className="font-inter-bold uppercase text-lg -mb-1">Desa Pucang</h1>
                        <h4 className="font-inter-reg text-[14px] -mb-1">Kecamatan Bawang</h4>
                        <h4 className="font-inter-reg text-[14px]">Kabupaten Banjarnegara</h4>
                    </div>
                </a>
                <div id="navmenu" className="flex flex-col items-end bg-blue-">
                    <div className="flex items-center mb-5">
                        <Image src={'/assets/images/map.svg'} width={25} height={25} className="-mr-5" />
                        <NavMenu text={'Peta Desa'} target={'#'} />
                        |
                        <NavMenu text={'Kontak'} target={'#'} />        
                        <input 
                            type="text" name="search" placeholder="Pencarian" 
                            className="font-inter-reg bg-transparent p-2 border-2 border-gray-700 rounded-lg" />
                    </div>
                    <div className="">
                        <NavMenu text={'Beranda'} target={'/'} />
                        <NavMenu text={'Profil Desa'} target={'#'} />
                        <NavMenu text={'Data Desa'} target={'#'} />
                        <NavMenu text={'Regulasi'} target={'#'} />
                        <NavMenu text={'Galeri'} target={'/galeri'} />
                    </div>
                </div>
            </div>
        </nav>
        </>

    )
}