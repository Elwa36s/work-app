import React, {FC} from 'react';
import Head from 'next/head';
import {Header} from '@components/Header';

interface PageLayoutProps {
    title: string;
    children: React.ReactNode;
}

export const View: FC<PageLayoutProps> = (props) => {
    const {title, children} = props;

    return (
        <>
          <Head>
            <title>{title} | Profit</title>
            <meta name="description" content="Manage small business to gain big profit!" />
            <meta name="keywords" content="profit,business,manage,managing,work,job,money,time" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="utf-8" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Header />
          <main>
            {children}
          </main>
        </>
      );
};
