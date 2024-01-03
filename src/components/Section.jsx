import React from 'react';

const Section = ({ title, children }) => {
    return (
        <>
        <section className="min-h-[350px] pt-[5.5em] pb-[1em] lg:py-6 px-4 lg:px-[6em] bg-gray-300">
            <h1 className="font-inter-bold font-bold text-lg lg:text-[1.3em] uppercase text-center lg:text-left my-4 lg:my-0">{title}</h1>
            {children}
        </section>
        </>
    );
}

export default Section;
