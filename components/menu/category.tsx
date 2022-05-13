import { NextPage } from "next";
import { MenuItem } from "../menu/item";
import MenuItemComponent from "../menu/item";

type ItemProps = {
  title: string;
  items: MenuItem[];
};

const MenuCategory: NextPage<ItemProps> = ({ title, items }) => {
  return (
    <div>
      <div className="font-kor text-4xl border-b-4 border-black">{title}</div>
      {items.map((item, index) => (
        <MenuItemComponent key={index} {...item} />
      ))}
    </div>
  );
};

export default MenuCategory;
