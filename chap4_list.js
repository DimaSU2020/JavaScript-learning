
function getRange(start, end, step = 1) {
  const range = [];
  for (let number = start; number <= end; number += step) {
    range.push(number);
  }
  return range;
}
console.log(getRange(1, 3));

function arrayToList(range) {
  let list = {value: range[range.length - 1], next: null};
  for (let index = range.length - 2; index >= 0; index--) {
    list = {value: range[index], next: list};
  }
  return list;
}
console.log(arrayToList(getRange(1, 3)));

function listToArray(list) {
  let range = [];
  for (let node = list; node; node = node.next) {
    range.push(node.value);
  }
  return range;
}
console.log(listToArray(arrayToList(getRange(1, 3))));

function prepend(list, new_element) {
  list = {value: new_element, next: list};
  return list;
}
console.log(prepend(arrayToList(getRange(1, 3)), 1));

let list = {
  value: "brown",
  next: {
      value: "green",
      next: {
          value: 3,
          next: {
              value: "This is a technical support",
              next: {
                  value: 5,
                  next: {
                      value: 6,
                      next: {
                          value: "It's, OK",
                          next: {
                              value: 8,
                              next: {
                              value: 9,
                              next: null
                          }
                      }
                  }
              }
          }                    
      }
    }
  }
};


function nth(list, number) {
if (number == 1) {
  return list.value;
} else {
  return nth(list.next, number - 1);
  }
}
console.log(nth(list, 5));

function nth(list, number) {
  if (number == 1) { 
      return list.value;   
  } else {
      for (let i = number - 1; i > 0; i--) {
          list = list.next;
      }
      return list.value;
  }
}
console.log(nth(list, 8));

/*
function arrayToList(range, list = {}) {
  if (range.length < 1) {
      return list.rest = null 
  }
  const _range = [...range];
  return list = {
      value: _range.shift(),
      next: arrayToList(_range, list),
  }
}
console.log(arrayToList(getRange(1, 3)));
*/

