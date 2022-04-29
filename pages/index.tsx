import type { NextPage } from "next";
import Head from "next/head";
import { useRecoilValue } from "recoil";
import { currentPageState } from "../recoil/atoms/common";
import Landing from "./landing";
import NavBar from "./navbar";

const Home: NextPage = () => {
  const pageState = useRecoilValue(currentPageState);

  return (
    <div className="flex flex-col h-screen">
      <Head>
        <title>BarBamBar</title>
      </Head>
      <NavBar />
      {pageState === "landing" && <Landing />}
    </div>
  );
};

export default Home;
