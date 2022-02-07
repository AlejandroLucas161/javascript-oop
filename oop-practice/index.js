// Introduction to OOP ////////////////
// Introduction to OOP ////////////////
// Introduction to OOP ////////////////
// Introduction to OOP ////////////////

// class Person {
//   constructor (name, age, job) {
//     this.name = name;
//     this.age = age;
//     this.job = '';
//   }

//   getName = () => {
//     return this.name
//   }

//   getAge = () => {
//     return this.age
//   }
  
//   setJob = (job) => {
//     this.job = job
//   }

// }

// class House {
//   constructor(address, price, residents) {
//     this.address = address;
//     this.price = price;
//     this.residents = residents;
//   }

//   getAddress = () => {
//     return this.address;
//   }

//   getPrice = () => {
//     return this.price;
//   }

//   getResidents = () => {
//     return this.residents;
//   }

//   addResident = (resident) => {
//     this.residents.push(resident);
//   };

// }

/*
const person1 = new Person('Pedro', 24);
const person2 = new Person('Maria', 28);

const house = new House('22Avenue', 28000, [person1, person2])
console.log(house.getResidents());

const person3 = new Person('Lois', 25)

house.addResident(person3)
console.log(house.getResidents());
*/

// Abstraction ////////////////
// Abstraction ////////////////
// Abstraction ////////////////
// Abstraction ////////////////

// Is a way of hiding the implementation details and showing only the functionality to the users. 

/*
const person1 = new Person('Pedro', 19);
const house = new House('sdgafgdf', 2030, []);

house.addResident(person1);

person1.setJob('Developer')

console.log(house.getResidents());
*/

// Encapsulation ////////////////
// Encapsulation ////////////////
// Encapsulation ////////////////
// Encapsulation ////////////////

// Is a process of binding the data (i.e. variables) with the functions acting on that data.
/*
class Person {
  constructor (name, age, job) {
    this._name = name;
    this._age = age;
    this._job = '';
  }

  getName = () => {
    return this._name
  }

  getAge = () => {
    return this._age
  }
  
  setJob = (job) => {
    this._job = job
  }
}
*/

// Inheritance ////////////////
// Inheritance ////////////////
// Inheritance ////////////////
// Inheritance ////////////////

// Is a mechanism that allows us to create new classes on the basis of already existing classes.
/* 
class Person {
  constructor (name, age) {
    this.name = name;
    this.age = age;
  }
  
  getName = () => {
    return this.name
  }
  
  getAge = () => {
    return this.age
  }
  
}

class Programmer extends Person {
  constructor(name, age, company, salary, language) {
    super(name, age);
    this.company = company;
    this.salary = salary;
    this.language = language;
  }
  
  sayHi = () => {
    console.log(`Hello, I am a Programmer! My name is ${this.getName()}, I work for ${this.company}`);
  }
}

const programmer = new Programmer('Pedro', 24, 'Twitch', 1000000000, 'Javascript');
programmer.sayHi();
*/

// Polymorphism ////////////////
// Polymorphism ////////////////
// Polymorphism ////////////////
// Polymorphism ////////////////

// Is a core concept of an object-oriented paradigm that provides a way to perform a single action in different forms
/* */
class Person {
  constructor (name, age) {
    this.name = name;
    this.age = age;
  }

  getName = () => {
    return this.name
  }

  getAge = () => {
    return this.age
  }
   
}

class Programmer extends Person {
  constructor(name, age, company, salary, language) {
    super(name, age);
    this.company = company;
    this.salary = salary;
    this.language = language;
  }

  sayHi = () => {
    console.log(`Hello, I am a Programmer! My name is ${this.getName()}, I work for ${this.company}`);
  }
}

class Doctor extends Person {
  constructor(name, age, salary) {
    super(name, age);
    this.salary = salary;
  }
}