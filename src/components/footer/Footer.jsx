import Link from "next/link";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { GoMail } from "react-icons/go";

const Footer = () => {
  return (
    <footer className="w-full px-3 h-2[200px] absolute bottom-0  bg-black flex justify-center  ">
      <div className="container my-20 flex flex-col justify-between lg:flex-row ">
        <div>
          <p className="text-white">
            Website created with love by Jamal to his brother Nijat
          </p>
        </div>

        <div className="flex text-white w-[200px] justify-around mt-4  ">
          <Link
            href="https://www.facebook.com/nicat.pashazade.9"
            target="_blank"
            className="hover:scale-125 transition ease-in-out"
          >
            <BsFacebook size={25} cursor="pointer" />
          </Link>

          <Link
            href="https://www.instagram.com/nijat_pashazadeh/"
            target="_blank"
            className="hover:scale-125 transition ease-in-out"
          >
            <BsInstagram size={25} cursor="pointer" />
          </Link>

          <Link
            href="https://www.youtube.com/watch?v=yCB17gK4kDQ"
            target="_blank"
            className=" hover:scale-125 transition ease-in-out "
          >
            <BsYoutube size={25} cursor="pointer" />
          </Link>

          <Link
            href=""
            target="_blank"
            className="hover:scale-125 transition ease-in-out"
          >
            <GoMail size={25} cursor="pointer" />
          </Link>
        </div>

        <div>
          <p className="text-white mt-4">© 2023 The1905. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
