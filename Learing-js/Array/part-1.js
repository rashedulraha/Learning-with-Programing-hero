// const first = ["Banana", "appal", "tomato", "Chilli"];
// console.log(first);

// let newArray = new Array("Banana", "appal", "tomato", "Chilli");
// console.log(newArray);

// let result = first === newArray;
// console.log(result);

// let newArray = new Array(4, 2);
// console.log(newArray);

// const [Banana, appal, orange, gam, watermelon, nothing, javascript] = [
//   "Hello",
//   "Hello",
//   "Hello",
//   "Hello",
//   "Hello",
// ];
// console.log(Banana, appal, orange, gam, watermelon, nothing, javascript);

// const student = ["Rashedul", 21, 10, "halima", "hasiba", "karima"];
// const [name, age, roll, , , nothing2] = student;
// console.log(name, age, roll, nothing2);

// let [result, , years, , world] = ["name", "age", "years", "hello", "world"];

// const data = [
//   ["HTML", "CSS"],
//   [
//     "JavaScript",
//     "React",
//     ["name", "age", "years", "hello", "world", [1, 2, 3], [4, 5, 6]],
//   ],
// ];

// const result2 = data[1][2][5][2];
// console.log(result2);

// console.log(result, years, world);

// !🎯 📌 Practical Example: Restaurant Menu

/*🔍 কাজ
ধরা যাক তুমি এই থেকে নিচের জিনিস বের করতে চাও:
✅ ১) Main Course এর Pepperoni Pizza এর নাম বের করো
✅ ২) Pepperoni Pizza এর Addon Olives বের করো
✅ ৩) Dessert এর Brownie বের করো */

const menu = [
  [
    "Starters",
    [
      ["Soup", ["Tomato Soup", "Chicken Soup"]],
      ["Salad", ["Greek Salad", "Caesar Salad"]],
    ],
  ],
  [
    "Main Course",
    [
      ["Pizza", ["Margherita", "Pepperoni", ["Extra Cheese", "Olives"]]],
      ["Pasta", ["Spaghetti Bolognese", "Penne Alfredo"]],
    ],
  ],
  [
    "Desserts",
    [
      ["Ice Cream", ["Vanilla", "Chocolate"]],
      ["Cake", ["Cheesecake", "Brownie"]],
    ],
  ],
];

// let result = menu[1][1][0][1];
// console.log(result);
// const pepperoni = menu[1][1][0][1][1];
// console.log(pepperoni); // Pepperoni
