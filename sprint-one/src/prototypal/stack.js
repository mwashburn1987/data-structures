var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var stack = Object.create(stackMethods);
  stack.storage = {};
  return stack;
};

var stackMethods = {
  push: function (value) {
    let keys = Object.keys(this.storage);
    let index = keys.length;
    this.storage[index] = value;
  },
  size: function() {
    let keys = Object.keys(this.storage);
    return keys.length;
  },
  pop: function(value) {
    let keys = Object.keys(this.storage);
    let index = keys.length - 1;
    let popped = this.storage[index];
    delete this.storage[index];
    return popped;
  }
};


