import '../styles/globals.css'
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="keywords" content="saddie, faddie" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
        <script src="https://vjs.zencdn.net/7.17.0/video.min.js"></script>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp
