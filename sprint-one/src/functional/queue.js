var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var tail = 0;
  var head = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[tail] = value;
    tail++;
  };

  someInstance.dequeue = function() {
    if(tail === head) {
      return;
    }
    var itemToDequeue = storage[head];
    delete storage[head];
    head++;
    return itemToDequeue;
  };

  someInstance.size = function() {
    return tail - head;
  };

  return someInstance;
};
