function vehicle( brand, model, speed,fuelType){
    this.brand = brand;
    this.model = model;
    this.speed = speed;
    this.fuelType = fuelType;
}
vehicle.prototype.accelerate = function(){
   this.speed += 10;
   console.log(`${this.brand} ${this.model} is accelerating. Current speed: ${this.speed} km/h`);
}
vehicle.prototype.brake = function(){
    this.speed -= 5;
    console.log(`${this.brand} ${this.model} is braking. Current speed: ${this.speed} km/h`);
}
vehicle.prototype.refule = function(){
    console.log(`${this.brand} ${this.model} is rufuling.`);
}
function car(brand, model, speed,fuelType,noofWheels){
    vehicle.call(this,brand,model,speed,fuelType);
    this.noofWheels =noofWheels;
}
Object.setPrototypeOf(car.prototype,vehicle.prototype)
car.prototype.honk = function(){
console.log(`${this.brand} ${this.model} is honking.`)
}


function Airplane(brand, model, speed,fuelType,noofEngine,hasLandingGear,){
    vehicle.call(this,brand,model,speed,fuelType)
    this.noofEngine =noofEngine;
    this.hasLandingGear = hasLandingGear;
    

}
Object.setPrototypeOf(Airplane.prototype,vehicle.prototype);
Airplane.prototype.takeOff = function(){
    console.log(`${this.brand} ${this.model} is taking off.`)
}
let myCar = new car('Toyta','Camry', 0, 'Petrol',4);
let myAirplane = new Airplane('Air India','745',0, 'Jet Fuel',6,'true');

myCar.accelerate();
myCar.brake();
myCar.refule();
myCar.honk();


myAirplane.accelerate();
myAirplane.brake();
myAirplane.refule();
myAirplane.takeOff();