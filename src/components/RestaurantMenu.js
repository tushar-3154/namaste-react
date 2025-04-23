import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {

    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId);

    if (resInfo === null) return (<Shimmer />);

    const { name, cuisines, cloudinaryImageId, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info

    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    console.log("itemCards", itemCards);


    return resInfo === null ? <Shimmer /> : (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <ul>
                {itemCards.map(item => <li key={item?.card?.info?.id}>{item?.card?.info?.name} - {" Rs."}{item?.card?.info?.price}</li>)}
            </ul>
        </div>
    );
};

export default RestaurantMenu;