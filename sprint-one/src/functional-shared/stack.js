var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = {};
  stack.storage = {};
  extend(stack, stackMethods);
  return stack;
};
var extend = function ( obj1, obj2) {
  for (var key in obj2) {
    obj1[key] = obj2[key];
  }
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


stackMethods.push = function(value) {
  this.storage[this.top] = value;
  this.top++;
};

stackMethods.pop = function() {
  this.top--;
  var popped = this.storage[this.top];
  delete this.storage[this.top];
  return popped;
};

stackMethods.size = function() {
  return Object.keys(this.storage).length;
};
