var BinarySearchTree = function(value) {
  var newBinaryTree = {};
  newBinaryTree.value = value;
  newBinaryTree.left = [];
  newBinaryTree.right = [];
  _.extend(newBinaryTree, binaryTreeMethods);
  return newBinaryTree;
};

var binaryTreeMethods = {};

binaryTreeMethods.insert = function(value) {
};

binaryTreeMethods.contains = function(value) {

};

binaryTreeMethods.depthFirstLog = function(callback) {

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
