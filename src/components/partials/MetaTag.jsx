export default function MetaTag({ title }) {
    return (
        <>
        <title>{title}</title>
        <meta name="title" content="Desa Pucang, Kec. Bawang, Kab. Banjarnegara | Official Website" />
        <meta name="description" content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!" />
        <link rel="icon" type="image/x-icon" href="./assets/images/banjarnegara-kab.svg" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta property="og:title" content="Desa Pucang, Kec. Bawang, Kab. Banjarnegara | Official Website" />
        <meta property="og:description" content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!" />
        <meta property="og:image" content="https://metatags.io/images/meta-tags.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta property="twitter:title" content="Desa Pucang, Kec. Bawang, Kab. Banjarnegara | Official Website" />
        <meta property="twitter:description" content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!" />
        <meta property="twitter:image" content="https://metatags.io/images/meta-tags.png" />
        </>
    )
}