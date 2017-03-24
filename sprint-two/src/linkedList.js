var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value);
    if ( null !== this.tail ) {
      this.tail.next = node;
    }
    this.tail = node;
    if ( null === this.head ) {
      this.head = node;
    }
  };

  list.removeHead = function() {
    var headValue = this.head.value;
    if ( this.tail === this.head ) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }
    return headValue;
  };

  list.contains = function(target) {
    var pointer = this.head;
    while ( pointer.value !== target ) {
      if ( pointer.next === null ) {
        return false;
      }
      pointer = pointer.next;
    }
    return true;
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
 addToTail: constant
 removeHead: constant
 contains: linear
 */
