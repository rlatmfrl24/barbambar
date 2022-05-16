import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Heroes: NextPage = () => {
  return (
    <div className="flex justify-center h-full bg-gray-100">
      <Head>
        <title>Heros</title>
      </Head>
      <div className="container ">
        <div className="font-exo text-8xl text-white bg-black p-10 my-5">
          <p>Do You Know</p>
          <p className="text-right">BarBamBar Heros?</p>
        </div>
        <div className="grid grid-cols-2">
          <div className="flex flex-1 flex-row p-5">
            <div className="flex-0 mr-5">
              <Image
                className="rounded-full"
                src="/img/bam.png"
                alt="bam"
                height={200}
                width={200}
                layout="intrinsic"
                objectFit="cover"
              ></Image>
            </div>
            <div className="flex flex-col flex-1 font-pretend py-3">
              <div>
                <p className="text-5xl font-pointkr font-black">별</p>
                <p className="text-lg font-semibold leading-none">
                  2013년 6월생
                </p>
                <p className="text-sm font-semibold">
                  브리티쉬 숏헤어+스코티쉬폴드 / 공주
                </p>
              </div>
              <div className="flex flex-1 flex-col mt-5">
                <div>• 수원에서 입양</div>
                <div>• 개 같은 성격</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heroes;
