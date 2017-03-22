var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var tail = 0;
  var head = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
  };

  someInstance.dequeue = function() {
  };

  someInstance.size = function() {
    return tail - head;
  };

  return someInstance;
};
