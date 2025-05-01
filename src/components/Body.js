import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import useBody from "../utils/useBody";
import useOnlineStatus from "../utils/useOnlineStatus";
import { RestaurantItems, RestauratHeader } from "./Res-items";
import RestaurantCard, { withPromtedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";



const Body = () => {

    const [listOfRestaurant, setListOfRestaurant] = useState([]);

    const [filterRestaurant, setFilterRestaurant] = useState([]);

    const [resItems, setResItems] = useState([]);

    const [searchText, setSearchText] = useState();

    const { restaurants, headerTitle } = useBody();

    const RestaurantCardPromted = withPromtedLabel(RestaurantCard);




    useEffect(() => {
        setListOfRestaurant(restaurants);
        setFilterRestaurant(restaurants);
    }, [restaurants]);


    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false) {
        return <h1>looks like youre offline!! please check your internet connection</h1>

    }

    if (listOfRestaurant.length === 0) {
        return <Shimmer />
    }

    return listOfRestaurant.length === 0 ? <Shimmer /> : (
        <div className="body">

            <div className="filter flex">
                <div className="search p-4 m-4">
                    <input type="text" className="border border-solid border-black" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value)
                    }} />

                    <button className='px-4 py-1 bg-green-100 m-4 rounded-lg' onClick={() => {

                        const filterRes = listOfRestaurant.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFilterRestaurant(filterRes)

                        // console.log(filterRestaurant);
                        // console.log("filterRes", filterRes);

                    }}>Search</button>
                </div>

            <div className="search p-4 m-4 flex items-center">
                <button className="px-4 py-2 bg-gray-100 rounded-lg" onClick={() => {

                    const filteredList = listOfRestaurant.filter((res) => res.info.avgRating > 4)

                    setListOfRestaurant(filteredList);


                }}>
                    Top rated Restaurant
                </button>
            </div>
            </div>


            <div className="res-header">
                <RestauratHeader title={resItems} />
            </div>


            <div className="flex overflow-y-scroll">
                {
                    filterRestaurant.map((restaurant) => (
                        <RestaurantItems key={restaurant.info.id} resData={restaurant} />
                    ))
                }
            </div>

            <hr className="separator"></hr>

            <div className="flex flex-wrap">
                {
                    filterRestaurant.map((restaurant) => (
                        <Link to={"/restaurant/" + restaurant.info.id} key={restaurant?.info?.id}>
                            {
                                restaurant.info.promoted ? <RestaurantCardPromted redData={restaurant} /> :  <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                            }
                           </Link>
                    ))
                }
            </div>
        </div>
    )
}


export default Body;