import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>BarBamBar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="main">
        <div id="menu_bar">
          <Image src="/img/cat.png" width={32} height={32} alt="logo" />
          <div id="title">BarBamBar</div>
        </div>
        <div id="body">BarBamBar</div>
      </div>

      <style jsx>
        {`
          div {
            display: flex;
            flex-direction: column;
          }
          #main {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
          }
          #menu_bar {
            background-color: #000;
            width: 100%;
            height: 50px;
            display: flex;
            flex-direction: row;
            align-items: center;
            padding-left: 10px;
          }
          #body {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
          }
          #title {
            font-size: 1.6em;
            font-family: "Roboto", sans-serif;
            font-weight: bold;
            color: #fff;
            margin-left: 10px;
          }
        `}
      </style>
    </div>
  );
};

export default Home;
