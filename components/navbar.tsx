import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import { Collapse } from "@mui/material";
import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";

const NavBar: NextPage = () => {
  const [isClose, setIsClose] = useState(false);
  const toggle = () => setIsClose(!isClose);
  const handleResize = () => {
    if (window.innerWidth > 768) {
      setIsClose(true);
    } else {
      setIsClose(false);
    }
  };

  useEffect(() => {
    setIsClose(!isMobile);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="flex items-center justify-between flex-wrap bg-black p-4">
      <div className="flex items-center w-full md:w-auto justify-between text-white ">
        <div className="flex items-center">
          <Image src="/img/cat.png" width={24} height={24} alt="cat-icon" />
          <Link href="/">
            <a className="font-exo font-extrabold text-2xl tracking-tight ml-3 cursor-pointer">
              BarBamBar
            </a>
          </Link>
        </div>
        <Image
          className={
            isClose
              ? "md:invisible rotate-180 transition-transform duration-200"
              : "md:invisible rotate-0 transition-transform duration-200"
          }
          onClick={toggle}
          src="/img/expand.svg"
          width={36}
          height={36}
          alt="menu-icon"
        />
      </div>
      <Collapse
        className="w-full block flex-grow md:flex md:items-center md:w-auto"
        in={isClose}
      >
        <div className="w-full block flex-grow md:flex md:items-center md:w-auto">
          <div className="text-sm md:flex-grow">
            <a
              href="about"
              className="font-exo font-semibold block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-200 mr-4"
            >
              ABOUT
            </a>
            <a
              href="menu"
              className="font-exo font-semibold block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-200 mr-4"
            >
              MENU
            </a>
            <a
              href="event/list"
              className="font-exo font-semibold block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-200 mr-4"
            >
              EVENT
            </a>

            <a
              href="heroes"
              className="font-exo font-semibold block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-200 mr-4"
            >
              HEROES
            </a>
            <a
              href="gallery"
              className="font-exo font-semibold block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-200 mr-4"
            >
              GALLERY
            </a>
            <a
              href="contact"
              className="font-exo font-semibold block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-200 mr-4"
            >
              CONTACT
            </a>
          </div>
          <div className="flex mt-3 md:mt-0">
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
