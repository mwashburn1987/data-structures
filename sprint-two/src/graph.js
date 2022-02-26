

// Instantiate a new graph
var Graph = function() {
  this.storage = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.storage[node] = {value: node};
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.storage.hasOwnProperty(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this.storage[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this.storage[fromNode].toNode === this.storage[toNode]) {
    return true;
  } else {
    return false;
  }
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // console.log('from : ' + fromNode);
  // console.log('to : ' + toNode);
  // add a property to fromNode that equals toNode
  // if (!this.storage[fromNode].to) {
  //   this.storage[fromNode].to = this.storage[toNode];
  //   this.storage[toNode].from = this.storage[fromNode];
  //   console.log(this.storage[fromNode]);
  // }
  this.storage[toNode].fromNode = this.storage[fromNode];
  this.storage[fromNode].toNode = this.storage[toNode];
  this.storage[toNode].toNode = this.storage[fromNode];
  this.storage[fromNode].fromNode = this.storage[toNode];
  // add a property to toNode that equals fromNode
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  // fromNode and toNode properties to be null
  this.storage[fromNode].toNode = null;
  this.storage[toNode].fromNode = null;
  this.storage[fromNode].fromNode = null;
  this.storage[toNode].toNode = null;
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  console.log(cb);
  for (var key in this.storage) {
    cb(this.storage[key].value);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


