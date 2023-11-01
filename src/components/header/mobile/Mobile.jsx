import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

const Mobile = () => {
  const mobileClassName = "block relative md:hidden";
  const [openNav, setOpenNav] = useState(false);

  const handleMobNav = () => {
    setOpenNav(!openNav);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpenNav(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col">
      {!openNav ? (
        <FaBars
          color="white"
          size={24}
          className={mobileClassName}
          onClick={handleMobNav}
        />
      ) : (
        <FaTimes color="white" size={24} onClick={handleMobNav} />
      )}

      {openNav ? (
        <nav className="absolute top-14 left-0 w-full flex flex-col h-[345px] bg-pink-700 ">
          <Link className="pl-3 mt-3 text-white" href="/">
            Home
          </Link>
          <Link className="pl-3 mt-3 text-white" href="/about">
            About
          </Link>
          <Link className="pl-3 mt-3 text-white" href="/contact">
            Contact us
          </Link>
        </nav>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Mobile;
