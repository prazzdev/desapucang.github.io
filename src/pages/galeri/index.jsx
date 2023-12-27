import GaleryCard from "@/components/GaleryCard";
import Section from "@/components/Section";
import MainLayout from "@/layouts/MainLayout";
import Image from "next/image";

const index = () => {
    return (
        <>
        <MainLayout title="Galeri">
            <Section title="Galeri">
                <div className="wrapper flex flex-wrap flex-col lg:flex-row justify-between items-center my-2 bg-teal-">
                    <GaleryCard />
                    <GaleryCard />
                    <GaleryCard />
                    <GaleryCard />
                </div>
            </Section>
        </MainLayout>
        </>
    )
}

export default index