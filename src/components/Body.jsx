import RestaurentraCards from "./RestaurentraCards";

import resList from "../../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [ListOfRestaurent, setListOfRestaurent] = useState(resList);
  //   const ListOfRestaurent2 = [
  //     {
  //       info: {
  //         id: "582150",
  //         name: "Chinese Wok",
  //         cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",

  //         cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
  //         avgRating: 4.3,
  //         sla: {
  //           deliveryTime: 27,
  //         },

  //         aggregatedDiscountInfoV3: {
  //           header: "ITEMS",
  //           subHeader: "AT ₹149",
  //         },
  //       },
  //     },
  //     {
  //       info: {
  //         id: "582151",
  //         name: "Dominos",
  //         cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",

  //         cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
  //         avgRating: 3,
  //         sla: {
  //           deliveryTime: 27,
  //         },

  //         aggregatedDiscountInfoV3: {
  //           header: "ITEMS",
  //           subHeader: "AT ₹149",
  //         },
  //       },
  //     },
  //     {
  //       info: {
  //         id: "582152",
  //         name: "Kfc",
  //         cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",

  //         cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
  //         avgRating: 4.5,
  //         sla: {
  //           deliveryTime: 27,
  //         },

  //         aggregatedDiscountInfoV3: {
  //           header: "ITEMS",
  //           subHeader: "AT ₹149",
  //         },
  //       },
  //     },
  //   ];
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            FilterData = ListOfRestaurent.filter(
              (res) => res.info.avgRating > 4.3
            );
            console.log(FilterData);
            setListOfRestaurent(FilterData);
          }}
        >
          Top Rated Restaurents
        </button>
      </div>
      <div className="res-container">
        {ListOfRestaurent.map((restaurent) => (
          <RestaurentraCards key={restaurent.info.id} resData={restaurent} />
        ))}
      </div>
    </div>
  );
};

export default Body;
