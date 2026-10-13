//here we are testing the sum function which we have created in sum.js file
//we are using jest for testing the sum function
//we doing it maually here but later we will automate it using CICD

import sum from "./sum.js";

test("adds 2 + 2 to 4", () => {
    expect(sum(2, 2)).toBe(4);
});