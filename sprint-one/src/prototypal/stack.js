var Stack = function() {
  var stack = Object.create(stackMethods);
  stack.top = 0;
  stack.storage = {};
  return stack;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.top] = value;
    this.top++;
  },
  pop: function() {
    if(this.top === 0) {
      return;
    }
    this.top--;
    var itemToPop = this.storage[this.top];
    delete this.storage[this.top];
    return itemToPop;
  },
  size: function() {
    return this.top;
  }
};
