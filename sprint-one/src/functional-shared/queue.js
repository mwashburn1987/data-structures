var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newInstance = {};
  newInstance.storage = {};
  newInstance.top = 0;
  newInstance.bottom = 0;
  _.extend(newInstance, queueMethods);
  return newInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.top] = value;
  this.top++;
};

queueMethods.dequeue = function() {
  var dequeued = this.storage[this.bottom];
  delete this.storage[this.bottom];
  this.bottom++;
  return dequeued;
};

queueMethods.size = function() {
  return Object.keys(this.storage).length;
};