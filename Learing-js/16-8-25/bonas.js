const students = {
  name: "Rashedul",
  id: 121,
  address: "Rajshahi",
  isSingle: true,
  friends: ["apu", "Raz", "Hello", "hello", "hello"],
  movies: [
    { name: "number 1", years: 2015 },
    {
      name: "king Khan",
      years: 2012,
    },
  ],
  act: function () {
    console.log("acting like shakib khan");
    return;
  },
  car: {
    brand: "tesla",
    price: 2000000,
    made: 2025,
    manufacture: {
      name: "tesla",
      ceo: "elon musk",
      country: "USA",
    },
  },
};

console.log(students.act());
