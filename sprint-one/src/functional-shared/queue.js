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

  },
  dequeue: function(){
    return aThing;
  },
  size: function(){
    return this.tail - this.head;
  }
};
