import Layout from "@/components/layout/Layout";
import Meta from "@/components/meta/Meta";
import "@/styles/globals.css";
import { appWithTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

function App({ Component, pageProps }) {
  return (
    <>
      <Meta />

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default appWithTranslation(App);

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
