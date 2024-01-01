import React from 'react';

const Section = ({ title, children }) => {
    return (
        <>
        <section className="min-h-[350px] py-6 px-[6em] bg-gray-300">
            <h1 className="font-inter-bold font-bold text-[1.3em] uppercase">{title}</h1>
            {children}
        </section>
        </>
    );
}

export default Section;
