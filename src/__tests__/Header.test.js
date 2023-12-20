import { render, screen, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom"
import Header from "../components/Header"
import { Provider } from "react-redux"
import appStore from "../utils/appStore"
import { BrowserRouter } from "react-router-dom"

test("Should render Header component with login button", () =>{
    render(
    <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
    </BrowserRouter>
    );

    const loginButtonCheck = screen.getByRole("button", {name : "LOGIN"});

    expect(loginButtonCheck).toBeInTheDocument();
})

it("Should change to logout on click", () =>{
    render(  <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
    </BrowserRouter>);

    const loginbutton = screen.getByRole("button", {name: "LOGIN"});
    fireEvent.click(loginbutton);
    const logoutbuutton = screen.getByRole("button", {name: "LOGOUT"});

    expect(logoutbuutton).toBeInTheDocument();
})

it("Should have cart", () =>{
    render(  <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
    </BrowserRouter>);

    const cart = screen.getByText(/Cart/);
    expect(cart).toBeInTheDocument();
})