import GaleryCard from "@/components/GaleryCard";
import Section from "@/components/Section";
import MainLayout from "@/layouts/MainLayout";
import Image from "next/image";

const index = () => {
    return (
        <>
        <MainLayout title="Galeri">
            <Section title="Galeri">
                {/* <div className="wrapper flex flex-wrap flex-col lg:flex-row justify-between items-center my-2 bg-teal-">
                    <GaleryCard />
                    <GaleryCard />
                    <GaleryCard />
                    <GaleryCard />
                </div> */}

                <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
                    <img src="https://www.desapucang-banjarnegara.com/desa/upload/galeri/kecil_exqcLm_Jalan-Pucang-Jenggawur-2.jpg" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 bg-gray-500 aspect-square" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="https://source.unsplash.com/random/302x302/" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="https://www.desapucang-banjarnegara.com/desa/upload/artikel/sedang_1693204497_WhatsApp%20Image%202023-08-26%20at%2012.41.11.jpeg" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="https://www.desapucang-banjarnegara.com/desa/upload/artikel/sedang_1692890935_upacara17agustus2023.jpeg" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?3" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?4" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?5" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?6" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?7" />
                    <img src="https://www.desapucang-banjarnegara.com/desa/upload/galeri/kecil_mrzBT4_WhatsApp%20Image%202023-04-02%20at%2016.28.09%20(3).jpeg" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 bg-gray-500 aspect-square" />
                </div>
            </Section>
        </MainLayout>
        </>
    )
}

export default index