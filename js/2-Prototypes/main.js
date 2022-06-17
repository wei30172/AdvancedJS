// https://www.youtube.com/watch?v=mQ4oCgcgHOA&list=PL0Zuz27SZ-6N3bG4YZhkrCL3ZmDcLTuGd&index=2

// Prototypal Inheritance and the Prototype Chain

// "under the hood", (ES6 Classes are considered "syntactic sugar")
// syntactic sugar = new easier way to do something that already existed in javascript

// Object literals
const person = {
  alive: true
}

const musician = {
  plays: true
}

musician.__proto__ = person; // person is the parent of musician
console.log(musician.plays); // true
console.log(musician.alive); // undefined => // true
console.log(musician);


// JS now has getPrototypeOf and setPrototypeOf methods instead of using __proto__

Object.setPrototypeOf(musician, person);
console.log(Object.getPrototypeOf(musician)); // { plays: true } the property of person object
console.log(musician.__proto__); // { plays: true } the property of person object
console.log(Object.getPrototypeOf(musician) === musician.__proto__); // true

console.log(musician.plays); // true
console.log(musician.alive); // true
// miss property => go to person (js has to walk up the proto chain to get that property)

// ==================
const guitarist = {
  strings: 6,
  __proto__: musician
}

console.log(guitarist.alive); // true
console.log(guitarist.plays); // true
console.log(guitarist.strings); // 6

// No circular references allowed (person.__proto__ can't be guitarist).
// The __proto__ value must be an object or null.
// An object can only directly inherit from one object.

// ==================
const car = {
  door: 2,
  seats: "vinyl",
  get seatMaterial() {
    return this.seats;
  },
  set seatMaterial(material) {
    this.seats = material;
  }
}

const luxuryCar = {};
Object.setPrototypeOf(luxuryCar, car);
console.log(luxuryCar.seatMaterial); // vinyl
luxuryCar.seatMaterial = "leather"; // Note keyword "this"
console.log(luxuryCar.seatMaterial); // leather
console.log(luxuryCar); // {seats: 'leather'}
console.log(luxuryCar.door); // 2
console.log(car); // {door: 2, seats: 'vinyl'}

// Walk up the chain - props and methods are copied
console.log(luxuryCar.valueOf()); // {seats: 'leather'} 
// valueOf is inherited from default object: js object

// Getting the keys of an Object
console.log(Object.keys(luxuryCar)); // ['seats']

// loop through each object key
Object.keys(luxuryCar).forEach(key => {
  console.log(key); // seats
})

// But a for...in loop includes inherited props
for (let key in luxuryCar) {
  console.log(key); // seats door seatMaterial
}

// ==================
// Object constructors
function Animal(species) {
  this.species = species;
  this.eats = true;
}

Animal.prototype.walks = function () {
  return `A ${this.species} is walking.`
}

const Bear = new Animal("bear");

console.log(Bear.species); // bear
console.log(Bear.walks()); // A bear is walking.

// The prototype property is where inheritable props and methods are
console.log(Bear.__proto__); // {walks: ƒ, constructor: ƒ}
console.log(Animal.prototype); // {walks: ƒ, constructor: ƒ}
console.log(Bear.__proto__ === Animal.prototype); // true
console.log(Bear); // Animal {species: 'bear', eats: true}

// ==================
// Now an ES6 classes example of inheritance
class Vehicle {
  constructor() {
    this.wheels = 4,
    this.motorized = true
  }

  ready() {
    return "Ready to go!";
  }
}

class Motorcycle extends Vehicle {
  constructor() {
    super(); // we have to call super if we want to use the keyword this
    this.wheels = 2
  }

  wheelie() {
    return "On one wheels now!";
  }
}

const MyBike = new Motorcycle();
console.log(MyBike); // Motorcycle {wheels: 2, motorized: true}
console.log(MyBike.ready()); // Ready to go!
console.log(MyBike.wheelie()); // On one wheels now!