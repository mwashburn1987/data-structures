var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};
Queue.prototype.enqueue = function(value) {
  let keys = Object.keys(this.storage);
  let index = keys[keys.length - 1] + 1;
  this.storage[index] = value;
};
Queue.prototype.dequeue = function(value) {
  let keys = Object.keys(this.storage);
  let index = keys[0];
  let dequeued = this.storage[index];
  delete this.storage[index];
  return dequeued;
};
Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};
var queue = new Queue;


