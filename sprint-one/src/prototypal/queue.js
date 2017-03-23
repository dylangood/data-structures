var Queue = function() {
  var queue = Object.create(queueMethods);
  queue.head = 0;
  queue.tail = 0;
  queue.storage = {};
  return queue;
};

var queueMethods = {
  enqueue: function(value){
    this.storage[this.tail] = value;
    this.tail++;
  },
  dequeue: function() {
    if(this.head === this.tail) {
      return;
    }
    var itemToDequeue = this.storage[this.head];
    delete this.storage[this.head];
    this.head++;
    return itemToDequeue;
  },
  size: function() {
    return this.tail - this.head;
  }
};
