import { NextPage } from "next";
import { MenuItem } from "../menu/item";
import MenuItemComponent from "../menu/item";

type ItemProps = {
  title: string;
  items: MenuItem[];
};

const MenuCategory: NextPage<ItemProps> = ({ title, items }) => {
  return (
    <div className="mb-10">
      <div className="font-pretend font-black pb-1 2xl:text-4xl xl:text-3xl text-2xl border-b-4 border-black">
        {title}
      </div>
      {items.map((item, index) => (
        <MenuItemComponent key={index} {...item} />
      ))}
    </div>
  );
};

export default MenuCategory;
