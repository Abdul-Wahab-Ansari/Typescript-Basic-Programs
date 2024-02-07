//Conditional Comparisions in between Strings Assignment-24
let name4 = "Rehan";
let num1 = 40;
let num2 = 70;
console.log("Is name4 == 'Rehan' ? I Predict True");//True
console.log(name4 == 'Rehan');
console.log("Is name4 === 'Rehan' ? I Predict True");//True
console.log(name4 === 'Rehan');
console.log("Is name4 === 'rehan' ? I Predict False");//False
console.log(name4 === 'rehan');
console.log("Is name4.toLowerCase() === 'rehan' ? I Predict True");//True
console.log(name4.toLowerCase() === 'rehan');

console.log("Is name4.toUpperCase() === 'rehan' ? I Predict False");//False
console.log(name4.toUpperCase() === 'Rehan');

console.log("Is typeof name4 === typeof 'string' ? I Predict True");//True
console.log(typeof name4 === typeof 'string');

console.log("Is num1 == num2? I predict False");//False
console.log(num1 == num2);

console.log("Is num1 (!=) not equal to num2? I predict True");//True
console.log(num1 != num2);

console.log("Is num1 > num2? I predict False");//False
console.log(num1 > num2);

console.log("Is num1 < num2? I predict True");//True
console.log(num1 < num2);

console.log("Is num2 > num1? I predict True");//True
console.log(num2 > num1);

console.log("Is num2 < num1? I predict False");//False
console.log(num2 < num1);

console.log("Is num1 >= num2? I predict False");//False
console.log(num1 >= num2);

console.log("Is num1 <= num2? I predict True");//True
console.log(num1 <= num2);

console.log("Is num2 >= num1? I predict True");//True
console.log(num2 >= num1);

console.log("Is num2 <= num1? I predict False");//False
console.log(num2 <= num1);

console.log("Is num1 < num2 || num1 > num2? I predict True");//True
console.log(num1 < num2 || num1 > num2);

console.log("Is num1 <= num2 || num1 >= num2? I predict True");//True
console.log(num1 <= num2 || num1 >= num2);

console.log("Is num1 < num2 && num1 > num2? I predict False");//True
console.log(num1 < num2 && num1 > num2);

console.log("Is num1 <= num2 && num1 >= num2? I predict False");//True
console.log(num1 <= num2 && num1 >= num2);

console.log("Is num1 is an array? I Predict False")//False
console.log(Array.isArray(num1));

console.log("Is num1 is not an array? I Predict True")//True
console.log(!Array.isArray(num1));
// if(Array.isArray(num1)){
//     console.log("It is Array");
// }else{
//     console.log("It is not an array")
// }