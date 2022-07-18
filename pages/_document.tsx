// pages > _document

import Document, { Head, Html, Main, NextScript } from 'next/document'
import { config } from '@/utils/config'

class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="ja">
        <Head prefix="og: https://ogp.me/ns#">
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP&amp;display=swap"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="https://use.typekit.net/emp0pno.css" />
        </Head>
        <body>
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${config.googleTagManagerId}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
            }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
