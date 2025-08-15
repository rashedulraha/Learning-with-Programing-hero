// const studentData = [
//   {
//     FirstName: "Rashedul",
//     SecondName: "Islam",
//     Email: "rashedul@gmail.com",
//     Age: 20,
//     attend: true,
//   },
//   {
//     FirstName: "abdullah",
//     SecondName: "sazab",
//     Email: "sazib@gmail.com",
//     Age: 26,
//     attend: true,
//   },
//   {
//     FirstName: "Manik",
//     SecondName: "Akka",
//     Email: "manik@gmail.com",
//     Age: 22,
//     attend: true,
//   },
// ];

// for (let student = 0; student < studentData.length; student++) {
//   sendEmail(studentData[student].Email);
// }

// studentData.forEach((item) => {
//   console.log("FullName:", item.FirstName, item.SecondName);
// });
// function sendEmail(email) {
//   console.log(`send Email to ${email}`);
// }

// function fullName(FirstName, SecondName) {
//   console.log(`My First Name and second name is ${FirstName}${SecondName}`);
// }

// function nameOfTheFunction(name) {
//   if (!name) {
//     console.log("please provide your name");
//   } else {
//     console.log("Hello", name);
//   }
// }
// nameOfTheFunction("Rashedul islam");
// nameOfTheFunction("Manik akka");
// nameOfTheFunction();

//  ! math

// let random10 = Math.round(Math.random() * 10);
// let random100 = Math.round(Math.random() * 1000);
// let random1000 = Math.round(Math.random() * 1000);
// console.log(random10);
// console.log(random100);
// console.log(random1000);

let random = function (max, min) {
  const randomNumber = Math.round(Math.random() * min + (min - max));
  return randomNumber;
};

let result = random(2, 5);
console.log(result);
