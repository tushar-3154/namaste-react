import Button from '@mui/material/Button';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import useBody from "../utils/useBody";
import useOnlineStatus from "../utils/useOnlineStatus";
import { RestaurantItems, RestauratHeader } from "./Res-items";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";



const Body = () => {

    const [listOfRestaurant, setListOfRestaurant] = useState([]);

    const [filterRestaurant, setFilterRestaurant] = useState([]);

    const [resItems, setResItems] = useState([]);

    const [searchText, setSearchText] = useState();

    const {restaurants, headerTitle} = useBody();


    useEffect(() => {
        setListOfRestaurant(restaurants);
        setFilterRestaurant(restaurants);
    }, [restaurants]);
    

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false){
        return <h1>looks like youre offline!! please check your internet connection</h1>

    }

    if (listOfRestaurant.length === 0) {
        return <Shimmer />
    }

    return listOfRestaurant.length === 0 ? <Shimmer /> : (
        <div className="body">


            <div className="search">
                <input type="text" className="search-box" value={searchText} onChange={(e) => {
                    setSearchText(e.target.value)
                }} />

                <Button  variant="contained" onClick={() => {

                    const filterRes = listOfRestaurant.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                    );
                    setFilterRestaurant(filterRes)

                    console.log(filterRestaurant);

                    console.log("filterRes", filterRes);

                }}>Search</Button>
            </div>

            <div className="filter">
                <Button  variant="outlined" className="filter-btn" onClick={() => {

                    const filteredList = listOfRestaurant.filter((res) => res.info.avgRating > 4)

                    setListOfRestaurant(filteredList);


                }}>
                    Top rated Restaurant
                </Button>
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
                        <Link to={"/restaurant/" + restaurant.info.id} key={restaurant?.info?.id}>
                            <RestaurantCard key={restaurant.info.id} resData={restaurant} /></Link>
                    ))
                }
            </div>
        </div>
    )
}


export default Body;