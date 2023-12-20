import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";
import "@testing-library/jest-dom";

describe("Contact Component test", ()=>{

    test("Should render contact component", () =>{
        render(<Contact/>);

        const heading = screen.getByRole("heading");

        //Assertion
        expect(heading).toBeInTheDocument();
    });

    it("Should have input boxes", () =>{
        render(<Contact/>);

        const inputBoxes = screen.getAllByRole("textbox");

        expect(inputBoxes.length).toBe(2);
    });

    it("Should have button", () =>{
        render(<Contact/>);

        const button = screen.getByText("Submit");

        expect(button).toBeInTheDocument();
    })


})
