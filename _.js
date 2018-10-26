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

_.inRange = function (number, begin, end) {
  let lowerLim;
  let upperLim;

  if (end && end > begin) {
    lowerLim = begin;
  }else if (end && end < begin) {
    lowerLim = end;
  }else {
    0;
  };

  if (end && end > begin) {
    upperLim = end;
  }else if (end && end < begin) {
    upperLim = begin;
  }else {
    begin;
  };


  if (number >= upperLim) {
    return false;
  }else if (number < lowerLim) {
    return false;
  } else {
    return true;
  };

};

console.log(_.inRange(6.5,6,8));

// Do not write or modify code below this line.
module.exports = _;
