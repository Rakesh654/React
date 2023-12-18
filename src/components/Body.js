import RestaurentCard, {PromotedRestaurent} from "./RestaurentCard";
// import {restaurentObj} from "../utils/mockData";
import { useState } from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import useRestaurents from "../utils/useRestaurents";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => 
{
  const [listOfRestaurent, setlistOfRestaurent] = useState([]);
  const [listOfFilterRestaurent, setlistOfFilterRestaurent] = useState([]);
  const [searchInputtext, setsearchInputtext] = useState([]);
  
  const listOfRestaurents = useRestaurents();
  const onlineStatus = useOnlineStatus();
  if(listOfRestaurents.length === 0)
  {
    return <Shimmer/> 
  }
  else
  {
    if(listOfFilterRestaurent.length === 0)
    {
      setlistOfRestaurent(listOfRestaurents);
      setlistOfFilterRestaurent(listOfRestaurent);
    }
  }

if(onlineStatus === false) return <h1>Looks like you are offline</h1>

// Conditional rendering
if(listOfRestaurent.length == 0) return <Shimmer/> 

return( 
    <div className="body">
            <div className="m-4 p-4">
              <input type="text" className="border border-solid border-black" value={searchInputtext} onChange={(e)=> {
                setsearchInputtext(e.target.value);
              }}></input>
              <button className="bg-green-300 rounded-lg px-4 py-2 m-4 text-white" onClick={() => {
                const lisOfFilterRestaurents = listOfFilterRestaurent.filter((l) => l.info.name.toLowerCase().includes(searchInputtext.toLowerCase()));
                if(lisOfFilterRestaurents.length == 0) 
                {
                  return <h1>No item Found</h1>
                } 
                setlistOfRestaurent(lisOfFilterRestaurents);
              }}>Submit</button>
              &nbsp;
              <button className="bg-slate-400 text-white rounded-lg px-4 py-2" onClick={
                ()=> {const filterData = listOfRestaurent.filter((x) => x.info.avgRating > 4);
                setlistOfRestaurent(filterData);
              }}>Top Rated Restaurent</button>  
            </div>
            <div className="flex flex-wrap">
            {
                listOfRestaurent.map(res => 
                    (<Link key={res.info.id} to={"/restaurents/" + res.info.id}><RestaurentCard  restData={res.info}></RestaurentCard></Link>)
                )
            }   
            </div>
    </div>
)}


export default Body;