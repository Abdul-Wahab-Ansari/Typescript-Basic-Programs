"use strict";
//Assignment # 30
let usernames = ["rehan", "admin", "taimoor", "umar", "ebad"];
for (let i = 0; i < usernames.length; i++) {
    if (usernames[i] == "admin") {
        console.log(`Hello ${usernames[i]} Do you want to see status report?`);
    }
    else {
        console.log(`Hello ${usernames[i]} Thank you for logging in again`);
    }
}
