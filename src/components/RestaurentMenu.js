import Shimmer from "./Shimmer";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import  {useParams} from "react-router-dom";
import RestaurentCategory from "./RestaurentCategory";
import { useState } from "react";

const Restaurentmenu = () => {
    const {restid} = useParams();
    const restaurentData = useRestaurentMenu(restid);
    const [showIndex, setShowIndex] = useState(0);
    if(restaurentData === null) return <Shimmer/>
    const menuItems = restaurentData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((e) => e.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    const {name, cuisines, avgRatingString, areaName, costForTwoMessage, id} = restaurentData?.cards[0]?.card?.card?.info;
    return (
        <div className="text-center">
           <h1 className="font-bold">{name}</h1>
            <p>{cuisines.join(",")}</p>
            <h2>{areaName}</h2>
            <h3>{costForTwoMessage}</h3>
            <h4><b>Rating:</b> {avgRatingString}</h4>
            {menuItems.map((category, index) =>(
                <RestaurentCategory key={index} data = {category} showItems={index === showIndex ? true : false} setShowIndex={() => setShowIndex(index)}/>
            ))}
        </div>
    )
}

export default Restaurentmenu;