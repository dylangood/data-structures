var BinarySearchTree = function(value) {
  var bst = Object.create(BinarySearchTree.prototype);
  bst.value = value;
  bst.left = undefined;
  bst.right = undefined;
  return bst;
};

BinarySearchTree.prototype = {

  insert: function(value) {
    if ( value < this.value ) {
      if ( this.left === undefined ) {
        this.left = BinarySearchTree(value);
      } else { //recurse left
        this.left.insert(value);
      }
    }
    if (value > this.value ) {
      if ( this.right === undefined ) {
        this.right = BinarySearchTree(value);
      } else { //recurse right
        this.right.insert(value);
      }
    }
    if (value === this.value ) {
      //go to hell
    }
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
