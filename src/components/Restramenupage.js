import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import RestaurentCategory from "./RestaurentCategory";

function Restramenupage() {
  const { resId } = useParams();

  const Restramenu = useRestaurentMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  if (Restramenu === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    Restramenu?.cards[2]?.card?.card?.info;

  const categories =
    Restramenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {categories.map((category, index) => (
        <RestaurentCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
}

export default Restramenupage;
