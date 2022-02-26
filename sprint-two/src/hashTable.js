

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tuple = [k, v];
  if (!this._storage.get(index)) {
    var bucketArray = [tuple];
    this._storage.set(index, bucketArray);
  } else {
    let bucketArray = this._storage.get(index);
    for (var i = 0; i < bucketArray.length; i++) {
      if (bucketArray[i][0] === k) {
        bucketArray[i] = tuple;
      } else {
        bucketArray.push(tuple);
      }
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let bucketArray = this._storage.get(index);
  if (bucketArray.length === 1) {
    return bucketArray[0][1];
  } else {
    for (var i = 0; i < bucketArray.length; i++) {
      if (bucketArray[i][0] === k) {
        return bucketArray[i][1];
      }
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let bucketArray = this._storage.get(index);
  if (bucketArray.length === 1) {
    bucketArray.splice(0, 1);
  } else {
    for (var i = 0; i < bucketArray.length; i++) {
      if (bucketArray[i][0] === k) {
        bucketArray.splice(i, 1);
      }
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

// Assuming zero collision, the hash table maintains a O(1) time complexity. Once, a collision occurs, the time complexity becomes O(n);
