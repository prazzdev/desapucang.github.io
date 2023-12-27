import Footer from "@/components/Footer";
import MetaTag from "@/components/MetaTag";
import Navbar from "@/components/Navbar";
import Head from "next/head";

export default function MainLayout({ title, children }) {
    return (
        <>
        <Head>
            <MetaTag title={title} />
        </Head>
        <Navbar />
        {children}
        <Footer />
        </>
    )
}