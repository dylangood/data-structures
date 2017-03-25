

var HashTable = function() {
  this._limit = 8;
  this._bucketSize = 5;
  this._storage = LimitedArray(this._limit);
  for ( var i = 0; i < this._limit; i++ ) {
    this._storage.set(i, LimitedArray(this._bucketSize) );
  };
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tuple = [k, v];
  var bucket = this._storage.get(index);
  console.log('before loop')
  // We should do a retrieve first to make sure there's no dupe
  for( var i = 0; i < this._bucketSize; i++ ) {
    console.log(i, bucket.get(i))
    if ( undefined === bucket.get(i) ) {
      bucket.set(i, tuple);
      return;
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  console.log(0);
  for( var i = 0; i < this._bucketSize; i++ ) {
    if( bucket.get(i)[0] === k ) {
      return bucket.get(i)[1];
    }
  }
  // return bucket.each( function(value){
  //   if( value && k === value[0] ) {
  //     return value[1];
  //   }
  // });
//  return this._storage.get(index).get(depthIndex);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var depthIndex = getIndexBelowMaxForKey(k, this._bucketSize);
  this._storage.get(index).set(depthIndex, undefined);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
