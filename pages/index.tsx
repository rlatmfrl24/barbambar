import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>BarBamBar</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Exo:wght@900&family=Poppins:wght@400;500;600&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <div id="main">
        <div id="menu_bar">
          <Image src="/img/cat.png" width={32} height={32} alt="logo" />
          <div id="title">BarBamBar</div>
          <div id="tab_container">
            <div className="tab">ABOUT</div>
            <div className="tab">MENU</div>
            <div className="tab">HERO</div>
          </div>
          <div id="export_btn_container">
            <Image
              src={"/img/youtube.png"}
              width={30}
              height={30}
              alt="youtube"
              onClick={() => {
                window.open(
                  "https://www.youtube.com/channel/UCzww46F6Cjj_I751OtLSXSQ"
                );
              }}
              style={{ cursor: "pointer" }}
            />
            <Image
              src="/img/instagram.png"
              width={25}
              height={25}
              alt="instagram"
              onClick={() => {
                window.open("https://www.instagram.com/yosajangtv/");
              }}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
        <div id="body">BarBamBar</div>
      </div>

      <style jsx>
        {`
          div {
            display: flex;
            flex-direction: column;
          }
          .tab {
            display: flex;
            justify-content: center;
            align-items: center;
            color: #fff;
            font-family: "Exo", sans-serif;
            font-weight: bold;
            cursor: pointer;
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
            font-family: "Exo", sans-serif;
            font-weight: 900;
            color: #fff;
            margin-left: 10px;
          }
          #export_btn_container {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            margin-left: auto;
            margin-right: 10px;
            gap: 1em;
          }
          #tab_container {
            display: flex;
            flex-direction: row;
            flex: stretch;
            justify-content: space-between;
            margin: 0 auto;
            width: 100%;
            padding: 0 10em;
          }
        `}
      </style>
    </div>
  );
};

export default Home;
