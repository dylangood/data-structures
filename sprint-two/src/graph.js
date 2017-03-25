

// Instantiate a new graph
var Graph = function() {
  this.storage = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  // Create a new node
  // Give the node a node property
  this.storage[node] = [];
      // Give the node edges
      // If no connection provided, use baseNode
};

// Return a boolean node indicating if the node passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return !!this.storage[node];
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for ( var i = 0; i < this.storage[node].length; i++ ) {
    this.removeEdge( node, this.storage[node][i] );
  }
  delete this.storage[node]
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  for ( var i = 0; i < this.storage[fromNode].length; i++ ) {
    if ( this.storage[fromNode][i] === toNode ) {
      return true;
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.storage[fromNode].push(toNode);
  this.storage[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for ( var i = 0; i < this.storage[fromNode].length; i++ ) {
    if ( this.storage[fromNode][i] === toNode ) {
      this.storage[fromNode][i] = undefined;
    }
  }
  for ( var i = 0; i < this.storage[toNode].length; i++ ) {
    if ( this.storage[toNode][i] === fromNode ) {
      this.storage[toNode][i] = undefined;
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for ( var key in this.storage ) {
    cb(this.storage[key]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
