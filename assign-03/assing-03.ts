let name1 = 'Rehan_Ansari';
//Lower Case
console.log(name1.toLowerCase());

//Upper Case
console.log(name1.toUpperCase());

//Title Case
function toTitleCase(input: string) {
    // Remove special characters using regular expression
    const cleanedString = input.replace(/[^a-zA-Z0-9\s]/g, '');
    
    let firstWords = cleanedString.split(" ");
    for (let x = 0; x < firstWords.length; x++) {
      firstWords[x] = firstWords[x][0].toUpperCase() + firstWords[x].substring(1).toLowerCase();
    }
    return firstWords.join(" ");
  }
  
  
const titleCaseName = toTitleCase(name1);
console.log(titleCaseName); // Output: "John Doe"