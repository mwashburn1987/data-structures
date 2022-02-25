class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }
  enqueue(value) {
    let keys = Object.keys(this.storage);
    let index = keys[keys.length - 1] + 1;
    this.storage[index] = value;
  }
  dequeue(value) {
    let keys = Object.keys(this.storage);
    let index = keys[0];
    let dequeued = this.storage[index];
    delete this.storage[index];
    return dequeued;
  }
  size() {
    return Object.keys(this.storage).length;
  }
}
var queue = new Queue;
