"use strict";
function show_magicians3(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
let magiciansName1 = ["Samri1", "Harry Potter2", "Teller3"];
let modifiedMagiciansNames = [];
function make_great2(magicians) {
    // Modifying the Array
    for (let i = 0; i < magicians.length; i++) {
        // modifiedMagiciansNames[i] = "The Great " + magicians[i];
        modifiedMagiciansNames.push("The Great " + magicians[i]);
    }
    return modifiedMagiciansNames;
}
// Modifying the Array
make_great2(magiciansName1);
console.log("\nPrinitng the Original Array");
show_magicians3(magiciansName1);
console.log("\nPrinitng the Modified Array");
show_magicians3(modifiedMagiciansNames);
