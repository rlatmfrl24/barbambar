import { ImageList, ImageListItem } from "@mui/material";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import galleryData from "../public/gallery/gallerylist.json";
import { isMobile } from "react-device-detect";
import { useEffect, useState } from "react";

const Gallery: NextPage = () => {
  const [imgListColumn, setImgListColumn] = useState(3);

  useEffect(() => {
    if (isMobile) {
      setImgListColumn(2);
    } else {
      setImgListColumn(4);
    }
  }, []);

  return (
    <div className="flex justify-center h-full bg-gray-100">
      <Head>
        <title>Gallery - 바밤바</title>
      </Head>
      <div className="container ">
        <div className="flex justify-center font-exo xl:text-8xl lg:text-7xl md:text-6xl sm:text-4xl text-2xl text-white bg-black md:p-10 p-5 my-5 mx-3">
          <p>BarBambar Gallery</p>
        </div>
        <div className="p-3">
          <ImageList cols={imgListColumn}>
            {galleryData.map((image, index) => (
              <ImageListItem key={index}>
                <a
                  href={"/gallery/" + image}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Image
                    width="100%"
                    height="100%"
                    layout="responsive"
                    objectFit="cover"
                    src={"/gallery/" + image}
                    alt={image}
                    loading="lazy"
                  />
                </a>
              </ImageListItem>
            ))}
          </ImageList>
        </div>
        <div className="flex flex-col justify-center items-center text-center mt-5 mb-10 font-pretend font-bold">
          <p>당신의 바밤바 사진을 공유해주세요!</p>
          <a href="mailto:397love@gmail.com">
            <p className="text-xl hover:underline">397love@gmail.com</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
