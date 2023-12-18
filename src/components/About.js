import UserContext from "../utils/UserContext";
import UserClass from "./UserClassComponent";
import { useContext } from "react";

const About = ()=>{

    const {loggedInUser} = useContext(UserContext);
    console.log(loggedInUser);
    return (
        <div>
            <h1>About</h1>
            <UserClass name={loggedInUser} adress="From About"/>
        </div>
    );
}

export default About;