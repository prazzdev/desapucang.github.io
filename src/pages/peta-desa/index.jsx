import Section from '@/components/Section';
import MainLayout from '@/layouts/MainLayout';
import React from 'react';

const Index = () => {
    return (
        <>
        <MainLayout title="Peta Desa">
            <Section title="Peta Desa">
                <div className="w-full flex flex-col lg:flex-row justify-between items-center mt-4">
                    {/* Aboveview */}
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63305.68695718417!2d109.61266776953124!3d-7.3980303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7aabdd63dc1525%3A0xcbf6e965188f343a!2sKantor%20Desa%20Pucang!5e0!3m2!1sid!2sid!4v1703774433835!5m2!1sid!2sid" 
                        width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                        className="shadow-lg"
                    ></iframe>

                    {/* Streetview */}
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!3m2!1sid!2sid!4v1703774305115!5m2!1sid!2sid!6m8!1m7!1svlriAiED7JlvG9acT9jZsw!2m2!1d-7.398206517285652!2d109.6539002404902!3f348.76110366936666!4f4.04827740037544!5f0.7820865974627469" 
                        width="600" height="450" allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                        className="shadow-lg"
                    ></iframe>
                </div>
            </Section>
        </MainLayout>
        </>
    );
}

export default Index;
