"use strict";
/*Changing Guest List: You just heard that one of your guests can’t make the dinner,
so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating
the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the
new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.
*/
// const updatedGuests = ["Atta", "Raja", "Abdullah", "Asif", "Jawaid", "Shahzad"];
// console.log(updatedGuests);
// updatedGuests.splice(4,1, "Taimoor");
// console.log(updatedGuests);
const guest1 = ["Atta", "Raja", "Asif", "Jawaid", "Shahzad"];
for (let i = 0; i < guest1.length; i++) {
    console.log(`As Salam O Alaikum Mr. ${guest1[i]} you are invited to dinner`);
}
const unavailableGuest = "Shahzad";
const newGuest = "Taimoor";
const unavailableGuestIndex = guest1.indexOf(unavailableGuest);
// console.log(unavailableGuestIndex);
if (unavailableGuestIndex !== -1) {
    guest1.splice(unavailableGuestIndex, 1, newGuest);
    console.log(`Mr. ${unavailableGuest} will not be able to attend this dinner`);
    for (const guest of guest1) {
        console.log(`As Salam O Alaikum Mr. ${guest} you are invited to dinner`);
    }
}
