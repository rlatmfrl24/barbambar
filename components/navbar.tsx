import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";

const NavBar: NextPage = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-black p-4">
      <div className="flex items-center flex-shrink-0 text-white mr-20">
        <Image src="/img/cat.png" width={24} height={24} />
        <a
          href="/"
          className="font-exo font-extrabold text-2xl tracking-tight ml-3 cursor-pointer"
        >
          BarBamBar
        </a>
      </div>

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
        </div>
        <div className="flex mt-3 lg:mt-0">
          <Link href="https://www.youtube.com/channel/UCzww46F6Cjj_I751OtLSXSQ">
            <a
              className="cursor-pointer m-2 items-center flex"
              target={`_blank`}
            >
              <Image src={`/img/youtube.png`} width={24} height={24} />
            </a>
          </Link>
          <Link href="https://www.instagram.com/yosajangtv/">
            <a
              className="cursor-pointer m-2 items-center flex"
              target={"_blank"}
            >
              <Image src={`/img/instagram.png`} width={24} height={24} />
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
