import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemsList from "./ItemList";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (
        <div className="text-center m-4 p-4">
            <h2 className="text-2xl font-bold">Cart</h2>

            <div className="w-6/12 m-auto border border-blue-200">
                <button className="p-2 m-2 bg-black text-white rounded-lg" onClick={handleClearCart}>Clear Cart</button>
                {cartItems.length === 0 && <h3 className="text-2xl font-bold">Cart Is Empty Add  Items to Cart !</h3>}
                <ItemsList items={cartItems} />
            </div>
        </div>
    )
};

export default Cart;