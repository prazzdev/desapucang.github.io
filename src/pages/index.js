import ArticleSection from '@/components/ArticleSection'
import Drawer from '@/components/Drawer'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import MetaTag from '@/components/MetaTag'
import Navbar from '@/components/Navbar'
import NewsSection from '@/components/NewsSection'
import OverlayMenuSection from '@/components/OverlayMenuSection'
import Head from 'next/head'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Home() {
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
      <MetaTag />
    </Head>
    <Navbar />
    <main className="pb-0 lg:pb-10" data-aos="fade-in">
      <HeroSection />
      <OverlayMenuSection />
      <NewsSection cardAnimation={'fade-in'} />
      <div className="h-[2px] bg-gray-400 mt-[.5em] lg:mt-[3em] mx-[4em]" />
      <ArticleSection cardAnimation={'fade-in'} />
    </main>
    <Footer />
    </>
  )
}
