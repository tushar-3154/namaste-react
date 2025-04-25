import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

    const [btnName, setbtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();
    const navigate = useNavigate();

    const handleClick = ()=>{
        if(btnName === "Login"){
            setbtnName("Logout");
            navigate("/login")
        }
        else{
            setbtnName("Login");
            navigate("/")
        }
    }

    console.log("Header render");

    //if no dependency array => useEffect is called on every render
    //if dependency array is empty = [] => useEffect is called on intial render(just once)
    //if dependency array is [btnNameReact] => called everytime btnNameReact is updated

    useEffect(() => {
        console.log("useEffect called");
    }, [btnName]);

    return (
        <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
            <div className="logo-container">
                <img className="w-53" src={LOGO_URL}></img>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4 gap-9">
                    <li>
                        Online Status :{onlineStatus ? "✅" : "🔴"}
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li>Cart</li>
                    <button className="login" onClick={handleClick}> {btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;