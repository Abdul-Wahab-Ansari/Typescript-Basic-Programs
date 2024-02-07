const placesToVisit = ["Saudi Arabia", "Afghanistan", "Canada", "London", "Baghdad"];
console.log("\nORIGINAL ORDER");
console.log(placesToVisit);

console.log("\nALPHA ORDER");
let alphaOrderPlaces:string[] = placesToVisit.slice();
console.log(alphaOrderPlaces.sort());

console.log("\nARRAY in ORIGINAL ORDER");
console.log(placesToVisit);

console.log("\nREVERSE ALPHA ORDER");
let revAlphaOrderPlaces:string[] = placesToVisit.slice();
console.log(revAlphaOrderPlaces.reverse());

console.log("\nARRAY STILL in ORIGINAL ORDER");
console.log(placesToVisit);

console.log("\nREVERSING THE ACTUAL ORDER OF ORIGINAL ARRAY");
console.log(placesToVisit.reverse());

console.log("\nREVERSING TO ORIGINAL ORDER");
console.log(placesToVisit.reverse());

console.log("\nSORTING ORIGINAL ARRAY ALPHABETICALLY");
console.log(placesToVisit.sort());

console.log("\nSORTING REVERSE ALPHABETICALLY");
console.log(placesToVisit.sort().reverse());