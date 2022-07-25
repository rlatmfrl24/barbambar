import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import Collapse from "@mui/material/Collapse";
import { useState } from "react";

const Landing: NextPage = () => {
  const [isClose, setIsClose] = useState(true);
  const toggle = () => setIsClose(!isClose);

  return (
    <div className="flex flex-col flex-1">
      <div className="relative flex h-full flex-col items-center justify-center">
        <Image
          src="/img/main.jpg"
          priority={true}
          layout="fill"
          objectFit="cover"
          alt="barbambar"
        />
        <div className="absolute top-0 bg-red-600 font-pretend font-bold w-full text-center">
          <Collapse in={isClose}>
            <div className="flex justify-center items-center">
              <div className="flex justify-center items-center flex-1 flex-col sm:flex-row">
                <span>한정판 요피타 글래스와 티셔츠 판매중!&nbsp;</span>
                <span>
                  자세한 내용은{" "}
                  <Link href="/event/list">
                    <a className="border-b-2 border-b-black font-bold text-lg">
                      EVENT
                    </a>
                  </Link>{" "}
                  페이지에서 확인하세요!
                </span>
              </div>
              <div className="flex-0 w-7 cursor-pointer" onClick={toggle}>
                <Image
                  src="/img/close.svg"
                  height={24}
                  width={24}
                  layout="responsive"
                  alt="close"
                />
              </div>
            </div>
          </Collapse>
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
      <div className="py-2 h-1/5 flex flex-col justify-center align-middle text-center font-pretend bg-black text-white">
        <span className="text-base mb-2 font-bold lg:text-xl">
          서울시 영등포구 영중로4길 25-1(영등포동3가 23-8) 2층
        </span>
        <span className="text-xs">
          이 사이트는 바밤바 공식 사이트가 아닌 팬 사이트입니다
        </span>
        <span className="flex justify-center sm:flex-row flex-col text-xs sm:gap-2">
          <span>Copyright © 2022 BarBamBar. All rights reserved</span>
        </span>
      </div>
    </div>
  );
};

export default Landing;
