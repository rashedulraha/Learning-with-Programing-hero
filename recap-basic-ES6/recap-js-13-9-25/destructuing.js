user = {
  id: 12,
  name: "john doe",
  isVerified: true,
};

// const id = user.id;
// const name = user.name;
// const isVerified = user.isVerified;

// console.log(isVerified);

// const { id, isVerified: validation, name, age = 21 } = user;
// console.log(age);

// const { id, isVerified, name } = user;

// const {} = user;

const personInformation = {
  name: "Rashedul islam",
  age: 23,
  address: {
    city: " Dhaka",
    country: "Bangladesh",
  },
};

const {
  name,
  age,
  address: { city, country },
} = personInformation;

console.log(address.city);
