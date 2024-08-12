import RestaurentraCards, { withPromotedLabel } from "./RestaurentraCards";

import resList from "../../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Body = () => {
  const [ListOfRestaurent, setListOfRestaurent] = useState([]);
  const [filterRestaurent, SetFilterRestaurent] = useState([]);
  const [inputvalue, SetInputValue] = useState("");

  const RestaurentCardPromoted = withPromotedLabel(RestaurentraCards);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0827989&lng=80.2754246&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

   

    setListOfRestaurent(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
      "data"
    );
    SetFilterRestaurent(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
      "data"
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>Looks like you are Offline!!!! check your Internet Connection</h1>
    );

  return ListOfRestaurent.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="m-4 p-4">
          <input
            className="border border-solid border-black"
            type="text"
            value={inputvalue}
            onChange={(e) => {
              SetInputValue(e.target.value);
            }}
          />
          <button
            className="px-4  py-2  m-4 bg-green-100 rounded-lg "
            onClick={() => {
              const SearchFilter = ListOfRestaurent.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(inputvalue.toLowerCase());
              });
              SetFilterRestaurent(SearchFilter);
              console.log(filterRestaurent, "ggg");
            }}
          >
            search
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded"
            onClick={() => {
              FilterData = ListOfRestaurent.filter(
                (res) => res.info.avgRating > 4.5
              );
              console.log(FilterData, "filter");
              setListOfRestaurent(FilterData);
            }}
          >
            Top Rated Restaurents
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filterRestaurent.map((restaurent) => (
          <Link
            to={"/restaurent/" + restaurent.info.id}
            key={restaurent.info.id}
          >
            {restaurent.info.isOpen ? (
              <RestaurentCardPromoted resData={restaurent} />
            ) : (
              <RestaurentraCards resData={restaurent} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
