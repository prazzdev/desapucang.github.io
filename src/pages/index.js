import ArticleSection from '@/components/ArticleSection'
import Drawer from '@/components/Drawer'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import MetaTag from '@/components/MetaTag'
import Navbar from '@/components/Navbar'
import NewsSection from '@/components/NewsSection'
import OverlayMenuSection from '@/components/OverlayMenuSection'
import Head from 'next/head'

export default function Home() {
  return (
    <>
    <Head>
      <MetaTag />
    </Head>
    <Navbar />
    <main className="pb-0 lg:pb-10">
      <HeroSection />
      <OverlayMenuSection />
      <NewsSection />
      <div className="h-[2px] bg-gray-400 mt-[.5em] lg:mt-[3em] mx-[4em]" />
      <ArticleSection />
    </main>
    <Footer />
    </>
  )
}
