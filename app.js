console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

const numbers = [2, 22, 12, 17, 18, 39, 129];
let sum = 0;

function arraySum(numbers) {
    numbers.forEach((element) => sum=sum+element )
        return sum;
    }

console.log(arraySum(numbers));

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");


let book = {
    title: "My Diary",
    author: "Nicolas Barrows",
    pages: 42,
    readCount: 1,
  };
  
  // Using dot notation, add a method named info to the book object that returns a string that combines the title, 
  // pages, and readCount as an informational string. Ex: The Hobbit by J.R.R Tolkien, 295 pages, read 3 times.
  // After you have added the properties and method to the object, call the book.info() method inside 
  // console.log to print out the returned string.

  