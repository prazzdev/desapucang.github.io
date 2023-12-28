export default function MetaTag({ title }) {
    let pageTitle
    if(title == undefined) {
        pageTitle = "Desa Pucang, Kec. Bawang, Kab. Banjarnegara | Unofficial Website"
    } else {
        pageTitle = title + " | Desa Pucang, Kec. Bawang, Kab. Banjarnegara"
    }
    return (
        <>
        <title>{pageTitle}</title>
        <meta name="title" content="Desa Pucang, Kec. Bawang, Kab. Banjarnegara | Unofficial Website" />
        <meta name="description" content="Desa Pucang Bawang, terletak di Kabupaten Banjarnegara, menawarkan pesona keindahan alam pedesaan yang memikat hati. Dikelilingi oleh hijaunya perkebunan dan sawah yang menghampar luas, desa ini menggambarkan kehidupan masyarakat yang erat dengan alam. Rumah-rumah tradisional dengan atap anyaman dan halaman yang dihiasi tanaman hias menambah nuansa kesejukan dan keasrian. Masyarakat Desa Pucang Bawang dikenal ramah dan menjunjung tinggi nilai gotong royong, menciptakan suasana harmonis di tengah-tengah keindahan alamnya. Desa ini tidak hanya menawarkan pemandangan yang memesona, tetapi juga memperkaya pengalaman budaya dan kehidupan pedesaan yang autentik bagi setiap pengunjungnya." />
        <link rel="icon" type="image/x-icon" href="./assets/images/banjarnegara-kab.svg" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://desapucang.vercel.app/" />
        <meta property="og:title" content="Desa Pucang, Kec. Bawang, Kab. Banjarnegara | Unofficial Website" />
        <meta property="og:description" content="Desa Pucang Bawang, terletak di Kabupaten Banjarnegara, menawarkan pesona keindahan alam pedesaan yang memikat hati. Dikelilingi oleh hijaunya perkebunan dan sawah yang menghampar luas, desa ini menggambarkan kehidupan masyarakat yang erat dengan alam. Rumah-rumah tradisional dengan atap anyaman dan halaman yang dihiasi tanaman hias menambah nuansa kesejukan dan keasrian. Masyarakat Desa Pucang Bawang dikenal ramah dan menjunjung tinggi nilai gotong royong, menciptakan suasana harmonis di tengah-tengah keindahan alamnya. Desa ini tidak hanya menawarkan pemandangan yang memesona, tetapi juga memperkaya pengalaman budaya dan kehidupan pedesaan yang autentik bagi setiap pengunjungnya." />
        <meta property="og:image" content="https://desapucang.vercel.app/assets/images/panen-raya-polres-dan-petani-di-desa-pucang-kecamatan-bawang.jpg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://desapucang.vercel.app/" />
        <meta property="twitter:title" content="Desa Pucang, Kec. Bawang, Kab. Banjarnegara | Unofficial Website" />
        <meta property="twitter:description" content="Desa Pucang Bawang, terletak di Kabupaten Banjarnegara, menawarkan pesona keindahan alam pedesaan yang memikat hati. Dikelilingi oleh hijaunya perkebunan dan sawah yang menghampar luas, desa ini menggambarkan kehidupan masyarakat yang erat dengan alam. Rumah-rumah tradisional dengan atap anyaman dan halaman yang dihiasi tanaman hias menambah nuansa kesejukan dan keasrian. Masyarakat Desa Pucang Bawang dikenal ramah dan menjunjung tinggi nilai gotong royong, menciptakan suasana harmonis di tengah-tengah keindahan alamnya. Desa ini tidak hanya menawarkan pemandangan yang memesona, tetapi juga memperkaya pengalaman budaya dan kehidupan pedesaan yang autentik bagi setiap pengunjungnya." />
        <meta property="twitter:image" content="https://desapucang.vercel.app/assets/images/panen-raya-polres-dan-petani-di-desa-pucang-kecamatan-bawang.jpg    " />
        </>
    )
}