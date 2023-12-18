import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { REST_MENU } from "./constants";


const useRestaurentMenu = (restid) =>{
    const [restaurentData, setRestaurentData] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () =>{
       const menuData = await fetch(REST_MENU + restid + "&catalog_qa=undefined&submitAction=ENTER");
       const menuJSONData = await menuData.json();
       setRestaurentData(menuJSONData.data);
    }

    return restaurentData;
}

export default useRestaurentMenu;