import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../utils/appStore";
import Header from "../Header";


it("should render header component with a login button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore} >
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button",{name : "Login"});

    // const cartItems = screen.getByRole("Cart - (0 items)")
    expect(loginButton).toBeInTheDocument();
});

it("should render header component with a Cart Items 0", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore} >
                <Header />
            </Provider>
        </BrowserRouter>
    );
    const cartItems = screen.getByText("Cart - (0 items)")


    // const cartItems = screen.getByRole("Cart - (0 items)")
    expect(cartItems).toBeInTheDocument();
});


it("should render header component with a Cart Item", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore} >
                <Header />
            </Provider>
        </BrowserRouter>
    );
    const cartItems = screen.getByText(/Cart/);


    // const cartItems = screen.getByRole("Cart - (0 items)")
    expect(cartItems).toBeInTheDocument();
});

it("should change login button to logout on click ", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore} >
                <Header />
            </Provider>
        </BrowserRouter>
    );
    const loginButton = screen.getByRole("button", {name : "Login"});

    fireEvent.click(loginButton)

    const logoutButton = screen.getByRole("button", {name : "Logout"});
    // const cartItems = screen.getByRole("Cart - (0 items)")
    expect(logoutButton).toBeInTheDocument();
});

