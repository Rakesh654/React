import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () =>{
    const cartItems = useSelector((store) => store.cart.items);
    const [buttonName, setButtonname] = useState("LOGIN");
    const onlineStatus = useOnlineStatus();
    const {loggedInUser} = useContext(UserContext);
    return (
        <div className="flex justify-between pink">
            <div className="logo-container">
            {/* <img className="w-48" alt="no Image" src={require("../../assets/ReactChef.png")}></img> */}
            <img className="w-48" alt="no Image" src="https://tse4.mm.bing.net/th?id=OIP.ueHppfRf52CDn841Rpj8IwHaHa&pid=Api&P=0&h=220"></img>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online Status {onlineStatus ? "✅" : "☑️"}</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About Us</Link></li>
                    <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4"><Link to="/cart">Cart {cartItems.length}</Link></li>
                    <li className="px-4">{loggedInUser}</li>
                    <li className="px-4"><button onClick={() => buttonName == "LOGIN" ? setButtonname('LOGOUT') : setButtonname('LOGIN')}>{buttonName}</button></li>
                </ul>
            </div>
        </div>
    )
} 

export default Header;