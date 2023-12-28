import MetaTag from '@/components/MetaTag';
import MainLayout from '@/layouts/MainLayout';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

const Index = () => {
    const router = useRouter()
    let articleTitle
    articleTitle = router.query.slug
    // console.log(articleTitle)
    return (
        <>
        {/* <Head>
            <MetaTag title={articleTitle.replaceAll('-',' ').toUpperCase()} />
        </Head> */}
        <MainLayout title={'Artikel'}>
            <article className="px-[9em] py-[2em] bg-gray-300">
                <h1 className="font-inter-bold text-[1.3em] text-center capitalize">{articleTitle}</h1>
                <h5 className="font-inter-reg font-semibold text-[.9em] text-center mt-2">28 Desember 2023, 10.00 WIB oleh <a href="#" className="text-blue-600">Admin</a></h5>
                <div className="article-content font-inter-reg my-8">
                    <figure className="flex flex-col justify-center items-center my-4">
                        <Image 
                            src={'/assets/images/content1.jpeg'}
                            width={400} height={200} className="mb-3 shadow-lg"
                        />
                        <p className="italic">Foto Bersama Peserta Pelatihan</p>
                    </figure>
                    <p className="text-justify indent-8 mb-4">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, error provident rem reiciendis laboriosam animi! Dolorum laudantium a earum sit consequuntur fugit minus quisquam alias veritatis eos adipisci dolorem, eligendi, eaque, asperiores ullam ipsa et distinctio sunt! A itaque explicabo in nisi dicta soluta odit ea doloremque perferendis, minima, ab illo sint dignissimos rem ex temporibus rerum eaque molestiae perspiciatis? Ea aperiam veniam placeat voluptates velit corporis, blanditiis mollitia ad enim labore, autem qui vero molestiae inventore pariatur accusamus minus incidunt quasi odio! Nobis officia aperiam iusto eius praesentium numquam provident? Recusandae atque officia nulla iusto. Tempore amet provident eligendi?
                    </p>
                    <p className="text-justify indent-8 mb-4">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, error provident rem reiciendis laboriosam animi! Dolorum laudantium a earum sit consequuntur fugit minus quisquam alias veritatis eos adipisci dolorem, eligendi, eaque, asperiores ullam ipsa et distinctio sunt! A itaque explicabo in nisi dicta soluta odit ea doloremque perferendis, minima, ab illo sint dignissimos rem ex temporibus rerum eaque molestiae perspiciatis? Ea aperiam veniam placeat voluptates velit corporis, blanditiis mollitia ad enim labore, autem qui vero molestiae inventore pariatur accusamus minus incidunt quasi odio! Nobis officia aperiam iusto eius praesentium numquam provident? Recusandae atque officia nulla iusto. Tempore amet provident eligendi?
                    </p>
                </div>
            </article>
        </MainLayout>
        </>
    );
}

export default Index;
