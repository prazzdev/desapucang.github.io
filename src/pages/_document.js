import MetaTag from '@/components/partials/MetaTag'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <MetaTag />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
