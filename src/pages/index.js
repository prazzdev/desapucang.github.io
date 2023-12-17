import ArticleSection from '@/components/ArticleSection'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/Navbar'
import NewsSection from '@/components/NewsSection'
import OverlayMenuSection from '@/components/OverlayMenuSection'

export default function Home() {
  return (
    <>
    <Navbar />
    <main>
      <HeroSection />
      <OverlayMenuSection />
      <NewsSection />
      <div className="h-[2px] bg-gray-400 mt-[3em] mx-[4em]"></div>
      <ArticleSection />
      <Footer />
    </main>
    </>
  )
}
