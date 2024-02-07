"use strict";
function show_magicians2(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
let magiciansName = ["Samri2", "Harry Potter2", "Teller2"];
function make_great(magicians) {
    // Modifying the Array
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "Great " + magicians[i];
    }
    return magicians;
}
const greatMagicians = make_great(magiciansName);
show_magicians2(greatMagicians);
