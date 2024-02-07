export const guests3 = ["Atta", "Raja", "Asif", "Jawaid", "Shahzad"];
function shrinkingGuests() {
    const unavailableGuest2 = "Asif";
    const newGuest2 = "Taimoor"

    const unavailableGuest2Index = guests3.indexOf(unavailableGuest2);

    if (unavailableGuest2Index !== -1) {
        guests3.splice(unavailableGuest2Index, 1, newGuest2);
        console.log(`Mr. ${unavailableGuest2} will not be able to attend this dinner`);
    }
    console.log("Bigger Dinner Table, We will be having more Guests");

    //Adding guest to the begining of List
    guests3.unshift("Hamza");

    //Adding guest to the middle of the List
    guests3.splice(Math.round(guests3.length / 2), 0, "Zohaib");
    for (const guest of guests3) {
        console.log(`As Salam O Alaikum Mr. ${guest} you are invited to dinner`);
    }

    console.log("Unfortunately, We can invite only two people. Sorry for Inconvenience");

    while (guests3.length > 2) {
        const removedGuest = guests3.pop();
        console.log(`Apologize, due to insufficient management, we will unable to invite you Mr. ${removedGuest}`);
    }

    for (const guest of guests3) {
        console.log(`As Salam O Alaikum Mr. ${guest} you are invited to dinner`);
    }
}
shrinkingGuests();
guests3.length = 0;
console.log("Guest List is Empty Now!");