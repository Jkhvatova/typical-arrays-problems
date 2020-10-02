
exports.min = function min (array) {
  if  (array === undefined || array.length === 0) {
    return 0;
  } else {
    let minNum = array[0];
    for (var i = 0; i < array.length; i++) {
      if (minNum > array[i]) {
        minNum = array[i];
    } 
  }
return minNum;  
  }
}

exports.max = function max (array) {
  if (array === undefined || array.length === 0) {
    return 0;
  }
  let maxNum = array[0];
  for (var i = 0; i < array.length; i++) {
    if (maxNum < array[i]) {
      maxNum = array[i];
    } 
  }
  return maxNum;
}

exports.avg = function avg (array) {
  if (array === undefined || array.length === 0) {
    return 0;
  }
  let sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i]; 
  }
  let avg = sum / array.length;
  return avg;
}
