import { fireEvent, render, screen } from "@testing-library/react"
import { act } from "react-dom/test-utils";
import Body from "../components/Body";
import MOCK_DATA from "../mocks/restaurantlist.json"
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
})

it("Should Search working", async () =>{
  await act(() =>{
    render(
    <BrowserRouter>
    <Body/>
    </BrowserRouter>
    );
  })
  
  const searchbutton = screen.getByRole("button", {name: "Submit"});
  const searchInput = screen.getByTestId("search");
  fireEvent.change(searchInput, {target: {value: "burger"}});
  fireEvent.click(searchbutton);
  const cards = screen.getAllByTestId("card-ref");
  expect(cards.length).toBe(1);
});