import Section from '@/components/Section';
import MainLayout from '@/layouts/MainLayout';
import React from 'react';

const Index = () => {
    return (
        <MainLayout title="Pemerintah Desa">
            <Section title="Susunan Organisasi Pemerintahan Desa Pucang">
                <ul className="font-inter-reg">
                    <li>Kepala Desa: <span className="font-bold">Anita Dwi Setyowati, SKM</span></li>
                    <li>Sekretaris Desa: <span className="font-bold">Andi Sujatmika, S.Kom</span></li>
                    <li>Kaur Umum: <span className="font-bold">Supardi Rustam</span></li>
                    <li>Kaur Pemerintahan: <span className="font-bold">Syafruddin</span></li>
                    <li>Kaur Keuangan: <span className="font-bold">Mardiana</span></li>
                    <li>Kaur Pembangunan: <span className="font-bold">Syafi'i, SE</span></li>
                    <li>Kaur Keamanan dan Ketertiban: <span className="font-bold">Mahrup</span></li>
                </ul>
            </Section>
        </MainLayout>
    );
}

export default Index;
