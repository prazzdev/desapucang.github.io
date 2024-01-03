import PersonCard from '@/components/PersonCard';
import Section from '@/components/Section';
import MainLayout from '@/layouts/MainLayout';
import React from 'react';

const Index = () => {
    return (
        <MainLayout title="Pemerintah Desa">
            <Section title="Susunan Organisasi Pemerintahan Desa Pucang">
                <div className="flex flex-col items-center mt-10">
                    <PersonCard name="Anita Dwi Setyowati, SKM" position="Kepala Desa" imageUri="person.png" />
                    <div className="flex flex-col lg:flex-row flex-wrap justify-around bg-red-">
                        <PersonCard name='Andi Sujatmika, S.Kom' position='Sekretaris Desa' imageUri='person.png' />
                        <PersonCard name='Supardi Rustam' position='Kaur Umum' imageUri='person.png' />
                        <PersonCard name='Syafruddin' position='Kaur Pemerintahan' imageUri='person.png' />
                        <PersonCard name='Mardiana' position='Kaur Keuangan' imageUri='person.png' />
                        <PersonCard name="Syafi'i, SE" position='Kaur Pembangunan' imageUri='person.png' />
                        <PersonCard name='Mahrup' position='Kaur Keamanan dan Ketertiban' imageUri='person.png' />
                    </div>
                </div>
            </Section>
        </MainLayout>
    );
}

export default Index;
