import type { NextPage } from "next";
import Head from "next/head";
import Landing from "./landing";
import NavBar from "./navbar";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <Head>
        <title>BarBamBar</title>
      </Head>
      <NavBar />
      <Landing />
    </div>
  );
};

export default Home;
