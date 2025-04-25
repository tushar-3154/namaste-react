
import { CDN_URL } from "../utils/constants";
export const RestauratHeader = (props) => {

    const { title } = props;



    return (
        <div className="res-head" style={{
            backgroundColor: "#f0f0f0"
        }}>
            <h4>{title}</h4>

        </div>
    );
};

export const RestaurantItems = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } = resData.info;

    return (
        <div className="res-items-cards m-4 p-4 w-[350px] h-[400px] " style={{
            backgroundColor: "#f0f0f0"
        }}>
            <img className="res-items-logo rounded-2xl w-[200px] h-[150px]" alt="res-logo" src={CDN_URL + cloudinaryImageId}></img>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <div className="start-div">
                <img src="https://img.icons8.com/?size=96&id=8ggStxqyboK5&format=png" className="w-[20px] h-[20px]"></img>
                <h4>{avgRating} stars</h4>
            </div>
            <h4>{costForTwo}</h4>
            <h4>{sla.slaString
            } minutes</h4>
        </div>
    );
}


// export default RestauratItems;