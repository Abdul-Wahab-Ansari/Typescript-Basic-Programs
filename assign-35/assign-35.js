"use strict";
let animals = ["Cow", "Goat", "Dog"];
console.log("List of Animals: ");
for (let animal of animals) {
    console.log(animal);
}
console.log("\nStatements about each Animal");
for (let i = 0; i < animals.length; i++) {
    if (animals[i] === "Cow") {
        console.log(`A ${animals[i]} is an adorable pet that gives milk and a lovely animal`);
    }
    else if (animals[i] === "Goat") {
        console.log(`A ${animals[i]} would be a great per!`);
    }
    else if (animals[i] === "Dog") {
        console.log(`A ${animals[i]} is a great pet, he secures our necessities`);
    }
}
console.log("\nAny of these animals would make a great pet!");
