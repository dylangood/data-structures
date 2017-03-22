var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
    storage : {},
    head : 0,
    tail : 0
  };

  someInstance.enqueue = queueMethods.enqueue;
  someInstance.dequeue = queueMethods.dequeue;
  someInstance.size = queueMethods.size;

  return someInstance;
};

var queueMethods = {
  enqueue: function(value){
    this.storage[this.tail] = value;
    this.tail++;
  },
  dequeue: function(){
    if ( this.head === this.tail ) {
      return;
    }
    var itemDequeued = this.storage[this.head];
    delete this.storage[this.head];
    this.head++;
    return itemDequeued;
  },
  size: function(){
    return this.tail - this.head;
  }
};
