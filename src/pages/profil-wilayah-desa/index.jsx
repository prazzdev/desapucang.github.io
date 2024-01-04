import Section from '@/components/Section';
import MainLayout from '@/layouts/MainLayout';
import React from 'react';

const Index = () => {
    return (
        <div>
            <MainLayout title="Profil Wilayah Desa">
                <Section title="Profil Wilayah Desa">
                    <p className="text-justify indent-5 max-w-[90%] mx-auto lg:mx-0">
                        Desa Pucang adalah sebuah desa yang terletak di Kecamatan Bawang, Kabupaten Banjarnegara, Provinsi Jawa Tengah, Indonesia1. Berikut adalah beberapa informasi tentang Desa Pucang:
                    </p>
                    <ul className="my-3 mx-4 lg:mx-0">
                        <li>Provinsi: <span className="font-bold">Jawa Tengah</span></li>
                        <li>Kabupaten: <span className="font-bold">Banjarnegara</span></li>
                        <li>Kecamatan: <span className="font-bold">Bawang</span></li>
                        <li>Kode Pos: <span className="font-bold">534712</span></li>
                        <li>Kode Kemendagri: <span className="font-bold">33.04.05.20181</span></li>
                    </ul>
                    <p className="text-justify indent-5 max-w-[90%] mx-auto lg:mx-0 mb-2">
                        Pada tahun 2020, wilayah Kecamatan Bawang telah dibagi menjadi 18 desa, termasuk Desa Pucang3. Untuk informasi lebih lanjut tentang jumlah penduduk, luas wilayah, dan kepadatan penduduk, Anda mungkin perlu mengunjungi kantor desa atau mencari data resmi pemerintah terkait. Harap dicatat bahwa informasi ini mungkin telah berubah sejak terakhir diperbarui.
                    </p>
                    <p className="text-justify indent-5 max-w-[90%] mx-auto lg:mx-0 mb-2">
                        Desa Pucang, yang terletak di dusun Sidakarsa, Kecamatan Bawang, Kabupaten Banjarnegara, Jawa Tengah, memiliki beberapa potensi dan sumber daya yang cukup menjanjikan:
                    </p>
                    <ul className="text-justify max-w-[90%] mb-2">
                        <li><span className="font-bold">Sumber Daya Air:</span> Desa Pucang memiliki sumber daya air yang cukup baik.</li>
                        <li><span className="font-bold">Potensi Pembangkit Listrik Tenaga Mikrohidro:</span> Berkat sumber daya air dan potensi terjunan yang cukup bagus, Desa Pucang dianggap sebagai lokasi yang strategis untuk pembangkit listrik tenaga mikrohidro.</li>
                    </ul>
                    <p className="text-justify indent-5 max-w-[90%] mx-auto lg:mx-0 mb-2">
                        Namun, informasi lebih rinci dan lengkap tentang potensi dan sumber daya Desa Pucang mungkin memerlukan penelitian lebih lanjut atau konsultasi dengan pihak berwenang setempat. Harap dicatat bahwa informasi ini mungkin telah berubah sejak terakhir diperbarui. Selalu periksa dengan sumber resmi untuk informasi terkini.
                    </p>
                </Section>
            </MainLayout>
        </div>
    );
}

export default Index;
