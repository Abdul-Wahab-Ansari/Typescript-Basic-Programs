"use strict";
function describe_city(city, country = "Unknown Country") {
    console.log(`${city} is a city of ${country}`);
}
describe_city("Karachi", "Pakistan");
describe_city("Abc");
describe_city("Montreal", "Canada");
