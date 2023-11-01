import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";
import Head from "next/head";


export default function App({ Component, pageProps }) {
  return (
    <>
     <Head>
        <title>Studio</title>
        <link rel="icon" href="/favicon/etud-baku.jpg" sizes="any" />
      </Head>

      <Layout>
      <Component {...pageProps} />
    </Layout>
    
    </>
 
  );
}
