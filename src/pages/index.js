import Meta from "@/components/meta/Meta";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Home = () => {

  const {t} = useTranslation('common')
  return (
    <main className="w-full flex flex-col items-center ">
      <Meta title="GREENTUNES" />

      <div className="container flex flex-col  justify-center bg-blue-400">
        <h1>Home</h1>
        <p>{t('greetings.hi')}</p>
      </div>
    </main>
  );
};

export default Home;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',

      ])),

    },
  }
}
