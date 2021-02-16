import { AppProps } from 'next/app';
import Head from 'next/head';
import GlobalStyles from '../styles/global';
import '../../styles/globals.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Head>
        <title>React Avançado - Boilerplate</title>
        <link
          rel="shortcut icon"
          href="/img/icon-512.png"
          type="image/x-icon"
        />
        <link
          rel="apple-touch-icon"
          href="/img/icon-512.png"
          type="image/x-icon"
        />
        <meta
          name="description"
          content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
