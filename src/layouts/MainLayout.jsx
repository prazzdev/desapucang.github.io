import Footer from "@/components/Footer";
import MetaTag from "@/components/MetaTag";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import { useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function MainLayout({ title, children }) {
    useEffect(() => {
        AOS.init({
        easing: 'ease-out-cubic',
        once: true,
        offset: 50,
        delay: 50,
        })
    })
    return (
        <>
        <Head>
            <MetaTag title={title} />
        </Head>
        <Navbar />
        <div className="container" data-aos="fade-in">
            {children}
        </div>
        <Footer />
        </>
    )
}