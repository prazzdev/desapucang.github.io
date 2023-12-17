import Image from "next/image";
import ContentCard from "./ContentCard";

export default function ArticleSection() {
    return (
        <>
        <section id="article" className="px-[4em] pt-[2em]">
            <h1 className="font-inter-bold text-xl">Artikel Terkini</h1>
            <div className="article-wrapper flex flex-row justify-between items-center mt-3 mb-[3em]">
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