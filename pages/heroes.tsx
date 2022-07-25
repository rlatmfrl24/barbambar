import { NextPage } from "next";
import Head from "next/head";
import Hero from "../components/heroes/hero";
import heroesData from "../pages/api/data/heroes_data.json";

const Heroes: NextPage = () => {
  return (
    <div className="flex justify-center h-full bg-gray-100">
      <Head>
        <title>Heroes - 바밤바</title>
      </Head>
      <div className="container ">
        <div className="flex justify-center font-exo xl:text-8xl lg:text-7xl md:text-6xl sm:text-4xl text-2xl text-white bg-black md:p-10 p-5 my-5 mx-3">
          <p>
            Do You Know <br /> &nbsp;&nbsp;&nbsp;&nbsp; BarBamBar Heroes?
          </p>
        </div>
        <div className="grid md:grid-cols-2">
          {heroesData.map((hero, index) => (
            <Hero key={index} {...hero} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Heroes;
