import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const About: NextPage = () => {
  return (
    <div className="flex justify-center">
      <Head>
        <title>About</title>
      </Head>
      <div className="container  mt-5">
        <div className="text-center">
          <div>
            <div className="font-exo text-3xl">Who is Yosajang?</div>
            <Image
              src="/img/yosi_heroine.jpg"
              height={300}
              width={300}
              objectFit="cover"
            />
          </div>
          <div className="flex flex-col">
            <div className="font-exo text-xl">I want to be friends</div>
            <div className="font-exo text-2xl">with you.</div>
            <div className="">영등포 바밤바의 사장</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
