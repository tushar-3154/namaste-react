import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { it } from "node:test";
import MOCK_DATA from "../mocks/resCardMock.json";
import RestaurantCard from "../RestaurantCard";

it("Should render the restaurant card with props data",()=>{
    render(<RestaurantCard resData={MOCK_DATA} />);

   const name = screen.getByText("Hare Krishna Restaurant");

   expect(name).toBeInTheDocument();
});

// it("Should render the restaurant card with promoted label",()=>{
//     const RestaurantCardWithPromotedLabel = RestaurantCard.withPromtedLabel(RestaurantCard);
//     render(<RestaurantCardWithPromotedLabel resData={MOCK_DATA} />);

//     const promotedLabel = screen.getByText("Promoted");

//     expect(promotedLabel).toBeInTheDocument();
// });