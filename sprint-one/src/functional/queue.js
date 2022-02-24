var Queue = function() {
  var someInstance = {};
  someInstance.top = 0;
  someInstance.bottom = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[someInstance.top] = value;
    someInstance.top++;
  };

  someInstance.dequeue = function() {
    var dequeued = storage[someInstance.bottom];
    delete storage[someInstance.bottom];
    someInstance.bottom++;
    return dequeued;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
