import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";

type ContactData = {
  title: string;
  imgpath: string;
  link: string;
};

const ContactButton: NextPage<ContactData> = ({ title, imgpath, link }) => {
  return (
    <Link href={link} passHref>
      <a
        className="flex items-center py-2 px-5 font-exo lg:text-2xl text-lg gap-2 bg-white shadow-md rounded-xl"
        target={`_blank`}
      >
        <Image
          src={imgpath}
          width={32}
          height={32}
          layout="intrinsic"
          objectFit="cover"
          alt="contact"
        />
        {title}
      </a>
    </Link>
  );
};

const Contact: NextPage = () => {
  const [showPhoneNum, setShowPhoneNum] = useState(false);
  useEffect(() => {
    setShowPhoneNum(isMobile);
  }, [isMobile]);

  return (
    <div className="flex flex-col justify-center items-center bg-gray-100 h-full">
      <Head>
        <title>Contact</title>
      </Head>
      <div className="flex flex-col flex-wrap gap-3 h-full justify-center">
        <div className="flex flex-col justify-center items-center font-exo">
          <p className="lg:text-7xl md:text-6xl sm:text-5xl text-4xl">
            Contact to
          </p>
          <p className="lg:text-9xl md:text-8xl sm:text-7xl text-6xl">
            BarBamBar
          </p>
        </div>
        <div className="border-2 border-black"></div>
        <div className="flex md:flex-row flex-col justify-center gap-3 mt-3">
          <ContactButton
            title="Location"
            imgpath="/img/map.svg"
            link="https://place.map.kakao.com/14576513"
          />
          {showPhoneNum && (
            <ContactButton
              title="Call"
              imgpath="/img/call.svg"
              link="tel:02-3667-7678"
            />
          )}

          <ContactButton
            title="Youtube"
            imgpath="/img/youtubetv.svg"
            link="https://www.youtube.com/channel/UCzww46F6Cjj_I751OtLSXSQ"
          />
          <ContactButton
            title="Instagram"
            imgpath="/img/instagram_black.png"
            link="https://www.instagram.com/yosajangtv/"
          />
        </div>
      </div>
      <div>
        {!showPhoneNum && (
          <p
            id="phone_num_for_pc"
            className="flex  justify-center items-center gap-2 mt-10 font-exo text-2xl"
          >
            <Image
              src="/img/call.svg"
              width={24}
              height={24}
              layout="intrinsic"
              objectFit="cover"
              alt="call"
            />
            <span>02-3667-7678</span>
          </p>
        )}
      </div>
      <div className="flex items-center bottom-0 my-10 font-pretend font-bold font-sm">
        버그 및 수정 문의 : 397love@gmail.com
      </div>
    </div>
  );
};

export default Contact;
