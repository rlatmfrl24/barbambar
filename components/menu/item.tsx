import { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";
import Modal from "react-modal";
import { isMobile } from "react-device-detect";

export type MenuItem = {
  name: string;
  englishName: string;
  price: number;
  description: string;
  alcohol: number;
  ingredients: string[];
  youtubeId: string;
  isModifiable: boolean;
};

const MenuItemComponent: NextPage<MenuItem> = (item) => {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(!modal);
  };

  Modal.setAppElement("#__next");

  const openYoutube = () => {
    if (isMobile || window.innerWidth < 768) {
      window.open(
        `https://www.youtube.com/watch?v=${item.youtubeId}`,
        "_blank"
      );
    } else {
      openModal();
    }
  };

  return (
    <div className="m-3">
      <p className="flex justify-between gap-3 font-pretend font-extrabold xl:text-2xl lg:text-xl">
        <span className="flex sm:gap-3 sm:flex-row flex-col">
          {item.youtubeId !== "" ? (
            <span
              className="underline cursor-pointer hover:text-gray-700 "
              onClick={openYoutube}
            >
              {item.name}
            </span>
          ) : (
            <span>{item.name}</span>
          )}
          <span className="font-exo">{item.englishName}</span>
        </span>
        <span className="flex flex-1 justify-end">
          {item.price.toFixed(1)}
          {item.isModifiable ? `~` : ``}
        </span>
      </p>
      <Modal
        isOpen={modal}
        onRequestClose={openModal}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            border: "none",
          },
        }}
      >
        <iframe
          className="modal__video-style"
          loading="lazy"
          width="700"
          height="500"
          src={`https://www.youtube.com/embed/${item.youtubeId}`}
          title={item.name}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Modal>
      <p className="flex flex-row justify-between">
        {item.description != "" ? (
          <span className="flex-1 font-pretend font-bold xl:text-base text-sm">
            {item.description}
          </span>
        ) : (
          <span className="font-pretend">
            {item.ingredients.map((ingredient, index) => (
              <span key={index}>
                {ingredient}
                {item.ingredients.length - 1 !=
                item.ingredients.indexOf(ingredient)
                  ? `+`
                  : ``}
              </span>
            ))}
          </span>
        )}
        {item.alcohol > 0 ? (
          <span className="flex-0 flex justify-end font-exo xl:text-base text-xs">
            Alc. {item.alcohol}%
          </span>
        ) : (
          <></>
        )}
      </p>
      <p className="leading-none">
        {item.ingredients.length > 0 && item.description != "" ? (
          <span className="font-pretend lg:text-sm text-xs">
            {item.ingredients.map((ingredient, index) => (
              <span key={index}>
                {ingredient}
                {item.ingredients.length - 1 !=
                item.ingredients.indexOf(ingredient)
                  ? `+`
                  : ``}
              </span>
            ))}
          </span>
        ) : (
          <></>
        )}
      </p>
    </div>
  );
};

export default MenuItemComponent;
