class Highway {
    constructor() {
      this.vehicleList = [];
      this.vignetteCost = 0;
    }
  
    enterHighway(vehicle) {
      this.vehicleList.push(vehicle);
      console.log(`Vehicle with plate number ${vehicle.plateNumber} entered the highway.`);
    }
  }
  
  const highway1 = new Highway();
  
  const vehicle1 = { type: "car", plateNumber: "B 001 xyz" };
  highway1.enterHighway(vehicle1);
  
  const vehicle2 = { type: "truck", plateNumber: "B 002 wxy" };
  highway1.enterHighway(vehicle2);
  
  
  class Vehicle {
    constructor(name, runningSpeed, driver) {
      this.name = name;
      this.runningSpeed = runningSpeed;
      this.driver = driver;
    }
  
    increaseSpeed(speed) {
      this.runningSpeed += speed;
      console.log(`Speed increased by ${speed}. New running speed: ${this.runningSpeed}`);
    }
  }
  
  class Driver {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }
  
  const driver1 = new Driver("Christina", 36);
  const vehicle = new Vehicle("Motto", 120, driver1);
  
  console.log(vehicle.runningSpeed); // Output: 120
  
  vehicle.increaseSpeed(20);
  // Output: Speed increased by 20. New running speed: 140
  
  console.log(vehicle.runningSpeed); // Output: 140
  
  // Create another class Bus that inherits Vehicle
  
  class Bus extends Vehicle {
    constructor(name, runningSpeed, driver, capacity) {
      super(name, runningSpeed, driver);
      this.capacity = capacity;
    }
  }
  
  const driver2 = new Driver("Erika", 30);
  const bus1 = new Bus("City Bus", 60, driver2, 50);
  
  console.log(bus1.name); // Output: "City Bus"
  console.log(bus1.runningSpeed); // Output: 60
  console.log(bus1.driver); // Output: Driver object
  console.log(bus1.capacity); // Output: 50
  
  bus1.increaseSpeed(10);
  // Output: Speed increased by 10. New running speed: 70
  
  // Create another class Car that inherits Vehicle

  class Car extends Vehicle {
    constructor(name, runningSpeed, driver, fuelType) {
      super(name, runningSpeed, driver);
      this.fuelType = fuelType;
    }
  }
  
  const driver3 = new Driver("Andrew", 36);
  const car1 = new Car("Sedan", 100, driver3, "Petrol");
  
  console.log(car1.name); // Output: "Sedan"
  console.log(car1.runningSpeed); // Output: 100
  console.log(car1.driver); // Output: Driver object
  console.log(car1.fuelType); // Output: "Petrol"
  
  car1.increaseSpeed(20);
  // Output: Speed increased by 20. New running speed: 120
  
  // Create another class Truck (Tir) that inherits Vehicle
  
  class Truck extends Vehicle {
    constructor(name, runningSpeed, driver, cargoCapacity) {
      super(name, runningSpeed, driver);
      this.cargoCapacity = cargoCapacity;
    }
  }
  
  const driver4 = new Driver("John", 36);
  const truck1 = new Truck("Heavy Truck", 80, driver1, 5000);
  
  console.log(truck1.name); // Output: "Heavy Truck"
  console.log(truck1.runningSpeed); // Output: 80
  console.log(truck1.driver); // Output: Driver object
  console.log(truck1.cargoCapacity); // Output: 5000
  
  truck1.increaseSpeed(10);
  // Output: Speed increased by 10. New running speed: 90
  
  // Create another class Driver, the has the following properties( have put DriverNew because Driver already exits in the code )
  class DriverNew {
    constructor(name, walletMoney) {
      this.name = name;
      this.walletMoney = walletMoney;
    }
  }
  
  const driver5 = new DriverNew("Ella", 100); // Updated to use DriverNew class
  const driver6 = new DriverNew("Jane", 50); // Updated to use DriverNew class
  
  console.log(driver5.name); // Output: "Ella"
  console.log(driver5.walletMoney); // Output: 100
  
  console.log(driver6.name); // Output: "Jane"
  console.log(driver6.walletMoney); // Output: 50
  

  //Create another class Police, that inherit Vehicle.
  class Police extends Vehicle {
    constructor(name, runningSpeed, driver, jurisdiction) {
      super(name, runningSpeed, driver);
      this.jurisdiction = jurisdiction;
    }
  
    static speedLimitsByVehicleType = {
        car: 60,
        truck: 50,
        bus: 70,
        motorcycle: 80
      };
    
      static fineByVehicleType = {
        car: 100,
        truck: 150,
        bus: 200,
        motorcycle: 80
      };

    checkVehicleSpeed(vehicle) {
        console.log(`Checking speed of vehicle ${vehicle.name}...`);
        console.log(`Current speed: ${vehicle.runningSpeed}`);
      }
  }
  
  const driver7 = new Driver("Michael", 40);
  const policeCar1 = new Police("Police Car", 150, driver7, "City");
  
  console.log(policeCar1.name); // Output: "Police Car"
  console.log(policeCar1.runningSpeed); // Output: 150
  console.log(policeCar1.driver); // Output: Driver object
  console.log(policeCar1.jurisdiction); // Output: "City"
  
  policeCar1.increaseSpeed(20);
  // Output: Speed increased by 20. New running speed: 170
  