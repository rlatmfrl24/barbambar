import { NextPage } from "next";
import Head from "next/head";
import Hero from "../components/heroes/hero";
import heroesData from "../pages/api/data/heroes_data.json";

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
          {heroesData.map((hero, index) => (
            <Hero key={index} {...hero} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Heroes;
