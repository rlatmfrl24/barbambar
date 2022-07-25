import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import MenuCategory from "../components/menu/category";
import MenuItemComponent from "../components/menu/item";
import martini from "../pages/api/data/menu/martini.json";
import longtea from "../pages/api/data/menu/longtea.json";
import bartender from "../pages/api/data/menu/bartender.json";
import hemingway from "../pages/api/data/menu/hemingway.json";
import alcohol from "../pages/api/data/menu/alcohol.json";
import actor from "../pages/api/data/menu/actor.json";
import oneshot from "../pages/api/data/menu/oneshot.json";
import classic from "../pages/api/data/menu/classic.json";
import signature from "../pages/api/data/menu/signature.json";
import sweetandsour from "../pages/api/data/menu/sweetandsour.json";
import sweet from "../pages/api/data/menu/sweet.json";
import sour from "../pages/api/data/menu/sour.json";
import mocktail from "../pages/api/data/menu/mocktail.json";
import beer from "../pages/api/data/menu/beer.json";
import snack from "../pages/api/data/menu/snack.json";

const Menu: NextPage = () => {
  return (
    <div className="flex justify-center bg-gray-100">
      <Head>
        <title>Menu - 바밤바</title>
      </Head>

      <div className="container p-5">
        <div className="flex flex-col items-center justify-center mb-10">
          <span className="font-exo text-8xl ">MENU</span>
          <span className="flex text-center font-pretend font-semibold underline">
            밑줄 친 메뉴명을 클릭하면
            <br className="sm:hidden" /> 요사장 메이킹 영상을 볼 수 있습니다
          </span>
        </div>

        <div className=" lg:grid lg:grid-cols-2 gap-10">
          <MenuCategory
            key={martini.key}
            title={martini.title}
            items={martini.items}
          />
          <MenuCategory
            key={longtea.key}
            title={longtea.title}
            items={longtea.items}
          />
          <MenuCategory
            key={bartender.key}
            title={bartender.title}
            items={bartender.items}
          />
          <MenuCategory
            key={hemingway.key}
            title={hemingway.title}
            items={hemingway.items}
          />
          <MenuCategory
            key={actor.key}
            title={actor.title}
            items={actor.items}
          />
          <MenuCategory
            key={classic.key}
            title={classic.title}
            items={classic.items}
          />
          <MenuCategory
            key={oneshot.key}
            title={oneshot.title}
            items={oneshot.items}
          />
          <MenuCategory
            key={alcohol.key}
            title={alcohol.title}
            items={alcohol.items}
          />
          <MenuCategory
            key={signature.key}
            title={signature.title}
            items={signature.items}
          />
          <MenuCategory
            key={sweetandsour.key}
            title={sweetandsour.title}
            items={sweetandsour.items}
          />
          <MenuCategory
            key={sweet.key}
            title={sweet.title}
            items={sweet.items}
          />
          <MenuCategory key={sour.key} title={sour.title} items={sour.items} />
          <MenuCategory
            key={mocktail.key}
            title={mocktail.title}
            items={mocktail.items}
          />
          <MenuCategory key={beer.key} title={beer.title} items={beer.items} />
          <div className="flex justify-center col-start-1 col-span-2 bg-black text-white font-exo text-5xl p-3">
            SNACK
          </div>
          {snack.items.map((item, index) => (
            <MenuItemComponent key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
