const number = [1, 12, 23, 25, 2];

const player = [{}, {}, {}];
const employees = [
  {
    name: "Rashedul",
    designation: "content ",
    salary: 25000,
    gmail: "rashedul@gmail.com",
  },
  {
    name: "abdullah",
    designation: "designer",
    salary: 29000,
    gmail: "abdullah@gmail.com",
  },

  {
    name: "abdul",
    designation: "Digital marketer",
    salary: 30000,
    gmail: "abdul@gmail.com",
  },
  {
    name: "asifa",
    designation: "web designer",
    salary: 26000,
    age: 21,
    gmail: "asifa@gmail.com",
  },
  {
    name: "Rakib",
    age: 21,
    gmail: "rakib@gmail.com",
    designation: "email marketer",
    salary: 28000,
  },
];

const sendEmail = (email) => {
  let result = `sending email to ${email}`;
  console.log(result);
};
// console.log(employees[3].age);

for (const employee of employees) {
  sendEmail(employee.gmail);
}
