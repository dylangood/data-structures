var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
     storage : {},
     numberStored : 0
  };
  //extend(someInstance, Stack.stackMethods);
  someInstance.push = stackMethods.push;
  someInstance.pop = stackMethods.pop;
  someInstance.size = stackMethods.size;
  return someInstance;
};

var stackMethods = {
  push: function(value){
    this.storage[this.numberStored] = value;
    this.numberStored++;
  },
  pop: function(){
    if( this.numberStored === 0 ) {
      return;
    }
    this.numberStored--;
    var itemToPop = this.storage[this.numberStored];
    delete this.storage[this.numberStored];
    return itemToPop;
  },
  size: function(){
    return this.numberStored;
  }
};
