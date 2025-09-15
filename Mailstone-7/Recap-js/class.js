class Person {
  constructor(name, age, collageName) {
    this.name = name;
    this.age = age;
    this.collageName = collageName;
  }

  nothing() {
    console.log(
      `Hello my name is ${this.name} and my age  is ${this.age} and i'm study at ${this.collageName} medical collage hospital`
    );
  }
}

const rafi = new Person("rafi", 21, "dhaka");

rafi.nothing();
rafi.age = 45;
rafi.nothing();
