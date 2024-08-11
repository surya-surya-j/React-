import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurentMenu from "../../utils/useRestaurentMenu";

function Restramenupage() {
  
  const { resId } = useParams();


  const Restramenu = useRestaurentMenu(resId);

  if (Restramenu === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    Restramenu?.cards[2]?.card?.card?.info;

  const { itemCards } =
    Restramenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card
      ?.card;

  console.log(itemCards);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <ul>
        {itemCards.map((resitem) => (
          <li key={resitem.card.info.id}>
            {resitem.card.info.name} - {resitem.card.info.price / 10}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Restramenupage;
