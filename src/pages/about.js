import Meta from "@/components/meta/Meta";
import React from "react";
import { Inter, Roboto } from "next/font/google";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'


const inter = Inter({
  subsets: ["latin"],
  display: "optional",
});

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "optional",
});

const About = () => {

  
  return (
    <div className="flex flex-col items-center">
      <Meta description="greentunes studio" />

      <div className={`${inter.className} container bg-green-300`}>
        About Page
      </div>
      <p className={roboto.className}>
        Lorem ipsum dolor sit amet consectea mollitia totam magnam placeat
        cumque?{" "}
      </p>

   
    </div>
  );
};

export default About;
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',

      ])),

    },
  }
}
