var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;
  return newTree;
};

var treeMethods = {
  addChild: function(value) {
    var newTree = Tree(value);
    this.children.push(newTree);
  },
  contains: function(target) {
    var found = false;
    for ( var i = 0; i < this.children.length; i++ ) {
      found = found || this.children[i].contains(target);
    }
    return found || target === this.value;
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 addChild: constant
 contains: linear
 */
