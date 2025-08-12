const mobile = [
  {
    name: "samsung",
    Price: 2503000,
    camera: "12mp",
    color: "black",
  },
  {
    name: "1Plus",
    Price: 625000,
    camera: "60mp",
    color: "black",
  },
  {
    name: "vivo",
    Price: 22000,
    camera: "10mp",
    color: "black",
  },
  {
    name: "apple",
    Price: 300000,
    camera: "62mp",
    color: "silver",
  },
  {
    name: "apple",
    Price: 300000,
    camera: "62mp",
    color: "silver",
  },
  {
    name: "apple",
    Price: 300000,
    camera: "62mp",
    color: "silver",
  },
];

// ! actual function and logic build up with js

function getCheapestPhone(mobilePhone) {
  let minPricePhone = mobilePhone[0];

  for (let phones of mobilePhone) {
    if (phones.Price > minPricePhone.Price) {
      minPricePhone = phones;
    }
  }
  return minPricePhone;
}

let result = getCheapestPhone(mobile);
console.log(result);
