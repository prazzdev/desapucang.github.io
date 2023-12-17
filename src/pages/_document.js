import MetaTag from '@/components/partials/MetaTag'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <MetaTag title={'Desa Pucang, Kec. Bawang, Kab. Banjarnegara | Official Website'} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
