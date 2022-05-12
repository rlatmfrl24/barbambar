import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const About: NextPage = () => {
  return (
    <div className="flex justify-center">
      <Head>
        <title>About</title>
      </Head>
      <div className="flex flex-col text-center lg:m-10 m-4">
        <div className="flex flex-auto justify-center p-5">
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
            <div className="flex flex-col lg:mt-7 mt-2 justify-center font-exo lg:text-6xl md:text-4xl sm:text-3xl">
              <span className="mr-12">"I want to be friends</span>
              <span className="flex justify-end">with YOU!"</span>
            </div>
          </div>
        </div>
        <div className="border-2 lg:mt-7 mt-3"></div>
        <div className="relative flex justify-center border-4 border-black mt-10">
          <div className="absolute bg-white px-3 font-exo text-3xl text-red-600 -top-5 ">
            BAR BAM BAR RULES
          </div>
          <div className="flex-1 gap-1 lg:my-8 p-5">
            <div className="text-left font-kor lg:text-3xl lg:mb-7">
              <span className="flex flex-row">
                •
                <blockquote className="ml-2">
                  만취하신 분은 돌려보냅니다 손님과 저를 위한 일이니 기분
                  상해하지 마세요
                </blockquote>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
