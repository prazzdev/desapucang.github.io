import Image from "next/image";
import ContentCard from "./ContentCard";

export default function NewsSection({ cardAnimation }) {
    return (
        <>
        <section id="news" className="px-5 lg:px-[4em] pt-2 lg:pt-[2em] mt-2 lg:mt-4">
          <div className="flex flex-row justify-between items-center">
            <h1 className="font-inter-bold text-xl">Berita</h1>
            <a href="#" className="font-inter-semibold text-sm block lg:hidden">See all</a>
          </div>
          <div className="news-wrapper flex flex-col lg:flex-row justify-between items-center mt-3">
            <ContentCard animation={cardAnimation} />
            <ContentCard />
            <ContentCard />
            <ContentCard />
            <button className="rounded-md p-[.15em] bg-gray-500 hidden lg:block" onClick={() => alert('Under Maintenance.')}>
              <Image src={'/assets/images/arrow.svg'} width={35} height={35} />
            </button>
          </div>
        </section>
        </>
    )
}