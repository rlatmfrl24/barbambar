import type { NextPage } from "next";
import Head from "next/head";
import Landing from "../components/landing";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col h-full">
      <Head>
        <title>BarBamBar</title>
      </Head>
      <Landing />
    </div>
  );
};

export default Home;
