import { ImageList, ImageListItem } from "@mui/material";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import galleryData from "../public/gallery/gallerylist.json";

const Gallery: NextPage = () => {
  return (
    <div className="flex justify-center h-full bg-gray-100">
      <Head>
        <title>Gallery</title>
      </Head>
      <div className="container ">
        <div className="flex justify-center font-exo xl:text-8xl lg:text-7xl md:text-6xl sm:text-4xl text-2xl text-white bg-black md:p-10 p-5 my-5 mx-3">
          <p>BarBambar Gallery</p>
        </div>
        <div>
          <ImageList cols={3}>
            {galleryData.map((image, index) => (
              <ImageListItem key={index}>
                <Image
                  width={200}
                  height={200}
                  layout="intrinsic"
                  objectFit="cover"
                  src={"/gallery/" + image}
                  alt={image}
                />
              </ImageListItem>
            ))}
          </ImageList>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
