const _ = {};

_.clamp = function (number, lower, upper) {
  if (number < lower) {
    return lower;
  } else if (number > upper) {
    return upper;
  }else {
    return number;
  }
};

console.log(_.clamp(1,3,4));


// Do not write or modify code below this line.
module.exports = _;
