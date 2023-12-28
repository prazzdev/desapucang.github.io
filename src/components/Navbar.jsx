import Image from "next/image";
import NavMenu from "./partials/NavMenu";

export default function Navbar() {
    return (
        <>
        <nav className="flex flex-col bg-[#EEEEEE] overflow-x-hidden">
            <div className="flex justify-between items-center my-7 px-[6em] bg-red-">
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
                        <NavMenu text={'Peta Desa'} target={'/peta-desa'} />
                        |
                        <NavMenu text={'Kontak'} target={'/kontak'} />        
                        <input 
                            type="text" name="search" placeholder="Pencarian" 
                            className="font-inter-reg bg-transparent p-2 border-2 border-gray-700 rounded-lg" />
                    </div>
                    <div className="flex flex-wrap items-center bg-red-">
                        <NavMenu text={'Beranda'} target={'/'} />
                        <NavMenu 
                            text={'Pemerintahan Desa'} target={'#'} haveChild={true}
                            child={[
                                {title: 'Visi Misi'},
                                {title: 'Pemerintah Desa'},
                                {title: 'Profil Wilayah Desa'},
                                {title: 'Sejarah Desa'}
                            ]} 
                        />
                        <NavMenu 
                            text={'Data Desa'} target={'#'} haveChild={true}
                            child={[
                                {title: 'Data Wilayah Administratif'},
                                {title: 'Data Pendidikan dalam KK'},
                                {title: 'Data Pekerjaan'},
                                {title: 'Data Usia'},
                            ]}
                        />
                        <NavMenu 
                            text={'Regulasi'} target={'#'} haveChild={true}
                            child={[{title: 'Produk Hukum'},{title: 'Informasi Publik'}]}
                        />
                        <NavMenu text={'Galeri'} target={'/galeri'} />
                    </div>
                </div>
            </div>
        </nav>
        </>

    )
}