import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Contact: NextPage = () => {
  return (
    <div className="flex justify-center bg-gray-100 h-full">
      <Head>
        <title>Contact</title>
      </Head>
      <div className="container">
        <div className="flex justify-center">
          <div>
            <Image src="/img/map.svg" alt="map" height={100} width={100} />
            Location
          </div>
          <div>Phone</div>
          <div>Email</div>
          <div>Youtube</div>
          <div>Instagram</div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
