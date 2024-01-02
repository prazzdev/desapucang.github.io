import Image from "next/image";

export default function OverlayMenuSection() {
    return (
        <>
        <section id="overlay-menu" className="max-w-fit lg:max-w-[85vw] flex flex-row justify-around mx-auto lg:-mt-[5em] px-[7em] pl-[21em] lg:pl-[7em] py-9 bg-gray-200 shadow-lg overflow-x-scroll">
          <div className="menu flex flex-col justify-center items-center min-w-[190px] lg:min-w-[250px] py-6 px-5 lg:px-[3.5em] mx-3 lg:mx-0 bg-gray-300 hover:bg-gray-400 hover:shadow-xl transition-all rounded-xl">
            <figure className={`bg-blue-400 p-5 lg:p-6 rounded-full`}>
                <Image 
                    src={'/assets/images/layanan-mandiri-icon.svg'} width={50} height={50} 
                    className="w-[30px] lg:w-[50px]"
                />
            </figure>
            <h3 className="font-inter-bold uppercase text-xs lg:text-md text-gray-900 my-4">Layanan Mandiri</h3>
            <button className={`bg-blue-400 hover:bg-blue-500 transition-all font-inter-bold text-xs lg:text-md text-white py-1 px-5 lg:px-6 uppercase rounded-sm`} onClick={() => alert('Under Maintenance.')}>Login</button>
          </div>
          <div className="menu flex flex-col justify-center items-center min-w-[190px] lg:min-w-[250px] py-6 px-5 lg:px-[3.5em] mx-3 lg:mx-0 bg-gray-300 hover:bg-gray-400 hover:shadow-xl transition-all rounded-xl">
            <figure className={`bg-green-400 p-5 lg:p-6 rounded-full`}>
                <Image 
                    src={'/assets/images/lapak-icon.svg'} width={50} height={50} 
                    className="w-[30px] lg:w-[50px]"
                />
            </figure>
            <h3 className="font-inter-bold uppercase text-xs lg:text-md text-gray-900 my-4">Lapak</h3>
            <button className={`bg-green-400 hover:bg-green-500 font-inter-bold text-xs lg:text-md text-white py-1 px-5 lg:px-6 uppercase rounded-sm`} onClick={() => alert('Under Maintenance.')}>Login</button>
          </div>
          <div className="menu flex flex-col justify-center items-center min-w-[190px] lg:min-w-[250px] py-6 px-5 lg:px-[3.5em] mx-3 lg:mx-0 lg:mr-0 bg-gray-300 hover:bg-gray-400 hover:shadow-xl transition-all rounded-xl">
            <figure className={`bg-orange-400 p-5 lg:p-6 rounded-full`}>
                <Image 
                    src={'/assets/images/produk-hukum-icon.svg'} width={50} height={50} 
                    className="w-[30px] lg:w-[50px]"
                />
            </figure>
            <h3 className="font-inter-bold uppercase text-xs lg:text-md text-gray-900 my-4">Produk Hukum</h3>
            <button className={`bg-orange-400 hover:bg-orange-500 font-inter-bold text-xs lg:text-md text-white py-1 px-5 lg:px-6 uppercase rounded-sm`} onClick={() => alert('Under Maintenance.')}>Login</button>
          </div>
        </section>
        </>
    )
}