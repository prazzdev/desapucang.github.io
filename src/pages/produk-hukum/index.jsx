import Section from '@/components/Section';
import MainLayout from '@/layouts/MainLayout';
import React from 'react';

const tableData = [
    {
        "judul": "Perdes SPJ Tentang Keuang Desa Tahun 2016",
        "jenis": "Perdes SPJ Tahun 2016",
        "tahun": 2016,
        "link": "https://www.desapucang-banjarnegara.com/dokumen_web/unduh_berkas/4"
    },
    {
        "judul": "SK TIM Penyusun RPJMDes Tahun 2017",
        "jenis": "Keputusan Kepala Desa",
        "tahun": 2017,
        "link": "https://www.desapucang-banjarnegara.com/dokumen_web/unduh_berkas/2"
    },
    {
        "judul": "SK Pengangkatan RT dan Pemberentian RT Baru",
        "jenis": "Keputusan Kepala Desa",
        "tahun": 2017,
        "link": "https://www.desapucang-banjarnegara.com/dokumen_web/unduh_berkas/3"
    }
]

const Index = () => {
    return (
        <>
        <MainLayout title="Produk Hukum">
            <Section title="Produk Hukum">
                <div class="relative overflow-x-auto shadow-md lg:mt-4">
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    Judul Produk Hukum
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    <div class="flex items-center">
                                        Jenis
                                        <a href="#"><svg class="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
                </svg></a>
                                    </div>
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    <div class="flex items-center">
                                        Tahun
                                        <a href="#"><svg class="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
                </svg></a>
                                    </div>
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    <div class="flex items-center">
                                        Aksi
                                        <a href="#"><svg class="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
                </svg></a>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                        {tableData.map((data, i) => (
                            <tr key={i} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {data.judul}
                                </th>
                                <td class="px-6 py-4">
                                    {data.jenis}
                                </td>
                                <td class="px-6 py-4">
                                    {data.tahun}
                                </td>
                                <td class="px-6 py-4 text-center">
                                    <a href={data.link} class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Unduh</a>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </Section>
        </MainLayout>
        </>
    );
}

export default Index;


