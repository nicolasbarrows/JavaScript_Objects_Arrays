console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

const numbers = [2, 22, 12, 17, 18, 39, 129];

function arraySum(numberArray) {
  let sum = 0;
  numberArray.forEach((value) => (sum = sum + value));
  return sum;
}

console.log(arraySum(numbers));

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

// my attempt before watching the video
let book = {
  title: "My Diary",
  author: "Nicolas Barrows",
  pages: 42,
  readCount: 1,
};

book.info = function () {
  return `"${book.title}" by ${book.author}is ${book.pages} pages and has been read ${book.readCount} times`;
};

console.log(book.info());

// after watching the video

let book2 = {
  title: "Green: The Circle Trilogy Book 0",
  author: "Ted Dekker ",
  pages: 365,
  readCount: 2,
  info,
};

function info() {
  return `"${this.title}" by ${this.author}is ${this.pages} pages and has been read ${this.readCount} times`;
}
console.log(book2.info());

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

// My attempt before watching the video
// Converts input sentence into an array of individual words we can refer back to
// Creates new array with the input as a starting point.
// Iterates over each word.
// Converts each word to array, reverses the characters, converts word back to string.
// Converts sentence back to string

let sentence = "The quick brown fox jumps over the lazy dog";

function reverseSpelling(inputStr) {
  const inputArray = inputStr.split(" ");
  let reversed = inputArray;
  for (let i = 0; i < inputArray.length; i++) {
    reversed[i] = inputArray[i].split("").toReversed().join("");
  }
  return reversed.join(" ");
}

console.log(reverseSpelling(sentence));
console.log(
  reverseSpelling("This is a test of the non-emergency word reversing system")
);

// another attempt using .map after watching the video

function reverseWords(inputStr) {
  let words = inputStr.split(" ");
  let result = words.map((word) => {
    return (letters = word.split("").reverse().join(""));
  });
  return result.join(" ");
}
console.log(reverseWords("Testing a diferrent approach"));

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

// 1. Start with the following code:
let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";

csvConverter(csvData);

function csvConverter(stringCSV) {
  let data = stringCSV.split("\n");   // parse input string into array of rows (split based on newlines)
  let headers = data[0].split(",");   // split the first row into an array of headers
  data.splice(0, 1);   // remove the headers value from the array containing the rest of the data.
  
  let result = [];    //  "result" is the array where we will store our restructured data.

  for (i = 0; i < data.length; i++) {   // Iterate over each remaining row in the array
    let rowData = data[i].split(",");     // split the values within the row (by ",")
    let row = {};     // Create an object for each row (or table record)
  
    for (x = 0; x < rowData.length; x++) {     // Assign the value from the parsed row (rowData) to the the value of the header based on their place in the index
      row[headers[x]] = rowData[x];
    }
    result.push(row);     // Push each new row object to tue result array
  }
  console.log(result);
}

// testing with data from us census here
let testData = "Code,Years_at_usual_residence,Census_usually_resident_population_count,\n0,0 years,796902,\n1,1 year,312039,\n2,2 years,459384,\n3,3 years,308376,\n4,4 years,233346,\n5,5 years,211731,\n6,6 years,143595,\n7,7 years,126699,\n8,8 years,111837,\n9,9 years,88764,\n10,10 years,134991,\n11,11 years,79602,\n12,12 years,87927,\n13,13 years,64335,\n14,14 years,67899,\n15,15 years,73206,\n16,16 years,48432,\n17,17 years,52071,\n18,18 years,50025,\n19,19 years,28773,\n20,20 years,55452,\n21,21 years,23388,\n22,22 years,26862,\n23,23 years,22641,\n24,24 years,20403,\n25,25 years,28026,\n26,26 years,15531,\n27,27 years,16206,\n28,28 years,16938,\n29,29 years,12024,\n30,30 years,28023,\n31,31 years,8712,\n32,32 years,10578,\n33,33 years,8949,\n34,34 years,8412,\n35,35 years,11529,\n36,36 years,6924,\n37,37 years,8208,\n38,38 years,8604,\n39,39 years,5544,\n40,40 years,13359,\n41,41 years,4194,\n42,42 years,5628,\n43,43 years,5094,\n44,44 years,4995,\n45,45 years,6438,\n46,46 years,3873,\n47,47 years,3894,\n48,48 years,4005,\n49,49 years,2658,\n50,50 years,5862,\n51,51 years,2013,\n52,52 years,2460,\n53,53 years,2286,\n54,54 years,2247,\n55,55 years,2322,\n56,56 years,1842,\n57,57 years,1713,\n58,58 years,1773,\n59,59 years,1140,\n60,60 years,2532,\n61,61 years,867,\n62,62 years,951,\n63,63 years,822,\n64,64 years,747,\n65,65 years,924,\n66,66 years,585,\n67,67 years,582,\n68,68 years,591,\n69,69 years,447,\n70,70 years,714,\n71,71 years,369,\n72,72 years,378,\n73,73 years,306,\n74,74 years,360,\n75,75 years,342,\n76,76 years,324,\n77,77 years,363,\n78,78 years,327,\n79,79 years,300,\n80,80 years,423,\n81,81 years,258,\n82,82 years,318,\n83,83 years,249,\n84,84 years,249,\n85,85 years,228,\n86,86 years,198,\n87,87 years,177,\n88,88 years,171,\n89,89 years,156,\n90,90 years,138,\n91,91 years,93,\n92,92 years,63,\n93,93 years,51,\n94,94 years,33,\n95,95 years,27,\n96,96 years,24,\n97,97 years,15,\n98,98 years or more,12,\n777,Response unidentifiable,20538,\n999,Not stated,762807,\nTotalStated,Total stated,3916407,\nTotal,Total,4699755,\n"; 

csvConverter(testData);
