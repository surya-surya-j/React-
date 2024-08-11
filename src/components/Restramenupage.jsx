import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

function Restramenupage() {
  const [Restramenu, setResMenu] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0827989&lng=80.2754246&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
    );
    const json = await data.json();
    console.log(json);

    setResMenu(json.data);
  };

  if (Restramenu === null) return <Shimmer />;

  const { name } = Restramenu?.cards[2]?.card?.card?.info;
  const { cuisines } = Restramenu?.cards[2]?.card?.card?.info;
  const { costForTwoMessage } = Restramenu?.cards[2]?.card?.card?.info;
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
