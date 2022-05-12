import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import RulesLine from "../components/about/rules";

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
          <div className="flex-1 gap-1 lg:my-8 pt-5 px-5">
            <RulesLine text="만취하신 분은 돌려보냅니다. 손님과 저를 위한 일이니 기분 상해하지 마세요." />
            <RulesLine text="외부음식물 반입 금지입니다." />
            <RulesLine text="고양이에게 사람 먹는 음식을 주시는 분에게는 고양이 사료 먹여드립니다." />
            <RulesLine text="주렁주렁 실내동물원에 오신것처럼 이동하시면 제가 아주 불편합니다." />
            <RulesLine text="고양이 간식, 장난감 가져오지 마세요. 제가 잘 먹이고 잘 놀아줍니다." />
            <RulesLine text="손님의 부주의에 의한 잔 파손시에는 비용을 별도로 청구합니다." />
            <RulesLine text="영등포에 모텔 많으니 거기 가셔서 물고 빨고 하세요." />
            <RulesLine text="고양이 불러도 안갑니다. 휘파람, 고양이 소리 절대 금지." />
            <RulesLine text="빨대, 이어폰, 손으로 고양이 놀아주지 마세요. 장난감이 아니잖아요." />
            <RulesLine text="애완동물의 '완'이라는 글자는 장난감이라는 뜻입니다. 반려동물이라고 해주세요." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
