import Layout from "@/components/layout/Layout";
import Meta from "@/components/meta/Meta";
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Meta />

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
