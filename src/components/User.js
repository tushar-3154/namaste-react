import { useEffect, useState } from "react";

const User = (props)=>{
    const [count,setCount] = useState(0);

    useEffect(()=>{
        setInterval(()=>{
            console.log("Namaste React Op");
        },1000)
        console.log("useEffect");

        return()=>{
            console.log("useEffect Return");
        }
    },[]);
    // const [count2] = useState(1);

    console.log("render");
    return(
        <div className="user-card m-4 p-4 bg-gray-50 rounded-lg">
            <h1>Count = {count}</h1>
            <button onClick={()=>{
                setCount(count+1);
            }}>Increase Count</button>
            {/* <h1>Count2 = {count2}</h1> */}
            <h2>Name: {props.name}</h2>
            <h3>Location: {props.location}</h3>
            <h4> Contact: @tushar31</h4>
        </div>
    )
}

export default User;