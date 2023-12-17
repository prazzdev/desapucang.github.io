import Image from "next/image";
import ContentCard from "./ContentCard";

export default function NewsSection() {
    return (
        <>
        <section id="news" className="px-[4em] pt-[2em] mt-4">
          <h1 className="font-inter-bold text-xl">Berita</h1>
          <div className="news-wrapper flex flex-row justify-between items-center mt-3">
            <ContentCard />
            <ContentCard />
            <ContentCard />
            <ContentCard />
            <button className="rounded-md p-[.15em] bg-gray-500" onClick={() => alert('Under Maintenance.')}>
              <Image src={'/assets/images/arrow.svg'} width={35} height={35} />
            </button>
          </div>
        </section>
        </>
    )
}