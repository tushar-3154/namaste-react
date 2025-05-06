import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe } from "node:test";
import Contact from "../Contact";

describe("Contact Us Page Test Case", () => {
    it("Should load contact us component", () => {
        render(<Contact />);
    
        const heading = screen.getByRole("heading");
    
        expect(heading).toBeInTheDocument();
    });
    
    it("Should load button inside Contact component", () => {
        render(<Contact />);
    
        const button = screen.getByText("Submit");
    
        //Assertion
        expect(button).toBeInTheDocument();
    });
    
    it("Should load input name  inside Contact Component", () => {
        render(<Contact />);
    
        const inputName = screen.getByPlaceholderText("name");
        //Assertion
    
        expect(inputName).toBeInTheDocument();
    });
    
    it("Should load 2 input boxes inside Contact Component", () => {
        render(<Contact />);
    
        const inputBoxes = screen.getAllByRole("textbox");
        // console.log(inputBoxes.length);
        //Assertion
    
        expect(inputBoxes.length).toBe(2);
    });
})

