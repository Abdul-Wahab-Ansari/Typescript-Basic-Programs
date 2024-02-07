/*
Cars: Write a function that stores information about a car in a Object. The function should always 
receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. 
Call the function with the required information and two other name-value pairs, such as a color or an 
optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
*/

function createCar(manufacturer: string, modelName: string, properties: { [key: string]: any }): any {
    const car: any = {
        manufacturer,
        modelName,
    };

    for (const key in properties) {
        car[key] = properties[key];
    }

    return car;
}

const myCar = createCar("Toyota", "Camry", {
    color: "Blue",
    year: 2022,
    optionalFeature: "roof window"
});

console.log(myCar);