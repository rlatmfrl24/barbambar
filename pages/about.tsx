import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import RulesLine from "../components/about/rules";
import QuestionLine from "../components/about/question";
import AnswerLine from "../components/about/answer";

const About: NextPage = () => {
  return (
    <div className="flex justify-center bg-gray-100">
      <Head>
        <title>About - 바밤바</title>
      </Head>
      <div className="flex flex-col text-center lg:m-10 m-4 ">
        <div className="flex flex-auto justify-center p-5">
          <div className="relative lg:w-72 md:w-52 sm:w-44 w-32 ">
            <Image
              className="rounded-full"
              src="/img/yosi_wink.jpg"
              alt="yosi_heroine"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="flex flex-col justify-start lg:ml-10 md:ml-5 sm:ml-3 ml-3 flex-shrink-0">
            <div className="flex justify-start font-pointkr font-black lg:text-7xl md:text-5xl sm:text-4xl text-2xl">
              요사장
            </div>
            <div className="flex justify-start font-pretend font-medium lg:text-2xl sm:text-xl text-sm">
              칵테일 대중화를 꿈꾸는 바밤바의 사장
            </div>
            <div className="flex justify-start font-pretend font-medium lg:text-2xl sm:text-xl text-sm">
              영등포 바밤바 2011년 OPEN
            </div>
            <div className="flex flex-col lg:mt-7 mt-2 justify-center font-exo lg:text-6xl md:text-4xl sm:text-3xl">
              <span className="mr-12">&quot;I want to be friends</span>
              <span className="flex justify-end">with YOU!&quot;</span>
            </div>
          </div>
        </div>
        <div className="border-2 lg:mt-7 mt-3"></div>
        <div className="relative flex justify-center border-4 border-black mt-10">
          <div className="absolute  bg-gray-100 px-3 font-exo sm:text-3xl text-2xl text-red-600 -top-5 ">
            BAR BAM BAR RULES
          </div>
          <div className="flex-1 gap-1 lg:my-8 my-2 pt-5 lg:px-10 px-5">
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
        <div className="border-2 mt-8"></div>
        <div className="relative flex justify-center border-4 border-black mt-10">
          <div className="absolute bg-gray-100 px-3 font-exo sm:text-3xl text-2xl text-red-600 -top-5 ">
            BAR BAM BAR FAQ
          </div>
          <div className="flex-1 gap-1 lg:my-8 pt-5 lg:px-10 px-5">
            <QuestionLine text="가게 이름이 바밤바인 이유는?" />
            <AnswerLine
              text={[
                "가게를 오픈할때 많이 고민했다.",
                "뭔가 멋드러진 이름을 정할까, 재치있고 유머러스한 이름으로 정할까...",
                "결국 Bar 가 들어간 단어 중 가장 기억하기 쉽고 재미있는 바밤바로 정하게 되었다.",
                "여담으로 스크류바, 스페이스바, 죠스바, 수박바도 후보에 있었다.",
              ]}
            />
            <QuestionLine text="칵테일 속 얼음이 너무 커요!" />
            <AnswerLine
              text={[
                "칵테일과 얼음은 매우 중요한 관계이다.",
                "일반 업소용 제빙기에서 나오는 얼음으로도 맛있는 칵테일을 만들 수 있지만",
                "맛을 유지하는 시간이 매우 짧다. 얼음은 계속 녹기 때문이다.",
                "가게에서 현란한 조명과 비트있고 빠른 음악이 나온다면,",
                "손님들 역시 빨리 마시게 되기 때문에 얼음이 빨리 녹아도 크게 상관없다.",
                "하지만 바밤바는 눈으로 고양이들을 보며 힐링하고",
                "칵테일을 천천히 즐기시는 손님들이 많다.",
                "그래서 크고 아름다운 칵테일에 사용하게 되었다.",
                "이런 크고 아름다운 얼음들은 녹는 속도 역시 매우 느리기 때문에",
                "맛의 변화가 크게 느껴지지 않는다.",
              ]}
            />
            <QuestionLine text="왜 바에 고양이가 있어요?" />
            <AnswerLine
              text={[
                "처음부터 고양이가 있는 Bar를 만든 것은 아니다.",
                "유기묘와 길냥이들을 하나 둘 구조하고 임보를 하다보니",
                "따로 공간이 없어서 가게에서 직접 돌보기 시작했다.",
                "캣타워, 캣휠 등 고양이 관련 가구들을 두면서 가게 분위기 역시 자연스럽게 바뀌었다.",
              ]}
            />
            <QuestionLine text="유튜브도 하신다면서요?" />
            <AnswerLine
              text={[
                "요사장TV 라는 채널을 운영하고 있다.",
                "칵테일의 대중화에 앞장서고 싶은 마음에 2019년 4월에 시작하게 되었다.",
                "사실 10수년전만 해도 집에서 스파게티를 해먹는다 하면 '허세부리네'라는",
                "인식이 있었지만 현재는 라면만큼 쉽게 집에서 만들어 먹는 사람이 많다.",
                "칵테일의 현주소 역시 예전의 스파게티와 같다고 생각된다.",
                "누구나 쉽게 재료만 있으면 만들어 먹을 수 있다!",
                "칵테일은 어려운게 아니다!",
                "쓰까먹으면 그것이 바로 칵테일이다!",
                "라는 문화가 정착되는데 도움이 되고 싶다.",
              ]}
            />
            <QuestionLine text="칵테일이 맛있어요! 칵테일이 맛없어요?" />
            <AnswerLine
              text={[
                "칵테일 역시 기호식품이다.",
                "바텐더가 만든 칵테일이 본인의 취향과 입맛에 맛냐 안맞냐의 차이라고 생각한다.",
                "누군가는 레몬을 핥기만해도 시다고 소리지르고,",
                "누군가는 레몬을 껍질채 씹어먹는다.",
                "그 바텐더가 제일 잘 만드는 칵테일을 추천받을게 아니라",
                "본인의 취향에 맞는 칵테일을 찾는게 서로에게 이득이다.",
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
