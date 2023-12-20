import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";

const ItemList = ({items}) =>{
    const cartActions = useDispatch();
    const {name, description, imageId, price} = items.card?.info;
    const addCart = () =>{
        cartActions(addItems(items));
    }
    return (
    <div data-testid="menuItem" className="border-gray-300 border-b-2 my-4 flex justify-between">
        <div className="text-left">
            <span className="font-semibold">{name} -₹{price/100}</span>
            <p className="text-s text-left">{description}</p>
        </div>
        {
            typeof imageId !== "undefined" ? <div>
            <div className="absolute">
                <button className="shadow-md mx-20 text-white bg-black p-3 rounded-lg" onClick={() => addCart()}>Add+</button>
            </div>
             <img className="w-50 max-w-none py-2" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/"+ imageId}/>
        </div> : ""
        }
        
    </div>
    )
}

export default ItemList;