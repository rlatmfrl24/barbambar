import { NextPage } from "next";
import Image from "next/image";

export type HeroType = {
  profile: string;
  name: string;
  birth: string;
  gender: string;
  kind: string;
  description: string[];
};

const Hero: NextPage<HeroType> = (data) => {
  return (
    <div className="flex flex-1 flex-row p-5">
      <div className="flex-0 mr-5">
        <Image
          className="rounded-full"
          src={data.profile}
          alt="bam"
          height={200}
          width={200}
          layout="intrinsic"
          objectFit="cover"
        ></Image>
      </div>
      <div className="flex flex-col flex-1 font-pretend py-3">
        <div>
          <p className="text-5xl font-pointkr font-black">{data.name}</p>
          <p className="text-lg font-semibold leading-none">{data.birth}</p>
          <p className="text-sm font-semibold">
            {data.kind} / {data.gender}
          </p>
        </div>
        <div className="flex flex-1 flex-col mt-5">
          {data.description.map((description, idx) => (
            <div key={idx}>• {description}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
