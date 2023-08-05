import { faker } from '@faker-js/faker';
import { Mappable } from "./Map";

export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'red';

  constructor() {
    this.name = faker.name.firstName();
    // console.log(this.location); // Undefined
    /**
     * We have to initialize the location like this, because we are telling to TS
     * that we have a variable location that has a type of an object with two properties,
     * but we haven't initialized it yet, so this.location is undefined or null
     * and this.location.lat/lng will be an error
     */
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `User Name: ${this.name}`;
  }
}
