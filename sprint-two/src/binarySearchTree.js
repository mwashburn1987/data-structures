var BinarySearchTree = function(value) {
  var newBinaryTree = {};
  newBinaryTree.value = value;
  newBinaryTree.left = null;
  newBinaryTree.right = null;
  _.extend(newBinaryTree, binaryTreeMethods);
  return newBinaryTree;
};

var binaryTreeMethods = {};

binaryTreeMethods.insert = function(value) {
  if (value < this.value) {
    if (!this.left) {
      var child = BinarySearchTree(value);
      this.left = child;
    } else {
      this.left.insert(value);
    }
  } else {
    if (!this.right) {
      var child = BinarySearchTree(value);
      this.right = child;
    } else {
      this.right.insert(value);
    }
  }
};

binaryTreeMethods.contains = function(value) {
  if (this.value === value) {
    return true;
  }
  if (value < this.value) {
    if (this.left === null) {
      return false;
    }
    if (this.left.contains(value)) {
      return true;
    }
  } else {
    if (this.right === null) {
      return false;
    }
    if (this.right.contains(value)) {
      return true;
    }
  }
  return false;
};

binaryTreeMethods.depthFirstLog = function(callback) {
  callback(this.value);
  if (this.left) {
    this.left.depthFirstLog(callback);
  }
  if (this.right) {
    this.right.depthFirstLog(callback);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */





