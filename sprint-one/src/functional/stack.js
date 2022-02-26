var Stack = function() {
  var someInstance = {};
  someInstance.top = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    //Input - Takes in a string
    //Ouput - No output, should push values to storage
    //Constraints - No arrays
    //Edge - ???

    //create a value for keys
    //check length of keys
    //create an index of length and add string to object with that index
    let keys = Object.keys(storage);
    let index = keys.length;
    storage[index] = value;

    // string = a // 0 : a
    // ... b // 1 : b
    // ... c // 2 : c


  };

  someInstance.pop = function() {
    //create value for keys
    var keys = Object.keys(storage);
    //get last element of keys
    var index = keys.length - 1;
    //create a variable for the value before deleting
    let popped = storage[index];
    //use .delete for that index on the global storageobject
    delete storage[index];
    return popped;
  };

  someInstance.size = function() {
    var keys = Object.keys(storage);
    return keys.length;
  };

  return someInstance;
};
