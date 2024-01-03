import Image from "next/image";
import ContentCard from "./ContentCard";

export default function ArticleSection() {
    return (
        <>
        <section id="article" className="px-5 lg:px-[4em] pt-2 lg:pt-[2em] mt-2 lg:mt-4">
            <div className="flex flex-row justify-between items-center">
                <h1 className="font-inter-bold text-xl">Artikel Terkini</h1>
                <a href="#" className="block lg:hidden">See all</a>
            </div>
            <div className="article-wrapper flex flex-col lg:flex-row justify-between items-center mt-3">
                <ContentCard />
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