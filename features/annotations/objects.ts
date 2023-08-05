const profile = {
  name: 'Alex',
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

/**
 * When destructuring is done, we can't just say
 * const {age}:number, because if we destructur more properties like
 * const {age, name}: number, it wouldn't be clear who has a type of number.
 * So what we have to do is to label the type of the properties that we are 
 * getting from the object
 * We have to say 'We are destructuring this object, and I'm getting this
 * property, and this property will have X type'
 */

// If we use destructuring we have to write out the expected structure of the object
// I expect my object to have this structure that is an object, with these properties, and these values
const { age, name }: { age: number, name: string } = profile;
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
