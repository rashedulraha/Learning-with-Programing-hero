class Dog {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }
  cat() {
    console.log(`${this.name} is eating`);
  }

  bark() {
    console.log(`${this.name} is  barking`);
  }
}

const dog1 = new Dog("Coffee", " Deshi ");

dog1.eat();
console.log(dog1);
