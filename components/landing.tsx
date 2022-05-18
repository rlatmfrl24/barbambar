import type { NextPage } from "next";
import Image from "next/image";

const Landing: NextPage = () => {
  return (
    <div className="flex flex-col flex-1">
      <div className="relative flex h-full flex-col items-center justify-center">
        <Image
          src="/img/main.jpg"
          priority={true}
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute top-0 bg-red-600 font-pretend font-bold w-full text-center">
          <div className="flex justify-center items-center">
            <div className="flex justify-center items-center flex-1 flex-col sm:flex-row">
              <span>한정판 요사장 글랜캐런 코피타 글래스 판매중!</span>
              <span>문의는 DM 및 전화로!</span>
            </div>
            <div className="flex-0 w-7 cursor-pointer">
              <Image
                src="/img/close.svg"
                height={24}
                width={24}
                layout="responsive"
              />
            </div>
          </div>
        </div>
        <div className="absolute text-center flex flex-col">
          <div className="lg:mb-10 m-5">
            <span className="bg-black px-5 font-exo lg:text-8xl text-5xl  text-white">
              BarBamBar
            </span>
          </div>
          <div className="mt-2">
            <span className="bg-black p-2 font-pointkr leading-none lg:text-6xl text-3xl text-white">
              고양이와 함께하는 바
            </span>
          </div>
          <div className="mt-5 inline-flex flex-col self-center">
            <div className="grid grid-cols-[0fr_0fr_1fr] bg-black text-white font-pretend font-bold lg:text-xl text-base py-1 px-2">
              <div className="flex justify-start">TUE~FRI</div>
              <div>&nbsp;:&nbsp;</div>
              <div className="flex justify-end">18:00 ~ 01:00</div>
              <div className="flex justify-start">SAT~SUN</div>
              <div>&nbsp;:&nbsp;</div>
              <div className="flex justify-end">17:00 ~ 01:00</div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-1/5 flex flex-col justify-center align-middle text-center font-pretend bg-black text-white">
        <span className="text-base mb-2 font-bold lg:text-xl">
          서울시 영등포구 영중로4길 25-1(영등포동3가 23-8) 2층
        </span>
        <span>이 사이트는 바밤바 공식 사이트가 아닌 팬 사이트입니다</span>
        <span className="flex justify-center sm:flex-row flex-col text-xs sm:gap-2">
          <span>Copyright © 2022 BarBamBar. All rights reserved</span>
        </span>
      </div>
    </div>
  );
};

export default Landing;
