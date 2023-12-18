import { useEffect, useState } from "react";

const useRestaurents = () => {
    const [finalListOfRestaurent, setfinalListOfRestaurent] = useState([]);
    useEffect(() =>{
        fetchData();
    }, []);

    const fetchData = async () =>{
        const rest = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.608103&lng=77.0769524&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const listOfRestaurent = await rest.json();
        const restaurentData = listOfRestaurent.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setfinalListOfRestaurent(restaurentData);
    }

    return finalListOfRestaurent;
}

export default useRestaurents;