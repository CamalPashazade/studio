import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const Meta = ({ description, keywords }) => {

    const router = useRouter()
  return (
    <div>
   
      <Head>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <title>{`GREENTUNES ${router.asPath.toUpperCase().slice(1)}`}</title>
        <link rel="icon" href="/favicon/etud-baku.jpg" sizes="any" />
      </Head>
    </div>
  );
};

export default Meta;
