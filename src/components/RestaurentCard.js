import { CARD_IMAGEURL } from "../utils/constants";

const RestaurentCard = (props) =>{
    const {restData} = props;
    console.log(restData);
    const {cloudinaryImageId, name, cuisines, costForTwo, avgRating} = restData;
    const {slaString} = restData?.sla
    return (<div data-testid="card-ref" className="m-4 p-4 w-[300px] bg-slate-100 rounded-lg hover:bg-slate-200">
        <img alt="No Image" className="rounded-lg" src={CARD_IMAGEURL + cloudinaryImageId}></img>
        <h2 className="font-bold py-4 text-lg">{name}</h2>
        <span>{cuisines.join(',')}</span>
        <h4>{slaString}</h4>
        <h4>{costForTwo}</h4>
        <h5>{avgRating}</h5>

    </div>
)} 


export const PromotedRestaurent = (RestaurentCard) =>{
    return () =>{
        return (
        <>
        <label>Promoted</label>    
        <RestaurentCard/>
        </>
        )
    }
}


export default RestaurentCard;