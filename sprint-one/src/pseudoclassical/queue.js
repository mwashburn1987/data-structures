var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.top = 0;
  this.bottom = 0;
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

Queue.prototype.enqueue = function(value) {
  this.storage[this.top] = value;
  this.top++;
};

Queue.prototype.dequeue = function() {
  var dequeued = this.storage[this.bottom];
  delete this.storage[this.bottom];
  this.bottom++;
  return dequeued;
};

Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};

