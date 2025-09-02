class Vehicle {
  constructor(type, price, brand) {
    this.type = type;
    this.price = price;
    this.brand = brand;
  }
  getThis() {
    return this.price;
  }
}
const car1 = new Vehicle("car", 5000000, "Honda");
const result = car1.getThis();
console.log(result);

const toyota = new Vehicle("car", 5600000, "toyota");
const result2 = toyota.getThis();
console.log(result2);

const student = {
  name: "Rahul",
  score: 1000,
  getScore: function () {
    console.log(this);
  },
  getScore2: () => {
    console.log(this);
  },
};

student.getScore();
student.getScore2();
