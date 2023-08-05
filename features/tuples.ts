const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

/**
 * Representing a tuple. The order is important, we don't want it to be an array of
 * strings, booleans and numbers, but an array that has an specific order
 */
const pepsi: [string, boolean, number] = ['brown', true, 40];
pepsi[0] = true;

// Using type aliases.
// We're not creating an array, we're creating the idea of a tuple inside our app
type Drink = [string, boolean, number];

const cocaCola: Drink = ['brown', true, 80];
const sprite: Drink = ['clear', true, 60];
