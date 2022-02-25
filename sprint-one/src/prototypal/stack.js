var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newInstance = Object.create(stackMethods);
  newInstance.storage = {};
  newInstance.top = 0;
  return newInstance;
};

var stackMethods = {};

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
