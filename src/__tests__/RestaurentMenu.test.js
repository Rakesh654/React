import Restaurentmenu from "../components/RestaurentMenu";
import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import MOCK_DATA from "../mocks/restaurantMenu.json"
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import "@testing-library/jest-dom";
import Header from "../components/Header";
import Cart from "../components/Cart";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() =>{
    return Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA)
    })
})

it("Should restaurant menu rendering", async () =>{
    
    await act(() => {
       render(<Provider store={appStore}>
        <Restaurentmenu/>
        </Provider>
        )
    })

    const menu = screen.getAllByTestId("menuItem");

    expect(menu.length).toBe(20);
});

it("Should add item in cart", async () =>{
    await act(()=>{
        render(
            <BrowserRouter>
            <Provider store={appStore}>
        <Restaurentmenu/>
        <Header></Header>
        </Provider>
        </BrowserRouter>
        )
    })

    const additem = screen.getAllByRole("button", {name: "Add+"});
    fireEvent.click(additem[0]);
    const cart = screen.getByText("Cart 1");
    expect(cart).toBeInTheDocument();
})


it("Should Clear the Cart", async () =>{
    await act(() =>{
        render(
            <BrowserRouter>
            <Provider store={appStore}>
        <Restaurentmenu/>
        <Cart/>
        <Header></Header>
        </Provider>
        </BrowserRouter>
        )
    })
    const menu = screen.getAllByTestId("menuItem");
    const clearCart = screen.getByRole("button", {name: "ClearCart"});
    fireEvent.click(clearCart);
    const itemsleft = screen.getAllByTestId("menuItem");
    expect(itemsleft.length).toBe(20);
})