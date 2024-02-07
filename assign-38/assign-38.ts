function describe_city(city:string, country:string = "Unknown Country"){
    console.log(`${city} is a city of ${country}`);
}

describe_city("Karachi", "Pakistan");
describe_city("Abc");
describe_city("Montreal", "Canada");
