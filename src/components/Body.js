import { useEffect, useState } from "react";
import { RestaurantItems, RestauratHeader } from "./Res-items";
import RestauratCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {

    // Local state Variable - Super powerful variable
    const [listOfRestaurant, setListOfRestaurant] = useState([]);

    const [filterRestaurant, setFilterRestaurant] = useState([]);

    const [resItems, setResItems] = useState([]);

    const [searchText, setSearchText] = useState();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.6708317&lng=71.5723953&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();

        console.log("card data", json.data.cards);
        //Optinal chaining
        setListOfRestaurant(json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        setFilterRestaurant(json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        setResItems(json?.data?.cards[0]?.card?.card?.header?.title);


    };


    //Condinitional rendering
    if (listOfRestaurant.length === 0) {
        return <Shimmer />
    }

    return listOfRestaurant.length === 0 ? <Shimmer /> : (
        <div className="body">


            <div className="search">
                <input type="text" className="search-box" value={searchText} onChange={(e) => {
                    setSearchText(e.target.value)
                }} />

                <button onClick={() => {

                    const filterRes = listOfRestaurant.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                    );
                    setFilterRestaurant(filterRes)

                    console.log(filterRestaurant);

                    console.log("filterRes", filterRes);

                }}>Search</button>
            </div>

            <div className="filter">
                <button className="filter-btn" onClick={() => {

                    const filteredList = listOfRestaurant.filter((res) => res.info.avgRating > 4)

                    setListOfRestaurant(filteredList);


                }}>
                    Top rated Restaurant
                </button>
            </div>

            <div className="res-header">
                <RestauratHeader title={resItems} />
            </div>


            <div className="res-items">
                {
                    filterRestaurant.map((restaurant) => (
                        <RestaurantItems key={restaurant.info.id} resData={restaurant} />
                    ))
                }
            </div>

            <hr className="separator"></hr>


            <div className="res-container">
                {
                    filterRestaurant.map((restaurant) => (
                        <RestauratCard key={restaurant.info.id} resData={restaurant} />
                    ))
                }
            </div>
        </div>
    )
}


export default Body;