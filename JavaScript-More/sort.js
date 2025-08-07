const number = [2, 7, 68, 65, 5, 5, 8, 9, 8, 10];

number.sort(function (a, b) {
  return a - b;
});

console.log(number);

number.sort(function (a, b) {
  return b - a;
});
console.log(number);

let friend = ["rakib", "rajjak", "arman", "ariful islam", "hello element"];
friend.sort();

console.log(friend);

let ExamResult = [12, 25, 26, 30, 120, 10, 12, 13, 15, 18, 19, 20];

let finalResult = ExamResult.sort(function (x, y) {
  return x - y;
});

console.log(finalResult);
let finalResult2 = ExamResult.sort(function (x, y) {
  return y - x;
});

console.log(finalResult2);
