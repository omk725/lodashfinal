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

_.words = function (string) {
  let newArray = string.split(' ');
  return newArray;
};

_.pad = function (str, length) {
  str;
  length;


  if (str.length === length) {
    return str;
  };

  let startLength = Math.floor((length - str.length) / 2);
  let endLength = length - str.length - startLength;


  for (let i = 0; i < startLength; i++) {
    str = ' ' + str;
  }

  for (let j = 0; j < endLength; j++) {
    str = str + ' ';
  }

  return str;
};

_.has = function (object, key) {
  object;
  key;


  let hasTest = object[key] ? true : false;

  return hasTest;
};

_.invert = function (object) {
  object;
  let newObject = {};
  for (var key in object) {
    if (object.hasOwnProperty(key)) {
      let originalValue = object[key];
      newObject[originalValue] = key;
    }
  }
 return newObject;
};

_.findKey = function (object, predicate) {
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      if (predicate(object[key]) === true) {
        return key;
        break;
      }
    }
  }
};

_.drop = function (array, dropNum) {
  array;
  dropNum ? dropNum : dropNum = 1;
  let newArray = array;
  for (var i = 0; i < dropNum; i++) {
    newArray.shift();
  }
  return newArray;
};

_.dropWhile = function (array, predicate) {

  let dropNumber = array.findIndex((element, index) => {
        return !predicate(element, index);
   });
  let newArray = this.drop(array, dropNumber);
  return newArray;
};

_.chunk = function (array, size) {
  array;
  size = size ? size : 1;
  let arrayChunks = [];
  for (var i = 0; i < array.length; i = i + size) {
    let arrayChunk = array.slice(i, i+size);
    arrayChunks.push(arrayChunk);
  }
  return arrayChunks;
}

let cars = [1,2,3,4,5];

console.log(_.chunk(cars, 3));

// Do not write or modify code below this line.
module.exports = _;
