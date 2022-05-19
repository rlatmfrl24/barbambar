import type { NextPage } from "next";
import Head from "next/head";
import Landing from "../components/landing";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col h-full">
      <Head>
        <meta
          name="naver-site-verification"
          content="d50b5c3a7c03cfc70f1b50723db71612e8b33ed6"
        />
        <meta
          name="google-site-verification"
          content="G7ZZVZTVe4WdzXmDg8Ov7lGu75yWfbs5vnTxQITgT4Q"
        />
        <title>BarBamBar</title>
      </Head>
      <Landing />
    </div>
  );
};

export default Home;
