import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import Shimmer from "./Shimmer";
const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);

    const { resId } = useParams();

    console.log(resId);

    useEffect(() => {
        fetchMenu()
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();

        console.log("data", data);

        setResInfo(json.data);

    };

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