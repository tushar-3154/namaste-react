import { sum } from "../Sum";


test("Sum Function should Calculate the sum of two numbers", () => {
   const result = sum(1, 2);

   //Assertion
   expect(result).toBe(3);
});