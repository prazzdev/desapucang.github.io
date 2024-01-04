import Section from '@/components/Section';
import MainLayout from '@/layouts/MainLayout';
import React from 'react';

const Index = () => {
    return (
        <>
        <MainLayout title="Kontak">
            <Section title="Informasi Kontak">
                <p className="text-sm lg:text-lg">Berikut kontak layanan Balai Desa Pucang:</p>
                <ul className="my-2">
                    <li><span className="text-sm lg:text-lg font-semibold">WhatsApp:</span> <a href="#" className="">+62 00 0000 0000</a></li>
                    <li><span className="text-sm lg:text-lg font-semibold">Email:</span> <a href="#" className=""></a>info@mail.desa.id</li>
                </ul>
            </Section>
        </MainLayout>
        </>
    );
}

export default Index;
