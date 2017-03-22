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
    this.storage[this.size] = value;
    this.numberStored++;
  },
  pop: function(){
    //
  },
  size: function(){
    return this.numberStored;
  }
};
