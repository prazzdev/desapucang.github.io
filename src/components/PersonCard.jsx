import Image from 'next/image';
import React from 'react';

const PersonCard = ({ name="Anita Dwi Setyowati, SKM", position="Kepala Desa", imageUri="person.png" }) => {
    return (
        <div className="person-card w-[230px] flex flex-col items-center mx-[3em] mb-[4em] bg-blue-">
            <figure className="p-3 bg-red-600">
                <Image 
                    src={"/assets/images/" + imageUri} width={200} height={200}
                    className="w-[150px]"
                />
            </figure>
            <h1 className="font-inter-bold text-lg mt-2">{name}</h1>
            <h3 className="font-inter-reg text-lg truncate">{position}</h3>
        </div>
    );
}

export default PersonCard;
