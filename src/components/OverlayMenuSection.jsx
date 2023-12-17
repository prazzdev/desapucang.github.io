import Image from "next/image";

export default function OverlayMenuSection() {
    return (
        <>
        <section id="overlay-menu" className="max-w-[85vw] flex flex-row justify-around mx-auto -mt-[5em] px-[7em] py-9 bg-[#D9D9D9]">
          <div className="menu flex flex-col justify-center items-center">
            <figure className={`bg-blue-400 p-6 rounded-full`}>
                <Image 
                    src={'/assets/images/layanan-mandiri-icon.svg'} width={50} height={50} />
            </figure>
            <h3 className="font-inter-bold uppercase text-md text-gray-900 my-4">Layanan Mandiri</h3>
            <button className={`bg-blue-400 font-inter-bold text-md text-white py-1 px-6 uppercase rounded-sm`} onClick={() => alert('Under Maintenance.')}>Login</button>
          </div>
          <div className="menu flex flex-col justify-center items-center">
            <figure className={`bg-green-400 p-6 rounded-full`}>
                <Image 
                    src={'/assets/images/lapak-icon.svg'} width={50} height={50} />
            </figure>
            <h3 className="font-inter-bold uppercase text-md text-gray-900 my-4">Lapak</h3>
            <button className={`bg-green-400 font-inter-bold text-md text-white py-1 px-6 uppercase rounded-sm`} onClick={() => alert('Under Maintenance.')}>Login</button>
          </div>
          <div className="menu flex flex-col justify-center items-center">
            <figure className={`bg-orange-400 p-6 rounded-full`}>
                <Image 
                    src={'/assets/images/produk-hukum-icon.svg'} width={50} height={50} />
            </figure>
            <h3 className="font-inter-bold uppercase text-md text-gray-900 my-4">Produk Hukum</h3>
            <button className={`bg-orange-400 font-inter-bold text-md text-white py-1 px-6 uppercase rounded-sm`} onClick={() => alert('Under Maintenance.')}>Login</button>
          </div>
        </section>
        </>
    )
}