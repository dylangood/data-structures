var BinarySearchTree = function(value) {
  var bst = Object.create(BinarySearchTree.prototype);
  bst.value = value;
  bst.left = undefined;
  bst.right = undefined;
  return bst;
};

BinarySearchTree.prototype = {

  insert: function(value) {

  },
  contains: function(value) {
    return; //someBoolean
  },
  depthFirstLog: function(cb) {
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
