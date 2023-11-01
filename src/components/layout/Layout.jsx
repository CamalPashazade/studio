import Footer from "../footer/Footer";
import Header from "../header/Header";

export default function Layout({ children }) {
  return (
    
      <div className="w-full flex flex-col">
        <Header />

        {children}

        <Footer />
      </div>
   
  );
}
