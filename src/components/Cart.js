import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
const Cart = () =>{
    const dispatch = useDispatch();
    const clearItem = () =>{
        dispatch(clearCart());
    }
    const cartItems = useSelector((store) => store.cart.items);
    return (
        <div className="w-6/12 mx-auto my-5 p-4 rounded-lg bg-gray-100 shadow-lg text-center">
            <h1 className="font-extrabold text-xl">Items</h1>
            <button className="bg-red-900 text-white m-3 p-2 rounded-lg" onClick={clearItem}>ClearCart</button>
            {
                cartItems.length === 0 ? <h1>No items found</h1> :
                cartItems.map((item, index) => (
                    <ItemList key={index} items={item}></ItemList>
                ))
            }
        </div>
    )
}

export default Cart;