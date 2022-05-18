import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import { Collapse } from "@mui/material";
import { useState } from "react";

const NavBar: NextPage = () => {
  const [isClose, setIsClose] = useState(false);
  const toggle = () => setIsClose(!isClose);

  return (
    <nav className="flex items-center justify-between flex-wrap bg-black p-4">
      <div className="flex items-center w-full lg:w-auto justify-between text-white ">
        <div className="flex items-center">
          <Image src="/img/cat.png" width={24} height={24} alt="cat-icon" />
          <Link href="/">
            <a className="font-exo font-extrabold text-2xl tracking-tight ml-3 cursor-pointer">
              BarBamBar
            </a>
          </Link>
        </div>
        <Image
          onClick={toggle}
          className="lg:invisible"
          src="/img/menu.svg"
          width={24}
          height={24}
          alt="menu-icon"
        />
      </div>
      <Collapse in={isClose}>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <a
              href="about"
              className="font-exo font-semibold block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4"
            >
              ABOUT
            </a>
            <a
              href="menu"
              className="font-exo font-semibold block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4"
            >
              MENU
            </a>
            <a
              href="heroes"
              className="font-exo font-semibold block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4"
            >
              HEROS
            </a>
            <a
              href="contact"
              className="font-exo font-semibold block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4"
            >
              CONTACT
            </a>
          </div>
          <div className="flex mt-3 lg:mt-0">
            <Link href="https://www.youtube.com/channel/UCzww46F6Cjj_I751OtLSXSQ">
              <a
                className="cursor-pointer m-2 items-center flex"
                target={`_blank`}
              >
                <Image
                  src={`/img/youtube.png`}
                  width={24}
                  height={24}
                  alt="youtube"
                />
              </a>
            </Link>
            <Link href="https://www.instagram.com/yosajangtv/">
              <a
                className="cursor-pointer m-2 items-center flex"
                target={"_blank"}
              >
                <Image
                  src={`/img/instagram.png`}
                  width={24}
                  height={24}
                  alt="instagram"
                />
              </a>
            </Link>
          </div>
        </div>
      </Collapse>
    </nav>
  );
};

export default NavBar;
