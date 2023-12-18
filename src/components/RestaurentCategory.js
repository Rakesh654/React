import { useState } from "react";
import ItemList from "./ItemList";

const RestaurentCategory = ({data, showItems, setShowIndex, setShowItems}) =>{
    // const [showItems, setShowItems] = useState(false);
    const {title} = data.card.card;
    const itemsObj = data.card.card.itemCards;
    const hideShowData = () =>{
        setShowIndex();
    }
    return (
    <div>
    <div className="w-6/12 mx-auto my-5 p-4 rounded-lg bg-gray-100 shadow-lg" onClick={hideShowData}>
        <div className="flex justify-between">
           <span className="font-bold text-lg">{title} ({data.card.card.itemCards.length})</span>
           <span>⏬</span>
        </div>
        <div>
           { 
           showItems &&
           itemsObj.map((item, index) => (
                <ItemList key={index} items={item}/>
            ))}
        </div>
    </div>
    </div>
    )
}

export default RestaurentCategory;