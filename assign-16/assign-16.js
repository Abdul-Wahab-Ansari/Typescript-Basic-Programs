"use strict";
const guests2 = ["Atta", "Raja", "Asif", "Jawaid", "Shahzad"];
const unavailableGuest1 = "Shahzad";
const newGuest1 = "Taimoor";
const unavailableGuest1Index = guests2.indexOf(unavailableGuest1);
if (unavailableGuest1Index !== -1) {
    guests2.splice(unavailableGuest1Index, 1, newGuest1);
    console.log(`Mr. ${unavailableGuest1} will not be able to attend this dinner`);
}
console.log("Bigger Dinner Table, We will be having more Guests");
//Adding guest to the begining of List
guests2.unshift("Hamza");
//Adding guest to the middle of the List
guests2.splice(Math.round(guests2.length / 2), 0, "Zohaib");
for (const guest of guests2) {
    console.log(`As Salam O Alaikum Mr. ${guest} you are invited to dinner`);
}
