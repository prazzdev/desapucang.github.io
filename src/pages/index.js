import ArticleSection from '@/components/ArticleSection'
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
    <main>
      <HeroSection />
      <OverlayMenuSection />
      <NewsSection />
      <div className="h-[2px] bg-red-400 mt-[3em] mx-[4em]"></div>
      <ArticleSection />
      <Footer />
    </main>
    </>
  )
}
