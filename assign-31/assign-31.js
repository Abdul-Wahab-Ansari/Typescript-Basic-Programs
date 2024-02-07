"use strict";
//Assignment # 31
let usernames1 = ["rehan", "admin", "taimoor", "umar", "ebad"];
usernames1.splice(0, 5);
if (usernames1.length === 0) {
    console.log("We need to find some users!");
}
else {
    for (let i = 0; i < usernames1.length; i++) {
        if (usernames1[i] == "admin") {
            console.log(`Hello ${usernames1[i]} Do you want to see status report?`);
        }
        else {
            console.log(`Hello ${usernames1[i]} Thank you for logging in again`);
        }
    }
}
console.log(usernames1);
// please Explain this: Why Output is just'[]' instead We need to find some users! then '[]'. How loop is
// working at backend???
// let usernames1 = ["rehan", "admin", "taimoor", "umar", "ebad"];
// usernames1.splice(0, 5);
// for (let i = 0; i < usernames1.length; i++) {
//     if (usernames1.length === 0) {
//         console.log("We need to find some users!");
//     } else {
//         if (usernames1[i] == "admin") {
//             console.log(`Hello ${usernames1[i]} Do you want to see status report?`)
//         } else {
//             console.log(`Hello ${usernames1[i]} Thank you for logging in again`)
//         }
//     }
// }
// console.log(usernames1);
