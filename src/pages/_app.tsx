import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';
import React from 'react';

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>tBench</title>
      <meta name='description' content='Онлайн-кинотеатр, на котором собрано множество фильмов и сериалов, доступных
      для просмотра бесплатно.' />
      <meta property='og:title' content='[xd] - Онлайн-кинотеатр' />
      <meta property='og:description' content='Онлайн-кинотеатр, на котором собрано множество фильмов и сериалов, доступных
      для просмотра бесплатно.' />
      <meta property='og:locale' content='ru_RU' />
      <link rel="icon" href="/logo_icon_circle.svg" />
    </Head>
    <Component {...pageProps} />
  </>;
}
