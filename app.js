console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

const numbers = [2, 22, 12, 17, 18, 39, 129];
let sum = 0;

function arraySum(numbers) {
  numbers.forEach((element) => (sum = sum + element));
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

book.info = function() {
    return `"${book.title}" by ${book.author}, ${book.pages} pages, read ${book.readCount} times`;
}

console.log(book.info());

