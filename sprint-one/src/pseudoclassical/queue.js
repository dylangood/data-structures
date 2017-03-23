var Queue = function() {
  this.head = 0;
  this.tail = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.tail++] = value;
};
Queue.prototype.dequeue = function() {
  if (this.head === this.tail) {
    return;
  }
  var itemToDequeue = this.storage[this.head];
  delete this.storage[this.head++];
  return itemToDequeue;
};
Queue.prototype.size = function() {
  return this.tail - this.head;
};
