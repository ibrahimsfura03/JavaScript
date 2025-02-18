"use strict";
//constructor Function
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

const CAR1 = new Car("BMW", 120);
const CAR2 = new Car("MERCEDES", 95);

console.log(CAR1, CAR2);

Car.prototype.accelerate = function () {
  return this.speed + 10 + "km/ph";
};
Car.prototype.brake = function () {
  return this.speed - 5 + "km/ph";
};

console.log(CAR1.accelerate());
console.log(CAR2.brake());
