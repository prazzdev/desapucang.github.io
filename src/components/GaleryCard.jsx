import Image from 'next/image';
import React from 'react';

const GaleryCard = () => {
    return (
        <>
        <div className="flex flex-col items-center m-3 mb-4 p-2 bg-gray-400">
            <figure className="mb-2">
                <Image 
                    src={'/assets/images/kecil_exqcLm_Jalan-Pucang-Jenggawur-2.jpg'} 
                    width={320} height={200}    
                />
            </figure>
            <h1 className="font-inter-bold text-gray-900 my-1">Panorama Wisata</h1>
        </div>
        </>
    );
}

export default GaleryCard;
