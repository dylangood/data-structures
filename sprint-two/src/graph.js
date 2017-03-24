

// Instantiate a new graph
var Graph = function() {
  // Create a Node class constructor
  // var Node = function(value) {
  //   var node = {};
  //   // A node should have a value
  //   // and an object full of edges
  //   node.value = value;
  //   node.edges = {};
  //   return node;
  // };
  // Create a baseNode that is the starting point of the graph
//  this.baseNode = undefined;
  this.size = 0;
  this.storage = {};
    // ???    Profit!
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(value) {
  // Create a new node
  //this.node.edge
    // Give the node a value property
  this.storage[this.size] = 0;
  this.storage[this.size].value = value;
    // Give the node an edge
  this.storage[this.size++].edges={};
      // If no connection provided, use baseNode
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(value) {
  for ( var k in this.storage ) {
    if ( value === this.storage[k].value ) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
