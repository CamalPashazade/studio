import Image from "next/image";
import Link from "next/link";
import Mobile from "./mobile/Mobile";
import Langdropdown from "../langdropdown/Langdropdown";

const Header = () => {
  const containerStyle = {
    width: "100%",
    height: "400px",
    position: "relative",
  };

  const backgroundVideoStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
    objectFit: "cover",
  };

  return (
    <div className=" flex flex-col items-center px-3" style={containerStyle}>
      <video autoPlay muted loop style={backgroundVideoStyle}>
        <source src="/video/video.mp4" type="video/mp4" />
      </video>

      <div className="flex justify-between container items-center ">
        <Link href="/">
          <Image
            width={60}
            height={60}
            src="/favicon/etud-baku.jpg"
            alt="logo"
            className="rounded-full"
          />
        </Link>

        <div className="flex">
          <nav className="hidden  top-3 text-lg  items-center md:flex ">
            <Link className="pl-3 text-white" href="/">
              Home
            </Link>
            <Link className="pl-3 text-white" href="/about">
              About
            </Link>
            <Link className="pl-3 text-white" href="/contact">
              Contact us
            </Link>
          </nav>

          <Mobile />

          <div className=" ml-2 hidden items-center  md:flex  ">
            <div className="w-[30px]">
              <Image
                src="/langspinner/earth.gif"
                width={5}
                height={5}
                layout="responsive"
              />
            </div>
            <Langdropdown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
