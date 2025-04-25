import { CDN_URL } from "../utils/constants";


const RestaurantCard = (props) => {

    const { resData } = props;

    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } = resData.info;


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
        </div >
    );
};


export default RestaurantCard;