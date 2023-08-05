// interface Vehicle {
//   name: string;
//   year: Date;
//   broken: boolean;
//   summary(): string;
// }

// If an object has the list of properties defined in the interface
// then it satisfies the interface definition it's enough
interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: 'Civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`; 
  },
};

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `This drink has: ${this.sugar} grams of sugar`; 
  },
}

// It asks for an item that satisfies the interface reportable
// The parameter must satisfy the interface
const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

// This function can be used with any type of object that satisfies the interface required
printSummary(drink);
printSummary(oldCivic);
