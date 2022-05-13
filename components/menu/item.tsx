import { NextPage } from "next";

export type MenuItem = {
  name: string;
  englishName: string;
  price: number;
  description: string;
  alcohol: number;
  ingredients: string[];
  link: string;
};

const MenuItemComponent: NextPage<MenuItem> = (item) => {
  return (
    <div className="m-3">
      <p className="flex flex-row justify-between gap-3 font-kor text-2xl">
        <span>{item.name}</span>
        <span className="font-exo">{item.englishName}</span>
        <span className="flex flex-1 justify-end">{item.price}~</span>
      </p>
      <p></p>
      <p className="flex flex-row justify-between">
        <span className="font-kor">{item.description}</span>
        <span className="font-exo">Alc. {item.alcohol}%</span>
      </p>
    </div>
  );
};

export default MenuItemComponent;
