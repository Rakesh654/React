import { render, screen } from "@testing-library/react";
import RestaurentCard from "../components/RestaurentCard";
import MOCK_DATA from "../mocks/restaurentCard.json"
import "@testing-library/jest-dom"


it("Should render the component with data", () =>{

    render(<RestaurentCard restData={MOCK_DATA}/>);

    const restaurantName = screen.getByText("KFC");

    expect(restaurantName).toBeInTheDocument();

});