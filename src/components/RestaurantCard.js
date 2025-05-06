import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";


const RestaurantCard = (props) => {

    const { resData } = props;

    console.log(resData);

    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } = resData.info;

    const {loggedIn}= useContext(UserContext);


    return (
        <div className="m-4 p-4 w-[250px] h-[500px] rounded-lg bg-gray-100 hover:bg-gray-200" >
            <img className="w-[200px] h-[200px] rounded-3xl" alt="res-logo" src={CDN_URL + cloudinaryImageId}></img>
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
                <img className="w-[20px] h-[20px]" src="https://img.icons8.com/?size=96&id=8ggStxqyboK5&format=png"></img>
                <h4>{avgRating} stars</h4>

            <h4 className="">{costForTwo}</h4>
            <h4>{sla.slaString
            } minutes</h4>
            <h4>{loggedIn}</h4>
        </div >
    );
};

export const withPromtedLabel = (RestaurantCard)=>{
    return () =>{
        return(
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
                    Promoted
                </label>
                <RestaurantCard {...props} />
            </div>
        );
    };
};


export default RestaurantCard;