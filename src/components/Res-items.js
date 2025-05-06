import { CDN_URL } from "../utils/constants";

export const RestaurantHeader = ({ title }) => (
    <div className="res-head bg-gray-100 p-4">
        <h4 className="text-xl font-semibold">{title}</h4>
    </div>
);

export const RestaurantItems = ({ resData }) => {
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } = resData.info;

    return (
        <div className="res-items-cards m-4 p-4 w-[450px] h-[450px] bg-gray-100 rounded-lg shadow-md">
            <img
                className="res-items-logo rounded-2xl w-[200px] h-[150px] object-cover mx-auto"
                alt={`${name} logo`}
                src={CDN_URL + cloudinaryImageId}
            />
            <h3 className="mt-2 text-lg font-bold">{name}</h3>
            <h4 className="text-sm text-gray-600">{cuisines.join(", ")}</h4>
            <div className="start-div flex items-center gap-2 mt-1">
                <img
                    src="https://img.icons8.com/?size=96&id=8ggStxqyboK5&format=png"
                    alt="rating star"
                    className="w-5 h-5"
                />
                <h4>{avgRating} stars</h4>
            </div>
            <h4 className="mt-1">{costForTwo}</h4>
            <h4 className="text-sm text-gray-500">{sla.slaString} minutes</h4>
        </div>
    );
};
