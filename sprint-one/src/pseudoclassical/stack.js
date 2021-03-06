var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.storage = {};
};

Stack.prototype.push = function (value) {
  let keys = Object.keys(this.storage);
  let index = keys.length;
  this.storage[index] = value;
};
Stack.prototype.pop = function(value) {
  let keys = Object.keys(this.storage);
  let index = keys.length - 1;
  let popped = this.storage[index];
  delete this.storage[index];
  return popped;
};
Stack.prototype.size = function() {
  let keys = Object.keys(this.storage);
  return keys.length;
};
var stack = new Stack();

Stack.prototype.push = function(value) {
  this.storage[this.top] = value;
  this.top++;
};

Stack.prototype.pop = function() {
  this.top--;
  var popped = this.storage[this.top];
  delete this.storage[this.top];
  return popped;
};

Stack.prototype.size = function() {
  return Object.keys(this.storage).length;
};