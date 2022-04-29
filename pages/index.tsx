import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <Head>
        <title>BarBamBar</title>
      </Head>
      <nav className="flex items-center justify-between flex-wrap bg-black p-4">
        <div className="flex items-center flex-shrink-0 text-white mr-20">
          <Image src="/img/cat.png" width={24} height={24} />
          <span className="font-exo font-extrabold text-2xl tracking-tight ml-3">
            BarBamBar
          </span>
        </div>

        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <a
              href="#responsive-header"
              className="font-exo font-semibold block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4"
            >
              ABOUT
            </a>
            <a
              href="#responsive-header"
              className="font-exo font-semibold block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4"
            >
              MENU
            </a>
            <a
              href="#responsive-header"
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
      <div className="relative flex h-full flex-col items-center justify-center">
        <Image src="/img/main.jpg" layout="fill" objectFit="cover" />
        <div className="absolute text-center flex flex-col">
          <div className="lg:mb-10 m-5">
            <span className="bg-black pl-5 pr-5 font-exo lg:text-8xl text-5xl  text-white">
              BarBamBar
            </span>
          </div>
          <div>
            <span className="bg-black pr-3 pl-3 pt-3 pb-2 font-kor lg:text-6xl text-3xl  text-white">
              고양이와 함께하는 바
            </span>
          </div>
        </div>
      </div>
      <div className="h-1/6 flex flex-col justify-center align-middle text-center font-kor bg-black text-white">
        <span className="text-xl">
          주소: 서울시 영등포구 영중로4길 25-1(영등포동3가 23-8) 2층
        </span>
        <span>이 사이트는 바밤바 공식 사이트가 아닌, 팬 사이트입니다</span>
      </div>
    </div>
  );
};

export default Home;
