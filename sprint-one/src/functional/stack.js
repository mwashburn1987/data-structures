var Stack = function() {
  var someInstance = {};
  someInstance.top = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    storage[someInstance.top] = value;
    someInstance.top++;
  };

  someInstance.pop = function() {
    someInstance.top--;
    var popped = storage[someInstance.top];
    delete storage[someInstance.top];
    return popped;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
