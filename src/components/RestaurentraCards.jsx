import { CDN_URL } from "../../utils/constants";

const RestaurentraCards = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating } = resData?.info;
  const { deliveryTime } = resData?.info.sla;

  return (
    <div className="m-4 p-4 w-[235px] bg-gray-100 hover:bg-gray-200 ">
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + resData.info.cloudinaryImageId}
      />
      <h3 className="font-bold py-3 text-xl">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{deliveryTime}/minutes</h4>
    </div>
  );

  
  
};
// Higher Order Component
// input -restaurentcard => returns Restacard promoted

 export  const withPromotedLabel =(RestaurentraCards)=>{
        return (props)=>{
          return (
            <div>
              <label className="absolute bg-black text-white m-2 p-1 rounded-lg">isOpen</label>
              <RestaurentraCards {...props}/>
            </div>
          );
        }
  }

export default RestaurentraCards;
