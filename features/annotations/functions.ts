const add = (num1: number, num2: number): number => {
  return num1 + num2;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

const loggeer = (message: string): void => {
  console.log(message);
};

// Only annotates a funcion with never when you truly expect a function
// to never return anything ever
const throwError = (message: string): never => {
  throw new Error(message);
};

// If we expect at least 1 value to be returned, we use that type as return type
const throwError2 = (message: string): string => {
  if (!message) {
    throw new Error(message);
  }

  return message;
};

const todaysWeather = {
  date: new Date(),
  weather: 'Sunny',
};

const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};
