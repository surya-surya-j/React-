import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurentMenu = (resId) => {
  const [Restramenu, setRestraMenu] = useState(null);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async() => {
    const data = await fetch(MENU_API + resId);

    const json = await data.json();

    setRestraMenu(json.data);
  };

  return Restramenu;
};

export default useRestaurentMenu;
