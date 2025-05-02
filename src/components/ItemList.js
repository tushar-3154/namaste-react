import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const ItemsList = ({ items , dummyData }) => {


    const dispatch = useDispatch();

    const handleAddItems= (item) => {
        //dispatch and action
        dispatch(addItem(item));
    }

    return <div>
        {items.map(item =>
            <div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
               
                <div className="w-9/12">

                    <div className="py-2">
                        <span>{item.card.info.name}</span><br></br>
                        <span>₹{item.card.info.price / 100}</span>
                    </div>
                    <p className="text-xs">
                        {item.card.info.description}
                    </p>
                </div>
                <div className="w-3/12 p-4">
                    
                    <div className="absolute">
                    <button className="p-2 mx-12 rounded-lg bg-white text-green-400 font-bold shadow-lg" 
                    // onClick={handleAddItems}
                    onClick={()=>handleAddItems(item)}
                    // onClick={handleAddItems(item)}
                    >Add +</button>
                    </div>
                    <img src={item.card.info.imageId ? CDN_URL + item.card.info.imageId : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/cfv0bvzzuu4aee0hk9en"}>
                    </img>
                </div>
            </div>
        )}
    </div>

};

export default ItemsList;