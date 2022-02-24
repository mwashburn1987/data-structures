var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = Object.create(queueMethods);
  queue.storage = {};
  return queue;
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


