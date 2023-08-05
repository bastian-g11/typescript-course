// A function that takes no arguments and returns nothing
// type annotation
type Callback = () => void;

export class Eventing {
  // Indexable types. When events is indexed with a string it will return an array of Callbacks
  events: { [key: string]: Callback[] } = {};

  on = (eventName: string, callback: Callback): void => {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }

  trigger = (eventName: string): void => {
    const handlers = this.events[eventName];

    if (!handlers || handlers.length === 0) {
      return;
    }

    handlers.forEach((callback) => {
      callback();
    });
  }
}
