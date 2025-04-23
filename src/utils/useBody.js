import listData from './mock-data';
const useBody = () => {

        const data = listData;

        const restaurants = data?.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants;

        const headerTitle = data?.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants;

        return {
            restaurants,
            headerTitle
        }

};

export default useBody;