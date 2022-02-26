var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = Object.create(queueMethods);
  queue.storage = {};
  return queue;
};

queueMethods = {
  enqueue: function(value) {
    let keys = Object.keys(this.storage);
    let index = keys[keys.length - 1] + 1;
    this.storage[index] = value;
  },
  dequeue: function(value) {
    let keys = Object.keys(this.storage);
    let index = keys[0];
    let dequeued = this.storage[index];
    delete this.storage[index];
    return dequeued;
  },
  size: function() {
    return Object.keys(this.storage).length;
  }
};

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
