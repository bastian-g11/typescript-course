const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

//Array of string arrays
const carsByMake = [['f150'], ['corolla'], ['camaro']];

const exampleArray: string[][] = [];

// Help with inference when extracting values
// As we accessing an element in a string array, we know that the variable will be a string
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push(100);

// Help with 'map', 'forEach', 'reduce', etc

/**
 * If we know the variable type passed into the function, TS will give us autcomplete
 * on the variable
 */

carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types
const importantDates: (string | Date)[] = [];

importantDates.push('2030-10-10');
importantDates.push(new Date());
importantDates.push(100);
