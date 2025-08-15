const books = ["physic", "math", "biology", "javascript", "html", "css"];
const newNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 45, 56, 58, 59, 11, 200, 2];
// const newBook = [];

// for (let i = 0; i < books.length; i++) {
//   newBook.push(books[i]);
// }

// const revArray = JSON.parse(JSON.stringify(books));
// const result = revArray.reverse();
// console.log(result);
// console.log(newBook);

const arraySort = books.sort();
const arraySort2 = newNumber.sort(function (x, y) {
  return y - x;
});
console.log(arraySort);
console.log(arraySort2);
