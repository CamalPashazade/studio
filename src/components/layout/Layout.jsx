import Footer from "../footer/Footer";
import Header from "../header/Header";

export default function Layout({ children }) {
  return (
    <div className="w-full h-[100%] flex flex-col  justify-between">
      <Header />


   {children}
   

      <Footer />
    </div>
  );
}
