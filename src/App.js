import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Error from "./components/Error";
// import Grocery from "./components/Grocery";
import Header from "./components/Header";
import Login from "./components/Login";
import RestaurantMenu from "./components/RestaurantMenu";



//chunking
//code splitting
//Dynamic Bundling
//Lazy Loading
//on demand loading

const Grocery = lazy(()=> import("./components/Grocery")); 

const About = lazy(()=> import("./components/About"));
  
const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    )
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/about",
                element: (
                    <Suspense fallback = {<h1>Loading......</h1>}> <About />
                </Suspense>
                ),
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/grocery",
                element:<Suspense fallback={<h1>Loading.......</h1>}> <Grocery /> </Suspense>,
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu />,
            },
        ],
        errorElement: <Error />
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);