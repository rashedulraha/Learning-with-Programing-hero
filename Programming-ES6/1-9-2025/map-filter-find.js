const students = [
  {
    id: 1,
    name: "Rahedul Islam",
    marks: 15,
  },
  {
    id: 2,
    name: "Islam",
    marks: 55,
  },
  {
    id: 3,
    name: "Islam Hossain",
    marks: 25,
  },
  {
    id: 4,
    name: "nakibul islam",
    marks: 85,
  },
  {
    id: 5,
    name: "Hello",
    marks: 83,
  },
];

// const goodStudent = students.find((student) => {
//   return student.marks > 80;
// });

// console.log(goodStudent);

//! Learning forEach()
// const lForEach = students.forEach((student) => {
//   console.log(student.name);
// });

// ! Learning map()
// const lMap = students.map((student) => {
//   const result = student.name;
//   return result;
// });
// console.log(lMap);

// ! Learning filter()
const lFilter = students.find((student) => {
  return student.marks > 80;
});

console.log(lFilter);
