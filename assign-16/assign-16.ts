const guests = ["Atta", "Raja", "Asif", "Jawaid", "Shahzad"];
const unavailableGuest1 = "Shahzad";
const newGuest1 = "Taimoor"

const unavailableGuest1Index = guests.indexOf(unavailableGuest1);

if (unavailableGuest1Index !== -1) {
    guests.splice(unavailableGuest1Index, 1, newGuest1);
    console.log(`Mr. ${unavailableGuest1} will not be able to attend this dinner`);
}
console.log("Bigger Dinner Table, We will be having more Guests");

//Adding guest to the begining of List
guests.unshift("Hamza");

//Adding guest to the middle of the List
guests.splice(Math.round(guests.length / 2), 0, "Zohaib");
for (const guest of guests) {
    console.log(`As Salam O Alaikum Mr. ${guest} you are invited to dinner`);
}