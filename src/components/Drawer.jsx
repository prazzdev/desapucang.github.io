import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Drawer = () => {
    return (
        <>
        <div className="drawer lg:hidden">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Page content here */}
                <label htmlFor="my-drawer">
                    <Image 
                        src={'/assets/images/hamburger.svg'} width={25} height={25}
                        className="w-[40px]"
                    />
                </label>
            </div> 
            <div className="drawer-side">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                    <li><a href="/">Beranda</a></li>
                    <li>
                        <details>
                        <summary>Pemerintahan Desa</summary>
                        <ul>
                            <li><Link href='/visi-misi'>Visi Misi</Link></li>
                            <li><Link href='/pemerintah-desa'>Pemerintah Desa</Link></li>
                            <li><Link href='/profil-wilayah-desa'>Profil Wilayah Desa</Link></li>
                            <li><Link href='/sejarah-desa'>Sejarah Desa</Link></li>
                        </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                        <summary>Data Desa</summary>
                        <ul>
                            <li><Link href='/data-wilayah-administratif'>Data Wilayah Administratif</Link></li>
                            <li><Link href='/data-pendidikan-dalam-kk'>Data Pendidikan dalam KK</Link></li>
                            <li><Link href='/data-pekerjaan'>Data Pekerjaan</Link></li>
                            <li><Link href='/data-usia'>Data Usia</Link></li>
                        </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                        <summary>Regulasi</summary>
                        <ul>
                            <li><Link href='/produk-hukum'>Produk Hukum</Link></li>
                            <li><Link href='/informasi-publik'>Informasi Publik</Link></li>
                        </ul>
                        </details>
                    </li>
                    <li><Link href='/peta-desa'>Peta Desa</Link></li>
                    <li><Link href='/galeri'>Galeri</Link></li>
                    <li><Link href='/kontak'>Hubungi Kami</Link></li>
                </ul>
            </div>
        </div>
        </>
    );
}

export default Drawer;
