import { NextPage } from "next";
import Head from "next/head";
import MenuCategory from "../components/menu/category";

const Menu: NextPage = () => {
  return (
    <div className="flex justify-center bg-gray-100">
      <Head>
        <title>Menu</title>
      </Head>
      <div className="container py-5 lg:grid lg:grid-cols-2 gap-1">
        <div>
          <MenuCategory
            title="바텐더! 젓지말고 흔들어서!"
            items={[
              {
                name: "진 마티니",
                englishName: "Gin Martini",
                price: 1.4,
                description: "아이언맨 토니 스타크",
                alcohol: 38,
                ingredients: [],
                link: "",
              },
              {
                name: "더티 마티니",
                englishName: "Dirty Martini",
                price: 1.5,
                description: "올리브의 짭조름함",
                alcohol: 28,
                ingredients: [],
                link: "",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Menu;
