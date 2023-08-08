import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>tBench</title>
      <meta name='description' content='Decentralized social network tBench. A unique place to start
        and develop your brands, ideas and creativity.' />
      <meta property='og:title' content='tBench' />
      <meta property='og:description' content='Decentralized social network tBench. A unique place to start
        and develop your brands, ideas and creativity.' />
      <meta charSet="utf-8" />
      <link rel="icon" href="/logo_icon_circle.svg" type='image/svg+xml' />
    </Head>
    <Component {...pageProps} />
  </>;
}
