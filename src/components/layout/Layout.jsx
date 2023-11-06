

import { useTranslation } from "next-i18next";
import Footer from "../footer/Footer";
import Header from "../header/Header";
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations'


const Layout =({ children }) => {
  const  {t} = useTranslation('common')
  return (
    <div className="w-full h-[100%] flex flex-col  justify-between">
      <Header t={t} />

      {children}

      <Footer />
    </div>
  );
}

export default  Layout;


