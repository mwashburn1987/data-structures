var Queue = function() {
  var someInstance = {};
  someInstance.top = 0;
  someInstance.bottom = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    //create variable for keys of global storage object
    let keys = Object.keys(storage);
    //assign index to be the last element of keys
    let index = keys[keys.length - 1] + 1;
    //add index/value as our key/value pair to storage obj
    storage[index] = value;


  };

  someInstance.dequeue = function() {
    //create var for keys of global storage
    let keys = Object.keys(storage);
    //find the first element and assign to index var
    let index = keys[0];
    //create a return var for the value at that index
    let dequeued = storage[index];
    //delete that key/value at the index
    delete storage[index];
    return dequeued;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
