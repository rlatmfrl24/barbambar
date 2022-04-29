import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import NavBar from "./navbar";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <Head>
        <title>BarBamBar</title>
      </Head>
      <NavBar />
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
          서울시 영등포구 영중로4길 25-1(영등포동3가 23-8) 2층
        </span>
        <span>이 사이트는 바밤바 공식 사이트가 아닌, 팬 사이트입니다</span>
      </div>
    </div>
  );
};

export default Home;
