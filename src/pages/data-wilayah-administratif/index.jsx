import Section from '@/components/Section';
import MainLayout from '@/layouts/MainLayout';
import React from 'react';

const Index = () => {
    return (
        <>
        <MainLayout title="Data Wilayah Administratif">
            <Section title="Data Wilayah Administratif">
                <p>Halaman ini berisi Data Wilayah Administratif meliputi daftar Dusun, RT, RW, KK dan Gender.</p>
            </Section>
        </MainLayout>
        </>
    );
}

export default Index;
