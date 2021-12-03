// headタグの内容をカスタマイズしたい時に使うファイル
// _document.tsxはサーバーサイドのみでレンダリングされ、クライアントサイドでは使われないので、onClickのようなクライアントサイドで起こるイベントハンドラは意味ない
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="shortcut icon" href="/icon-48x48.png" />
          <link
            href="https://fonts.googleapis.com/css2?family=Kiwi+Maru&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Kosugi+Maru&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap"
            rel="stylesheet"
          />
          {/* 以下にメタデータを加えることでSEO対策 */}
          <meta
            // 検索した際に出てくるページの説明文
            name="description"
            content=""
          />
          <meta name="keywords" content="" />
          {/* クローラーに見つからないためのコード 開発中は残しておく */}
          <meta name="robots" content="noindex" />
        </Head>
        {/* <body className="bg-fixed bg-gradient-to-r from-green to-blue-500 dark:from-dark-500 dark:to-dark-700 dark:text-white"> */}
        <body
          className="bg-fixed bg-gray-100 dark:from-dark-500 dark:to-dark-700 dark:text-white"
          style={{ fontFamily: "Kosugi Maru" }}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
