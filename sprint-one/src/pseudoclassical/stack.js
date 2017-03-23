var Stack = function() {
  this.top = 0;
  this.storage = {};
};
Stack.prototype.push = function(value) {
  this.storage[this.top++] = value;
};
Stack.prototype.pop = function() {
  if (this.top === 0) {
    return;
  }
  var itemToPop = this.storage[--this.top];
  return itemToPop;
};
Stack.prototype.size = function() {
  return this.top;
};
