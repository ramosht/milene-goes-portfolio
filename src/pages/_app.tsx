import { AppProps } from 'next/app';
import Head from 'next/head';
import GlobalStyles from '../styles/global';
import '../../styles/globals.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Head>
        <title>Milene Góes | Portfólio</title>
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
          content="Uma contadora de boas histórias. Gosto de ouvir, falar e escrever: sou uma entusiasta das palavras e apaixonada por pessoas!"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
