var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (list.head === null) {
      list.head = Node(value);
      list.tail = list.head;
    } else {
      var newNode = Node(value);
      list.tail.next = newNode.value;
      list.tail = newNode;
    }
  };

  list.removeHead = function() {
    var removed = list.head.value;
    list.head = list.tail;
    return removed;
  };

  list.contains = function(target) {
    if (list.head.value === target || list.tail.value === target) {
      return true;
    } else {
      return false;
    }
    // for (var property in list) {
    //   console.log(list.tail);
    //   for (var j in list[property]) {
    //     // console.log(j);
    //     return list[key][j] === target;
    //   }
    // }
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
