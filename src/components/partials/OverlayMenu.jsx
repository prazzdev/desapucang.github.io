import Image from "next/image";

export default function OverlayMenu({ title, iconSrc, bgColor }) {
    return (
        <>
        <div className="menu flex flex-col justify-center items-center">
            <figure className={`bg-${bgColor}-400 p-1 rounded-full`}>
                <Image 
                    src={iconSrc} width={50} height={50} />
            </figure>
            <h3 className="font-inter-bold uppercase text-md text-gray-900 my-4">{title}</h3>
            <button className={`bg-${bgColor}-400 font-inter-bold text-md text-white py-1 px-6 uppercase rounded-sm`}>Login</button>
        </div>
        </>
    )
}