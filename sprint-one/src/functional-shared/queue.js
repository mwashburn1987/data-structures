var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var queue = {};
  queue.storage = {};
  extend(queue, queueMethods);
  return queue;
};

var extend = function ( obj1, obj2) {
  for (var key in obj2) {
    obj1[key] = obj2[key];
  }
};

var queueMethods = {
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

