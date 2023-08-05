class Vehicle {
  // Using the public modifier means we're going to take
  // whatever comes in as the first parameter and it will be
  // assigned to an instance variable (a public variable called color).
  // Equivalent:
  // color: string;
  // constructor(color: string) {
  //   this.color = color;
  // }
  constructor(public color: string) {}

  // Public methods can be called anywhere
  stop(): void {
    console.log('Stopped!');
  }

  // Protected methods can only be called by other methods in this class
  // or by other methods in child classes
  protected honk(): void {
    console.log('Beep');
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  // Private methods can only be called by other methods in this class
  private drive(): void {
    console.log('Rrrrr!');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(4, 'red');
car.startDrivingProcess();
