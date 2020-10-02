exports.min = function min (array) {
  if (array === undefined || array.length == 0){
    return 0;
  } else {
    const min = Math.min.apply(null, array);
    return min;
  };
  }
  
  exports.max = function max (array) {
    if (array === undefined || array.length == 0){
    return 0;
  } else {
    const max = Math.max.apply(null, array);
    return max;
  };
  }
  
  exports.avg = function avg (array) {
    if (array === undefined || array.length == 0){
    return 0;
  } else {
    return array.reduce(((a, b) => a + b))/array.length;
  };
  }
  