class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }
  push(value) {
    let keys = Object.keys(this.storage);
    let index = keys.length;
    this.storage[index] = value;
  }
  pop(value) {
    let keys = Object.keys(this.storage);
    let index = keys.length - 1;
    let popped = this.storage[index];
    delete this.storage[index];
    return popped;
  }
  size() {
    return Object.keys(this.storage).length;
  }

  push(value) {
    this.storage[this.top] = value;
    this.top++;
  }

  pop() {
    this.top--;
    var popped = this.storage[this.top];
    delete this.storage[this.top];
    return popped;
  }

  size() {
    return Object.keys(this.storage).length;
  }
}