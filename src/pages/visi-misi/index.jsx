import Section from '@/components/Section';
import MainLayout from '@/layouts/MainLayout';
import React from 'react';

const Index = () => {
    return (
        <MainLayout title="Visi Misi">
            <Section title="Visi dan Misi">
                <h1 className="font-inter-bold text-md text-center lg:text-left mt-0 lg:mt-2 mb-1">VISI</h1>
                <p className="font-inter-bold text-sm lg:text-md text-center lg:text-left mb-5 lg:mb-0">"BANJARNEGARA BERMARTABAT DAN SEJAHTERA"</p>
                <h1 className="font-inter-bold text-md text-center lg:text-left mt-2 mb-1">MISI</h1>
                <ul className="list-decimal text-sm lg:text-md text-justify lg:text-left pl-5 font-inter-reg">
                    <li>Mewujudkan tata kehidupan masyarakat yang tertib, aman, damai dan demokratis</li>
                    <li>Mewujudkan kualitas penyelenggaraan pemerintahan berdasarkan konsep tata kelola yang baik</li>
                    <li>Mewujudkan pembangunan daerah yang berkesinambungan dan berbasis pada pengembangan ekonomi kerakyatan</li>
                    <li>Mewujudkan tata kelola keuangan daerah yang efektif, efisien, produktif, transparan dan akuntabel dengan tenaga profesional</li>
                    <li>Mewujudkan kemartabatan dan kesejahteraan masyarakat melalui peningkatan cakupan pemenuhan hak dasar</li>
                </ul>
            </Section>
        </MainLayout>
    );
}

export default Index;
