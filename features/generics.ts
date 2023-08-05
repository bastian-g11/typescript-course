class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfString {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

/**
 * Generic Class
 */
class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

new ArrayOfAnything<number>([1, 2, 3]);
// Type inference, we don't have to specify what the T is
const arrayOfStrings = new ArrayOfAnything(['a', 'b', 'c']);

// Generic with functions
function printStrings(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printNumbers(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printAnything<number>([3, 4, 3, 2]);

// Type inference, we don't have to specify what T is. So we can make
// a generic function and the syntax is almost the same
printAnything([3, 4, 3, 2]);

// Generic Constraints

class Car {
  print(): void {
    console.log('I am a car');
  }
}

class House {
  color: string ;
  print(): void {
    console.log('I am a House');
  }
}

// function printHousesOrCars<T>(arr: T[]): void {
//   for (let i = 0; i < arr.length; i++) {
//     arr[i].print();
//   }
// }

// We don't know if the this that we pass in has a print method defined
// so, I could lead to an error
// printHousesOrCars([1, 2, 3]) 

// To fix this, we should add a generic constraint and promise that
// whatever we passed in, it has a print method

interface Printable {
  print(): void
}

// We add the constraint, we're telling TS that whatever we pass in
// it is going to have all the properties that the interface Printable has
function printHousesOrCars<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}

printHousesOrCars([1, 2, 3, 4]); // ERROR
// It doesn't throw an error because an instance of car or house 
// satisfies the interface Printable
// We should add type annotations
printHousesOrCars<House>([new House(), new House()]);


// Why this line doesn't throw an error? Because in this case Car and House are of the same Type!
printHousesOrCars<Car>([new Car(), new House()]);

// First, remember that TS decides on whether an object is a given type by looking at the properties it has.  So in this section, we introduced the Printable interface.  You can be of type 'Printable' if you implement the 'print' method.  We used this quite a bit on both House and Car.
// Now take a look at your final line of code:
printHousesOrCars<House>([new House(), new Car(), new House(), new Car()]);
// That's saying that we want to call printHousesOrCars with an array of House objects.  You think that this line should throw an error because we are trying to provide an array of Houses and Cars.
// But I've got a quick question for you: is a Car the same type as a House?
// You'll probably say 'no', but look at it from the eyes of TS, and remember the rule TS uses to decide if something is of a given type: if an object A has all the same properties/methods as the type B, then the object A is type B!
// So let's apply that to House and Car: to be of type 'House', you must have a 'print' method.  Does car have a 'print' method?  Yes, it does!  That means that TS considers a Car to be a House!  That's why we're not seeing an error from that last line of code.
// You can make this break by adding in some additional property to class House.

class _House {
  color = 'red';
  print() {
    console.log('I am a house');
  }
}
// Now to be of type House, you have to have a print method and a color property that is a string.  Does Car satisfy this?  Car has 'print', but it doesn't have 'color', so Car is no longer of type House.  Now TS will throw an error on your final line of code!


// Now, this throws an error because in order to be of type House, you should have a print and a color property
printHousesOrCars<House>([new House(), new Car(), new House(), new Car()]);

// This doesn't throw an error because in order to be a car, you should have a print method
// and House has that method (even though it an aditional property) and that's enough
printHousesOrCars<Car>([new Car(), new House()]);
