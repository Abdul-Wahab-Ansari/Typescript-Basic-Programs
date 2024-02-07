"use strict";
// Your Own Array: Think of your favorite mode of transportation, 
// such as a motorcycle or a car, and make a list that stores several examples. 
// Use your list to print a series of statements about these items, such as 
// “I would like to own a Honda motorcycle.”
const myFavModeOfTrans = ["Honda 125", "Suzuki 150", "Car", "Air Bus", "Private Jet"];
const msg = "I would like to own a ";
for (let favTrans of myFavModeOfTrans) {
    console.log(msg + favTrans);
}
