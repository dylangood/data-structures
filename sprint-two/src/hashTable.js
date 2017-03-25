

var HashTable = function() {
  this._limit = 8;
  this._bucketSize = 5;
  this._storage = LimitedArray(this._limit);
  for ( var i = 0; i < this._limit; i++ ) {
    this._storage.set(i, LimitedArray(this._bucketSize) );
  }
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tuple = [k, v];
  var bucket = this._storage.get(index);
  var foundAt = undefined;
  var firstEmpty = undefined;

  for ( var i = 0; i < this._bucketSize; i++ ) {
    if ( undefined === foundAt &&
         undefined !== bucket.get(i) &&
         k === bucket.get(i)[0]         ) {
      foundAt = i;
    } else {
      if ( undefined === firstEmpty && undefined === bucket.get(i) ) {
        firstEmpty = i;
      }
    }
  }
  if ( undefined !== foundAt ) {
    bucket.set( foundAt, tuple );
  } else {
    bucket.set( firstEmpty, tuple );
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  for ( var i = 0; i < this._bucketSize; i++ ) {
    if ( bucket.get(i) !== undefined && bucket.get(i)[0] === k ) {
      return bucket.get(i)[1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  for( var i = 0; i < this._bucketSize; i++ ) {
    if ( bucket.get(i) !== undefined && bucket.get(i)[0] === k ) {
      bucket.set(i, undefined);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
