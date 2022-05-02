import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const About: NextPage = () => {
  return (
    <div className="flex justify-center">
      <Head>
        <title>About</title>
      </Head>
      <div className="container lg:mt-5">
        <div className="flex text-center m-5">
          <div className="flex flex-auto justify-center">
            <div className="relative lg:w-72 md:w-52 sm:w-44 w-32">
              <Image
                src="/img/yosi_wink.jpg"
                alt="yosi_heroine"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="flex flex-col justify-start lg:ml-10 md:ml-5 sm:ml-3 ml-3 flex-shrink-0">
              <div className="flex justify-start font-kor lg:text-7xl md:text-5xl sm:text-4xl text-2xl">
                요사장
              </div>
              <div className="flex justify-start font-kor lg:text-3xl md:text-2xl sm:text-xl text-sm">
                칵테일 대중화를 꿈꾸는 바밤바의 사장
              </div>
              <div className="flex justify-start font-kor lg:text-3xl md:text-2xl sm:text-xl text-sm">
                영등포 바밤바 2011년 OPEN
              </div>
              <div className="flex flex-1 flex-col justify-center font-exo lg:text-6xl md:text-4xl sm:text-3xl">
                <span>I want to be friends</span>
                <span className="flex justify-end">with YOU!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
