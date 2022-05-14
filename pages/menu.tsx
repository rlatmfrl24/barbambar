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
      </div>
    </div>
  );
};

export default Menu;
