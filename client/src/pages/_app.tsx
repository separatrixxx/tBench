import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { wrapper } from '../../features/store/store';
import { Provider } from 'react-redux';
import { ThirdwebProvider } from '@thirdweb-dev/react';


export default function App({ Component, pageProps }: AppProps) {
  const { store } = wrapper.useWrappedStore(pageProps);

  return (
    <ThirdwebProvider activeChain="ethereum" clientId="your-client-id">
      <Provider store={store}>
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
    </Provider>
  </ThirdwebProvider>
    
  );
}
