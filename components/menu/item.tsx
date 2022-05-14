import { NextPage } from "next";

export type MenuItem = {
  name: string;
  englishName: string;
  price: number;
  description: string;
  alcohol: number;
  ingredients: string[];
  link: string;
  isModifiable: boolean;
};

const MenuItemComponent: NextPage<MenuItem> = (item) => {
  return (
    <div className="m-3">
      <p className="flex flex-row justify-between gap-3 font-kor text-2xl">
        <span>{item.name}</span>
        <span className="font-exo">{item.englishName}</span>
        <span className="flex flex-1 justify-end">
          {item.price.toFixed(1)}
          {item.isModifiable ? `~` : ``}
        </span>
      </p>
      <p></p>
      <p className="flex flex-row justify-between">
        {item.description != "" ? (
          <span className="flex-1 font-kor">{item.description}</span>
        ) : (
          <span className="font-kor">
            {item.ingredients.map((ingredient) => (
              <span>
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
          <span className="flex-1 flex justify-end font-exo">
            Alc. {item.alcohol}%
          </span>
        ) : (
          <></>
        )}
      </p>
      <p>
        {item.ingredients.length > 0 && item.description != "" ? (
          <span className="font-kor">
            {item.ingredients.map((ingredient) => (
              <span>
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
