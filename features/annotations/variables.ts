let apples: number = 4;
let speed: string = 'fast';
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

// Built in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'blue', 'green'];
let numbers: number[] = [3, 4, 5, 6];
let booleans: boolean[] = [true, false, true];

// Classes
class Car {}

let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use annotations
// #1) Function that returns the 'any' type

const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

// #2) When we do delayed initialization
const words = ['green', 'red', 'yellow'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// #3) Variable whose type cannot be inferred correctly
// BAD CODE EXAMPLE, BUT IT IS TO ILUSTRATE WHAT WAS INTENDED
let nums = [-1, 10, 12];
let numberAboveZero: boolean | number = false; 

for (let i = 0; i < nums.length; i++) {
  if(nums[i] > 0) {
    numberAboveZero = nums[i];
  }
}