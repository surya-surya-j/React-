import React from "react";
import { CDN_URL } from "../../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div className="">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2  border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className="text-xl">{item.card.info.name}</span>
              <span className="text-lg">
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className=" w-3/12  p-3">
            <div className="absolute">
              <button className="bg-black text-white py-1 shadow-lg mr-16 m-2 rounded ">
                Add+
              </button>
            </div>
            <img src={CDN_URL + item.card.info.imageId} className="w-full" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
