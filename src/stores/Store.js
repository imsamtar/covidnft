export default class Store {
  constructor(initValue) {
    this._value = initValue;
    this.subscribers = new Map();
  }
  set(value) {
    this._value = value;
    for (const subscriber of this.subscribers.values()) {
      subscriber(value);
    }
  }
  get() {
    return this._value;
  }
  update(fun) {
    if (typeof fun === "function") {
      this.set(fun(this.get()));
    }
  }
  subscribe(fun) {
    if (typeof fun === "function") {
      const id = parseInt(Math.random() * Number.MAX_SAFE_INTEGER).toString(36);
      this.subscribers.set(id, fun);
      fun(this.get());
      return () => this.subscribers.delete(id);
    }
  }
}
