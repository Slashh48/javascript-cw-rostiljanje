function sumArray(array) {
  if (!array) {
    return 0;
  } else if (array.length < 3) {
    return 0;
  } else {
    array.sort(function (a, b) {
      return a - b;
    });

    var first = array.shift();
    var last = array.pop();
    return array.reduce((partialSum, a) => partialSum + a, 0);
  }
}
