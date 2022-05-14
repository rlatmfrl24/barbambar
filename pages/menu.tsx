import { NextPage } from "next";
import Head from "next/head";
import MenuCategory from "../components/menu/category";
import martini from "../pages/api/data/martini.json";
import longtea from "../pages/api/data/longtea.json";
import bartender from "../pages/api/data/bartender.json";
import hemingway from "../pages/api/data/hemingway.json";
import alcohol from "../pages/api/data/alcohol.json";
import actor from "../pages/api/data/actor.json";
import oneshot from "../pages/api/data/oneshot.json";
import classic from "../pages/api/data/classic.json";
import signature from "../pages/api/data/signature.json";
import sweetandsour from "../pages/api/data/sweetandsour.json";
import sweet from "../pages/api/data/sweet.json";
import sour from "../pages/api/data/sour.json";
import mocktail from "../pages/api/data/mocktail.json";
import beer from "../pages/api/data/beer.json";

const Menu: NextPage = () => {
  return (
    <div className="flex justify-center bg-gray-100">
      <Head>
        <title>Menu</title>
      </Head>
      <div className="container py-5 lg:grid lg:grid-cols-2 gap-10">
        <MenuCategory title={martini.title} items={martini.items} />
        <MenuCategory title={longtea.title} items={longtea.items} />
        <MenuCategory title={bartender.title} items={bartender.items} />
        <MenuCategory title={hemingway.title} items={hemingway.items} />
        <MenuCategory title={actor.title} items={actor.items} />
        <MenuCategory title={classic.title} items={classic.items} />
        <MenuCategory title={oneshot.title} items={oneshot.items} />
        <MenuCategory title={alcohol.title} items={alcohol.items} />
        <MenuCategory title={signature.title} items={signature.items} />
        <MenuCategory title={sweetandsour.title} items={sweetandsour.items} />
        <MenuCategory title={sweet.title} items={sweet.items} />
        <MenuCategory title={sour.title} items={sour.items} />
        <MenuCategory title={mocktail.title} items={mocktail.items} />
        <MenuCategory title={beer.title} items={beer.items} />
      </div>
    </div>
  );
};

export default Menu;
