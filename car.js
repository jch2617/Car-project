// Declare a class named Car with a constructor that 
// accepts one parameter named fuelLevel. 
// Gave the parameter fuelLevel a default value of 100 ,
// and added properties of speed and engineOn to start with
// car off and not moving (speed zero)

class Car {
    constructor(fuelLevel = 100) {
        this.fuelLevel = fuelLevel;
        this.speed = 0;
        this.engineOn = false;
    } 

// Accelerate-if fuel Level is more than or equal to 1. Then decrease
// fuelLevel by 1 and increase speed by 1.

    accelerate () {
        if (this.fuelLevel >= 1) {
            this.fuelLevel -= 1;
            this.speed+= 1;
        } 
    } 

// Brake decreases speed by 1. Speed cannot go below 0.

    brake () {
        if (this.speed >= 0){
            this.speed-= 1;
        }
    } 
// Sets engine to "on"
    turnCarOn () {
        this.engineOn = true;
    } 

// turns car off
    turnCarOff() {
        this.engineOn= false;
    }

// resets fuel level to 100    
    refillFuel() {
        this.fuelLevel = 100;
    }
    
}

// create instance of Car with a fuel level of 60
let myCar = new Car(60);

myCar.refillFuel();
myCar.turnCarOn();
myCar.accelerate();
myCar.accelerate();
myCar.accelerate();
myCar.brake();
myCar.brake();
myCar.brake();
myCar.turnCarOff();

console.log(myCar);